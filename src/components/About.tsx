import { motion } from "framer-motion";


function About(){


const highlights=[

{
number:"3+",
title:"Projects",
text:"AI & Full Stack Applications"
},

{
number:"3",
title:"Areas",
text:"Web Development, AI & ML"
},

{
number:"100%",
title:"Passion",
text:"Learning & Building Solutions"
}

];


return (

<section
id="about"
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
max-w-4xl
mx-auto
"

>


<p

className="
text-cyan-400
text-lg
mb-4
"

>

About Me

</p>




<h2

className="
text-5xl
font-bold
"

>

Building technology with
curiosity and innovation

</h2>





<p

className="
mt-8
text-gray-400
text-lg
leading-relaxed
"

>

I am Ananya K, an Information Science student
passionate about full-stack development,
artificial intelligence, and creating innovative
software solutions.

I enjoy transforming ideas into practical
applications and solving real-world problems
through technology.

</p>



</motion.div>





<div

className="
grid
md:grid-cols-3
gap-8
mt-20
"

>


{

highlights.map((item,index)=>(


<motion.div

key={item.title}


initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.5,
delay:index*0.15
}}



className="
glass
rounded-3xl
p-8
text-center
hover:-translate-y-3
transition
"

>


<h3

className="
text-5xl
font-bold
text-cyan-400
"

>

{item.number}

</h3>




<h4

className="
text-xl
font-semibold
mt-4
"

>

{item.title}

</h4>




<p

className="
text-gray-400
mt-3
"

>

{item.text}

</p>



</motion.div>



))

}


</div>



</div>


</section>

)

}


export default About;