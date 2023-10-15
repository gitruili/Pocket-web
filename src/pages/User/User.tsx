import React from 'react'
import "./User.css"
import { Link } from "react-router-dom"
import { Col, Row } from 'antd'
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

export default function User() {
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

  return (
    <div style={{ background: 'black' }}>
      <div style={{ margin: '50px 100px' }}>
        <Row>
          <Col span={2}>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              src={avatar}
            />
          </Col>
          <Col className='label' span={2}>
            <p className='text-wrapper'>Daniel.eth</p>
          </Col>
        </Row>
        <Divider />
        <Row>
          {userCollection.map(item => {
            return (
              <Col span={6}>
                <CardC imgAlt={item.imgAlt} imgSrc={item.imgSrc} title={item.title} desc={item.desc}></CardC>
              </Col>
            )
          })}
          {/* <Col span={6}>
            <CardC></CardC>
          </Col> */}
          {/* <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col> */}
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
      </div>
    </div>
  )
}
