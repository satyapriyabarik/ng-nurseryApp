import { Tab, Tabs } from "react-bootstrap";
import PlantList from "../PlantList";
import FertilizerList from "../FertilizerList";
import NotificationDrawer from "../NotificationDrawer";
import { GiFertilizerBag } from "react-icons/gi";
import { GiFlowerPot } from 'react-icons/gi';

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <h2>Nursery Management</h2>
                <p>Welcome to the NGR Nursery Dashboard. Here you can manage your plants and fertilizers efficiently.</p>
            </div>
            <Tabs defaultActiveKey="plants" id="nursery-tabs" className="mb-3">
                <Tab eventKey="plants" title={
                    <span>
                        <GiFlowerPot style={{ marginRight: '5px' }} />
                        Plants
                    </span>
                }>
                    <PlantList />
                </Tab>
                <Tab eventKey="fertilizers" title={
                    <span>
                        <GiFertilizerBag style={{ marginRight: '5px' }} />
                        Fertilizers
                    </span>
                }>
                    <FertilizerList />
                </Tab>
            </Tabs>
            <NotificationDrawer />
        </>
    );
}
export default Dashboard;