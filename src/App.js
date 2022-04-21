
import React from "react";
import { hot } from 'react-hot-loader/root';
import Main from "./pages/Main";
import './App.css'
import './utils/css/additionalStyle.css'
import './utils/css/normalize.css'
import './utils/css/corrections.css'
import prodDevices from './utils/images/prod_devices_s.svg'
import prodDocuments from './utils/images/prod_documents_s.svg'
import prodFin from './utils/images/prod_fin_s.svg'
import prodBuildings from './utils/images/prod_buildings_s.svg'
import prodFinance from './utils/images/prod_finance_s.svg'
import logo from './utils/images/logo.svg'
import topbg from './utils/images/topbg.png'


const App = () => {
  const headerTrigger = () => {
    const bodyElement = document.querySelector('body')
    if (bodyElement.classList.contains('show_menu')) {
      bodyElement.classList.remove('show_menu')
    } else {
      bodyElement.classList.add('show_menu')
    }
  }
  return (
    <>
      <header className="header">
        <div className="bg_before"><img src={topbg} style={{ width: '100%' }} /></div>
        <div className="header_logo">
          <img src={logo} style={{ width: '100%' }} />
        </div>
        <nav className="header_menu">
          <a className="header_menu_item" href="">Home</a>
          <a className="header_menu_item" href="">
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path opacity='0.3' d='M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z' fill='white' /></svg>&nbsp;
            Buy NFT</a>
          <a className="header_menu_item" href="">
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path opacity='0.3' d='M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z' fill='white' /></svg>&nbsp;
            Whitepaper</a>
          <a className="header_menu_item" href="">
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path opacity='0.3' d='M6 0L7.69706 4.30294L12 6L7.69706 7.69706L6 12L4.30294 7.69706L0 6L4.30294 4.30294L6 0Z' fill='white' /></svg>&nbsp;
            Contacts</a>
        </nav>
        <div className="header_langs">
          <a className="header_lang_item">ENG</a>
          <a className="header_lang_item" href="https://metoshi.com/ru/">RUS</a>
        </div>
        <a className="header_contract" href="" target="_blank">
          0x16cd...f345
        </a>
        <div className="header_menu_trigger" onClick={headerTrigger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <main>
        <Main />
      </main>
      <footer className="footer">
        <p className="copy">© Metoshi, 2022</p>
        <div className="botmenu">
          <ul>
            <li data-id="welcome" className="parent">
              <a>Our products</a>
              <ul>
                <li>
                  <a href="https://metoshi.com#GameFi">
                    <span>
                      <img src={prodDevices} alt="" />
                    </span>
                    GameFi
                  </a>
                </li>
                <li>
                  <a href="https://metoshi.com#decencomics">
                    <span>
                      <img src={prodDocuments} alt="" />
                    </span>
                    Comics
                  </a>
                </li>
                <li>
                  <a href="https://metoshi.com#Farm">
                    <span><img src={prodFin} alt="" /></span>
                    Farm
                  </a>
                </li>
                {/* <li><a className="link" href="http://exchange.metoshi.com"><span><img src="static/images/prod_Business_s.svg" alt="" ></span>Exchange</a></li> */}
                <li>
                  <a className="soon">
                    <span>
                      <img src={prodBuildings} alt="" />
                    </span>
                    Marketplace
                    <i>Soon</i>
                  </a>
                </li>
                <li>
                  <a className="soon">
                    <span>
                      <img src={prodFinance} alt="" />
                    </span>
                    Metoshi Swap
                    <i>Soon</i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="link" href="https://metoshi.com/finance.html">Finance</a>
            </li>
            <li>
              <a className="link" href="https://metoshi.com#decencomics">Comics</a>
            </li>
            <li>
              <a className="link" href="https://metoshi.com#tokenomics">Tokenomics</a>
            </li>
            {/* <li><a className="link" href="https://metoshi.com#roadmap">Roadmap</a></li> */}
            <li>
              <a className="link" href="http://whitepaper.metoshi.com">Whitepaper</a>
            </li>
            <li>
              <a className="link" href="https://metoshi.com#contacts">Contacts</a>
            </li>
          </ul>
        </div>
        <div id="bot_r">
          <div className="lang">
            <p>ENG</p>
            <span className="sep"></span>
            <a href="https://metoshi.com/ru/">RUS</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default hot(App);
