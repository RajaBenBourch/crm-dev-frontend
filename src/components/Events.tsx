import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Drawer } from 'antd';
import { PlusOutlined, ClockCircleOutlined} from '@ant-design/icons';
import axios from 'axios';
import FormEvent  from '../form/FormEvent';

const { Meta } = Card;

interface EventData {
  id: number;
  name: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  latitude: number;
  longitude: number;
}

const Events: React.FC = () => {
  const [eventData, setEventData] = useState<EventData[]>([]);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleFormSubmit = (values: any) => {
    // Logique de soumission du formulaire
    console.log('Form submitted with values:', values);
  };

  const initialValues = {
    // Définissez vos valeurs initiales ici
    name: '',
    email: '',
    birthdate: null // Vous devrez peut-être modifier le type en fonction de votre logique
  };



  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    try {
      const response = await axios.get<EventData[]>('http://localhost:8080/api/events/getAllEvents');
      setEventData(response.data);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };
    
  const handleDrawerClose = () => {
    setIsDrawerVisible(false);
  };
    const calculateDuration = (startTime: string, endTime: string): string => {
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);
    const durationMs = end.getTime() - start.getTime();
    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} heures ${minutes} minutes`;
  };

  const formatDate = (date: string): string => {
    const eventDate = new Date(date);
    return eventDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };
  const handleAddEvent = () => {
    // Logique pour ajouter un nouvel événement
  };
  const colors = ['#FF5733', '#33FFC8', '#336BFF', '#FF33EA', '#FFE233'];

  return (
<div>
    <div style={{ fontFamily: ''}}>Nearest Events</div>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16, marginRight: 5 }}>
        <Button type="primary" onClick={handleAddEvent}>
        <PlusOutlined /> Add Events

        <Drawer
        title="Ajouter un événement"
        placement="right"
        closable={true}
        onClose={handleDrawerClose}
        visible={isDrawerVisible}
      >
       <FormEvent onFinish={handleFormSubmit} initialValues={initialValues} />
      </Drawer>
        </Button>
    </div>
    <Row gutter={[16, 16]}>
      {eventData.map((event, index) => (
        <Col key={index} xs={24} lg={12}>
            
          <Card
            style={{ marginBottom: 16 }}
            cover={<img alt="Clock" src="/clock_image_url.jpg" />}
          >
            <div style={{ borderLeft: `5px solid ${colors[index % colors.length]}`, paddingLeft: 16 }}>
            <Meta
              title={event.name}
              description={
                <>
                  <p>Date : {formatDate(event.eventDate)}</p>
                  {/*<p> Heure de fin  : {event.endTime}</p>*/}
                  <p>startTime{event.startTime}</p>
                  <p style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16, marginRight: 5 }}><ClockCircleOutlined />: {calculateDuration(event.startTime, event.endTime)}</p>
                </>
              }
            />
            </div>
          </Card>
        
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Events;
