import Action from "@/components/Action";
import Blog from "@/components/BlogPageCmp/page";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import React from "react";

const page = () => {
    return (
        <div>
            <Header/>
            <Blog/>
            <Action/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
};

export default page;
