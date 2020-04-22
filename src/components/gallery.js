import React from "react"
import styled from "styled-components"
import Image from "../components/image"

import test1 from "../images/projekty/1.png"
import test2 from "../images/projekty/2.png"
import test3 from "../images/projekty/3.png"
import test4 from "../images/projekty/4.png"
import test5 from "../images/projekty/5.png"
import test6 from "../images/projekty/6.png"

const name = "project name" 


const GalleryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: 40rem;
    margin-top: 10rem;
`;

const Gallery = () => (
    <GalleryWrapper>
        <Image  img={test1} caption={name}/> 
        <Image  img={test2} caption={name}/> 
        <Image  img={test3} caption={name}/>   
        <Image  img={test4} caption={name}/> 
        <Image  img={test5} caption={name}/> 
        <Image  img={test6} caption={name}/> 
    </GalleryWrapper>
);


export default Gallery