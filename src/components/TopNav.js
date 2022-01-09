import React from 'react'

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-jazzPurple font-extrabold">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-white"
                            href="/"
                        >
                            the janky piano show
                        </a>
                        <a className="cursor-pointer text-sm font-bold text-white hover:text-white leading-relaxed uppercase " href="/login">make requests</a>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg className='fill-current text-white hover' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M2.994 19.996h-.002c.031.791.267.979.954.999 1.241.013 15.514 0 16.098-.009.679-.022.92-.269.96-.943 0 0-11.384.036-18.01-.047zm3.791-3.992l-3.779-.008c-.585.008-.98.453-1.005.947-.026.523.354 1.033 1.005 1.053h18.008c.645-.034 1.01-.539.985-1.053-.027-.49-.438-.92-.999-.943-1.3-.016-6.41.003-6.554.004-.522.003-.988.277-1.296.459-.89.522-1.587 1.049-2.652 1.038-1.184-.012-1.822-.551-2.57-1.023-.289-.182-.63-.477-1.143-.474zm11.237-2.76c-.678 0-1.293-.307-1.837-.578-1.12-.557-1.213-.558-2.333 0-.543.271-1.159.578-1.838.578-.678 0-1.293-.307-1.837-.578-1.117-.557-1.214-.558-2.332 0-.544.271-1.159.578-1.838.578-.677 0-1.294-.307-1.837-.578-1.002-.499-1.472-.756-2.952.415-.143.113-.304.164-.462.164-.39 0-.756-.311-.756-.75 0-.219.096-.437.282-.584 2.08-1.661 3.239-1.244 4.559-.585.434.216.843.42 1.166.42.324 0 .734-.204 1.166-.42 1.543-.769 2.12-.776 3.676 0 .433.216.843.42 1.165.42.324 0 .734-.204 1.166-.42 1.543-.769 2.119-.776 3.676 0 .435.216.843.42 1.166.42.323 0 .732-.204 1.167-.42 1.301-.649 2.474-1.09 4.536.59.181.148.275.363.275.579 0 .412-.333.748-.751.748-.166 0-.334-.055-.475-.168-1.437-1.167-1.913-.908-2.914-.409-.544.271-1.16.578-1.838.578zm4.978-3.247h-22c.039-5.391 4.829-8.997 11.103-8.997 5.653 0 10.856 3.344 10.897 8.997zm-11.136-7c-3.646.051-7.319 1.58-8.527 4.981l-.007.019h17.34c-1.189-3.488-5.099-5.013-8.806-5zm-2.364 3c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm4 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-12 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5-1c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-8-1c.276 0 .5.224.5.5 0 .275-.224.5-.5.5s-.5-.225-.5-.5c0-.276.224-.5.5-.5zm5 0c.276 0 .5.224.5.5 0 .275-.224.5-.5.5-.277 0-.5-.225-.5-.5 0-.276.223-.5.5-.5zm-10.577 10c.173-.002 3.778.005 4.077.007 1.443.009 2.422 1.672 3.508 1.666.968-.005 2.284-1.664 3.715-1.666.179-.001 6.189-.016 6.854-.007 1.655.061 2.843 1.35 2.919 2.846.048.931-.338 1.812-1.031 2.418.276 2.333-.924 3.656-2.871 3.725-.6.009-14.933.021-16.188.009-2.168-.068-3.111-1.549-2.88-3.743-.69-.606-1.07-1.485-1.022-2.409.076-1.496 1.264-2.785 2.919-2.846z" /></svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className='sm:pb-2 xs:pb-2'>
                                <a href="https://www.facebook.com/jankypianoshow" target='_blank' rel='nooopener noreferrer' className='text-white hover:text-white flex flex-row'>
                                    <svg className='fill-current text-white hover:text-facebookBlue duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                                    <p className='px-2 hover:text-white'>share</p>
                                </a>
                            </li>
                            <li className='sm:pb-2 xs:pb-2'>
                                <a href="https://www.instagram.com/jankypianoshow " target='_blank' rel='nooopener noreferrer' className='text-white hover:text-white flex flex-row'>
                                    <svg className='fill-current text-white hover:text-instagramPink duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    <p className='px-2 hover:text-white'>share</p>
                                </a>
                            </li>
                            <li className='sm:pb-2 xs:pb-2'>
                                <a href="https://open.spotify.com/artist/72cDW9EG2IL2Rdkv25TPBh?si=eiGG0vv7TRGzsgn-wcisUQ&dl_branch=1" target='_blank' rel='nooopener noreferrer' className='text-white hover:text-white flex flex-row'>
                                    <svg className='fill-current text-white hover:text-spotifyGreen duration-300' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" /></svg>
                                    <p className='px-2 hover:text-white'>listen</p>
                                </a>
                            </li>
                            <li className='sm:pb-2 xs:pb-2'>
                                <a href="https://www.tiktok.com/@hunterdeblanc?" target='_blank' rel='nooopener noreferrer' className='text-white hover:text-white flex flex-row'>
                                    <svg className='fill-current text-white hover:text-tiktokMaroon duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" width="23" height="23"><path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" /></svg>
                                    <p className='px-2 hover:text-white'>watch</p>
                                </a>
                            </li>
                            <li className='sm:pb-2 xs:pb-2'>
                                <a href="https://www.youtube.com/playlist?list=PLNL0AM07NLoPWxNMHfEtSCGA5dt9UXwkb" target='_blank' rel='nooopener noreferrer' className='text-white hover:text-white flex flex-row'>
                                <svg className='fill-current text-white hover:text-youtubeRed duration-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"/></svg>
                                <p className='px-2 hover:text-white'>subscribe</p>
                                </a>
                            </li>
                            <li className='sm:pb-2 xs:pb-2'>
                                <a href="https://account.venmo.com/pay?recipients=hunterdeblanc" target='_blank' rel='nooopener noreferrer' className='text-white flex flex-row hover:text-white'>
                                    <svg className='fill-current text-white hover:text-venmoBlue duration-300' xmlns="http://www.w3.org/2000/svg"
                                        width="23" height="23"
                                        viewBox="13 13 23 23">
                                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M28,37H17l-3-22 l8-1.001L24,30c1.833-2.918,4-7.873,4-11c0-1.711-0.531-3.04-1-4l8-2c0.853,1.377,1,3.795,1,5.586C36,24.3,32.05,31.788,28,37z"></path></svg>
                                    <p className='px-2 hover:text-white'>just the tip</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}