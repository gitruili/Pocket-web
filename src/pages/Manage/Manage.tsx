import React, { useState } from 'react'
import "./Manage.css"
import { Link } from "react-router-dom"
import { Col, Row, Button, Space, List, Modal, Input } from 'antd'
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';
import avatar from '~/assets/avatar.svg'
import c1 from '~/assets/c1.svg'
import c2 from '~/assets/c2.svg'
import c3 from '~/assets/c3.svg'
import c4 from '~/assets/c4.svg'
import c5 from '~/assets/c5.svg'
import c6 from '~/assets/c6.svg'
import c7 from '~/assets/c7.svg'
import c8 from '~/assets/c8.svg'
import { CardC } from '~/components/CardC';
import { ethers } from 'ethers';
import vipcardABI from '../../../src/contract/VIPCard.json';
import pocketABI from '../../../src/contract/Pocket.json'

const vipcardAddress = '0x642fc5c518a40585fbf1b1ce57d28d239cc9cab5';
const pocketAddress = '0x9587d45ec200948dc329077861d689d08af53030';
const tokenURI = "ipfs://Qmd7kF7k8jwx4eUYap5p2TWxgGAUNyp8d85g52HcQrRrHf";

export default function Manage() {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    // Handle submit button click
    console.log('Submitted value:', inputValue);
    const inputValueAdhoc = '0xF39a729c7B6557958fa7772552BBB9fC62dAfDf6'
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const vipCard = new ethers.Contract(vipcardAddress, vipcardABI.abi, signer);
    const pocket = new ethers.Contract(pocketAddress, pocketABI.abi, signer);
    
    try {
      //const pocketTx = await pocket.mintPocket(inputValueAdhoc, tokenURI);
      //
      //console.log('Transaction:', pocketTx);

      //const pocketReceipt = await pocketTx.wait();
      //console.log('Transaction was mined in block', pocketReceipt.blockNumber);

      //const myEvent = pocket.interface.getEvent('AccountCreated');
      //const eventResult = pocketReceipt.logs.map(log => pocket.interface.parseLog(log)).find(parsedLog => parsedLog.name === 'AccountCreated');

      //if (eventResult) {
      //    console.log('Event Values:', eventResult.values);
      //} else {
      //    console.log('Event not found in transaction receipt.');
      //}
      //
      const vipCardRes = await vipCard.mintVIPCard(inputValueAdhoc, tokenURI);
      console.log(vipCardRes);
    } catch (error) {
      console.log(error);
    }
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const userCollection = [
    {
      imgSrc: c1,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    },
    {
      imgSrc: c2,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    },
    {
      imgSrc: c3,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    },
    {
      imgSrc: c4,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    }
  ];

  const userCollection2 = [
    {
      imgSrc: c5,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    },
    {
      imgSrc: c6,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    },
    {
      imgSrc: c7,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    },
    {
      imgSrc: c8,
      imgAlt: "example",
      title: "Card title",
      desc: "This is the description"
    }
  ];

  const data = [
    {
      title: 'Ant',
    },
    {
      title: 'Andy',
    },
    {
      title: 'Mark',
    },
    {
      title: 'Steve',
    },
  ];

  return (
    <div style={{ background: 'black' }}>
      <Row style={{ margin: '50px 100px' }}>
        <Col span={6}>
          <Row>
            <Col span={8}>
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src={avatar}
              />
            </Col>
            <Col className='label' span={4}>
              <p className='text-wrapper'>Daniel.eth</p>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={22}>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item  style={{ border: '2px solid #000', width: '80%', padding: '10px', background: 'white' }}>
                    <p>{index+1}</p>
                    <List.Item.Meta
                      avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                      title={item.title}
                      // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Col>
        <Col span={16}>
          <Row style={{ top: '50px' }}>
            <Col span={6} style={{ margin: '10px' }}>
              <Button type="primary" block style={{ background: '#2A282A' }} onClick={showModal}>Issue VIP card</Button>
            </Col>
            <Col span={6} style={{ margin: '10px' }}>
              <Button type="primary" block style={{ background: '#2A282A' }}>VIP view</Button>
            </Col>
            <Col span={6} style={{ margin: '10px' }}>
              <Button type="primary" block style={{ background: '#2A282A' }}>Points management</Button>
            </Col>
          </Row>
          <Divider />
          <Divider />
          <Row>
            {userCollection.map(item => {
              return (
                <Col span={6}>
                  <CardC imgAlt={item.imgAlt} imgSrc={item.imgSrc} title={item.title} desc={item.desc}></CardC>
                </Col>
              )
            })}
          </Row>
          <Divider />
          <Row>
            {userCollection2.map(item => {
              return (
                <Col span={6}>
                  <CardC imgAlt={item.imgAlt} imgSrc={item.imgSrc} title={item.title} desc={item.desc}></CardC>
                </Col>
              )
            })}
          </Row>
        </Col>

        <Divider />

        <Divider />

      </Row>
      <Modal
        title="Address"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Input
          // value={inputValue}
          // onChange={handleInputChange}
          placeholder="Input your address here"
        />
      </Modal>
    </div>
  )
}
