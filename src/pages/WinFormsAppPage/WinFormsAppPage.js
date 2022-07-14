import classes from './WinFormsAppPage.module.css'
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

function WinFormsAppPage() {
    const [visibleState, setVisibleState] = useState(false)

    return (
        <div className={visibleState ? classes.page : classes.pagehidden}>


            <div className={classes.container}>
                <FadeInWhenVisibleH1>
                    <div className={classes.thumbnail}>
                        <div className={classes.h1Container}>
                            <h1>
                                Store Management Application
                            </h1>
                        </div>
                    </div>
                </FadeInWhenVisibleH1>

                <FadeInWhenVisibleX>
                        <div className={classes.Brief}>
                        <h2>Brief Introduction</h2>
                           <p>
                           We made a Windows Forms Application to manage inventory, purchases, sells,
                                clients, users and send emails. This app works with authorization levels
                                that restrict which actions you are allowed to do depending if you are administrator 
                                or employee. Also we designed an API to abstract the logic of the application for two reasons:
                                1. To see the same and updated information on all devices where the program is running, doing that
                                we made it ready to work at a organizational level.<br/>2. To make the proyect scalable. With an
                                API already working, we can connect it to any other application, such as an online shop or a mobile application,
                                with no need to program the logic for every single app.
                           </p>
                        </div>




                        
                    
                        <div className={classes.summary}>
                        <div>
                            <h2>My Role</h2>
                            In this proyect my role was to connect the application to the API and handle its responses in a way
                            that the program could understand them.
                            This includes the authentication, authorization, images uploading, CRUD features for all sections, and Mails Section. 
                        </div>
                        <div>
                            <h2>Project Difficulties</h2>
                            One of the problems that we faced was handling the API responses, the program
                            could not understand directily the responses because it was given in JSON format.
                        </div>
                        <div>
                            <h2>My Solution</h2>
                            Our solution to this problem was to create a serializer function and standarize response
                            and request models.    
                        </div>
                        </div>

                        <div className={classes.tools}>
                        <div>
                            <h2>Technologies used</h2>
                            <ul>
                                <li>C#</li>
                                <li>Windows Forms</li>
                                <li>Font Awesome</li>
                                <li>SMTP Mail Service</li>
                                <li>API Rest</li>
                                <li>Object Oriented Programming</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Notable features</h2>
                            <ul>
                                <li>Online Authentication</li>
                                <li>Authorization Levels (Administrator/Employee)</li>
                                <li>All CRUD Features</li>
                                <li>Email sending</li>
                                <li>Password Hashing</li>
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
                        <SectionRight title="Login Section" image={require('../../images/FormsAppImages/loginImage.png')}>
                            We made a login section to authenticate users and assign them an authorization level
                            depending on how they were registered.    
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Inventory Section" image={require('../../images/FormsAppImages/inventarioImage.png')}>
                            The inventory section is where the users can add, delete, edit and see all real time data
                            about the products such as id, image, name, stock, purchase price and sell price.
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Add Purchase Section" image={require('../../images/FormsAppImages/añadirComprasImage.png')}>
                            This section is to register all the purchases that the company does, you can register a purchase
                            with all its concepts, assign and id to the purchase, set the purchase price, sell price, quantity, and calculate the total price.
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Purchases Section" image={require('../../images/FormsAppImages/verComprasImage.png')}>
                            In this section the users can see all registered purchases, the purchase
                            details and its concepts.
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Add Sell Section" image={require('../../images/FormsAppImages/añadirVentaImage.png')}>
                        This section is to register or delete manually the sells that the company does, you can register a sell
                        with all its concepts, assing an id to the sell, set the ammount paid, and calculate the change.
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Sells Section" image={require('../../images/FormsAppImages/verVentasImage.png')}>
                            In this section the users can see all registered sells, the sell
                            details and its concepts.
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Clients Section" image={require('../../images/FormsAppImages/clientesImage.png')}>
                            In this section are all registered clients, the users can register new clients,
                            edit information, delete clients and see its information
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Users Section" image={require('../../images/FormsAppImages/usuariosImage.png')}>
                        In this section the admiinstrator can see all the users registered in the system,
                        delete users, edit user information and register new users with an specific authorization level.
                       
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Mails Section" image={require('../../images/FormsAppImages/correosImage.png')}>
                            In this section the users can send custom emails to all registered clients and they can choose to whom it will
                            be sent.
                        </SectionRight>
                    </div>
                </FadeInWhenVisibleY>

            </div>
        </div>
    )
}

export default WinFormsAppPage