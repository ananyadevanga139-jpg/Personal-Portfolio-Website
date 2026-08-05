import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";


function Hero(){

return (

<section
id="home"
className="
min-h-screen
flex
items-center
relative
pt-32
overflow-hidden
"
>

<div
className="
max-w-7xl
mx-auto
px-6
w-full
grid
lg:grid-cols-2
gap-20
items-center
"
>


<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

>


<p className="
text-cyan-400
text-xl
mb-6
">

Hello, I'm

</p>


<h1 className="
text-5xl
md:text-7xl
font-bold
leading-tight
">

Ananya K

<br/>

<span className="gradient-text">

Full Stack & AI Developer

</span>

</h1>



<p className="
mt-8
text-lg
text-gray-400
max-w-xl
leading-relaxed
">

I build full-stack web applications,
AI-powered systems, and modern software
solutions using innovative technologies
to solve real-world problems.

</p>



<div className="
flex
gap-5
mt-10
flex-wrap
">


<a
href="#projects"
className="
flex
items-center
gap-3
px-7
py-4
rounded-full
bg-cyan-400
text-black
font-semibold
hover:scale-105
transition
"
>

View Projects

<FaArrowRight/>

</a>



<a
href="#contact"
className="
px-7
py-4
rounded-full
border
border-white/20
hover:border-cyan-400
hover:text-cyan-400
transition
"
>

Contact Me

</a>



<a
href="/Ananya_K_Resume.pdf"
target="_blank"
rel="noopener noreferrer"
className="
flex
items-center
gap-3
px-7
py-4
rounded-full
border
border-cyan-400
text-cyan-400
hover:bg-cyan-400
hover:text-black
transition
"
>

View Resume

<FaFilePdf/>

</a>

<a
href="/resume/Ananya_K_Resume.pdf"
download="Ananya_K_Resume.pdf"
className="
flex
items-center
gap-3
px-7
py-4
rounded-full
border
border-white/20
text-white
hover:border-cyan-400
hover:text-cyan-400
transition
"
>

Download Resume

<FaFilePdf/>

</a>
</div>





<div className="
flex
gap-6
mt-10
">


<a
href="https://github.com/ananyadevanga139-jpg"
target="_blank"
rel="noreferrer"
className="
text-2xl
hover:text-cyan-400
transition
"
>

<FaGithub/>

</a>



<a
href="https://www.linkedin.com/in/ananya-k-741310325/"
target="_blank"
rel="noreferrer"
className="
text-2xl
hover:text-cyan-400
transition
"
>

<FaLinkedin/>

</a>


</div>



</motion.div>






<motion.div

initial={{
opacity:0,
scale:0.7
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
flex
justify-center
"

>


<div className="
relative
w-80
h-80
md:w-[420px]
md:h-[420px]
rounded-full
glass
flex
items-center
justify-center
">


<div className="
absolute
inset-0
rounded-full
bg-cyan-500/20
blur-3xl
animate-pulse
">
</div>



<div className="
relative
text-center
">

<h2 className="
text-8xl
font-bold
gradient-text
">

AK

</h2>


<p className="
text-gray-300
text-xl
mt-3
">

AI • Web • Software

</p>


</div>



</div>


</motion.div>



</div>



</section>

)

}


export default Hero;