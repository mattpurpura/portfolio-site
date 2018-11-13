import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavBar from '../components/navbar';
import ContactForm from '../components/contact';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Background from '../assets/images/black-smokey.png';
import Agility from '../assets/images/agility-project-page.JPG';
import Ascent from '../assets/images/ascent-chart.JPG';
import Crypto from '../assets/images/crypto-tracker.JPG';
import './landing.css';


class Landing extends Component {

    constructor(props){
        super(props)
        this.Project = React.createRef();
        this.About = React.createRef();
        this.Contact = React.createRef();

    }


    handleScrollToElement = (name, event) => {
        if (name==='Project'){
            window.scrollTo({
                top: this.Project.current.offsetTop, 
                behavior: "smooth"
            })
        }
        else if (name==='About'){
            window.scrollTo({
                top: this.About.current.offsetTop, 
                behavior: "smooth"
            })
        }
        else if (name==='Contact'){
            window.scrollTo({
                top: this.Contact.current.offsetTop, 
                behavior: "smooth"
            })
        }
    }

  render() {
    return (
    <div style={{
        backgroundImage: `url(${Background})`,
        // height: '500px', 
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }}>
    <Grid container direction='row' wrap='nowrap'>
        <Grid item style={{position: 'fixed', backgroundColor: 'white', minHeight: '100%'}}>
            <Grid container direction='column'>
                <Grid item style={{paddingLeft: 15}}>
                    <h1 className='text'>Matt Purpura</h1>
                </Grid>
                <Grid item style={{marginTop: 100}}>
                    <div style={{
                        height: 200, 
                        width: 200,
                        display: 'block',
                        paddingLeft: 30, 
                        color: 'black'
                        }}>
                        <h5 className='menuTab text' onClick={() => this.handleScrollToElement('About')}>About</h5>
                        <h5 className='menuTab' onClick={() => this.handleScrollToElement('Project')}>Projects</h5>
                        <h5 className='menuTab' onClick={() => this.handleScrollToElement('Contact')}>Contact</h5>
                    </div>
                </Grid>
            </Grid>
        </Grid>
         <Grid id='projects' item container direction='column' style={{
             marginLeft: 230,
         }}>
            {/* <Grid item>
                <NavBar />
            </Grid> */}
            <Grid item>
                <div ref={this.About} style={{
                    height: 750, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }} id='about'>
                    <div style={{
                        color: 'white',
                        fontSize: "30px",
                    }}>
                        <h1 class='text'>Full-Stack Web Developer</h1>
                        <h5 class='text'>Javascript • JQuery • MySQL • Mongo • Express • React • Node</h5>
                    </div>
                </div>
            </Grid>
            <Grid item container direction='column'>
                <div style={{
                    height: 500,
                    backgroundColor: 'white'
                }} id='project1' ref={this.Project}>
                    <Grid item>
                        <h1 class='text project-title'>Agility | Project Management</h1>
                    </Grid>
                    <Grid item container direction='row'>
                         <Grid item>
                            <div className='description'>
                                <p>
                                    A project management app built to work within an agile enviroment. 
                                </p>
                                <p>
                                    Create and manage projects <br/> 
                                    Plan your sprints by creating and assigning tasks <br/>

                                    Invite users to participate in specific sprints<br/>
                                    Track your team's progress as tasks are completed<br/> <br/>
                                    After each sprint, review key metrics such as:
                                    <ul>
                                        <li>Tasks completed by team member</li>
                                        <li>Average task complexity</li>
                                        <li>Primary stacks for each team member</li>
                                    </ul>
                                </p>

                                <div className='project-link'>
                                   <a className='link-text' href='http://scrum41.herokuapp.com/'> Check It Out</a>
                                </div>


                            </div>
                            
                        </Grid>
                        <Grid item>
                            <Paper style={{marginLeft: 30}}>
                                <img src={`${Agility}`} style={{height: 350}}/>
                            </Paper>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className='stack'>Node</div>
                                <div className='stack'>React</div>
                                <div className='stack'>MySQL</div>
                                <div className='stack'>Express</div>
                                <div className='stack'>Material</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item container direction='column' style={{marginTop: 20}}>
                <div id='project2' style={{
                    height: 500,
                    // backgroundColor: 'white'
                    color: 'white'
                }}>
                    <Grid item container justify='flex-end'>
                        <h1 style={{marginRight: 125}} class='text project-title'>Ascent | Health & Wellness</h1>
                    </Grid>
                    <Grid item container direction='row'>
                        <Grid item>
                            <Paper style={{marginLeft: 30, marginRight: 30}}>
                            <img src={`${Ascent}`} style={{height: 350}}/>
                            </Paper>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className='stack-black'>Javascript</div>
                                <div className='stack-black'>Node</div>
                                <div className='stack-black'>MySQL</div>
                                <div className='stack-black'>Express</div>
                            </div>
                        </Grid>
                        <Grid item>
                        <div className='description-dark'>
                            <p>
                                An app built to support data-driven fitness training. 
                            </p>
                            <p>
                                    Log and track workouts by type <br/> 
                                    Sync past workouts from mobile fitness apps such as Strava<br/>
                                    Use workout history to generate personal fitness level <br/>
                                    Compare your fitness level with the stress on your body <br/>
                                    Stress levels are created using:<br/>
                                    <ul>
                                        <li>Heart rate data (if available)</li>
                                        <li>Rate of Perceived Exertion</li>
                                        <li>Primary stacks for each team member</li>
                                    </ul>
                                </p>

                                <div className='project-link-dark'>
                                   <a className='link-text-dark' href='http://ascent-project.herokuapp.com/'> Check It Out</a>
                                </div>
                        </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item container direction='column'>
                <div style={{
                    height: 500,
                    backgroundColor: 'white'
                }} id='project1'>
                    <Grid item>
                        <h1 class='text project-title'>Crypto Tracker | Finance</h1>
                    </Grid>
                    <Grid item container direction='row'>
                         <Grid item>
                            <div className='description'>
                                <p>
                                    Track prices of your favorite crypto currencies <br/> across various exchanges. 
                                </p>
                                <p>
                                    Select preferred crypto currency and exchanges <br/> 
                                    Update prices to get to-the-second data <br/>
                                    Create a custom portfolio of stocks to benchmark trends <br/>

                                    All user preferences are passively saved in real-time<br/>
                                </p>

                                <div className='project-link' style={{marginTop: 165}}>
                                   <a className='link-text' href='https://mattpurpura.github.io/project-1/'> Check It Out</a>
                                </div>


                            </div>
                            
                        </Grid>
                        <Grid item>
                            <Paper style={{marginLeft: 100}}>
                                <img src={`${Crypto}`} style={{height: 350}}/>
                            </Paper>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className='stack'>Javascript</div>
                                <div className='stack'>JQuery</div>
                                <div className='stack'>AJAX</div>
                                <div className='stack'>Firebase</div>
                                <div className='stack'>Bootstrap</div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item>
                <div id='contact' style={{minHeight: 595, paddingTop: 150}} ref={this.Contact}>
                <ContactForm/>
                </div>
            </Grid>
        </Grid>
    </Grid>
    </div>
   
      
    );
  }
}

export default Landing;
