import { Center, Container, Heading, useDisclosure, Text, Wrap, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, Drawer, Button } from "@chakra-ui/react"
import React from "react"
import { BsCoin, BsEye, BsGift, BsMinecart, BsMinecartLoaded, BsStack } from "react-icons/bs"
import { FaDollarSign, FaShoppingCart, FaTemperatureHigh } from "react-icons/fa"
import { IoArrowUpOutline, IoRefresh, IoRefreshOutline } from "react-icons/io5"
import Link from 'next/link';
import { InfoIcon } from "@chakra-ui/icons"
import Image from "next/image"
import mushroom from '../../public/images/watermark-copy-2.jpg'

export const GenesisMint = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    return (
        <div>

            <div className='event-app-details'>
            <Heading className="about-me-title">Coming Soon</Heading>
                <div className="entries-card-bg-pic">
                    <Image className="ticket-image-content-img" src={mushroom}/>
                </div>
 
                <Container className="desription-text">
                <div className="spacing">
                 
                 
                  
                </div>
                    <Text noOfLines={4} > This is where the genesis collection description can go. </Text>
                <br/>
                <Text >We can 
                    share details for the future goals & benefits of collectors here.</Text>
                    <div >
                  
                       

                        <div><div className="claim-code-button">
                            <Button  onClick={onOpen} className="button-checkout-action">
                                <div className="claim-button-text">
                                    <div className="checkout-text"><InfoIcon className="svg" />Learn More
                                    </div>
                                </div>
                            </Button>
                            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                                <DrawerContent>
                                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                                    <DrawerBody>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                            
                        </div>
                        </div>
                 
                </div>
                <div className="purchase-price">
                    <div className="ticket-widget-denom">Mint Cost:</div>
                    <div className="ticket-widget-price">2,222 $STARS</div>
                </div>
                <div className="ticket-mint-purchase">
                    <br></br>
                    <div className="purchase-body">

                        <div className="purchase-button-content">
                            <button className="button-checkout-action">
                                <div className="claim-button-text"> <Link href="/event/checkout">
                                    <div className="checkout-text"><IoArrowUpOutline className="svgcolor" />Mint!
                                    </div>
                                </Link>
                                </div>
                            </button>
                        </div>
                    </div>
                    <br></br>

                    <div className="purchase-header"></div>

                    <br />

                </div>
                </Container>
                <br />
                <Center><Text className="pw-text" >This mint is connected to Stargaze, a decentralized NFT marketplace.</Text></Center>
            </div>
        </div>
    )
}