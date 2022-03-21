import React from 'react';
import Header from '../header/header.jsx';
import Form from '../form/form.jsx';
import InteractiveMap from '../interactive-map/interactive-map.jsx';

function Main() {
  return (
    <div className="body-wrapper">
      <Header />
      <main className="main-page">
      <section className="current-page">
        <p>
          <a href="#">Главная </a><a href="#" className="current-page__active">/ Корзина</a>
        </p>
      </section>
      <div className="main-page__wrapper">
        <section className="basket">
          <h2>Корзина</h2>
          <p className="basket__account">Есть аккаунт?<a href="#">Войти</a></p>
          <Form />
        </section>
        <section className="map">
          <div id="big-map">
            <InteractiveMap />
          </div>
          <div className="map__price-wrapper">
            <p>Итог: </p>
            <p>3790 <span>руб.</span></p>
          </div>
        </section>
      </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default Main;