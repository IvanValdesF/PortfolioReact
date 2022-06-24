import classes from './Contact.module.css'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import emailjs from '@emailjs/browser'
function Contact(){



    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const [confirm,setConfirm] = useState('');

    function sendEmail(e){
        e.preventDefault();

        if(name == ""|| email == ""|| message == ""){
            setConfirm("All fields are required");
            return;
        }
        emailjs.sendForm('service_hy8rb1s','template_re44i1o',e.target,'-U63gzrEp83EfRV7J')
        .then(res=>{
            setConfirm('Email sent succesfully');
            setName("");
            setMessage("");
            setEmail("");
            }).catch(err => setConfirm('An error has ocurred'));
    }
    
    return(
        <section id="contact" className={classes.contact}>
            <div className={classes.container}>
                <h4>
                    Get in touch
                </h4>
                <h1>Contact</h1>
            </div>

            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <div className={classes.coption}>
                        <FontAwesomeIcon className={classes.icon} size='2x' icon={faEnvelope}/>
                        ivanfariasxd@gmail.com
                    </div>
                    <div className={classes.coption}>
                    <FontAwesomeIcon className={classes.icon} size='2x' icon={faPhone}/>
                        +844 564 6463
                    </div>
                    <div className={classes.coption}>
                    <FontAwesomeIcon className={classes.icon} size='2x' icon={faInstagram}/>
                        ivan.valdes02
                    </div>
                </div>

                <div className={classes.separation}/>
                    

                <div className={classes.right}>
                    <form onSubmit={sendEmail}>
                        <label htmlFor="name">
                            Your name:
                            <input type="text" name="name" id="name" value={name} onChange={(e)=> setName(e.target.value)} />
                        </label>
                        <label htmlFor="email">
                            Your email:
                            <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </label>
                        <label htmlFor="message">
                            Your message:
                            <textarea type="text" id="message" name="message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
                        </label>
                        <div className={classes.btn}>
                        <button type="submit">Send</button>
                        </div>
                        <div className={classes.confirm}>{confirm}</div>
                    </form>
                    
                </div>
            </div>
           
        </section>
    )
}

export default Contact