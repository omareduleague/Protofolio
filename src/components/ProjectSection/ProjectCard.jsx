import React from 'react';

const ProjectCard = ({ project }) => {
  // فحص هل القيمة الممررة عبارة عن React Component أم مسار نصي للصورة
  const isComponent = typeof project.image !== 'string';
  const ImageComponent = isComponent ? project.image : null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
      <div className='relative' >
        {isComponent ? (
          <ImageComponent width="99%" height="50%" />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-68 object-cover"
          />
          
        )}
        <span className="absolute top-2 right-2 text-xs font-semibold text-blue-600 dark:text-white px-2 py-2 rounded-full shadow bg-blue-100 dark:bg-gradient-to-r dark:from-blue-800 dark:to-blue-600">
          {project.type}
        </span>
      </div>

      {/* باقي بيانات المشروع */}
     <div> 
        
        <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;