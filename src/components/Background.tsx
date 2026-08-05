import { motion } from "framer-motion";


function Background(){


return (

<div
className="
fixed
inset-0
-z-10
overflow-hidden
bg-slate-950
"
>


{/* Gradient Glow 1 */}

<motion.div

animate={{
x:[0,80,0],
y:[0,-40,0]
}}

transition={{

duration:12,

repeat:Infinity,

ease:"easeInOut"

}}



className="
absolute
top-[-200px]
left-[-200px]
w-[600px]
h-[600px]
rounded-full
bg-cyan-500/20
blur-[150px]
"

/>





{/* Gradient Glow 2 */}


<motion.div

animate={{
x:[0,-80,0],
y:[0,50,0]
}}

transition={{

duration:15,

repeat:Infinity,

ease:"easeInOut"

}}



className="
absolute
bottom-[-200px]
right-[-200px]
w-[600px]
h-[600px]
rounded-full
bg-purple-500/20
blur-[150px]
"

/>





{/* Center Glow */}


<div

className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
w-[400px]
h-[400px]
rounded-full
bg-blue-500/10
blur-[120px]
"

/>






{/* Grid */}

<div

className="
absolute
inset-0
bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
bg-[size:60px_60px]
"

>




</div>





</div>

)

}


export default Background;