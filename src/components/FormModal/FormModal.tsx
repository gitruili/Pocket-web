import React, { useState, useEffect, FC } from 'react';
import styles from './FormModal.module.css'
import { Link } from "react-router-dom"
import { IconsFlatInstagram1 } from '~/icons/IconsFlatInstagram1/IconsFlatInstagram1'
import cutepng from '~/assets/cute2.png'
import { ethers } from 'ethers';
import vipcardABI from '../../../src/contract/VIPCard.json';
//import * as dotenv from 'dotenv';

// Configuring dotenv
//dotenv.config();
// import { IconsFlatInstagram1 } from "../../icons/IconsFlatInstagram1";

import { Button, Input, Typography } from 'antd';
interface FormModalProps {
  closeModal: () => void;
}

const { Title } = Typography;
const { TextArea } = Input;

export const FormModal : FC<FormModalProps> = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | string>(null);

  async function callContract() {
    setIsLoading(true);
    // Simulate an asynchronous action, like calling a contract

    const contractName = "pocket";
    const contractSymbol = "ERC721-token";
    const erc6551RegistryAddress = "0xba2a5dff82478b912d05c1db856e56264fd3cc4f";
    const vipCardAccountAddress = "0xc48de7626F5BfB5d9C276B07f13a3995105B4233";
    const contractABI = vipcardABI.abi;
    const contractBytecode = vipcardABI.bytecode;
    const apiUrl = "https://polygon-mumbai.g.alchemy.com/v2/msaJegrQLaLoy3szqaYUebeTejvKLeJO"

    // VipCard deploy
    console.log("Vipcard NFT deploy start");

    //const provider = new ethers.JsonRpcProvider(apiUrl);
    //const wallet = new ethers.Wallet(privateKey, provider);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    const vipCardFactory = new ethers.ContractFactory(contractABI, contractBytecode, signer);
    const vipCard = await vipCardFactory.deploy(contractName, contractSymbol, erc6551RegistryAddress, vipCardAccountAddress);
    await vipCard.waitForDeployment();
    const vipCardAddress = await vipCard.getAddress();
    console.log("Vipcard NFT deployed:", vipCardAddress);

    // Replace the setTimeout with your actual contract call logic
    setTimeout(() => {
      setResult('Contract call result');
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    if (result) {
      closeModal();
      console.log('Close modal');
    }
  }, [result]);

  return (
    <div style={{ padding: '20px' }}>
      {/* <div style={{
        backgroundImage: 'url("https://c.animaapp.com/koRtGf3q/img/image-21.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',  // semi-transparent white background
        padding: '20px',
        borderRadius: '10px',
      }}> */}
        <Title level={2} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Submit&nbsp;&nbsp;VIP Card Information</Title>
      {/* </div> */}
      <div style={{ marginBottom: '10px' }}>
        <Title level={4}>NFT Name</Title>
        <Input
          // value={nftName}
          // onChange={handleNftNameChange}
          placeholder="Enter NFT Name"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Title level={4}>Describe</Title>
        <TextArea
          // value={description}
          // onChange={handleDescriptionChange}
          placeholder="Enter Description"
          rows={4}
        />
      </div>
      <Button type="primary" onClick={callContract}>
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    </div>
    // <div className={styles['frame']}>
    //   <div className={styles['overlap-wrapper']}>
    //     <div className={styles['overlap']}>
    //       <img className={styles['image']} alt="Image" src="https://c.animaapp.com/koRtGf3q/img/image-21.png" />
    //       <div className={styles['rectangle']} />
    //       <img className={styles['img']} alt="Rectangle" src="https://c.animaapp.com/koRtGf3q/img/rectangle-34626423.svg" />
    //       <div className={styles['submit-VIP-card']}>Submit&nbsp;&nbsp;VIP Card Information</div>
    //       <div className={styles['text-wrapper']}>NFT Name</div>

    //       <div className={styles['div']}>
    //         <Input
    //           placeholder="Input your address here"
    //         />
    //       </div>
    //       <div className={styles['text-wrapper-2']}>Discribe</div>
    //       <div className={styles['rectangle-2']}>
    //         <Input
    //           type='textField'
    //           placeholder="Input your address here"
    //         />
    //       </div>
    //       <div className={styles['group']} onClick={callContract} style={{ cursor: 'pointer' }}>
    //         <div className={styles['overlap-group']}>
    //           <div className={styles['text-wrapper-4']}>
    //             {isLoading ? 'Loading...' : 'Submit'}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
