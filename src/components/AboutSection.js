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
                        Cillum reprehenderit officia reprehenderit sint et pariatur. Eiusmod non irure Lorem laboris minim minim excepteur dolore veniam non sint. Irure culpa Lorem dolore excepteur aliqua deserunt velit dolor ut mollit in enim. Mollit id cillum ex culpa. Velit sunt commodo esse et non exercitation aliquip anim et aute commodo.<div className={classes.history}>Elit commodo veniam id esse ut aliqua elit amet
                         excepteur elit quis ea laboris sunt. Veniam est tempor ut nulla cupidatat culpa. Aute ea qui esse mollit commodo et excepteur est dolor qui tempor.
                         </div>Ut aute cillum enim elit dolor laborum. Consequat velit et elit nostrud. Irure dolor incididunt incididunt irure id elit tempor sit anim anim Lorem dolore est. Ipsum laboris do magna ea nostrud pariatur consectetur consectetur pariatur irure ullamco nostrud. Ex esse dolore in sit sit. Velit anim id duis aute velit cupidatat ex consectetur nostrud. Excepteur consectetur nostrud nulla laboris laboris est commodo.
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