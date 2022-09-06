import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton"
import "./styles.css"

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
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

export default SalesCard