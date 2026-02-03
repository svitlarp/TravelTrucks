import css from './CamperItem.module.css';
import { useParams } from 'react-router-dom';


const CamperItem = () => {
    const { camperItemId } = useParams();
    return (
      <div>
        <h1>Camper Item Page {camperItemId}</h1>
      </div>
    );
}

export default CamperItem;
