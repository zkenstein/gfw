import React from 'react';
import PropTypes from 'prop-types';
import ButtonRegular from '../../../general/components/ButtonRegular';

const AboutWorld = (props) => {
  const users = [
    {title: 'Civil Society'},
    {title: 'NGO/IGO'},
    {title: 'Journalist'},
    {title: 'Government'},
    {title: 'Private Sector'},
    {title: 'Research'},
  ]

  return (
    <div className="c-about-users">
      <div className="row">
        <div className="large-6 columns">
        </div>
        <div className="small-12 large-6 columns">
          <div className="c-about-users__content">
            <div className="c-about-users__title text -title-xs -color-3">WHO USES GLOBAL FOREST WATCH?</div>
            <div className="c-about-users__summary text -paragraph -color-2">Thousands of people around the world use GFW every day to monitor and manage forests, stop illegal deforestation and fires, call out unsustainable activities, defend their land and resources, sustainably source commodities, and conduct research at the forefront of conservation.</div>
            <ul className="c-about-users__user-list text -paragraph -color-2">
              {users.map((item, i) =>
                <li key={i} className={`${i === 0 ? '-selected' : ''}`}>
                  <svg className="icon">
                    <use xlinkHref="#icon-little-arrow"></use>
                  </svg>
                  {item.title}
                </li>
              )}
            </ul>
            <div className="c-about-users__button">
              <ButtonRegular text="LEARN HOW TO USE GFW" color="green"/>
            </div>
          </div>
        </div>
      </div>
      <div className="c-about-users__growth text -title -light -color-2">
        <p>Since launching in 2014,</p>
        <p>Global Forest Watch has had over 1.3 million users</p>
        <p>from every single country in the world.</p>
      </div>
    </div>
  );
};

export default AboutWorld;
