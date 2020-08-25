import React from 'react';
import './style.css';
import iconfinder_mark from '../../assets/images/iconfinder_mark-github_298822.png';
import iconfinder_Stack_Overflow_1298710 from '../../assets/images/iconfinder_Stack_Overflow_1298710.png';
import iconfinder_square from '../../assets/images/iconfinder_square-linkedin_317725.png';

function Contact() {
  return (
    <div className='jumbotron big-banner'>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-xs-12 col-sm-7 m-2 custom-panel'>
            <div className='page-header pt-4 pl-3'>
              <h1>Contact</h1>
            </div>
            <hr />
            <p>
              <form className='contact-form pt-3 pl-2 pr-2 pb-3'>
                <div className='form-group'>
                  <label for='exampleInputName1'>Name</label>
                  <input
                    type='form_name'
                    className='form-control'
                    tabindex='1'
                    id='exampleInputName1'
                    aria-describedby='userName'
                    placeholder='Enter name'
                  />
                </div>
                <div className='form-group'>
                  <label for='exampleInputEmail1'>Email</label>
                  <input
                    type='emailaddress'
                    className='form-control'
                    tabindex='2'
                    id='exampleInputEmail1'
                    placeholder='Enter email'
                  />
                </div>
                <div className='form-group'>
                  <label for='exampleInputMessage1'>Message</label>
                  <textarea
                    name='career[message]'
                    className='form-control'
                    rows='5'
                    tabindex='3'
                    placeholder='Write your details'
                    required
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-primary' tabindex='4'>
                  Submit
                </button>
              </form>
            </p>
          </div>

          <div className='col'></div>

          <div className='col-xs-12 col-sm-4'>
            <div className='card mt-2'>
              <div className='card-body text-center'>
                <h4 className='card-title'>Connect with Me</h4>
                <hr />
                <p>
                  <a
                    href='https://github.com/avnoto'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src={iconfinder_mark}
                      className='social p-2'
                      alt='Github'
                    />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/alexandra-noto-2a44861a6?trk=people-guest_people_search-card'
                    target='_blank'
                    rel='noopener noreferrer'
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
                    rel='noopener noreferrer'
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

export default Contact;
