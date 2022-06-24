import classes from './LinearRegressionAppPage.module.css'
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

function LinearRegressionAppPage() {
    const [visibleState, setVisibleState] = useState(false)

    return (
        <div className={visibleState ? classes.page : classes.pagehidden}>


            <div className={classes.container}>
                <FadeInWhenVisibleH1>
                    <div className={classes.thumbnail}>
                        <div className={classes.h1Container}>
                            <h1>
                                Linear Regression App
                            </h1>
                        </div>
                    </div>
                </FadeInWhenVisibleH1>

                <FadeInWhenVisibleX>
                        <div className={classes.Brief}>
                        <h2>Brief Introduction</h2>
                           <p>
                                We made a Windows Forms Application to manage inventory, purchases, sells,
                                clientes, users and send emails. This app works with authorization levels
                                that restrict which actions you are allowed to do depending if you are administrator 
                                or employee,    
                           </p>
                        </div>




                        
                    
                        <div className={classes.summary}>
                        <div>
                            <h2>My Role</h2>
                            
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.

                        </div>
                        <div>
                            <h2>Project Difficulties</h2>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.

                        </div>
                        <div>
                            <h2>My Solution</h2>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.

                        </div>
                        </div>

                        <div className={classes.tools}>
                        <div>
                            <h2>Technologies used</h2>
                            <ul>
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
                                <li>Authentication Online/Offline</li>
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
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Inventory Section" image={require('../../images/FormsAppImages/inventarioImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Add Purchase Section" image={require('../../images/FormsAppImages/añadirComprasImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Purchases Section" image={require('../../images/FormsAppImages/verComprasImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Add Sell Section" image={require('../../images/FormsAppImages/añadirVentaImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Sells Section" image={require('../../images/FormsAppImages/verVentasImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Clients Section" image={require('../../images/FormsAppImages/clientesImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Users Section" image={require('../../images/FormsAppImages/usuariosImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Mails Section" image={require('../../images/FormsAppImages/correosImage.png')}>
                            Velit dolore ipsum minim ad anim magna quis et cupidatat ad ex. Enim ea eu enim non officia et veniam pariatur excepteur consectetur ex ullamco excepteur dolor. Proident tempor veniam est laborum irure dolor adipisicing laborum excepteur. Qui ea fugiat sunt id incididunt minim voluptate eu occaecat adipisicing consequat incididunt. Et velit eu ad id qui anim laboris. Non et deserunt aute nostrud nisi dolor eiusmod magna incididunt sunt consequat tempor irure. Esse labore quis commodo tempor consectetur.
                        </SectionRight>
                    </div>
                </FadeInWhenVisibleY>

            </div>
        </div>
    )
}

export default LinearRegressionAppPage
