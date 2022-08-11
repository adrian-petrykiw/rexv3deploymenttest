import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from '../firebase.js';
import { updateDoc, doc, deleteDoc } from "firebase/firestore";
import './spacetodo.css';
import styled from "styled-components";
import React, { useState } from 'react';


const CopyButton = styled.button`
  background-color: white;
  color: black;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: bolder;
  padding: 10px 30px;
  margin: 10px 0px;
  border: 1px solid white;
  cursor: pointer;
`;

const CopyButton2 = styled.button`
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: bolder;
  padding: 10px 30px;
  margin: 10px 0px;
  border: 1px solid white;
`;


const SpaceTodo = ({ arr }) => {
  // const [gameName, setGameName] = useState('');
  // const [mintAddress, setMintAddress] = useState('');
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    setCopied(true);
    navigator.clipboard.writeText(window.location.href + "#" + arr.item.shipMintAddress)
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div id={arr.item.shipMintAddress}>
      <div className="space__todo_copy">
      {copied ? <CopyButton2>LINK COPIED</CopyButton2> : <CopyButton onClick={copyText}>SHARE GAME</CopyButton>}
      </div>
      <List className="space__todo__list"
        onClick={async (e) => {
          e.preventDefault();
          const taskDocRef = doc(db, 'nftpic', 'currentnftpic');
          const shipImageUrl = arr.item.shipNFTPic;
          const invaderOneImageURL = arr.item.invaderOneNFTPic;
          const invaderTwoImageURL = arr.item.invaderTwoNFTPic;
          const invaderThreeImageURL = arr.item.invaderThreeNFTPic;
          // const invaderUfoImageURL = arr.item.invaderUfoNFTPic;


          await updateDoc(taskDocRef, {
            shipImageUrl: shipImageUrl,
            invaderOneImageURL: invaderOneImageURL,
            invaderTwoImageURL: invaderTwoImageURL,
            invaderThreeImageURL: invaderThreeImageURL,
            // invaderUfoImageURL: invaderUfoImageURL,

          });
          window.location.href = 'https://spaceinvaders.r3x.tech';
        }}>
        <ListItem style={{ paddingBottom: '1.75rem', paddingTop: '1.5rem' }}>
          <ListItemAvatar style={{ paddingLeft: '1.25rem', paddingTop: '4.25rem' }}>
            <Avatar alt="Error" src={arr.item.shipNFTPic} />
            <Avatar alt="Error" style={{ marginTop: '1rem', }} src={arr.item.invaderOneNFTPic} />
            <Avatar alt="Error" style={{ marginTop: '1rem', }} src={arr.item.invaderTwoNFTPic} />
            <Avatar alt="Error" style={{ marginTop: '1rem', }} src={arr.item.invaderThreeNFTPic} />
            {/* <Avatar alt="Error" style={{ marginTop: '1rem', }} src={arr.item.invaderUfoNFTPic} /> */}


          </ListItemAvatar>


          <ListItemText
            style={{ paddingLeft: '1.25rem', }}

            primary={
              <Typography variant="h5" style={{ fontFamily: 'Montserrat', fontWeight: 'bolder', color: "white" }} >{arr.item.gameName}</Typography>
            }
            secondary={

              <Typography style={{ color: "white", fontFamily: 'Montserrat', fontSize: '14px' }}>
                <div style={{ marginTop: '2.5rem', }}>
                  Ship Mint Address: {arr.item.shipMintAddress}
                </div>

                <div style={{ marginTop: '2.25rem', }}>
                  Invader #1 Mint Address: {arr.item.invaderOneMintAddress}
                </div>

                <div style={{ marginTop: '2.25rem', }}>
                  Invader #2 Mint Address: {arr.item.invaderTwoMintAddress}
                </div>

                <div style={{ marginTop: '2.25rem', }}>
                  Invader #3 Mint Address: {arr.item.invaderThreeMintAddress}
                </div>

                {/* <div style={{ marginTop: '2.25rem', }}>
                UFO Mint Address: {arr.item.invaderUfoMintAddress}
              </div> */}



              </Typography>

            }
          />

        </ListItem>
        {/* <DeleteIcon fontSize="large" style={{ opacity: 1, paddingRight: 20, }} onClick={() => { deleteDoc(doc(db, 'todos', arr.id)) }} /> */}

      </List>
    </div>
  )
};
export default SpaceTodo;