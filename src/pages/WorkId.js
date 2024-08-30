import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // o un altro router se usi React Router
import WorkDetail from '../components/Works/WorkDetail.js';
import { Helmet } from 'react-helmet';

function WorkDetails() {
  const { workId } = useParams(); // Usato con React Router
  const [workData, setWorkData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    
    async function fetchWork() {
      try {
        const response = await fetch(`/api/works/${workId}`);
        
        if (!response.ok) {
          
          navigate("/404");
          
          throw new Error('Work not found or server error');
          
        }
  
        const data = await response.json();
        setWorkData(data);
      } catch (error) {
        console.error('Error fetching work:', error);
      }
    }
  
    fetchWork();
  }, [workId,navigate]);

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
        role={workData.role}
        
      />
    </>
  );
}

export default WorkDetails;
