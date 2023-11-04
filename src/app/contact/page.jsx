import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import React from "react";

const page = () => {
    return (
        <>
            <Header/>
            <Contact/>
            <NewsLetter/>
            <Footer/>
        </>
    );
};

export default page;
