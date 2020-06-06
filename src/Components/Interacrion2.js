import React, { Component } from 'react'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs'
import 'react-web-tabs/dist/react-web-tabs.css'
import ChatBox from './ChatBox'

export default class Interacrion2 extends Component {
    render() {
        return (
            <div>
                <Tabs className="Vertical-tabs" defaultTab="vertical-tab-one" data-rwt-vertical="true">
                    <TabList  className="Vertical-tab-wrapper" vertical={true}>
                        <Tab className="Vertical-tab" tabFor="vertical-tab-one">Expert XYZ</Tab>
                        <Tab className="Vertical-tab" tabFor="vertical-tab-two">Expert YQW</Tab>
                        <Tab className="Vertical-tab" tabFor="vertical-tab-three">Expert PQR</Tab>
                    </TabList>
                    <TabPanel className="vertical-tab-panel" tabId="vertical-tab-one">
                        <ChatBox></ChatBox>
                    </TabPanel>
                    <TabPanel className="vertical-tab-panel" tabId="vertical-tab-two">
                        <ChatBox></ChatBox>
                    </TabPanel>
                    <TabPanel className="vertical-tab-panel" tabId="vertical-tab-three">
                        <ChatBox></ChatBox>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
