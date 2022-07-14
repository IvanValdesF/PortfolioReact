import classes from './ASPNetCoreAPIPage.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-solid-svg-icons'

function SectionLeft(props) {
    return (
        <div className={classes.section}>
            <img src={props.image} className={classes.image} alt="" />

            <div className={classes.text}>
                <h2>{props.title}</h2>
                {props.children}
            </div>
        </div>
    )
}

function SectionRight(props) {
    return (
        <div className={classes.sectionR}>
            <div className={classes.text}>
                <h2>{props.title}</h2>
                {props.children}
            </div>
            <img src={props.image} className={classes.image} alt="" />


        </div>
    )
}



function FadeInWhenVisibleY({ children, isVisible }) {


    return (
        <motion.div
            initial="hidden"

            whileInView={isVisible ? "visible" : "hidden"}
            viewport={{ once: true }}

            transition={{ duration: 1 }}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: '-300vh', opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

function FadeInWhenVisibleH1({ children, isVisible }) {


    return (
        <motion.div
            initial="hidden"

            whileInView={"visible"}
            viewport={{ once: true }}

            transition={{ duration: 0.5 }}
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: '-10vh', opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

function FadeInWhenVisibleX({ children, isVisible }) {


    return (
        <motion.div
            initial="hidden"

            whileInView={"visible"}
            viewport={{ once: true }}

            transition={{ duration: 1, delay: 0.5 }}
            variants={{
                visible: { x: 0, opacity: 1 },
                hidden: { x: '-20vw', opacity: 0 }
            }}
        >
            {children}
        </motion.div>
    );
}

function Divisor() {
    return (
        <div className={classes.divContainer}>
            <div className={classes.divisor} />
        </div>
    )
}

function ASPNetCoreAPIPage() {
    const [visibleState, setVisibleState] = useState(false)

    return (
        <div className={visibleState ? classes.page : classes.pagehidden}>


            <div className={classes.container}>
                <FadeInWhenVisibleH1>
                    <div className={classes.thumbnail}>
                        <div className={classes.h1Container}>
                            <h1>
                                Store Management API
                            </h1>
                        </div>
                    </div>
                </FadeInWhenVisibleH1>

                <FadeInWhenVisibleX>
                        <div className={classes.Brief}>
                        <h2>Brief Introduction</h2>
                           <p>
                                This is an API that I made to manage the connections from my 
                                store management application to my database, I
                                built it using entity framework following a database first methodology
                                in the MVC design pattern, also I implemented JWT to increase the security.
                           </p>
                        </div>




                        
                    
                        <div className={classes.summary}>
                        <div>
                            <h2>My Role</h2>
                                This was a personal project so my role was to design and program the entire API.
                                My objective was to make it easy to read, easy to work, secure and scalable.
                            </div>
                        <div>
                            <h2>Project Difficulties</h2>
                            The principal problem that we faced was that it was my first time designing and programming an API so in my first attempt i made a lot of architectural errors that made the program hard to work with.
                        </div>
                        <div>
                            <h2>My Solution</h2>
                            My solution for this problem was start over again following a structurated pattern and standarize repetitive practices. I learned a lot about organizational work in order to make a project readable, easy to work and scalable.
                        </div>
                        </div>

                        <div className={classes.tools}>
                        <div>
                            <h2>Technologies used</h2>
                            <ul>
                                <li>C#</li>
                                <li>MySQL</li>
                                <li>.NET Core</li>
                                <li>MVC</li>
                                <li>Json Web Tokens</li>
                                <li>Entity Framework</li>
                                
                            </ul>
                        </div>
                        <div>
                            <h2>Notable features</h2>
                            <ul>
                                <li>Authentication</li>
                                <li>Authorization</li>
                                <li>All CRUD Features</li>
                                <li>Security with JWT</li>
                                <li>Password Hashing</li>
                                <li>Store Images</li>
                            </ul>
                        </div>
                        <div>
                            
                            
                        </div>
                        </div>
                    





                </FadeInWhenVisibleX>


                <Divisor />
                <div className={classes.btn}>
                    <p>{visibleState ? "Show less" : "Show more"}</p>
                    <button onClick={() => setVisibleState(!visibleState)}>{visibleState ? <FontAwesomeIcon size="4x" icon={faCaretSquareUp}></FontAwesomeIcon> : <FontAwesomeIcon size="4x" icon={faCaretSquareDown}></FontAwesomeIcon>}</button>

                </div>
                <FadeInWhenVisibleY isVisible={visibleState}>
                    <div className={visibleState ? classes.details : classes.detailshidden}>
                        <SectionRight title="Json Web Tokens" image={require('../../images/APIImages/JWTImage.png')}>
                            I implemented Json Web Tokens to increase the security on the requests, we dont used them in
                            the Windows Forms Application but I implemented it to use them in an online shop with
                            clients.
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Password Encrypt" image={require('../../images/APIImages/PassEncryptImage.png')}>
                            It is not a good security practice to store plain passwords in your database
                            so I implemented a password encrypter to hash the passwords before insert them in our database.
                        </SectionLeft>
                        
                        <Divisor />

                        <SectionRight title="Saving files" image={require('../../images/APIImages/FilesImage.png')}>
                            In order to save the images for each product in the application I decided to store them in our
                            server storage so I made a method to upload them into the server.
                        </SectionRight>
                        
                    </div>
                </FadeInWhenVisibleY>

            </div>
        </div>
    )
}

export default ASPNetCoreAPIPage