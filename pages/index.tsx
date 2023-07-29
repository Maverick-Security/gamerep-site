import React from 'react';
import RootLayout from '../app/layout'; // Add this import statement

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid text-center">
      <h1>Welcome to my Next.js app with Bootstrap!</h1>
    </div>
  );
};

// Set the custom layout for this page
HomePage['Layout'] = RootLayout;

export default HomePage;