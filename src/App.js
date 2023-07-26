import './App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/pages/Header/Header';
import Home from './components/pages/Home/Home';
import About from './components/pages/about/about';
import Course from './components/pages/course/courses/Course';
import Module from './components/pages/course/module/module';
import Fundamentals from './components/pages/course/fundamentals/Fundamentals';
import Robotics from './components/pages/course/Robotics/Robotics';
import Electronics from './components/pages/course/electronics/Electronics';
import Energy from './components/pages/course/energy/Energy';
import Environment from './components/pages/course/environment/Environment';
import Science from './components/pages/course/science/Science';
import Registration from './components/pages/Registration/Registration';
import Footer from './components/pages/Footer/Footer';
import Couches from './components/pages/Coaches/Coaches';
import Shop from './components/pages/shop/Shop';
import ContactUs from './components/pages/ContactUs/ContactUs';
import RoboticsProgramming from './components/pages/course/courses/RoboticsProgramming/RoboticsProgramming';
import MobileAppDevelopment from './components/pages/course/courses/MobileAppDevelopment/MobileAppDevelopment';
import ExploringMechatronics from './components/pages/course/courses/ExploringMechatronics/ExplosingMechatronics';
import ElectronicsMirco from './components/pages/course/courses/ElectronicsMicroControllers/ElectronicsMirco';
import IntroductionToKibo from './components/pages/course/courses/IntroductionToKibo/IntroductionToKibo';
import CreativityWithKibo from './components/pages/course/courses/CreativityWithKibo/CreativityWithKibo';
import SteamEducationWorks from './components/pages/course/courses/SteamEducationWorks/SteamEducationWorks';
//import TinkerCad3DPrinting from "./components/pages/course/courses/TinkerCad3DPrinting/TinkerCad3DPrinting";
import VeroBoard from './components/pages/course/courses/VeroBorad/VeroBoard';
import ElectronicsWithBrreadBoard from './components/pages/course/courses/ElectronicsWithBrreadBoard/ElectronicsWithBrreadBoard';
import ArtsAndTechnology from './components/pages/course/courses/ArtsAndTechnology/ArtsAndTechnology';
import AlternativeEnergy from './components/pages/course/courses/AlternativeEnergy/AlternativeEnergy';
import Arduin from './components/pages/shop/Arduin/Arduino';
import Soldering from './components/pages/shop/Soldering/Soldering';
import ProductRegistration from './components/pages/shop/ProductRegistration/ProductForm';
import StudentInfo from './components/pages/Registration/StudentInfo/StudentInfo';
import ScrollTop from './components/pages/ScrollTop';
import Scroll from './components/pages/topScroll/topScroll';
import Services from './components/pages/Services/Services';
import Projects from "./components/pages/about/Projects/Projects"
import { CircleToBlockLoading } from 'react-loadingg';
import Blog from './components/pages/about/Blog/Blog';
import blog1 from './components/pages/about/Blog/blogs/blogs';
import ict from './components/pages/Services/ict/ICT';
import engineering from './components/pages/Services/engineering/Engineering';
import MechanicalEngineering from './components/pages/Services/engineering/MechanicalEngineering/MechanicalEngineering';
import ElectronicEngineering from './components/pages/Services/engineering/Electronic Engineering/Electronic_Engineering';
import Research from './components/pages/Research/Research';
// import Electronics from "./components/pages/course/electronics/Electronics";
import Electrical_Engineering from './components/pages/Services/engineering/electrical-engineering/Electrical_Engineering';
import deadPage from './components/pages/deadPage';
// import Founders from './components/pages/about/Co-founders/Co-founders';
const Founders = lazy(()=>import('./components/pages/about/Co-founders/Co-founders'));



// import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <CircleToBlockLoading
            size="small"
            speed={4}
            color="#0c50a3"
            loading={loading} //3 secs
          />
        </div>
      ) : (
        <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}>

        
          <switch>
            <ScrollTop />
            <Header />
            <ScrollTop />
            <Route exact path="/" component={Home} />
            <ScrollTop />
            <Route exact path="/profile" component={About} />
            <ScrollTop />
            <Route exact path="/services" component={Services} />
            {/* <Route exact path="/services" component={deadPage} /> */}
            <ScrollTop />
            <Route
              exact
              path="/introduction-to-robotics-and-programming"
              component={RoboticsProgramming}
            />
            <ScrollTop />
            <Route exact path="/blog" component={Blog} />
            {/* <Route exact path="/blog" component={deadPage}/> */}
            <ScrollTop />
            <Route exact path="/blogs" component={blog1} />
            <ScrollTop />
            <Route
              exact
              path="/mobile-development"
              component={MobileAppDevelopment}
            />
            <ScrollTop />
            <Route
              exact
              path="/exploring-mechatronics"
              component={ExploringMechatronics}
            />
            <ScrollTop />
            <Route
              exact
              path="/Arts-and-Technology-with-Kibo"
              component={ArtsAndTechnology}
            />
            <ScrollTop />
            <Route
              exact
              path="/Electronics-with-microcontrollers-programming"
              component={ElectronicsMirco}
            />
            <ScrollTop />
            <Route exact path="/projects" component={Projects}/>
            {/* <Route exact path="/projects" component={deadPage} /> */}
            <ScrollTop />
            <Route
              exact
              path="/Alternative-energy"
              component={AlternativeEnergy}
            />
            <ScrollTop />
            <Route
              exact
              path="/Electronics-Prototyping-with-Breadboard"
              component={ElectronicsWithBrreadBoard}
            />
            <ScrollTop />
            {/* <Route exact path="/courses" component={Course} /> */}
            <Route exact path="/modules" component={Course} />
            <ScrollTop />
            <Route exact path="/module" component={Module} />
            <ScrollTop />
            <Route exact path="/fundamentals" component={Fundamentals} />
            <ScrollTop />
            <Route exact path="/robotics" component={Robotics} />
            {/* <Route exact path="/robotics" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/electronics" component={Electronics} />
            {/* <Route exact path="/electronics" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/energy" component={Energy} />
            {/* <Route exact path="/energy" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/environment" component={Environment} />
            {/* <Route exact path="/environment" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/science" component={Science} />
            {/* <Route exact path="/science" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/Coaches" component={Couches} />
            {/* <Route exact path="/Coaches" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/founders" component={Founders} />
            {/* <Route exact path="/Coaches" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/Register" component={Registration} />
            <ScrollTop />
            <Route exact path="/Shop" component={Shop} />
            {/* <Route exact path="/Shop" component={deadPage} /> */}
            <ScrollTop />
            <Route exact path="/Arduin-uno-kit" component={Arduin} />
            <ScrollTop />
            <Route exact path="/Soldering-icon-kit" component={Soldering} />
            <ScrollTop />
            <Route exact path="/Contact-us" component={ContactUs} />
            <ScrollTop />
            <Route
              exact
              path="/Introduction-to-kibo"
              component={IntroductionToKibo}
            />
            <ScrollTop />
            <Route
              exact
              path="/Creativity-with-Kibo"
              component={CreativityWithKibo}
            />
            <ScrollTop />
            <Route
              exact
              path="/STEAM-Education-Works"
              component={SteamEducationWorks}
            />
            <ScrollTop />
            <Route
            //exact
            //path="/TinkerCAD-and-3D-Printing"
            //component={TinkerCad3DPrinting}
            />
            <ScrollTop />
            <Route
              exact
              path="/Electronics-Prototyping-with-Vero-Board"
              component={VeroBoard}
            />
            <ScrollTop />
            <Route
              exact
              path="/Product-registration"
              component={ProductRegistration}
            />
            <ScrollTop />
            <ScrollTop />
            <Route exact path="/ict" component={ict} />
            {/* <Route
              exact
              path="/ict"
              component={deadPage}
            /> */}
            <ScrollTop />
            <Route exact path="/engineering" component={engineering} />
            {/* <Route
              exact
              path="/engineering"
              component={deadPage}
            /> */}
            <ScrollTop />
            <Route exact path="/Student-info" component={StudentInfo} />
            <ScrollTop />
            <Route
              exact
              path="/mechanical-engineering"
              component={MechanicalEngineering}
            />
            <ScrollTop />
            <Route
              exact
              path="/Electrical-Engineering"
              component={Electrical_Engineering}
            />

            <ScrollTop />
            <Route
              exact
              path="/electronic-engineering"
              component={ElectronicEngineering}
            />
            <ScrollTop />

            <Route exact path="/deadPage" component={deadPage} />
            <ScrollTop />

            <ScrollTop />
            <Route exact path="/search" component={Research} />
            <ScrollTop />

            {/* <ScrollTop />

            <Route path="*">
              <deadPage />
            </Route> */}
            <ScrollTop />

            <Footer />
          </switch>
          </Suspense>
        </BrowserRouter>
      )}
      <Scroll />
    </div>
  );
}

export default App;
