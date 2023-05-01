import React from "react";
import { Heading, Box, Center } from "@chakra-ui/react";
import Image from "next/image";

import henleyColoring from '../../../public/images/henley-coloring.jpg';

export const Contact = () => {
    return (
        <div>contact</div>
    )
}

export const ContactMeContent = () => {
    return (
        <div>
            <div>
                <div>
                    <div className="contact-heading">
                        <div className="contact-heading-layout">
                        <Heading className="about-me-title">Contact Me</Heading>
                        <br/>
                        </div>
                    </div>
                    <Center>
    
                    <Image
            src={henleyColoring}
            alt="Henley Logo"
            width={1500} height={811}  
          />
       
    </Center>
                </div>
            </div>
        </div>
    )
}