import axios from 'axios';
import { toast } from 'react-toastify';
import {SvgNotification} from '../Icon'
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            toast.info("SMS sent successfully")
        })
}

function NotificationButton( {saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <SvgNotification aria-label="Notify"/>
       </div>
        
    )
}

export default NotificationButton;


