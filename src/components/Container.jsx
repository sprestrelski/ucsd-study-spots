import React from "react";
import Card from "./Card";

const Container = () => {
    return (
        <div className="Container">
            <Card name="Galbraith Hall" description="Located in Revelle" mapLink="https://goo.gl/maps/GqBRJjq6xZ29FKBSA" imageLink="src/assets/Galbraith.jpg"/>
            <Card name="Sun God Lounge" description="Located in Price Center" mapLink="https://goo.gl/maps/fskFd4rT5mqz1U3N9" imageLink="src/assets/SunGodLounge.JPG"/>
            <Card name="WongAvery Library" description="Located across from Center Hall" mapLink="https://goo.gl/maps/uxoQygfAZPGjnsnE9" imageLink="src/assets/UCSD-Biomed-Library.jpg"/>
            <Card name="Warren Commuter Commons" description="Located in the Computer Science and Engineering building" mapLink="https://goo.gl/maps/nRGo3yuWgrDgfoSaA" imageLink="src/assets/CSE.jpg"/>
            <Card name="Angela's Space" description="Located underneath Ocean View Terrace in Marshall" mapLink="https://goo.gl/maps/9HAdrhcf1GPri4eQ7" imageLink="src/assets/OVT.jpg"/>
            <Card name="ECE Tutoring Center" description="Located in the Jacobs School of Engineering Building on the 5th floor" mapLink="https://goo.gl/maps/CAqevfjjAqgVjwsm7" imageLink="src/assets/Jacobs-Engineering.jpg"/>
            <Card name="Linguistics Lab" description="Located in AP&M in Muir on the 3rd floor" mapLink="https://goo.gl/maps/sFkPJ6ytKMU2ii9T9" imageLink="src/assets/APM.jpg"/>
            <Card name="JK Wood Lounge" description="Located in Warren on top of Canyon Vista" mapLink="https://goo.gl/maps/gejbwfa2SB5fSFwT9" imageLink="src/assets/JKWoodLounge.jpg"/>
            <Card name="The Loft" description="Located in Price Center on the 2nd floor" mapLink="https://goo.gl/maps/MpUtX3UdueijMLQa8" imageLink="src/assets/TheLoft.jpg"/>
            <Card name="Capital One Cafe" description="Located in the UTC Mall, three trolley stops from UCSD" mapLink="https://goo.gl/maps/yAhSJiBFjX36y18K7" imageLink="src/assets/CapitalOneCafe.jpg"/>
        </div>
    )
}

export default Container;