import { motion } from "framer-motion";

import {
FaReact,
FaHtml5,
FaCss3Alt,
FaNodeJs,
FaPython,
FaJava,
FaDocker,
FaGitAlt
} from "react-icons/fa";


import {
SiTypescript,
SiJavascript,
SiTailwindcss,
SiExpress,
SiPostgresql,
SiMongodb,
SiTensorflow,
SiOpencv,
SiFlask
} from "react-icons/si";



const categories = [


{
title:"Frontend Development",

skills:[

{
name:"React",
icon:<FaReact/>,
color:"text-cyan-400"
},

{
name:"TypeScript",
icon:<SiTypescript/>,
color:"text-blue-400"
},

{
name:"JavaScript",
icon:<SiJavascript/>,
color:"text-yellow-300"
},

{
name:"HTML",
icon:<FaHtml5/>,
color:"text-orange-400"
},

{
name:"CSS",
icon:<FaCss3Alt/>,
color:"text-blue-500"
},

{
name:"Tailwind",
icon:<SiTailwindcss/>,
color:"text-cyan-300"
}

]

},



{
title:"Backend Development",

skills:[

{
name:"Node.js",
icon:<FaNodeJs/>,
color:"text-green-400"
},

{
name:"Express",
icon:<SiExpress/>,
color:"text-white"
},

{
name:"Python",
icon:<FaPython/>,
color:"text-yellow-400"
},

{
name:"Java",
icon:<FaJava/>,
color:"text-red-400"
},

{
name:"Flask",
icon:<SiFlask/>,
color:"text-white"
}

]

},




{
title:"Database & Tools",

skills:[

{
name:"PostgreSQL",
icon:<SiPostgresql/>,
color:"text-blue-400"
},

{
name:"MongoDB",
icon:<SiMongodb/>,
color:"text-green-500"
},

{
name:"Docker",
icon:<FaDocker/>,
color:"text-blue-400"
},

{
name:"Git",
icon:<FaGitAlt/>,
color:"text-orange-500"
}

]

},




{
title:"AI & Machine Learning",

skills:[

{
name:"TensorFlow",
icon:<SiTensorflow/>,
color:"text-orange-400"
},

{
name:"OpenCV",
icon:<SiOpencv/>,
color:"text-green-400"
}

]

}


];




function TechCloud(){


return (

<section
id="skills"
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



<div
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

My Skills

</p>


<h2
className="
text-5xl
font-bold
"
>

Technologies I Work With

</h2>


</div>





<div

className="
space-y-20
"

>


{

categories.map((category)=>(

<div key={category.title}>


<motion.h3

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

className="
text-2xl
font-semibold
mb-10
"

>

{category.title}

</motion.h3>





<div

className="
flex
flex-wrap
gap-8
"

>


{

category.skills.map((skill,i)=>(


<motion.div

key={skill.name}


initial={{
opacity:0,
scale:0.5
}}

whileInView={{
opacity:1,
scale:1
}}


animate={{
y:[0,-10,0]
}}


transition={{

duration:3,

repeat:Infinity,

delay:i*0.2

}}



whileHover={{

scale:1.2

}}



className="
w-28
h-28
rounded-full
glass
flex
flex-col
items-center
justify-center
gap-2
hover:border-cyan-400
transition
cursor-pointer
"


>


<div

className={`
text-5xl
${skill.color}
`}

>

{skill.icon}

</div>


<p

className="
text-xs
text-gray-300
"

>

{skill.name}

</p>


</motion.div>



))

}



</div>



</div>



))

}



</div>



</div>


</section>

)

}


export default TechCloud;