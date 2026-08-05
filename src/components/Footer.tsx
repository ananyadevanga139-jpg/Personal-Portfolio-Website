import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";


function Footer(){

return (

<footer className="
border-t
border-white/10
py-10
">


<div className="
max-w-7xl
mx-auto
px-6
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
">


<div>

<h3 className="
text-2xl
font-bold
">

<span className="text-cyan-400">
Ananya
</span>

 K

</h3>


<p className="
text-gray-400
mt-2
">

Full Stack & AI Developer

</p>


</div>




<div className="
flex
gap-6
">


<a
href="https://github.com/ananyadevanga139-jpg"
target="_blank"
rel="noreferrer"
className="
text-xl
hover:text-cyan-400
">

<FaGithub/>

</a>


<a
href="https://www.linkedin.com/in/ananya-k-741310325/"
target="_blank"
rel="noreferrer"
className="
text-xl
hover:text-cyan-400
">

<FaLinkedin/>

</a>


<a
href="mailto:ananyadevanga139@gmail.com"
className="
text-xl
hover:text-cyan-400
">

<FaEnvelope/>

</a>


</div>


</div>



<div className="
text-center
text-gray-500
text-sm
mt-8
">

© 2026 Ananya K. All rights reserved.

</div>


</footer>

)

}


export default Footer;