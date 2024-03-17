import React from 'react'
import { CgAlbum } from "react-icons/cg";
import { CgUserAdd } from "react-icons/cg";
import { CgMoreAlt } from "react-icons/cg";

export const ReviewHighlighter = ({ review }) => {
    const { date, reviewer_name,content, analytics , source, bookmarked } = review;

    let book=bookmarked;
    let r_date=date;
    let icon =source.icon;
    let source_name= source.name;
    let  r_name= reviewer_name;
    let highlightedContent = content;
  
    analytics.forEach(analytic => {
      const { sentences, sentiment } = analytic;
     
      sentences.forEach((sentence, index) => {
        let color = "#FFFFFF"; // Default color
  
        switch (sentiment) {
          case "Positive":
            color = "#D9F2DD";
            break;
          case "Negative":
            color = "#F2DBD9";
            break;
          case "Mixed":
            color = "#e8bd6d3d";
            break;
          case "Neutral":
            color = "#eaf09b6b";
            break;
          default:
            break;
        }
  
        highlightedContent = highlightedContent.replace(sentence, `<span style="background-color:${color};">${sentence}</span>`);
      });
    });
    
    return (
    <div className='main'>
        <div className="wrapper">
            <div className="wrapper_left" >
                <img src={icon} alt="icon"  className="icon" />
                <div className='r-name' dangerouslySetInnerHTML={{ __html: r_name }}>
                </div>
                <p className='wrote'>wrote a review at</p>
                <div className='r-name' dangerouslySetInnerHTML={{ __html: source_name }}> 
                </div>
            </div>
            <div className="wrapper_right" >
                
                <CgUserAdd className='icons'/>    
                <CgAlbum className={book ? 'save-black' : 'save'} />

                <CgMoreAlt className='icons'/>
                

            </div>
            
        </div>

        <p className="date" dangerouslySetInnerHTML={{ __html: r_date }}></p>

        <div className="review-highlighter" dangerouslySetInnerHTML={{ __html: highlightedContent }}></div>
    </div>
      );
    };



