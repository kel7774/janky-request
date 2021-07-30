import classes from '../src/styles/App.module.css'
import Requester from './components/Requester'

function App () {
  return (
    <div className='App'>
      <header>
        <div className={classes.description}>
          <h1 className={classes.title}><span className={classes.span}>the janky piano show presents: janky requests</span></h1>
          <h2 className={classes.subtitle}><span className={classes.span}>because without this, peyton's shit at remembering</span></h2>
        </div>
      </header>
      <main className={classes.main}>
        <Requester />
        <div className={classes.plug}>
          <p>made by <span>👩🏻‍💻</span> <a href='https://kellilandry.dev' target='_blank' rel='noreferrer'>kelli landry</a> (sup, i need a job).</p>
        </div>
        <div className={classes.footer}>
          <p className={classes.sponsored}>
            <strong>sponsored by:</strong>
          </p>
          <img src='irishwhiskey.png' height={150} width={200} alt='sponsored by jameson' />
        </div>
      </main>
    </div>
  )
}

export default App
