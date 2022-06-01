import React, {useContext} from 'react'
import Card from "./Card";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
    //Подписка на контекст CurrentUserContext
    const currentUser = useContext(CurrentUserContext);

    return (
      <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={`${currentUser.avatar}`} alt="Аватар"/>
          <button type="button" className="button button_type_avatar-edit" aria-label="Обновить аватар" onClick={props.onEditAvatar}></button>     
        </div>
        
        <div className="profile__info">
          <div className="profile__block">
            <h1 className="profile__user">{currentUser.name}</h1>
            <button type="button" className="button button_type_edit" title="Редактировать профиль" aria-label="Редактировать" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button type="button" className="button button_type_add" title="Добавить новую фотографию" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>   
      
      <section className="cards">
        <ul className="cards__list">
            {props.cards.map((card) => (
                <Card
                    key={card._id}
                    card={card}
                    onClick={props.onCardClick}
                    onCardLike={props.onCardLike}
                    onCardDelete={props.onCardDelete}
                />
            ))}
        </ul>                
      </section>        
    </main>
  );
}

export default Main;