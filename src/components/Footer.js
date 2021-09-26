export default function Footer() {
    return (
        <footer className='w-full h-16 bottom-0 fixed bg-jazzPurple'>
            <div className='flex flex-row justify-between text-indigo-50 font-medium px-20 py-4'>
                <section className='font-medium'>
                    <a href='https://kellilandry.dev' target='_blank' rel='noreferrer' className='flex flex-row font-bold hover:underline'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current cursor-pointer text-white hover:text-50-indigo duration-300'><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z" /></svg>
                        &nbsp;: kelli landry</a></section>
                <section>
                    visit <a href="https://thegrouseroom.com/" target='_blank' rel='noreferrer' className='font-bold hover:underline'>the grouse room</a> wednesday's @ 9PM
                </section>
            </div>
        </footer>
    )
}
