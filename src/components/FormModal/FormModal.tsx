import React, { useState, useEffect, FC } from 'react';
import styles from './FormModal.module.css'
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