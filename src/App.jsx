import ThemeProvider from "./context/ThemeProvider";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ScrollDots from "./components/ScrollDots";
import ProjectSection from "./components/ProjectSection";
import SkillExprienceSection from "./components/SkillEprienceSection";
import RecommendationSection from "./components/RecommendationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css"

const App =() => {
 return(
  <ThemeProvider>
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
       
        <NavBar/>
        <ScrollDots/>
        <div id = "hero"><Hero/></div>
        <div id = "projects"><ProjectSection/></div>
        <div id ="skills"><SkillExprienceSection/></div>
        <div id = "recommendations"><RecommendationSection/></div>
        <div id = "contact"><ContactSection/></div>
        <Footer/>
    </div>
  </ThemeProvider>
 )
}

export default App;