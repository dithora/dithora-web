import React from "react";
import { Link } from "gatsby";
import avator from "../img/avatar.png";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <img className="logo" src={avator} alt="logo" />
    <div className="content">
      <div className="inner">
        <h1>病気 - </h1>
        <span className="slogan">death</span>
        <br />
        <span className="slogan">begets life</span>
        <div className="social">
          <a
            target="_blank"
            href="//github.com/darksoul228"
            className="ico fa fa-github"
          />
          <a
            target="_blank"
            href="//discord.gg/KDFstPKt"
            className="ico fa fa-discord"
          />
          <a
            target="_blank"
            href="//twitter.com/"
            className="ico fa fa-twitter"
          />
         </div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              props.onOpenArticle("about");
            }}
          >
            About me
          </a>
        </li>
        <li>
          <a target="_blank" href="//discord.gg/KDFstPKt">
            Corvette 
          </a>
        </li>
        <li>
          <Link to="/">WTF</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
