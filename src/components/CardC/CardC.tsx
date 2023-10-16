import React, { useState, useEffect, FC } from 'react';
import styles from './CardC.module.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Input } from 'antd';

const { Meta } = Card;

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  point: number;
}

export const CardC: FC<CardProps> = ({ imgSrc, imgAlt, title, desc, point }) => {
  
  const [localPoint, setLocalPoint] = useState(point);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSaveClick() {
    const newPoint = parseInt(inputValue, 10);
    if (!isNaN(newPoint)) {
      setLocalPoint(newPoint);
    }
    setInputValue('');
    setIsEditing(false);
  }

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
        <EditOutlined key="edit" onClick={handleEditClick}/>,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={title}
        description={
          <div>
            <span className={styles.pointValue}>{desc} {localPoint}</span>
          </div>
        }
      />
      {isEditing && (
        <div className={styles.editField}>
          <Input 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter new point value"
          />
          <Button className={styles.editField} onClick={handleSaveClick}>Save</Button>
        </div>
      )}
    </Card>
  )
}