import React from 'react'
import "./Manage.css"
import { Link } from "react-router-dom"
import { Col, Row, Button, Space, List } from 'antd'
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

export default function Manage() {
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
              <Button type="primary" block style={{ background: '#2A282A' }}>Issue VIP card</Button>
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
    </div>
    // <div>
    //   <div style={{ margin: '50px 100px' }}>
    //     <Row>
    //       <Col span={2}>
    //         <Avatar
    //           size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
    //           src={avatar}
    //         />
    //       </Col>
    //       <Col className='label' span={4}>
    //         <p className='text-wrapper'>Daniel.eth</p>
    //       </Col>
    //       <Col className='label' span={18}>
    //         <Row style={{ top: '50px' }}>
    //           <Col span={6} style={{ margin: '10px' }}>
    //             <Button type="primary" block style={{ background: '#2A282A' }}>Issue VIP card</Button>
    //           </Col>
    //           <Col span={6} style={{ margin: '10px' }}>
    //             <Button type="primary" block style={{ background: '#2A282A' }}>VIP view</Button>
    //           </Col>
    //           <Col span={6} style={{ margin: '10px' }}>
    //             <Button type="primary" block style={{ background: '#2A282A' }}>Points management</Button>
    //           </Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <Divider />
    //     <Row>
    //       <Col className='label' span={6}>
    //         <List
    //           itemLayout="horizontal"
    //           dataSource={data}
    //           renderItem={(item, index) => (
    //             <List.Item  style={{ border: '2px solid #000', width: '80%', padding: '10px' }}>
    //               <p>{index+1}</p>
    //               <List.Item.Meta
    //                 avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
    //                 title={item.title}
    //                 // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
    //               />
    //             </List.Item>
    //           )}
    //         />
    //       </Col>
    //       <Col className='label' span={18}>
    //         <Row>
    //           {userCollection.map(item => {
    //             return (
    //               <Col span={6}>
    //                 <CardC imgAlt={item.imgAlt} imgSrc={item.imgSrc} title={item.title} desc={item.desc}></CardC>
    //               </Col>
    //             )
    //           })}
    //         </Row>
    //         <Divider />
    //         <Row>
    //           {userCollection2.map(item => {
    //             return (
    //               <Col span={6}>
    //                 <CardC imgAlt={item.imgAlt} imgSrc={item.imgSrc} title={item.title} desc={item.desc}></CardC>
    //               </Col>
    //             )
    //           })}
    //         </Row>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
  )
}
