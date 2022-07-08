import React from "react";
import "./SectionTitle.css";

const SectionTitle = ({ title, title_type }) => {
    return (
        <h3 className="titleName pl-2">
            <div className="content">
                <h2>{title}</h2>
                <h2>{title}</h2>
            </div>
            <span className="title_bg">{title_type}</span>
        </h3>
    );
};

export default SectionTitle;