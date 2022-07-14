import classes from "./AboutSection.module.css"
import {motion} from 'framer-motion'

function FadeInWhenVisibleL({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 , delay:1}}
        variants={{
          visible: { y: 0,opacity:1},
          hidden: { y: '40vh',opacity:0}
        }}
      >
        {children}
      </motion.div>
    );
  }

  function FadeInWhenVisibleR({ children }) {
    return (
      <motion.div
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 , delay:1}}
        variants={{
          visible: { y: 0,opacity:1},
          hidden: { y: '40vh',opacity:0}
        }}
      >
        {children}
      </motion.div>
    );
  }


function AboutSection(){
    
    return(
        
        <section id="about" className={classes.aboutpage}>
            <div className={classes.aboutme}>
            
                <motion.img initial="hidden"
                thresh
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { x: 0,opacity:1},
          hidden: { x: '-30vw',opacity:0}
        }} src={require('../images/PortfolioImages/profile2.jpg')} className={classes.image} alt="profile"/>
                
                
                <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 , delay:1}}
        variants={{
            visible: { x: 0,opacity:1},
            hidden: { x: '40vw',opacity:0}
        }} className={classes.abouttext}>
                    <h1>About me</h1>
                    <h5>Fullstack web developer</h5>
                    <p>
                        Hello my name is Ivan!, 
                        i am a pasionate self taught web developer that really loves
                        engineering, i love the problem solving process in order to 
                        make it by the most efficient way, my personality does not allow me to 
                        leave a problem unsolved.
                        
                          <div className={classes.history}>
                              I want to use my knowledge in order to solve problems in a 
                              profitable way for an organization and not just for fun as I've been
                              doing sow far.
                          </div>
                    </p>
                    <div className={classes.btn}>
                        <a href="#contact">Contact me!</a>
                    </div>
                </motion.div>
                
                
            </div>
        </section>
    )
}

export default AboutSection