import React from "react"
import { AboutMe, AboutMeContent, Contact, GenesisCollection, Home, HomeContent, ContactMeContent,GenesisCollectionContent } from "."
import { Tabs, TabList, Tab, TabPanels, TabPanel, Container } from "@chakra-ui/react"




export const BannerMenuLayout = () => {
  
    return(
        <div>
            <Tabs isFitted  align="center">
            <Container>
            <TabList>
            <Tab> <div className="header-nav-item"><Home/></div> </Tab>
            <Tab> <div className="header-nav-item"><AboutMe/></div> </Tab>
            <Tab> <div className="header-nav-item"><GenesisCollection/></div> </Tab>
            <Tab> <div className="header-nav-item"><Contact/></div> </Tab> 
              </TabList>
              </Container>
            <TabPanels>
            <TabPanel>
                <HomeContent/>
            </TabPanel>
            <TabPanel>
    
            <AboutMeContent/>

            </TabPanel>
            <TabPanel>
                <GenesisCollectionContent/>
            </TabPanel>
            <TabPanel>
                <ContactMeContent/>
            </TabPanel>
            </TabPanels>
            </Tabs>
        </div>
    )
}