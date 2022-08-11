import './howto.css';


const HowTo = ({ arr }) => {

        // const [gameName, setGameName] = useState('');
        // const [mintAddress, setMintAddress] = useState('');
        return (
                <div style={{ margin: "0rem 0rem 0rem 0rem" }}>
                        <div className="how__to2">
                                <p style={{ padding: '0rem 0rem 0rem 0rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> Video Walkthrough Tutorial: </p>
                                <a className="how__to3" style={{ padding: '0rem 0rem 0rem 0.5rem', margin: '0rem 0rem 0rem 0rem', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }} target="_blank" rel="noreferrer" href='https://youtu.be/nYuXcedTQYE'> https://youtu.be/nYuXcedTQYE</a>
                        </div>
                        <div className="how__to">
                                <p style={{ padding: '1.25rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'red', fontSize: '16pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> STEP 1</p>
                                <p style={{ padding: '0.5rem 0rem 1.5rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> Choose the NFT(s) you would like to inject and copy the NFT's "MINT ADDRESS"</p>
                        </div>

                        <div className="how__to">
                                <p style={{ padding: '1.25rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'yellow', fontSize: '16pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> STEP 2</p>
                                <p style={{ padding: '0.5rem 0rem 1.5rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> Name your game and paste the copied NFT mint addresses into the "MINT ADDRESS" fields</p>
                        </div>

                        <div className="how__to">
                                <p style={{ padding: '1.25rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'blue', fontSize: '16pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> STEP 3</p>
                                <p style={{ padding: '0.5rem 0rem 1.5rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> Click the "CUSTOMIZE" button to customize and deploy your game</p>
                        </div>

                        <div className="how__to4">
                                <p style={{ padding: '1.25rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'limegreen', fontSize: '16pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> STEP 4</p>
                                <p style={{ padding: '0.5rem 0rem 1.5rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> Play your custom game by clicking it in the list of games</p>
                        </div>
                        <div style={{ display: 'flex', margin: '0rem 0rem 1.5rem 0rem'}}>
                                <p style={{ margin: "0rem 0rem 2rem 0rem", color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}>
                                        Experiencing issues with injection? Send us an email:
                                </p>
                                <p style={{ margin: "0rem 0rem 2rem 0.25rem", color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}>
                                        rex@r3x.tech
                                </p>
                        </div>
                </div>


        )
};
export default HowTo;