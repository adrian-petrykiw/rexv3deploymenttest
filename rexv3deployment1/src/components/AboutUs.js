import './aboutus.css';


const AboutUs = ({ arr }) => {

        // const [gameName, setGameName] = useState('');
        // const [mintAddress, setMintAddress] = useState('');
        return (
                <div>
                        <div className="about__us">
                                <p style={{ padding: '0rem 0rem 0rem 0rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> 
                                REX is on a mission to enable the new creator economy for blockchain games. We help port games to the chain, inject NFTs, and create a whole new gaming experience through a fusion of Web 2.0+  technology. 
                                </p>
                        </div>

                        <div className="about__us">
                                <p style={{ padding: '1.5rem 0rem 0rem 0rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> 
                                We see a gaming world where anyone can create their own game in less than 5 minutes, share it with friends, and have tons of fun playing games new or old!                                 </p>
                        </div>

                        <div className="about__us">
                                <p style={{ padding: '1.5rem 0rem 0rem 0rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> 
                                Before REX, games had to go through the many long tedious phases of engineering, porting, and publishing. Now with the power of blockchain and NFT technology we are making it possible to mint games in a fraction of the time and a fraction of the cost. 
                                </p>
                        </div>

                        <div className="about__us">
                                <p style={{ padding: '1.5rem 0rem 0rem 0rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}>
                                Sound fun and inspiring? Want to join the REX journey? Here's how:
                                </p>
                        </div>

                        <div>
                                <p style={{ padding: '2rem 0rem 1.25rem 0rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'bolder', fontStyle: 'italic' }}>Want to build or collaborate with us? </p>
                        </div>
                        <div className="about__us2">
                                <p style={{ padding: '1.5rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}>     - Send us a DM on Twitter and tell us all about what you have in mind

                                </p>
                                <p style={{ padding: '1rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}>
                                        - Help us with some of the following:
                                </p>
                                <p style={{ padding: '0.5rem 0rem 0.25rem 4rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter', fontStyle: 'italic' }}>
                                        + Building and bringing to life our Roadmap
                                </p>
                                <p style={{ padding: '0rem 0rem 0.25rem 4rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter', fontStyle: 'italic' }}>
                                        + Porting new games onto the platform using our injection tools
                                </p>
                                <p style={{ padding: '0rem 0rem 0.25rem 4rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter', fontStyle: 'italic' }}>
                                        + Building completely new games using our injection tools
                                </p>
                                <p style={{ padding: '0rem 0rem 0.25rem 4rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter', fontStyle: 'italic' }}>
                                        + Experimenting with NFT cases and functionalities
                                </p>
                                <p style={{ padding: '0rem 0rem 1.5rem 4rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter', fontStyle: 'italic' }}>
                                        + Scaling infrastructure
                                </p>
                        </div>
                        <div>
                                <div>
                                        <p style={{ padding: '2.25rem 0rem 1.25rem 0rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'bolder', fontStyle: 'italic' }}>Want to play games with us? </p>
                                </div>
                                <div className="about__us3">
                                        <p style={{ padding: '1.5rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}>
                                                - Explore our existing games at r3x.tech
                                        </p>
                                        <p style={{ padding: '1rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}>
                                                - Share games and invite your friends to play
                                        </p>
                                        <p style={{ padding: '1rem 0rem 1.25rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}>
                                                - Experiment with what's possible for NFT cases and functionality using our tools
                                        </p>

                                </div>
                        </div>
                </div>


        )
};
export default AboutUs;