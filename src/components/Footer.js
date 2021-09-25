export default function Footer() {
    return (
        <footer className='w-full h-16 bottom-0 fixed bg-jazzPurple'>
            <div className='flex flex-row justify-between text-indigo-50 uppercase font-medium px-20 py-4'>
                <section className='font-medium'>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer' className='hover:underline'>kelli landry</a></section>
                <section>
                    visit <a href="https://thegrouseroom.com/" target='_blank' rel='noreferrer' className='hover:underline'>the grouse room</a> wednesday's @ 9PM
                </section>
            </div>
        </footer>
    )
}
