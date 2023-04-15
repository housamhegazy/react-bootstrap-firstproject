import React, { useState } from "react";
// @ts-ignore
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Counter() {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <>
      {/* container of component */}
      <div
        className="counter my-4 px-5 d-flex flex-column flex-md-row text-light text-center justify-content-around"
        style={{ backgroundColor: "#a82c48" }}
      >
        {/* container of one count */}
        <div className="mx-3 my-5">
          {/* start count */}
          <h3 className="fw-bold">
            <CountUp
              start={viewPortEntered ? 0 : null}
              end={7865}
              duration={5}
              redraw={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                  >
                    <span>+</span>
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
          </h3>
          {/* end count */}
          <p>Photos</p>
        </div>
        {/* end container of one count */}
        {/* container of one count */}
        <div className="mx-3 my-5">
          {/* start count */}
          <h3 className="fw-bold">
            <CountUp
              start={viewPortEntered ? 0 : null}
              end={8965}
              duration={5}
              redraw={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                  >
                    <span>+</span>
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
          </h3>
          {/* end count */}
          <p>Saving</p>
        </div>
        {/* end container of one count */}
        {/* container of one count */}
        <div className="mx-3 my-5">
          {/* start count */}
          <h3 className="fw-bold">
            <CountUp
              start={viewPortEntered ? 0 : null}
              end={89526}
              duration={5}
              redraw={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                  >
                    <span>+</span>
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
          </h3>
          {/* end count */}
          <p>Rockets</p>
        </div>
        {/* end container of one count */}
        {/* container of one count */}
        <div className="mx-3 my-5">
          {/* start count */}
          <h3 className="fw-bold">
            <CountUp
              start={viewPortEntered ? 0 : null}
              end={9854}
              duration={5}
              redraw={true}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                  >
                    <span>+</span>
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
          </h3>
          {/* end count */}
          <p>Globes</p>
        </div>
        {/* end container of one count */}
      </div>
    </>
  );
}
