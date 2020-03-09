import React from 'react';

const VideoHeader = () => {
  return (



    <div className='videoheader-wrapper'>
    <style jsx>{`

      videoheader-wrapper{
  
      }

      .videoheader-text {
        font-size: 7rem;
        postion: sticky;
        color: #8A0303;
        padding-top: 50px;
        animation: fadeIn ease 10s;
        -webkit-animation: fadeIn ease 15s;
        -moz-animation: fadeIn ease 15s;
        -o-animation: fadeIn ease 15s;
        -ms-animation: fadeIn ease 15s;
        position: fixed;
        top: 0;
        width: 100%;
        opacity: .3


      }
      @keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:.3;
        }
      }

      @-moz-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:.3;
        }
      }

      @-webkit-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:.3;
        }
      }

      @-o-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:.3;
        }
      }

      @-ms-keyframes fadeIn {
        0% {
          opacity:0;
        }
        100% {
          opacity:.3;
        }



        `}</style>


        <h1 className='videoheader-text'>Virtual Counselor</h1>

        </div>
      )


    }


    export default VideoHeader
