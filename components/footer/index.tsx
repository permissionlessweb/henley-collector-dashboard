import Image from "next/image"
import footerImage from '../../public/images/footer.jpg'
import { Center } from "@chakra-ui/react"

export const Footer = () => {
    return(
        <Center>
        <div className="footer">
            <div className="layout">
                <div className="footer-header">
                    <div className="left">
                        <div className="content">
                            <div className="h2">
                            Henley Beall - multimedia artist
                            </div>
                        </div>
                    </div>
                    <div className="right">
                    <div className="content">
                            <div className="h2">
                            Henley Beall - multimedia artist
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle"></div>
                <div className="footer-bottom">
                    <div className="layout">
                        <div className="image">
                                    <Image
                                    src={footerImage}
                                    />
                            <div className="caption">
                                <div className="p">Film photo taken and staged by Torrie Bordes & Camryn Bowcutt (Lucky Peak Film Company) in Baltimore, MD. April 2023.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Center>
    )
}