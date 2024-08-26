import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // o un altro router se usi React Router
import WorkDetail from '../components/Works/WorkDetail.js';
import { Helmet } from 'react-helmet';

function WorkDetails() {
  const { workId } = useParams(); // Usato con React Router
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    async function fetchWork() {
      //localhost version
      //const response = await fetch(`http://localhost:3001/api/works/${workId}`);

      const response = await fetch(`/api/${workId}`);
      const data = await response.json();
      setWorkData(data);
    }

    fetchWork();
  }, [workId]);

  if (!workData) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>{workData.title}</title>
        <meta name="description" content={workData.description} />
      </Helmet>
      <WorkDetail
        id={workData.id}
        images={workData.images}
        title={workData.title}
        shortDescription={workData.shortDescription}
        description={workData.description}
      />
    </>
  );
}

export default WorkDetails;
