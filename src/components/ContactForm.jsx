// import { useState } from "react";

// function ContactForm(){
    
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         message: '',
//         contactMe: 'email',
//         isAccess: true
//     })

//     const fieldClass =
//     "w-full max-w-[400px] mx-auto bg-transparent text-cyan-950 placeholder:text-cyan-950/40 border border-cyan-950/70 rounded-md text-center px-3 py-2 focus:outline-none focus:border-amber-50"


//     function handleChange(event){
//         const { name, value, type, checked } = event.target

//          setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }))
//     }

//     function handleSubmit(event){
//         event.preventDefault();
//         console.log(formData); // zapros depi api

//         setFormData({
//              fullName: '',
//              email: '',
//              phone: '',  
//              message: '', 
//              contactMe:'', 
//              isAccess: true
//             })
//     }

//     return(
//         <div>
//             <form 
//             onSubmit={handleSubmit}
//             className="mx-25 my-8 flex flex-col gap-4 bg-teal-800/20 text-amber-50 text-center p-8 rounded-xl shadow-lg">
                
//                 <h2 className="text-2xl font-bold text-rose-400">Contact us</h2>
//                 <div>
//                         <input
//                             className={fieldClass}
//                             name='fullName'
//                             type='text'
//                             placeholder="Type your name"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             required
//                         />
//                 </div>
//                 <div>
//                         <input
//                             className={fieldClass}
//                             type='email'
//                             name='email'
//                             placeholder="Type your email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                 </div>
//                 <div>
//                     <input
//                         className={fieldClass}
//                         type="tel"
//                         name='phone'
//                         placeholder="+374 xx xxxxxx"
//                         pattern="\+374 [0-9]{2} [0-9]{6}"
//                         value={formData.phone}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                         <textarea
//                             className={fieldClass}
//                             name='message'
//                             rows="4" cols="50"
//                             value={formData.message}
//                             onChange={handleChange}
//                         />
//                 </div>
//                 <div>
//                         <select 
//                             className={fieldClass}
//                             name='contactMe'
//                             value={formData.contactMe}
//                             onChange={handleChange}>
                        
//                             <option className="bg-teal-950" value="email">Email</option>
//                             <option className="bg-teal-950" value="phone">Phone</option>
//                         </select>
//                 </div>
//                 <label className="flex items-center justify-center gap-2">
//                         <input 
//                             type="checkbox"
//                             name='isAccess'
//                             onChange={handleChange}
//                             checked={formData.isAccess}
//                         />
//                         Access ... 
//                 </label>
//                 <button
//                         type="submit"
//                         className="  mx-auto inline-block mt-8 bg-rose-400/90 hover:bg-rose-400/70 text-cyan-950 font-bold rounded-full px-8 py-3 hover:scale-105 active:scale-95 transition-transform">
//                         Submit
//                 </button>
//             </form>
//         </div>
//     )

//     }
// export default ContactForm;

import { useState } from "react"
function ContactForm(){ 
    const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '', conactMe: '', isAccess: true })
function handleChange(event){
    const { name, value, type, checked } = event.target

    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }))
}

function handleSubmit(){
    event.preventDefault();

    console.log(formData); // zapros depi api

    setFormData({
         fullName: '',
         email: '',
         phone: '',  
         message: '', 
         conactMe:'', 
         isAccess: true
        })
}
return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mt-5">Contact Us</h2>
        <div className="flex flex-row items-start justify-center gap-8 w-full max-w-4xl">
             <div className="flex flex-col gap-4 w-1/2 mt-5">
                <input
                    className="border rounded-2xl h-10 px-3 w-full"
                    name="fullName"
                    type="text"
                    placeholder="Type your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    className="border rounded-2xl h-10 px-3 w-full"
                    type="email"
                    name="email"
                    placeholder="Type your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    className="border rounded-2xl h-10 px-3 w-full"
                    type="tel"
                    name="phone"
                   placeholder="+374 xx xxxxxx"
                   pattern="\+374 [0-9]{2} [0-9]{6}"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <select
                    className="border rounded-2xl h-10 px-3 w-full"
                    name="conactMe"
                    value={formData.conactMe}
                    onChange={handleChange}
                >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </select>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isAccess"
                        onChange={handleChange}
                        checked={formData.isAccess}
                    />
                    Access ...
                </label>
                <button
                        type="submit"
                        className="  mx-auto inline-block mt-8 bg-rose-400/90 hover:bg-rose-400/70 text-cyan-950 font-bold rounded-full px-8 py-3 hover:scale-105 active:scale-95 transition-transform">
                        Submit
                </button>
            </div>
            <div className="w-1/2 mt-5">
                <textarea
                    name="message"
                    className="border rounded-2xl p-3 w-full h-64 resize-y"
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
        </div>
    </form>
)
}
export default ContactForm