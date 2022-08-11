import './righthomeinfopacman.css';
import styled from "styled-components";

const ButtonThree = styled.a`
  font-size: 1rem;
  min-width: 19rem;
  padding: 0.6rem 2rem 0.6rem 2rem;
  color: black;
  font-weight: bolder;
  background: white;
  border: 1px solid white;
  border-radius: none;
  text-decoration: none;
  font-family: Montserrat;
  font-stretch: 1rem;
  :hover {
    font-weight: bolder;
    cursor: pointer;
  }
`;



const RightHomeInfoPacman = ({ arr }) => {

    // const [gameName, setGameName] = useState('');
    // const [mintAddress, setMintAddress] = useState('');
    return (
        <div className="right_home_info_startpacman">
            <div className="right_home_infopacman">
                <div>
                    <p style={{ padding: '1.25rem 1rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '18pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> WHAT DOES REX DO?</p>
                </div>
                <div>
                    <p style={{ padding: '1rem 1rem 1.5rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> REX is democratizing game development through interoperable token standards and gaming primitives</p>
                </div>
                <div style={{ textAlign: "start", padding: '0.5rem 2rem 2rem 2rem' }}>
                    <ButtonThree href='#aboutus'>LEARN MORE</ButtonThree>
                </div>

            </div>

            <div className="right_home_infopacman">
                <div>
                    <p style={{ padding: '1.25rem 1rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '18pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> WHAT GAMES/NETWORKS ARE SUPPORTED?</p>
                </div>
                <div>
                    <div  style={{ display: 'flex' }}>
                    <p style={{ padding: '1rem 0rem 0rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> Supported games:</p>
                    <p style={{ margin: '1rem 0rem 0rem 0.5rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'bolder', fontStyle: 'italic' }}>
                        Pacman
                    </p>
                    </div>
                   <div  style={{ display: 'flex' }}>
                   <p style={{ padding: '0.5rem 0rem 1.5rem 2rem', margin: '0rem 0rem 0rem 0rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'lighter' }}> 
                   Supported networks: 
                   </p>
                   <p style={{ margin: '0.5rem 0rem 0rem 0.5rem', color: 'white', fontSize: '12pt', fontFamily: 'Montserrat', fontWeight: 'bolder', fontStyle: 'italic' }}>
                        Solana
                    </p>
                   </div>
      
                    
                </div>
            </div>

            <div className="right_home_info2pacman">
                <div>
                    <p style={{ padding: '0rem 0rem 0rem 2rem', color: 'white', fontSize: '18pt', fontFamily: 'Montserrat', fontWeight: 'bolder' }}> WANT TO PLAY A GAME?</p>
                </div>
                <div style={{ padding: '2rem 2rem 2rem 5rem', margin: '0rem 0rem 0rem 0rem' }}>
                    <ButtonThree href='#games'>PLAY</ButtonThree>
                </div>
            </div>





        </div>


    )
};
export default RightHomeInfoPacman;