import React, { useState } from "react";
import './Main.css'
import ChestItem from "../components/ChestItem";
import AccordeonItem from "../components/AccordeonItem";
import chest1 from '../utils/images/1.png'
import chest2 from '../utils/images/2.png'
import chest3 from '../utils/images/3.png'
import chest4 from '../utils/images/4.png'
import chest5 from '../utils/images/5.png'
import instagramIcon from '../utils/images/soc_Instagram.svg'
import fbIcon from '../utils/images/soc_Facebook.svg'
import twitterIcon from '../utils/images/soc_Twitter.svg'
import linkedInIcon from '../utils/images/soc_LinkedIN.svg'
import telegramIcon from '../utils/images/soc_Telegram.svg'
import discordIcon from '../utils/images/soc_Discord.svg'
import pet1 from '../utils/images/welcome_pet1.png'
import pet2 from '../utils/images/welcome_pet2.png'
import popupCloseIcon from '../utils/images/icon_close.svg'
import redPanda from '../utils/images/redpanda3.png'
import topRightBg from '../utils/images/top_right_bg.png'
import topLeftBg from '../utils/images/top_left_bg.png'
import faqStarsIcon from '../utils/images/faq_stars.png'
import contactsStarsIcon from '../utils/images/contacts_stars.svg'
import bottombg from '../utils/images/bg_bottom.png'
import circleImg from '../utils/images/h1bg.svg'

const Main = () => {
  /* 
    1 - NFT page
    2 - My chest page
    3 - My NFT page
  */
  const [switcherState, setSwitcherState] = useState(1)
  const [popup, setPopup] = useState(false)
  const switcherToggle = ({ target }) => {
    /*
      ClassName splitted for taking a number of page
      ClassName example: "switcher-option-item-button-1" as a result get a number "1"
    */
    const arrayClass = target.classList[0].split('-')
    setSwitcherState(Number(arrayClass[arrayClass.length - 1]))
  }
  return (
    <>
      <section className="welcome">
        <div className="welcome_before"><img src={topRightBg} style={{ width: '100%' }} /></div>
        <div className="welcome_text">
          <h1 style={{ position: 'relative' }}><div className="welcome-h1_bg"><img src={circleImg} style={{ width: '100%' }} /></div>Metoland</h1>
          <h2>
            Buy you
            <span>metoland</span>
            NFT!
          </h2>
          <div className="welcome_pet pet1"><img src={pet1} style={{ width: '100%' }} /></div>
          <div className="welcome_pet pet2"><img src={pet2} style={{ width: '100%' }} /></div>
        </div>
        <div className="token-list-container">
          <div className="token-list-switcher">
            <div className="switcher-option-container">
              <div className="switcher-option-item">
                <a className={`switcher-option-item-button-1 ${switcherState === 1 ? 'selected' : ''}`} onClick={switcherToggle}>NFT</a>
              </div>
            </div>
            <div className="switcher-option-container">
              <div className="switcher-option-item">
                <a className={`switcher-option-item-button-2 ${switcherState === 2 ? 'selected' : ''}`} onClick={switcherToggle}>My Chest</a>
              </div>
            </div>
            <div className="switcher-option-container">
              <div className="switcher-option-item">
                <a className={`switcher-option-item-button-3 ${switcherState === 3 ? 'selected' : ''}`} onClick={switcherToggle}>My NFT</a>
              </div>
            </div>
          </div>
          <div className="tokens_list">
            <ChestItem setPopup={setPopup} img={chest1} title="Builder's" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." quantity={12} cost="30.000" amount="-" />
            <ChestItem setPopup={setPopup} img={chest2} title="Farmer's" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." quantity={12} cost="30.000" amount="-" />
            <ChestItem setPopup={setPopup} img={chest3} title="Lumberjack's" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." quantity={12} cost="30.000" amount="-" />
            <ChestItem setPopup={setPopup} img={chest4} title="Diggers's" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." quantity={12} cost="30.000" amount="-" />
            <ChestItem setPopup={setPopup} img={chest5} title="Miner's" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua." quantity={12} cost="30.000" amount="-" />
          </div>
        </div>
        <div className="welcome_after"><img src={topLeftBg} style={{ width: '100%' }} /></div>
      </section>
      <section className="faq">
        <div className="faq_in flex">
          <div className="title">
            <h2>
              <div className="faq_after"><img src={faqStarsIcon} /></div>
              <span className="bigger">FAQ</span>
              FAQ
            </h2>
          </div>
          <div className="accordeon">
            <AccordeonItem title="Who is Metoshi?" text={`The critically endangered small red panda. Lives in the
                southeastern part of the Himalayas. The panda is found in the
                forests of China and India. Several hundred animals have been
                recorded in Nepal. This cute creature is listed on the Endangered
                Species Act. Let's help all together these cute, funny red pandas
                !!!`} />
            <AccordeonItem title={`What is Metoshi Platform?`} text={`METOSHI is a one-stop entertainment platform that combines a
                Comics Studio, Metoshi Exchange, and Metoshi GameFI Studio. Also,
                in the first quarter of 2022, its own marketplace and Metoshi DEX
                will be launched.`} />
            <AccordeonItem title={`What is a Governance NFT?`} text={`It is a non-fungible token based on blockchain technology proving
                that you own a one-of-a-kind digital art piece / identity people
                can buy and trade. Furthermore, Governance NFTs grant the right to
                co-own the Metoshi Platform, earn dividends &amp; vote, as well as
                other perks of the Ecosystem`} />
            <AccordeonItem title={`Are all Governance NFTs the same?`} text={`All Governance NFTs are different in content and different in
                characteristics. Their minting is performed randomly. Everyone has
                a chance to get a Rare, Super Rare, or Special Governance NFT.`} />
            <AccordeonItem title={`What are the advantages of Governance NFTs?`} text={`Governance NFTs offers the following advantages:
                <br />
                1) Co-ownership of Metoshi Platform and the right to vote on key
                decisions
                <br />
                2) The right to earn monthly dividends on your NFTs
                <br />
                3) Reduced or zero fees when trading on Metoshi CEX
                <br />
                4) Using Governance NFTs, you can farm Game, Collectible and
                Comics NFTs from Metoshi`} />
            <AccordeonItem title={`How can I get a Governance NFT?`} text={`At the first stage, you've got a unique chance to purchase
                Governance NFTs on the cheap at Seed Round and Pre-sale. You will
                need to connect your Metamask browser extension to Metoshi
                Platform. Then follow the instructions`} />
            <AccordeonItem title={`How can I sell Governance NFTs?`} text={`Governance NFTs can be sold in the secondary market - using our
                own marketplace, NFTrade or BakerySwap Marketplace`} />
            <AccordeonItem title={`What blockchain does Metoshi use?`} text={`Binance Smart Chain. It is a blockchain that enables scalable,
                secure, and instant transactions. For the first and second
                quarters of 2022, cross-chains with Ethereum and Polygon are
                envisaged`} />
            <AccordeonItem title={`What are the utilities of METO token?`} text={`METO Token is a BEP-20 utility token of Metoshi Platform. As soon
                as it is listed on PancakeSwap, all Metoshi services will be
                supplied only for METO`} />
            <AccordeonItem title={`What NFT tools are offered on Metoshi Platform?`} text={`1) Governance NFTs - voting, dividends, farming
                <br />
                2) In-game NFTs - game heroes, wearables, weapons, etc.
                <br />
                3) Comics NFT&nbsp; - After collecting the entire collection, you
                can get guaranteed Metoshi pre-sale allocations.
                <br />
                4) Collectible / Generative NFT (Farming)`} />
            <AccordeonItem title={`How can you make money on Metoshi Platform?`} text={`1) Earn dividends on Governance NFTs
                <br />
                2) Stake METO &amp; earn METO
                <br />
                3) Stake Gov NFT &amp; earn METO
                <br />
                4) Stake Gov NFT &amp; earn Gov NFTs
                <br />
                5) Buy and sell Governance, in-game, and other NFTs
                <br />
                6) Use Metoshi CEX and Metoshi DEX on special terms
                <br />
                7) Participate in lotteries from Metoshi and receive Governance
                NFT and METO token
                <br />
                8)&nbsp;Catch various airdrops from Metoshi`} />
            <AccordeonItem title={`What is Comics NFT for?`} text={`After collecting NFT comics of a specific season, you will receive
                a guaranteed allocation in the cool games of the Metoshi platform`} />
          </div>
        </div>
      </section>
      <div className="section contacts">
        <div className="contacts_head">
          <h2 style={{ position: 'relative' }}>
            <div className="contacts_before"><img src={contactsStarsIcon} /></div>
            Contacts
            <div className="contacts_after"><img src={contactsStarsIcon} /></div>
          </h2>
        </div>
        <div className="social flex">
          <a target="_blank" href="https://www.instagram.com/metoshi_redpanda/">
            <img src={instagramIcon} alt="Instagram" />
          </a>

          <a target="_blank" href="https://www.facebook.com/profile.php?id=100054355667286">
            <img src={fbIcon} alt="Facebook" />
          </a>

          <a target="_blank" href="https://twitter.com/MetoshiRedpanda">
            <img src={twitterIcon} alt="Twitter" />
          </a>

          <a target="_blank" href="https://www.linkedin.com/company/metoshi-redpanda">
            <img src={linkedInIcon} alt="LinkedIN" />
          </a>

          <span className="a parent" href="https://t.me/metoshi_redpanda">
            <img src={telegramIcon} alt="Telegram" />
            <span className="socialpp_list">
              <span className="socialpp_listIn">
                <a href="https://t.me/metoshi_redpanda" target="_blank">
                  <img src={telegramIcon} alt="Telegram" />
                  English
                </a>
                <a href="https://t.me/m" target="_blank">
                  <img src={telegramIcon} alt="Telegram" />
                  Русский
                </a>
                <a href="https://t.me/metoshi_ch" target="_blank">
                  <img src={telegramIcon} alt="Telegram" />
                  中文
                </a>
                <a href="https://t.me/metoshi_official" target="_blank">
                  <img src={telegramIcon} alt="Telegram" />
                  Announcement
                </a>
              </span>
            </span>
          </span>
          <a target="_blank" href="https://discord.com/invite/NmV9zx2xed">
            <img src={discordIcon} alt="Discord" />
          </a>
        </div>
        <div className="contacts-bg_after"><img src={bottombg} style={{ width: '100%' }} /></div>
      </div>
      <div className="popup" style={{ display: popup ? 'block' : 'none' }}>
        <div className="popup_close" onClick={() => setPopup(false)}>
          <img src={popupCloseIcon} style={{ width: '100%' }} />
        </div>
        <div className="popup_content">
          <div className="popup_content_item">
            <img src={redPanda} alt="" />
          </div>
          <div className="popup_content_desc">
            <h2>Lumberjack</h2>
            <p>
              It is used to increase the bonus at the main building. When using a
              panda in the game, the construction time of all buildings will be
              reduced by
              &nbsp;<span>30%-250%!</span>
            </p>
            <div className="stats">
              <div className="stat_item common">
                <div className="stat_item_icon"></div>
                <p>50%</p>
                <span>Common</span>
              </div>
              <div className="stat_item unique">
                <div className="stat_item_icon"></div>
                <p>30%</p>
                <span>Unique</span>
              </div>
              <div className="stat_item rare">
                <div className="stat_item_icon"></div>
                <p>20%</p>
                <span>Rare</span>
              </div>
            </div>
            <div className="button">Buy NFT</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main