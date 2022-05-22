import {useState, useEffect} from 'react'
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log('Error: ' + err);
            })

        api.getInitialCards()
            .then((res) => setCards(res))
            .catch((err) => {
                console.log(`Error: ${err}`);
            })
    }, [])

    return (
        <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
            <button type="button" className="button button_type_avatar-edit" aria-label="Обновить аватар" onClick={props.onEditAvatar}></button>     
          </div>
          
          <div className="profile__info">
            <div className="profile__block">
              <h1 className="profile__user">{userName}</h1>
              <button type="button" className="button button_type_edit" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button type="button" className="button button_type_add" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>   
        
        <section className="cards">
          {cards.map((card) => (
            <Card key={card._id} onClick={props.onCardClick} card={card}/>
          ))}
        </section>        
      </main>
    );
}

export default Main;