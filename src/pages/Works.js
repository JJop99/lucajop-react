import { useEffect, useState } from 'react';
import WorkList from '../components/Works/WorkList';
import { Helmet } from 'react-helmet';

function Works() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    async function fetchWorks() {
      const response = await fetch('/api/works');
      const data = await response.json();
      setWorks(data);
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
