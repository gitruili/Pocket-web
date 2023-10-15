import React, { useState, useEffect, FC } from 'react';
import styles from './FormModal.module.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
}

export const CardC: FC<CardProps> = ({ imgSrc, imgAlt, title, desc }) => {

  return (
    <Card
      hoverable
      style={{ width: 229 }}
      cover={
        <img
          alt={imgAlt}
          src={imgSrc}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={title}
        description={desc}
      />
    </Card>
  )
}