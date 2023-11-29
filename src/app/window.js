"use client"
import { useEffect, useState } from "react";
import Draggable from "react-draggable";

let currentZ = 0;


export default function Window(props) {
    const width = props.width;
    const height = props.height;
    const bodyHeight = height - 30; //to account for height of title bar.
  
    let [centerx, setCenterx] = useState(0);
    let [centery, setCentery] = useState(0);
    let [zDepth, setzDepth] = useState(currentZ);

    useEffect(() => {
      setCenterx(window.innerWidth / 2 - width / 2);
      setCentery(window.innerHeight / 2 - height / 2);
    })
  
    function incrementZ(e) {
      console.log(`${props.title}: ${currentZ} ${zDepth}`);
      currentZ++;
      setzDepth(currentZ);
    }

    return (
      <Draggable handle=".title-bar" onMouseDown={incrementZ}>
        <div
          hidden={props.windowState}
          className="window absolute"
          style={{width: width, height: height, top: centery, left: centerx, zIndex: zDepth}}
        >
          <div className="title-bar" style={{height: 26}}>
            <img src={props.icon} className="h-[20px]" />
              <div className="title-bar-text ml-[30px]">
                {props.title}
              </div>
            <div className="title-bar-controls">
              <button
                aria-label="Close"
                onClick={(e) => props.setWindowState(false)}
              ></button>
            </div>
          </div>
          <div className="window-body" style={{marginLeft: 2, marginTop: 0, height: bodyHeight}}>{props.children}</div>
        </div>
      </Draggable>
    );
  }