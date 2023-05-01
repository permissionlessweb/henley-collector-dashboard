import { Button,Drawer,DrawerOverlay,DrawerContent,DrawerCloseButton ,DrawerBody,DrawerFooter, DrawerHeader, useDisclosure } from "@chakra-ui/react"
import { BsThreeDotsVertical } from "react-icons/bs"
import {MenuContent} from './menuContent'
import React from "react"


export const MenuButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
return (
    <div>
    <Button variant="outline" onClick={onOpen} className="banner-menu-button" >
    <div className=""><BsThreeDotsVertical className="tabs-icon" /></div>
  </Button>
  <Drawer
    isOpen={isOpen}
    placement='bottom'
    size='xl'
    onClose={onClose}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader borderBottomWidth='1px'>
        Event-Flow Menu
      </DrawerHeader>
      <DrawerBody>
    <MenuContent />
      </DrawerBody>
      <DrawerFooter borderTopWidth='1px'>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
  </div>
)
}