import React, {useState} from 'react';
import './../index.css'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditProfilePopupOpen() {
        setEditProfilePopupOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlacePopupOpen() {
        setAddPlacePopupOpen(!isAddPlacePopupOpen);
    }

    function handleEditAvatarPopupOpen() {
        setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }
    
  return (
    <body className="page">
      <Header/>
      <div className="container">
        <Main
          onEditProfile={handleEditProfilePopupOpen}
          onAddPlace={handleAddPlacePopupOpen}
          onEditAvatar={handleEditAvatarPopupOpen}
          onCardClick={handleCardClick}
          /> 
        <Footer/>
        <PopupWithForm 
          name='edit'
          title='Редактировать профиль'
          buttonText='Сохранить'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__input popup__input_type_user"             id="popup-name" name="name" type="text" placeholder="Имя" maxlength="40" minlength="2" required/>
          <span className="popup__error" id="popup-name-error"/>
          
          <input className="popup__input popup__input_type_description" id="popup-about" name="about" type="text" placeholder="О себе" maxlength="200" minlength="2" required/>
          <span className="popup__error" id="popup-about-error"/>
        </PopupWithForm>

        <PopupWithForm 
          name='add'
          title='Новое место'
          buttonText='Сохранить'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__input popup__input_type_title"        id="popup-add-name" name="name" type="text" value="" placeholder="Название" maxlength="30" minlength="2" required/>
          <span className="popup__error" id="popup-add-name-error"/>
          
          <input className="popup__input popup__input_type_link" id="link" name="link" type="url" value="" placeholder="Ссылка на картинку" required/>
          <span className="popup__error" id="link-error"/>
        </PopupWithForm>

        <PopupWithForm 
          name='avatar'
          title='Обновить аватар'
          buttonText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__input popup__input_type_title"        id="popup-add-name" name="name" type="text" value="" placeholder="Название" maxlength="30" minlength="2" required/>
          <span className="popup__error" id="popup-add-name-error"/>
          
          <input className="popup__input popup__input_type_link" id="link" name="link" type="url" value="" placeholder="Ссылка на картинку" required/>
          <span className="popup__error" id="link-error"/>
        </PopupWithForm>

        <PopupWithForm 
          name='confirm'
          title='Вы уверены?'
          buttonText='Да'
        />

        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups}
        />
          

      </div>
      
    </body>
  );
}

export default App;
