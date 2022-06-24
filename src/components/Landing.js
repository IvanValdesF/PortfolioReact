import classes from './Landing.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion'
import useHasBeenViewed from '../customHooks/useHasBeenViewed'

function FadeInWhenVisibleY({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { x: 0},
          hidden: { x: '-40vw'}
        }}
      >
        {children}
      </motion.div>
    );
  }

  function FadeInWhenVisibleX({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 , delay:1}}
        variants={{
          visible: { y: 0,opacity:1},
          hidden: { y: '30vh',opacity:0}
        }}
      >
        {children}
      </motion.div>
    );
  }

function Landing(){
    const [hasBeenViewed, ref] = useHasBeenViewed();

    return(
        <section ref={ref}  id="landing" className={classes.landing}>
            <div className={classes.text}>
        <FadeInWhenVisibleY>
            
        <h1>Hello my name is </h1>
        <h1 className={classes.name}>Ivan Valdes</h1>
        <h2>I love software development</h2>
        </FadeInWhenVisibleY>
        <FadeInWhenVisibleX>
        <h3>I am a passionate software developer centered on web development with Vue, React, Laravel, ASP .NET Core</h3>
        
        <div className={classes.media}>
            <a target="_blank" href="https://github.com/IvanValdesF/"><FontAwesomeIcon className={classes.icon} size="2x" icon={faGithub} /></a>
            <a target="_blank" href="https://www.instagram.com/ivan.valdes02/"><FontAwesomeIcon className={classes.icon} size="2x" icon={faInstagram} /></a>
        </div>
        </FadeInWhenVisibleX>
        </div>
        
    
        
        
    
    </section>
    )
}

export default Landing