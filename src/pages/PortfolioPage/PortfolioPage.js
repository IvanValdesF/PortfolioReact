import AboutSection from '../../components/AboutSection';
import Header from '../../components/Header'
import './PortfolioPage.css';
import MyWork from '../../components/MyWork';
import Contact from '../../components/Contact';
import Landing from '../../components/Landing'
function PortfolioPage() {
  return (
    <div className="portfolio">
        <Header/>
        <Landing className="landing"/>
        <div className='divContainer'>
        <div className='divisor'/>
        </div>
        
        <AboutSection/>
        <div className='divContainer'>
        <div className='divisor'/>
        </div>
        <MyWork/>
        <div className='divContainer'>
        <div className='divisor'/>
        </div>
        <Contact/>
        <footer>This portfolio was made using ReactJS by Ivan Valdes 6/19/22</footer>
    </div>
  );
}

export default PortfolioPage;
