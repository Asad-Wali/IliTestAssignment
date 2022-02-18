import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LineChart from './charts/linechart';


const GraphTable = () => {
    return (
        <div className="card card-body" style={{ width: "1260px", height: "900px" }}>
            <div className="text-center mb-3">
                <h5 className="mb-0">Select Dates</h5>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Water Check</Tab>
                    <Tab>Daily Task</Tab>
                </TabList>

                <TabPanel>
                    <LineChart />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default GraphTable;