// pages/index.js
import React from 'react';

function Home({ data }) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Perform server-side data fetching or any other logic
  const time = new Date();
  const data = `This is server-rendered data generated at ${time.getHours()} : ${time.getMinutes()}`;
  console.log('incoming request');
  return {
    props: {
      data,
    },
  };
}

export default Home;
