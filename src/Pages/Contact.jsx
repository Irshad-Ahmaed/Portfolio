import React, {Suspense, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Fox from '../Models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';

import { github, linkedin } from '../assets/icons';
import leetcode from '../assets/leetcode.png'

const Contact = () => {
  const formRef = useRef(null);
  const [formValue, setFormValue] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert }= useAlert();

  const handleChange =(e)=> {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }

  const handleFocus =()=> setCurrentAnimation('walk')
  const handleBlur =()=> setCurrentAnimation('idle')

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      {
        from_name: formValue.name,
        to_name: 'Irshad Ahmad',
        from_email: formValue.email,
        to_email: 'irsahmd07@gmail.com',
        message: formValue.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(()=>{

      showAlert({show: true, text: 'Message sent successfully', type: 'success'});

      setTimeout(() => {
        hideAlert();
        setIsLoading(false);
        setCurrentAnimation('idle');
        setFormValue({name: '', email: '', message: ''});
      }, [3000]);

    }).catch((err)=>{
      setIsLoading(false);
      setCurrentAnimation('idle');
      showAlert({show: true, text: "Sorry, I did'nt receive your message", type: 'success'});
      console.log(err);
    })
  }

  return (
    <>
      <section className=" relative flex flex-col md:flex-row max-container h-[96vh]">
      
      { alert.show && <Alert {...alert} />}

        <div className="flex-1 min-w-[45%] flex flex-col">
          <h1 className="head-text text-center">Get in Touch</h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
            <label className="text-black-500 font-semibold">
              Name
              <input type="text" name="name" className="input" 
                placeholder="ex. Alex" required onChange={handleChange} value={formValue.name}
                onFocus={handleFocus} onBlur={handleBlur} />
            </label>

            <label className="text-black-500 font-semibold">
              Email
              <input type="email" name="email" className="input" 
                placeholder="ex. alex@hmail.com" required onChange={handleChange} value={formValue.email}
                onFocus={handleFocus} onBlur={handleBlur} />
            </label>

            <label className="text-black-500 font-semibold">
              Your Message
              <textarea name="message" className="textarea" 
                placeholder="Let me know how can I help you!" required onChange={handleChange} value={formValue.message}
                onFocus={handleFocus} onBlur={handleBlur} />
            </label>

            <button type="submit" className="btn" disabled={isLoading} 
              onFocus={handleFocus} onBlur={handleBlur}>
              Submit
            </button>
          </form>
        </div>

        <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
          <Canvas
            camera={{
              position: [0,0,5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}>
            
            <directionalLight intensity={2.5} position={[0,0,1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={Loader}>
              <Fox 
                currentAnimation={currentAnimation}
                position={[1,0.1,0.15]}
                rotation={[12.6,-0.6,0]}
                scale={[0.5,0.5,0.5]}
              />
            </Suspense>

          </Canvas>
        </div>
      </section>

      <div className='flex relative justify-center items-center gap-5 -translate-y-14'>
        <Link to="https://github.com/Irshad-Ahmaed" target='_blanck'>
          <img className='max-w-[55%] hover:-translate-y-2 ease-in duration-[0.2s]' src={github} alt='my_linkedin_profile' />
        </Link>
        <Link to="https://linkedin.com/in/irshad-ahmad-63497924a/" target='_blanck'>
          <img className='w-full pr-5 hover:-translate-y-2 ease-in duration-[0.2s]' src={linkedin} alt='my_linkedin_profile' />
        </Link>
        <Link to="https://leetcode.com/u/Irshad-Ahmad_07/" target='_blanck'>
          <img className='w-full hover:-translate-y-2 ease-in duration-[0.2s]' src={leetcode} alt='my_linkedin_profile' />
        </Link>
      </div>
  
    </>
  )
}

export default Contact