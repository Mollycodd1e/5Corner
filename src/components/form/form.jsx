import React from 'react';
import { useDispatch } from 'react-redux';
import InteractiveMap from '../interactive-map/interactive-map.jsx';
import { changeAddress } from '../store/action.js';

function Form() {

  const dispatch = useDispatch();

  const getInputValue = (evt) => {
    dispatch(changeAddress(evt.target.value));
  }

  const onEnterPress = (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      getInputValue(evt);
    }
  }

  return (
    <div className="basket__form-wrapper">
      <form>
        <div className="basket__adress-wrapper">
          <input placeholder="Ваш адрес" type="text" id="suggest" onKeyDown={(evt) => onEnterPress(evt)} onBlur={(evt) => getInputValue(evt)}/>
          <label className="visually-hidden">Адрес</label>
        </div>
        <div className="basket__map">
        <div id="map">
          <InteractiveMap />
        </div>
        </div>
        <div className="basket__name-wrapper">
          <input placeholder="Ваше Имя" />
          <label className="visually-hidden">Имя</label>
        </div>
        <div className="basket__phone-wrapper">
          <input placeholder="Ваш телефон" />
          <label className="visually-hidden">Телефон</label>
        </div>
        <div className="basket__email-wrapper">
          <input placeholder="Ваш Email" type="email" />
          <label className="visually-hidden">Email</label>
        </div>
        <div className="basket__type-wrapper basket__type-wrapper--closed">
          <p>Тип упаковки</p>
          <ul className="basket__type-options">
            <li className="basket__option" tabIndex="0">Тип упаковки 1</li>
            <li className="basket__option" tabIndex="0">Тип упаковки 2</li>
            <li className="basket__option" tabIndex="0">Тип упаковки 3</li>
            <li className="basket__option" tabIndex="0">Тип упаковки 4</li>
            <li className="basket__option" tabIndex="0">Тип упаковки 5</li>
          </ul>
        </div>
        <div className="basket__comment-wrapper">
          <input placeholder="Введите комментарий" />
          <label className="visually-hidden">Комментарий</label>
        </div>
        <div className="basket__product-wrapper">
          <h3>Выбранные товары:</h3>
          <ul className="basket__product-list">
            <li className="basket__product-card">
              <picture>
                <img src="./img/product-desktop.png" width="150" height="150" alt="Фото товара 1" />
              </picture>
              <div className="basket__card-description">
                <h4>Товар 1</h4>
                <span>1090<span>&nbsp;руб.</span></span>
                <p>Описание товара, которое может быть длинным</p>
                <div className="basket__count-wrapper">
                  <button className="basket__btn-minus"></button>
                  <p>1</p>
                  <button className="basket__btn-plus"></button>
                </div>
                <button className="basket__btn-delete">Удалить</button>
              </div>                              
            </li>
            <li className="basket__product-card">
              <img src="./img/product-desktop.png" width="150" height="150" alt="Фото товара 2" />
              <div className="basket__card-description">
                <h4>Товар 2</h4>
                <span>700<span>&nbsp;руб.</span></span>
                <p>Описание товара, которое может быть очень-очень длинным</p>
                <div className="basket__count-wrapper">
                  <button className="basket__btn-minus"></button>
                  <p>1</p>
                  <button className="basket__btn-plus"></button>
                </div>
                <button className="basket__btn-delete">Удалить</button>
              </div>                              
            </li>
            <li className="basket__product-card">
              <img src="./img/product-desktop.png" width="150" height="150" alt="Фото товара 3" />
              <div className="basket__card-description">
                <h4>Товар 3</h4>
                <span>2000<span>&nbsp;руб.</span></span>
                <p>Короткое описание товара</p>
                <div className="basket__count-wrapper">
                  <button className="basket__btn-minus"></button>
                  <p>2</p>
                  <button className="basket__btn-plus"></button>
                </div>
                <button className="basket__btn-delete">Удалить</button>
              </div>                              
            </li>
          </ul>
        </div>
        <div className="basket__price-wrapper">
          <p>Итог: </p>
          <p>3790 <span>руб.</span></p>
        </div>
        <button className="basket__btn-submit" type="submit">Купить</button>
      </form>
    </div>
  )
}

export default Form;