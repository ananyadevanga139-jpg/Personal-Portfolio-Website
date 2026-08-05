import { motion } from "framer-motion";


function Projects(){

const projects = [
{
title:"AI Task Management System",
description:
"AI-powered full-stack task management application with authentication, task tracking, and workflow management.",
tech:"React • TypeScript • Node.js • Express • PostgreSQL",
link:"https://github.com/ananyadevanga139-jpg/AI-Task-Management-System"
},

{
title:"AgroPredict - Crop Recommendation System",
description:
"Machine learning based crop recommendation system that helps users select suitable crops using agricultural data.",
tech:"Python • Flask • Machine Learning",
link:"https://github.com/ananyadevanga139-jpg/AgroPredict-Crop-Recommendation-System"
},

{
title:"Multiple Disease Prediction System",
description:
"AI healthcare prediction system using machine learning and deep learning models for disease prediction.",
tech:"Python • TensorFlow • Keras • OpenCV",
link:"https://github.com/ananyadevanga139-jpg/Multiple-Disease-Prediction-System"
}

];


return (

<section
id="projects"
className="py-24 px-6"
>

<div className="max-w-7xl mx-auto">

<h2 className="
text-4xl
font-bold
gradient-text
mb-12
text-center
">
Projects
</h2>


<div className="
grid
md:grid-cols-3
gap-8
">


{
projects.map((project,index)=>(

<motion.div

key={index}

whileHover={{
scale:1.05
}}

className="
glass
p-6
rounded-2xl
"

>


<h3 className="
text-2xl
font-bold
mb-4
">

{project.title}

</h3>


<p className="
text-gray-400
mb-4
">

{project.description}

</p>


<p className="
text-cyan-400
mb-5
">

{project.tech}

</p>


<a
href={project.link}
target="_blank"
rel="noreferrer"
className="
text-white
border
border-cyan-400
px-5
py-2
rounded-full
hover:bg-cyan-400
hover:text-black
transition
"
>

View Project

</a>


</motion.div>


))

}


</div>


</div>


</section>

)

}


export default Projects;