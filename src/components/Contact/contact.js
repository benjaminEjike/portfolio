import React,{useRef} from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import YoutubeIcon from '../../assets/youtube.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
     const form = useRef();
      const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9g4q69', 'template_zjt71jn', form.current, {
        publicKey: 'AWKtRevFLqqL1aGlT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactPage">
        <div id="client">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to program with a variety of Languages. 
                Some of the notable Languages I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="Client" className="clientImg" />
                <img src={Adobe} alt="Client" className="clientImg" />
                <img src={Microsoft} alt="Client" className="clientImg" />
                <img src={Facebook} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discuss any work opportunities</span>
            <form className='contactForm' ref ={form} onSubmit={sendEmail}>
                <input type="text" className="name"placeholder='Your Name' name ='your_name' />
                <input type="email" className="email"placeholder='Your Email' name='your_email' />
                <textarea className= 'msg' name="message" rows="5"placeholder='Your Message'></textarea>
                <button type='submit' value='Send'className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact