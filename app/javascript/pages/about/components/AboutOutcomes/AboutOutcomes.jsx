import React, { Component } from 'react';
import Proptypes from 'prop-types';
import ButtonRegular from '../../../general/components/ButtonRegular';
import ButtonArrow from '../../../general/components/ButtonArrow';
import Scroll, {Element} from 'react-scroll';
import {lory} from 'lory.js';

class AboutOutcomes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {

    const outcomes = [
      {
        img : '',
        paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id posuere diam, accumsan.',
        url : ''
      },
      {
        img : '',
        paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id posuere diam, accumsan.',
        url : ''
      },
      {
        img : '',
        paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id posuere diam, accumsan.',
        url : ''
      },
      {
        img : '',
        paragraph : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id posuere diam, accumsan.',
        url : ''
      }
    ]

    return (
      <Element name="outcomes" className="c-about-outcomes">
        <div className="row">
          <div className="small-12 columns">
            <div className="c-about-outcomes__title text -title-xs -color-3">OUTCOMES AND TESTIMONIALS</div>
            <div className="slider js_slider">
              <div className="frame js_frame">
                <ul className="slides js_slides" ref={(slider) => { this.slider = slider; }}>
                  {outcomes.map((item, i) =>
                    <li key={i} className={`slide js_slide ${i === 0 ? 'active' : ''}`}>
                      <div className="c-about-outcomes-item">
                        <div className="c-about-outcomes-item__image"></div>
                        <div className="c-about-outcomes-item__paragraph text -paragraph -color-2">{item.paragraph}</div>
                        <div className="c-about-outcomes-item__button">
                          <ButtonRegular text="READ MORE" color="green" url={item.url} />
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
                <div className="c-about-outcomes__arrow-button -left -hidden js_slide_prev">
                  <ButtonArrow orientation="left" />
                </div>
                <div className="c-about-outcomes__arrow-button -right js_slide_next">
                  <ButtonArrow orientation="right" />
                </div>
              </div>
              <div className="c-about-outcomes__slider-dots js_slider_dots">

              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default AboutOutcomes;
