import React from 'react';

const boxStyle = {
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  transition: 'transform 0.2s ease-in-out',
};

const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f3f3f3',
  padding: '40px',
  fontFamily: 'Arial, sans-serif',
};

const cardContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
  maxWidth: '1000px',
  margin: '0 auto',
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '20px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '32px',
  marginBottom: '30px',
  fontWeight: 'bold',
  color: '#333',
};

const PostAnalytics = () => {
  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <h1 style={headingStyle}>Post Analytics</h1>

        <div style={{ ...boxStyle, backgroundColor: '#cce4ff' }}>
          <h2 style={{ color: '#004080', fontSize: '20px', marginBottom: '10px' }}>Follows</h2>
          <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#003366' }}>0</p>
          <p style={{ color: '#005599', marginTop: '5px' }}>Users followed from this post</p>
        </div>

        <div style={{ ...boxStyle, backgroundColor: '#d4f8d4' }}>
          <h2 style={{ color: '#2e7d32', fontSize: '20px', marginBottom: '10px' }}>Comments</h2>
          <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#1b5e20' }}>0</p>
          <p style={{ color: '#388e3c', marginTop: '5px' }}>Comments on this post</p>
        </div>

        <div style={{ ...boxStyle, backgroundColor: '#ffe0eb' }}>
          <h2 style={{ color: '#ad1457', fontSize: '20px', marginBottom: '10px' }}>Likes</h2>
          <p style={{ fontSize: '36px', fontWeight: 'bold', color: '#880e4f' }}>0</p>
          <p style={{ color: '#c2185b', marginTop: '5px' }}>Total likes received</p>
        </div>
      </div>
    </div>
  );
};

export default PostAnalytics;
