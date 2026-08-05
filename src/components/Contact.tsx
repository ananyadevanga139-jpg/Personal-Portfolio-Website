import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";


function Contact(){


const contacts=[

{
name:"GitHub",
icon:<FaGithub/>,
link:"https://github.com/ananyadevanga139-jpg"
},


{
name:"LinkedIn",
icon:<FaLinkedin/>,
link:"https://www.linkedin.com/in/ananya-k-741310325/"
},


{
name:"Email",
icon:<FaEnvelope/>,
link:"mailto:ananyadevanga139@gmail.com"
}

];



return (

<section
id="contact"
className="
py-32
"
>



<div

className="
max-w-5xl
mx-auto
px-6
text-center
"

>


<motion.p

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-cyan-400
text-lg
mb-4
"

>

Contact

</motion.p>





<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-5xl
font-bold
"

>

Let's Build Something Together

</motion.h2>





<p

className="
text-gray-400
text-lg
mt-6
"

>

I'm open to opportunities, collaborations,
and exciting software projects.

</p>





<div

className="
grid
md:grid-cols-3
gap-8
mt-16
"

>


{

contacts.map((item,index)=>(


<motion.a

key={item.name}


href={item.link}


target="_blank"

rel="noreferrer"


initial={{

opacity:0,

y:40

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

delay:index*0.15

}}



className="
glass
rounded-3xl
p-10
flex
flex-col
items-center
gap-5
hover:-translate-y-3
hover:border-cyan-400
transition
"

>


<div

className="
text-4xl
text-cyan-400
"

>

{item.icon}

</div>




<h3

className="
text-xl
font-semibold
"

>

{item.name}

</h3>


</motion.a>



))

}


</div>



</div>


</section>


)

}


export default Contact;