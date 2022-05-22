import React from 'react';

function Card(props) {

    function handleClick() {
        props.onClick(props.card);
    }

    return (
      <article className="element">
          <button type="button" className="button button_type_delete" aria-label="Удалить"></button>
          <img onClick={handleClick}
            alt={`Изображение ${props.card.name}`}
            className="element__image"
            src={props.card.link}/>
          <div className="element__caption">
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__like-container">
              <button type="button" className="button button_type_like" aria-label="Понравилось"></button>
              <span className="element__like-counter">{props.card.likes.length}</span>
            </div>            
          </div>
        </article>
    );
}

export default Card