import React, { useState, useEffect, FC } from 'react';
import styles from './FormModal.module.css'
import { Link } from "react-router-dom"
import { IconsFlatInstagram1 } from '~/icons/IconsFlatInstagram1/IconsFlatInstagram1'
import cutepng from '~/assets/cute2.png'
// import { IconsFlatInstagram1 } from "../../icons/IconsFlatInstagram1";

interface FormModalProps {
  closeModal: () => void;
}

export const FormModal : FC<FormModalProps> = ({ closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | string>(null);

  async function callContract() {
    setIsLoading(true);
    // Simulate an asynchronous action, like calling a contract
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
    <div className={styles['frame']}>
      <div className={styles['overlap-wrapper']}>
        <div className={styles['overlap']}>
          <img className={styles['image']} alt="Image" src="https://c.animaapp.com/koRtGf3q/img/image-21.png" />
          <div className={styles['rectangle']} />
          <img className={styles['img']} alt="Rectangle" src="https://c.animaapp.com/koRtGf3q/img/rectangle-34626423.svg" />
          <div className={styles['submit-VIP-card']}>Submit&nbsp;&nbsp;VIP Card Information</div>
          <div className={styles['text-wrapper']}>NFT Name</div>
          <div className={styles['div']} />
          <div className={styles['text-wrapper-2']}>Discribe</div>
          {/* <p className={styles['picture-support-zip']}>
            <span className={styles['span']}>Picture</span>
            <span className={styles['text-wrapper-3']}> (support .zip .rar)</span>
          </p> */}
          {/* <p className={styles['p']}>Your pictures will be upload to IPFS, and finally used as your NFTs.</p> */}
          <div className={styles['rectangle-2']} />
          {/* <div className={styles['rectangle-3']} /> */}
          {/* <img className={styles['vector']} alt="Vector" src="https://c.animaapp.com/koRtGf3q/img/vector.svg" /> */}
          <div className={styles['group']} onClick={callContract} style={{ cursor: 'pointer' }}>
            <div className={styles['overlap-group']}>
              <div className={styles['text-wrapper-4']}>
                {isLoading ? 'Loading...' : 'Submit'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}