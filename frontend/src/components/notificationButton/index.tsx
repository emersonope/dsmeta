import axios from 'axios';
import { toast } from 'react-toastify';
import {NotificationIcon} from '../iconComponent'
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleclick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS sent successfully")
        })
}

function NotificationButton( {saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleclick(saleId)}>
            <NotificationIcon />
       </div>
        
    )
}

export default NotificationButton;


