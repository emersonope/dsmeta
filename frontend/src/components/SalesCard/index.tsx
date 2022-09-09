import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import "./styles.css";

function SalesCard() {
    
    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());

    useEffect(() => {
       axios.get("http://localhost:8080/sales")
            .then(response => {
                console.log(response.data);
            })
    }, []);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="dsmeta-show-hide-992">ID</th>
                        <th className="dsmeta-show-hide-date">Data</th>
                        <th>Vendedor</th>
                        <th className="dsmeta-show-hide-992">Visitas</th>
                        <th className="dsmeta-show-hide-992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="dsmeta-show-hide-992">#341</td>
                        <td className="dsmeta-show-hide-date">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="dsmeta-show-hide-992">15</td>
                        <td className="dsmeta-show-hide-992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="dsmeta-show-hide-992">#341</td>
                        <td className="dsmeta-show-hide-date">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="dsmeta-show-hide-992">15</td>
                        <td className="dsmeta-show-hide-992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <div className="dsmeta-red-btn">
                                    <NotificationButton />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="dsmeta-show-hide-992">#341</td>
                        <td className="dsmeta-show-hide-date">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="dsmeta-show-hide-992">15</td>
                        <td className="dsmeta-show-hide-992">11</td>
                        <td>R$ 55300.00</td>
                        <td>
                            <div className="dsmeta-red-btn-container">
                                <div className="dsmeta-red-btn">
                                    <NotificationButton />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default SalesCard;