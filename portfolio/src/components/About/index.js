import React from 'react';
import './style.css';
import DSC03189 from '../../assets/images/DSC03189(2).JPG';
import iconfinder_mark from '../../assets/images/iconfinder_mark-github_298822.png';
import iconfinder_Stack_Overflow_1298710 from '../../assets/images/iconfinder_Stack_Overflow_1298710.png';
import iconfinder_square from '../../assets/images/iconfinder_square-linkedin_317725.png';

function About() {
  return (
    <div className='jumbotron big-banner'>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-xs-12 col-sm-7 m-2 custom-panel'>
            <div className='page-header pt-4 pl-3'>
              <h1>About Me</h1>
            </div>
            <hr />
            <div className='row'>
              <div className='col-xs-12 col-sm-5 mt-3'>
                <img
                  src={DSC03189}
                  alt='Alexandra Noto'
                  className='img-thumbnail'
                />
              </div>
              <div className='col-xs-12 col-sm-7 mt-3 pb-4'>
                <p>
                  I am a student in a full-stack web development bootcamp at UCD
                  Extension, on track to graduate in September of 2020. I have a
                  passion for technology and a strong will to learn. Previously,
                  I worked in the hospitality industry for 6 years, and
                  currently, I have my own e-commerce business. I plan to have a
                  full-time career as a software developer. Some hobbies of mine
                  include travelling, learning new languages, playing music,
                  graphic design, and gaming.
                </p>
              </div>
            </div>
          </div>

          <div className='col'></div>

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

export default About;
