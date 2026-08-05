import { useState } from "react";
import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";
import {
FaBars,
FaXmark
} from "react-icons/fa6";


function Navbar(){


const [open,setOpen] = useState(false);



const links=[

{
name:"Home",
url:"#home"
},

{
name:"About",
url:"#about"
},

{
name:"Skills",
url:"#skills"
},

{
name:"Projects",
url:"#projects"
},

{
name:"Contact",
url:"#contact"
}

];



return (

<nav

className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-xl
bg-slate-950/70
border-b
border-white/10
"


>


<div

className="
max-w-7xl
mx-auto
px-6
py-5
flex
justify-between
items-center
"

>


<h1

className="
text-2xl
font-bold
"

>

<span className="text-cyan-400">

Ananya

</span>

 K

</h1>





{/* Desktop Menu */}


<div

className="
hidden
md:flex
items-center
gap-8
"

>


{

links.map((link)=>(

<a

key={link.name}

href={link.url}

className="
text-gray-300
hover:text-cyan-400
transition
"

>

{link.name}

</a>

))

}





<div

className="
flex
gap-5
ml-5
"

>


<a
href="https://github.com/ananyadevanga139-jpg"
target="_blank"
rel="noreferrer"
className="
hover:text-cyan-400
transition
"
>

<FaGithub size={20}/>

</a>



<a
href="https://www.linkedin.com/in/ananya-k-741310325/"
target="_blank"
rel="noreferrer"
className="
hover:text-cyan-400
transition
"
>

<FaLinkedin size={20}/>

</a>



<a
href="mailto:ananyadevanga139@gmail.com"
className="
hover:text-cyan-400
transition
"
>

<FaEnvelope size={20}/>

</a>


</div>




<a

href="#"

className="
ml-4
px-5
py-2
rounded-full
bg-cyan-400
text-black
font-semibold
hover:scale-105
transition
"

>

Resume

</a>




</div>





{/* Mobile Button */}


<button

className="
md:hidden
text-white
"

onClick={()=>setOpen(!open)}

>


{

open ?

<FaXmark size={25}/>

:

<FaBars size={25}/>

}


</button>




</div>





{/* Mobile Menu */}



{

open && (


<div

className="
md:hidden
px-6
pb-8
flex
flex-col
gap-6
bg-slate-950/90
"

>


{

links.map((link)=>(


<a

key={link.name}

href={link.url}

onClick={()=>setOpen(false)}

className="
text-gray-300
hover:text-cyan-400
transition
"

>

{link.name}

</a>


))

}



<div

className="
flex
gap-6
pt-3
"

>

<a href="https://github.com/ananyadevanga139-jpg">

<FaGithub size={22}/>

</a>


<a href="https://www.linkedin.com/in/ananya-k-741310325/">

<FaLinkedin size={22}/>

</a>


<a href="mailto:ananyadevanga139@gmail.com">

<FaEnvelope size={22}/>

</a>


</div>


</div>


)

}



</nav>


)

}


export default Navbar;