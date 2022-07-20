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
                                Linear Regression App
                            </h1>
                        </div>
                    </div>
                </FadeInWhenVisibleH1>

                <FadeInWhenVisibleX>
                        <div className={classes.Brief}>
                        <h2>Brief Introduction</h2>
                           <p>
                                I made a python application that takes X and Y 
                                values to calculate a linear regression ecuation and gives 
                                the necesary data to calculate confidence intervals and 
                                make sells pronostics with the objective of
                                apply some of my knlowledges about 
                                linear regression and neural networks.
                           </p>
                        </div>




                        
                    
                        <div className={classes.summary}>
                        <div>
                            <h2>My Role</h2>
                            I made this application by myself so my role was develop the entire application
                            making use of my statistics and programming
                            knlowledges
                        </div>
                        <div>
                            <h2>Project Difficulties</h2>
                            One of the difficulties that I had making this application was the implementation
                            of a neural network, initially I wanted to make the entire network by myself 
                            just making use of calculus and programming.
                        </div>
                        <div>
                            <h2>My Solution</h2>
                            Due to the complexity of that implementation I decided 
                            to use tensorflow, a google library for machine learning.
                        </div>
                        </div>

                        <div className={classes.tools}>
                        <div>
                            <h2>Technologies used</h2>
                            <ul>
                                <li>Python</li>
                                <li>Machine Learning</li>
                                <li>Numpy</li>
                                <li>Tkinter</li>
                                <li>SQLite3</li>
                                <li>Matplotlib</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Notable features</h2>
                            <ul>
                                <li>Linear regression usage</li>
                                <li>Tensorflow usage</li>
                                <li>All SQL CRUD Features</li>
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
                

            </div>
        </div>
    )
}

export default OnlineShopPage
