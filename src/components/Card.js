import React, {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, onClick, onCardLike, onCardDelete}) {

    //Подписка на контекст CurrentUserContext
    const currentUser = useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwned = card.owner._id === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(item => item._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `button button_type_delete ${isOwned ? '' : 'button button_type_delete_hidden'}`
    );

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `button_type_like ${isLiked ? 'button_type_like_active' : ''}`;

    function handleClick() {
        onClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    return (
      <article className="element">
          <button type="button" className={cardDeleteButtonClassName} aria-label="Удалить" onClick={handleDeleteClick}></button>
          <img onClick={handleClick}
            alt={`Изображение ${card.name}`}
            className="element__image"
            src={card.link}/>
          <div className="element__caption">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like-container">
              <button type="button" className={cardLikeButtonClassName} aria-label="Понравилось" onClick={handleLikeClick}></button>
              <span className="element__like-counter">{card.likes.length}</span>
            </div>            
          </div>
        </article>
    );
}

export default Card