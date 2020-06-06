import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import Navbar from '../Components/Navbar';
import '../Stylesheets/Interaction.scss'
import Interaction1 from '../Components/Interaction1';
import 'react-web-tabs/dist/react-web-tabs.css';
import Interacrion2 from '../Components/Interacrion2';

export default class Interaction extends Component {
    render() {
        return (
            <div className="Interaction-container">
                <Navbar></Navbar>
                <Tabs className="Interaction-tabs-container">
                    <TabList>
                        <Tab>
                            <div className="tabs-heading">Fellow fighters</div>
                        </Tab>
                        <Tab>
                            <div className="tabs-heading">Expert's Advice</div>
                        </Tab>
                    </TabList>
                    
                    <TabPanel>
                        <Interaction1></Interaction1>
                    </TabPanel>
                    <TabPanel>
                        <Interacrion2></Interacrion2>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
