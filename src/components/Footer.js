import {useNavigate} from 'react-router'
import {useAuthState} from 'react-firebase-hooks/auth'

import {auth, logout} from '../firebase.config'

export default function Footer() {
  const navigate = useNavigate()

  const [user] = useAuthState(auth)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleLogin = () => {
    navigate('/login')
  }

    return (
        <footer className='w-full h-16 bg-jazzPurple'>
            <div className='flex flex-row justify-between text-indigo-50 font-medium py-4'>
                <section className='font-medium'>
                    <a href='https://github.com/kel7774' target='_blank' rel='noreferrer' className='flex flex-row font-bold text-indigo-50 hover:underline hover:text-indigo-50 pl-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current cursor-pointer text-white hover:text-yellow-500 duration-300'><path d="M20.715 24c-.864 0-1.711-.351-2.322-.962l-10.953-10.952c-.275-.274-.655-.432-1.044-.432l-.111.004c-1.681.129-3.373-.481-4.584-1.692-1.097-1.099-1.701-2.561-1.701-4.117 0-1.046.237-2.225.715-3.279l3.809 3.811c.436-.073.968-.393 1.405-.935.283-.35.427-.675.466-.91l-3.826-3.826c1.056-.476 2.219-.71 3.255-.71 1.533 0 3.043.601 4.143 1.702 1.208 1.209 1.823 2.88 1.69 4.584-.031.428.125.851.43 1.156l10.951 10.951c.62.621.962 1.446.962 2.322 0 1.811-1.474 3.285-3.285 3.285zm-14.319-14.343c.915 0 1.81.371 2.456 1.018l10.953 10.951c.239.24.571.377.909.377.71 0 1.288-.577 1.288-1.287 0-.344-.134-.667-.378-.911l-10.949-10.951c-.715-.716-1.083-1.707-1.009-2.718.088-1.127-.317-2.227-1.111-3.022-.493-.492-1.098-.833-1.758-1l1.49 1.491c.218 1.001.125 1.947-.804 3.097-1.002 1.243-2.292 1.932-3.88 1.586l-1.489-1.49c.167.66.508 1.266 1 1.759.796.794 1.893 1.2 3.017 1.11l.265-.01zm1.664 5.877l-4.665 4.627c-.229.229-.504.407-.79.558l-.579.302-1.026 2.145.833.834 2.101-1.07.301-.58c.15-.286.347-.545.574-.774l4.665-4.627-1.414-1.415zm7.15-7.798l4.507-4.499c.168-.17.442-.168.611 0 .168.17.169.442 0 .611l-4.507 4.5.89.89 4.507-4.5c.169-.169.441-.168.61.001.168.168.17.441.001.609l-4.508 4.5 1.039 1.039 4.767-4.759c.582-.583.873-1.346.873-2.11 0-.768-.293-1.537-.881-2.125-.584-.585-1.35-.877-2.113-.877-.766 0-1.529.293-2.113.877l-4.767 4.759 1.084 1.084zm5.49 12.464c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.223-.5-.5-.5z" /></svg>
                        &nbsp;code by kelli landry</a>
                </section>
                <section className='logout-btn'>
                  {user ? <button className='font-semibold' onClick={handleLogout}>logout</button> : <button className='font-semibold' onClick={handleLogin}>login</button>}
                </section>
                <section className='font-medium'>
                    <a href="https://thegrouseroom.com/" target='_blank' rel='noreferrer' className='flex flex-row font-bold text-indigo-50 hover:underline hover:text-indigo-50 pr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current cursor-pointer text-white hover:text-50-indigo duration-300'><path d="M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm4 3v19h-22v-2h20v-17h2zm-17 7h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" /></svg>
                        &nbsp;wednesdays @ the grouse room</a>
                </section>
            </div>
        </footer>
    )
}
