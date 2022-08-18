import classes from './OnlineShopStyles.module.css'
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

function OnlineShopPage() {
    const [visibleState, setVisibleState] = useState(false)

    return (
        <div className={visibleState ? classes.page : classes.pagehidden}>


            <div className={classes.container}>
                <FadeInWhenVisibleH1>
                    <div className={classes.thumbnail}>
                        <div className={classes.h1Container}>
                            <h1>
                                Ecommerce app
                            </h1>
                        </div>
                    </div>
                </FadeInWhenVisibleH1>

                <FadeInWhenVisibleX>
                        <div className={classes.Brief}>
                        <h2>Brief Introduction</h2>
                           <p>
                                I made a completely functional ecommerce app for my brother business,
                                it handles things like orders, shopping cart, product reviews,
                                user settings and payments using stripe API.
                                It is not completely done, there is still work to do about the design and
                                sites policy. 
                            </p>
                        </div>




                        
                    
                        <div className={classes.summary}>
                        <div>
                            <h2>My Role</h2>
                            My role in this project is the entire site development, such as the front-end, user interface,
                            user experience, backend, database desing, API design, stripe API implementation, authentication and authorization system using jwt and more...
                        </div>
                        <div>
                            <h2>Project Difficulties</h2>
                            One of the difficulties of this project was the payment implementation, it was my first
                            time using payments and wanted a reliable platform
                        </div>
                        <div>
                            <h2>My Solution</h2>
                            The way I solved it was implementing a payment gateaway using the Stripe API
                        </div>
                        </div>

                        <div className={classes.tools}>
                        <div>
                            <h2>Technologies used</h2>
                            <ul>
                                <li>NodeJS</li>
                                <li>VueJS</li>
                                <li>Express</li>
                                <li>SQL Server</li>
                                <li>Vue Router</li>
                                <li>Vuex</li>
                                <li>Stripe API</li>
                                <li>Json Web Tokens</li>
                                <li>Tailwind</li>
                                <li>Mailgun-JS</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Notable features</h2>
                            <ul>
                                <li>Order historial retrieve</li>
                                <li>Product reviews</li>
                                <li>All SQL CRUD Features</li>
                                <li>User authentication and authorization</li>
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
                        <SectionRight title="All products section" image={require('../../images/ShopImages/allProducts.png')}>
                            We have a all products section that retrieve a list of products stored in our database
                        </SectionRight>

                        <Divisor />

                        <SectionLeft title="Categories" image={require('../../images/ShopImages/shirtsSection.png')}>
                            Products can be splitted into categories with a dynamic url
                        </SectionLeft>

                        <Divisor />

                        <SectionRight title="Training network" image={require('../../images/LinearRegressionImages/trainNetwork.png')}>
                            The train network button is for start the network training using the given data
                            and get the values fot the linear regression ecuation
                        </SectionRight>

                        <Divisor />



                        
                    </div>
                </FadeInWhenVisibleY>

                

            </div>
        </div>
    )
}

export default OnlineShopPage
