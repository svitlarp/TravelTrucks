import css from './NotFound.module.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
      <div className={css.NotFound}>
        <h4>NotFound Page</h4>
        <Link to='/'>Home</Link>
      </div>
    );
}

export default NotFound;
