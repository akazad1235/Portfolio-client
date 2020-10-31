import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from '../Components/NavMenu';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_77m06t1', e.target, 'user_SrszcfAEXLYCXZKzxoMfu')
          .then((result) => {
              alert("Your Message Send Successfully Done");
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

    return (
        <div>  
            <NavMenu/>
                <Container className="mt-5 animate__animated animate__fadeInLeft animate__slow overflow-hidden contact-top">
                    <Row className="mt-5">
                        <Col xl={6} lg={5} md={6} className="m-auto">
                            <h2 className="text-center font-weight-bold font">Contact Me</h2>
                            <div className="contact-container my-4 p-5">
                             <form className="contact-form" onSubmit={sendEmail}>
                             <div className="form-group">
                                   <label for="name">Name</label>
                                  <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                             </div> 
                             <div className="form-group">
                                   <label for="name">Email</label>
                                  <input type="text" className="form-control" id="name" name="email" placeholder="Email"/>
                             </div> 
                             <div className="form-group">
                                   <label for="name">Subject</label>
                                  <input type="text" className="form-control" id="name" name="subject" placeholder="Subject"/>
                             </div> 
                             <div className="form-group">
                                   <label for="name">Message</label>
                                   <textarea className="form-control" name="message" placeholder="Message"></textarea>
                             </div> 
                             <div className="form-group">
                                  <label for="pass"></label>
                                 <input type="submit" className=" btn btn-success"/>
                               </div>
                         </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>

        

    );
};

export default Contact;