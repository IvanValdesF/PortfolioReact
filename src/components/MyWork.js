import classes from './MyWork.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion'


import {useAnimation} from 'framer-motion'
import useHasBeenViewed from '../customHooks/useHasBeenViewed'


function FadeInWhenVisibleY({ children }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { y: 0},
          hidden: { y: '-10vw'}
        }}
      >
        {children}
      </motion.div>
    );
  }


function ProjectCard({ image, description, title, tools, tools2, tools3,tools4,tools5, link, projectRoute}) {
    return (

        <div className={classes.container}>
            <div>
            <img src={image} className={classes.image} alt="profile" />
            <div className={classes.description}>

                <h1>{title}</h1>
                <h2>{tools}</h2>
                <h2>{tools2}</h2>
                <h2>{tools3}</h2>
                <h2>{tools4}</h2>
                <h2>{tools5}</h2>
                <p>{description}</p>
                
            </div>
            </div>
            

            <div>
                <a target="_blank" href={link}><FontAwesomeIcon className={classes.icon} size="2x" icon={faGithub} /></a>
                <div className={classes.btn}>
                    <a target="_blank" href={projectRoute}>See more!</a>
                </div>
            </div>
            
        </div>


    )
}

function MyWork() {
    const [hasBeenViewed, ref] = useHasBeenViewed();
    
     
    

    


    return (
        <section  ref={ref} id="work" className={classes.worksection}>
            <FadeInWhenVisibleY>
            <h1>Some of my projects</h1>
            </FadeInWhenVisibleY>
            <motion.div animate={{y: hasBeenViewed ? 0 : '100vh',opacity: hasBeenViewed ? 1 : 0}} transition={{duration:2}} className={classes.work}>

            <ProjectCard projectRoute="https://ivanvaldesdev.netlify.app/windows-forms-app" link="https://github.com/IvanValdesF/SistemaVentasWinForms" image={require("../images/FormsAppImages/ventasImage.png")} title="Store Management App" tools="Windows Forms" tools2="Send Emails" description="In this project my co-worker and me made a windows forms app 
            with the purpose of manage a clothing store inventory, sells, purchases, clients and employees."/>
            <ProjectCard projectRoute="https://ivanvaldesdev.netlify.app/windows-forms-app-api" link="https://github.com/IvanValdesF/VentasAPIv2" image={require("../images/APIImages/apiImage.png")} title="Store Management API" tools="ASP .NET Core" tools2="JSON Web Tokens" tools3="MySQL" description="I made an API 
            to abstract the logic of my Store Managment App in order to share it with an online store that is still in development."/>
            <ProjectCard projectRoute="https://ivanvaldesdev.netlify.app/linear-regression-app" link="https://github.com/IvanValdesF/PythonRegresionLinealUsage" image={require("../images/regresionImage.png")} title="Linear Regression App" tools="Python" tools2="Tensorflow" tools3="Sqlite" tools4="Tkinter" tools5="Numpy | Matplotlib" 
            description="I made a machine learning model aplying linear regression to make sells pronostics and get all necessary data to analize and calculate confidence intervals."/>
            </motion.div>
            
           
        </section>
    )
}

export default MyWork