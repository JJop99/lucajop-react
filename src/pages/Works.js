import { useEffect, useState } from 'react';
import WorkList from '../components/Works/WorkList.js';
import { Helmet } from 'react-helmet';

function Works() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const response = await fetch('/api/works');
  
        console.log('Response:', response);
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const contentType = response.headers.get("content-type");
        console.log('Content-Type:', contentType);
  
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setWorks(data);
        } else {
          const text = await response.text();
          console.error("Non-JSON response:", text);
          throw new Error("La risposta non è JSON");
        }
      } catch (error) {
        console.error("Errore durante il fetch:", error);
      }
    }
  
    fetchWorks();
  }, []);
  
  

  return (
    <>
      <Helmet>
        <title>React Works</title>
        <meta name="description" content="Browse a huge list of highly active React works." />
      </Helmet>
      <WorkList works={works} />
    </>
  );
}

export default Works;
