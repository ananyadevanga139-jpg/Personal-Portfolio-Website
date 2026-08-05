import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";


function Projects(){


return (

<section
id="projects"
className="
py-32
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

className="
text-center
mb-20
"

>


<p
className="
text-cyan-400
text-lg
mb-4
"

>

My Work

</p>


<h2

className="
text-5xl
font-bold
"

>

Featured Projects

</h2>



<p

className="
text-gray-400
max-w-2xl
mx-auto
mt-5
text-lg
"

>

AI-powered and full-stack applications
developed to solve real-world problems.

</p>


</motion.div>





<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-10
"

>



{

projects.map((project,index)=>(


<motion.a


key={project.title}


href={project.link}

target="_blank"

rel="noreferrer"



initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}



transition={{

duration:0.6,

delay:index*0.15

}}



className="
group
glass
rounded-3xl
overflow-hidden
hover:-translate-y-3
transition
duration-500
"


>




{/* PROJECT IMAGE */}



<div

className="
overflow-hidden
"

>


<img

src={project.image}

alt={project.title}

className="
w-full
h-64
object-cover
group-hover:scale-110
transition
duration-700
"

/>


</div>





{/* CONTENT */}



<div

className="
p-8
"

>


<p

className="
text-cyan-400
font-semibold
mb-3
"

>

0{index+1}

</p>



<h3

className="
text-2xl
font-bold
mb-4
group-hover:text-cyan-400
transition
"

>

{project.title}

</h3>





<p

className="
text-gray-400
leading-relaxed
"

>

{project.description}

</p>





<div

className="
flex
items-center
gap-2
mt-6
text-cyan-400
font-semibold
"

>

View Live Project

<ArrowUpRight size={18}/>

</div>



</div>



</motion.a>



))

}



</div>



</div>


</section>


)

}


export default Projects;