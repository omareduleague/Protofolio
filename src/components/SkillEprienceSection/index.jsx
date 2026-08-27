import experiences from "../../data/experience";
import ExperienceItem from "./ExperienceItem";
import SkillCard from "./SkillCard";
import{
   FaReact,
   FaHtml5,
   FaCss3Alt,
   FaNodeJs,
   FaPython,
   FaRust,
   FaGitAlt

} from "react-icons/fa";
import { SiNextdotjs,SiPostgresql, SiTailwindcss } from "react-icons/si";

const skills =[
   {name:"React", icon:<FaReact className="text-blue-500"/>},
   {name:"HTML5", icon:<FaHtml5 className="text-orange-500"/>},
   {name:"CSS3", icon:<FaCss3Alt className="text-blue-600"/>},
   {name:"Nodejs", icon:<FaNodeJs className="text-green-500"/>},
   {name:"Python", icon:<FaPython className="text-yellow-500"/>},
   {name:"Rust", icon:<FaRust className="text-gray-800  dark:text-gray-400"/>},
   {name:"Next.js", icon:<SiNextdotjs className="text-black dark:text-white" />},
   {name:"Postgre", icon: <SiPostgresql className="text-blue-400"/>},
   {name:"Git", icon: <FaGitAlt className="text-red-600"/>},
   {name:"TailwindCSS", icon:<SiTailwindcss className="text-cyan-500"/> },
];
const SkillExperienceSection = () => {
   return( <section className="min-h-screen py-20">
      <h1 className="text-3xl font-semibold text-center">
          Skills & Experience </h1>
          <h3 className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400"> 
            What I Do & Where I've Been</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">

            <div>
               <h4 className="text-2xl font-semibold mb-4"> Skills</h4>
              

               <div className="grid grid-cols-3 gap-6">
               {skills.map((skill,idx)=>(
                  <SkillCard
                  key={idx} 
                  icon={skill.icon}
                  name={skill.name}/>
               ))}
              </div>
              </div>
           

            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 space-y-8">
              <h4 className="text-2xl font-semibold mb-4">Exprience</h4>
              {experiences.map((skill, idx)=> (
               <ExperienceItem
               key={idx}
               title={skill.title}
               company={skill.company}
               years={skill.years}
               />
              ))}
              
            </div>

            </div>

    </section>
   );
};

export default SkillExperienceSection