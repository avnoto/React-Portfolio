import React from 'react';
import './style.css';
import iconfinder_mark from '../../assets/images/iconfinder_mark-github_298822.png';
import iconfinder_Stack_Overflow_1298710 from '../../assets/images/iconfinder_Stack_Overflow_1298710.png';
import iconfinder_square from '../../assets/images/iconfinder_square-linkedin_317725.png';
import wordgamescrnshot from '../../assets/images/wordgamescrnshot.png';
import codequizscrnshot from '../../assets/images/codequizscrnshot.png';
import dayplannerpic1 from '../../assets/images/dayplannerpic1.png';
import weatherapppic from '../../assets/images/weather-app-scrnshot1.png';
import playpic from '../../assets/images/2PLAYimg.png';

function Portfolio() {
  return (
    <div className='jumbotron big-banner'>
      {/*This container includes the Portfolio Section and the card.*/}
      <div className='container'>
        <div className='row mt-3 mb-0'>
          <div className='col-xs-12 col-sm-7 m-2 custom-panel'>
            <div className='page-header pt-4 pl-3'>
              <h1>Portfolio</h1>
            </div>
            <hr />
            <div className='row'>
              <div className='col-xs-12 col-sm-3 mt-3 mr-5'>
                <ul className='caption-style-4'>
                  <li>
                    <img
                      src={wordgamescrnshot}
                      alt='Word Guess Game'
                      className='image'
                    />
                    <div className='caption'>
                      <a href='https://avnoto.github.io/Word-Guess-Game/'>
                        <div className='blur' />
                        <div className='caption-text'>
                          <h3>Word Guess Game</h3>
                        </div>
                      </a>
                    </div>
                    <a href='https://avnoto.github.io/Word-Guess-Game/'></a>
                  </li>
                </ul>
              </div>
              <div className='col-xs-12 col-sm-3 mt-3 ml-5'>
                <ul className='caption-style-4'>
                  <li>
                    <img
                      src={codequizscrnshot}
                      alt='Code Quiz'
                      className='image'
                    />
                    <div className='caption'>
                      <a href='https://avnoto.github.io/Code-Quiz/'>
                        <div className='blur' />
                        <div className='caption-text'>
                          <h3>Code Quiz</h3>
                        </div>
                      </a>
                    </div>
                    <a href='https://avnoto.github.io/Code-Quiz/'></a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <br />
            <div className='row'>
              <div className='col-xs-12 col-sm-3 my-3 mr-5'>
                <ul className='caption-style-4'>
                  <li>
                    <img
                      src={dayplannerpic1}
                      alt='Work Day Scheduler'
                      className='image'
                    />
                    <div className='caption'>
                      <a href='https://avnoto.github.io/Work-Day-Scheduler/'>
                        <div className='blur' />
                        <div className='caption-text'>
                          <h3>Work Day Scheduler</h3>
                        </div>
                      </a>
                    </div>
                    <a href='https://avnoto.github.io/Work-Day-Scheduler/'></a>
                  </li>
                </ul>
              </div>
              <div className='col-xs-12 col-sm-3 my-3 pb-3 ml-5'>
                <ul className='caption-style-4'>
                  <li>
                    <img
                      src={weatherapppic}
                      alt='Weather Dashboard'
                      className='image'
                    />
                    <div className='caption'>
                      <a href='https://avnoto.github.io/Weather-Dashboard/'>
                        <div className='blur' />
                        <div className='caption-text'>
                          <h3>Weather Dashboard</h3>
                        </div>
                      </a>
                    </div>
                    <a href='https://avnoto.github.io/Weather-Dashboard/'></a>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-xs-12 col-sm-3 my-3 mr-5'>
                <ul className='caption-style-4'>
                  <li>
                    <img src={playpic} alt='2PLAY' className='image' />
                    <div className='caption'>
                      <a href='https://go-2play.herokuapp.com/'>
                        <div className='blur' />
                        <div className='caption-text'>
                          <h3>2PLAY</h3>
                        </div>
                      </a>
                    </div>
                    <a href='https://go-2play.herokuapp.com/'></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*This is an empty column to give space between the Portfolio section and the card.*/}
          <div className='col' />
          {/*This card has social media images that links to my social accounts.*/}
          <div className='col-xs-12 col-sm-4'>
            <div className='card mt-2'>
              <div className='card-body text-center'>
                <h4 className='card-title'>Connect with Me</h4>
                <hr />
                <p>
                  <a href='https://github.com/avnoto' target='_blank'>
                    <img
                      src={iconfinder_mark}
                      className='social p-2'
                      alt='Github'
                    />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/alexandra-noto-2a44861a6?trk=people-guest_people_search-card'
                    target='_blank'
                  >
                    <img
                      src={iconfinder_square}
                      className='social p-2'
                      alt='LinkedIn'
                    />
                  </a>
                  <a
                    href='https://stackoverflow.com/users/13124073/avnoto'
                    target='_blank'
                  >
                    <img
                      src={iconfinder_Stack_Overflow_1298710}
                      className='social p-2'
                      alt='Stack Overflow'
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
