import styled from "styled-components"
import * as styleVars from "../variable"

import bgImage from "./faq-window.svg"

export const Window = styled.div`
    // width: calc(75 * (1/1271) * 1271vw);
    // height: calc(75 * (1/1271) * 894.55vw);
    width: calc(1271/1442 * 100vw);
    // height: calc(894.55/1442 * 100vw);
    height: calc(876/1442 * 100vw);

    max-width: 1271px;
    max-height: 876px;

    // width: 1271px;
    // height: 894.55px;
    // background-color: red;

    text-align: center;
    margin: auto;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    // background-size: contain;
    background-size: cover;
    position: relative;
    // z-index: -1;
    //padding-top: calc(154/1442 * 100vw);
    //padding-left: calc(20/1442 * 100vw);

    h2 {
        color: ${styleVars.faqBlue1};
        font-size: 36px;
        font-weight: 400;
        //background-color: red;
      }

    .content {
      height: calc(693/1442 * 100vw);
      width: calc(1202/1442 * 100vw);
      max-height: 693px;
      max-width: 1202px;

      position: relative;
      top: min(154px, calc(154/1442 * 100vw));
      left: min(20px, calc(20/1442 * 100vw));

      //background-color: rgba(201, 76, 76, 0.3);
      //outline: 5px solid red;

      padding-top: min(55px, calc(55/1442 * 100vw));

      overflow-y: scroll; 
    }


    .grid {
        display: grid;
        width: 80%;
        max-width: 800px;
        margin: auto;
        // grid-template-columns: repeat(2, min(380px, calc(380/1442 * 100vw)));
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
        // column-gap: 60px;
        // row-gap: 20px;
        justify-content: center;
        align-items: start;
    }

    .QuestionBox {
        border: 1px solid ${styleVars.faqBlue2};
        padding: 10px 10px;
        border-radius: 5px;
        text-align: left;
        font-size: 1.0em;
        cursor: pointer;
        transition: background 0.5s ease;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
        box-sizing: border-box;
        background-color: white;

        a {
          color: ${styleVars.faqBlue1}
        }
    
        .questionRow {
          display: flex;
    
          .question {
            color: ${styleVars.hackBlack80};
            // border-bottom: 3px solid ${styleVars.hackWhite};
            // margin-bottom: -3px;
            // transition: border 0.5s ease;
          }
    
          .spacer {
            flex: 1;
          }
    
          .expandButton > img {
            opacity: 30%;
            position: relative;
            top: 0px;
            transition: opacity 0.5s ease, transform 0.3s ease;
          }
        }
    
        .answer {
          color: ${styleVars.hackBlack60};
          margin-top: 10px;
          // margin-top: calc(6/1442 * 100vw);
          font-size: 0.9em;
          display: none;
          font-family: "Hind Siliguri", sans-serif;
        }
    
        &.expanded {
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
          align-self: stretch;
    
          .answer {
            display: block;
          }
    
          .expandButton > img {
            transform: rotate(-180deg);
          }
    
          .question {
            border-color: ${styleVars.hackWhite} !important;
          }

        }
    
        &:hover {
          .question {
            border-color: ${styleVars.colorHackYellow};
          }
    
          .expandButton > img {
            opacity: 90%;
          }
        }
      }

      @media only screen and (max-width: ${styleVars.mdUp}) {
        background-image: none;
        background-color: white;
        border-radius: 25px;
        margin: auto;

        // position: initial;
        max-height: none;
        max-width: 720px;
        height: initial;
        // width: initial;
        width 90%;


        .content {
          position: initial;
          margin: auto;
          height: initial;
          width: 100%;
          max-height: none;
        }
        .grid {
          position: initial;
          width: 90%;
          display: flex;
          height: initial;
          flex-flow: column wrap;
          align-content: center;
        }
        .QuestionBox {
          width: 100%;
          padding: 24px 30px;
          border-radius: 10px;
          text-align: left;
          font-size: 1.2em;
          cursor: pointer;
          transition: background 0.5s ease;
          margin-bottom: 20px;
          margin-left: 20px;
          margin-right: 20px;
          box-sizing: border-box;
          
        }
      }

/*       @media only screen and (max-width: ${styleVars.mdUp}) {
        .grid {
          position: initial;
          display: flex;
          height: initial;
          flex-flow: column wrap;
          align-content: center;
        }
        .QuestionBox {
          width: 80%;
        }
      } */

`
export default Window