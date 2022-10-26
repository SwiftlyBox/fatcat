import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";
import banner from "../assets/banner.jpg";
import del from "../assets/del.jpg";

import data from "../assets/data.jpg";

const TabsComponent = () => {
  return (
    <>
      <div
        style={{
          width: 800,
          padding: 30,
          alignItems: "center",
          justifyContent: "center",
          display: "grid",
          margin: "auto",
          marginTop: 150,
        }}
      >
        <h4 style={{ textAlign: "center", fontSize: 32, fontWeight: "900" }}>
          Delivering more
        </h4>
        <p>
          When you think of SwiftlyBox, you think of delivery — but the
          SwiftlyBox Merchant is delivering more.
        </p>
        <Tabs defaultActiveKey="second">
          <Tab
            eventKey="first"
            title="Grow online"
            style={{ textAlign: "left" }}
          >
            <h2 style={{ fontSize: 19 }}> Grow Online With SwiftlyBox</h2>
            Introduce your store to new customers in your area interested in
            delivery, pickup, and more.
            <Image
              src={banner}
              alt="Grow Online With SwiftlyBox"
              width="300"
              height="300"
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                display: "grid",
                borderRadius: 9,
              }}
            />
          </Tab>
          <Tab eventKey="second" title="Attract new customers">
            <h1 style={{ fontSize: 19 }}>Attract new customers</h1>
            With SwiftlyBox you can expand your restaurant to nearby communities
            while you stay at your primary location.This will increase order
            volume for your business.With the help our data scrapper we will
            advise you on which location to expand to.
            <br />
            <Image
              src={data}
              alt="Attract New Customers"
              width="300"
              height="300"
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                display: "grid",
                borderRadius: 9,
              }}
            />
          </Tab>
          <Tab eventKey="third" title="Start your restaurant">
            Our Home Kitchen is a solution we had for entrepreneurs who wants to
            start a restaurant but {`don't`} have the capital to do so.Start
            your restaurant journey with us by your side.Start cooking in your
            own home kitchen and deliver your delicious food .<br />
            <Image
              src={del}
              alt="Home Kitchen"
              width="300"
              height="300"
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                display: "grid",
                borderRadius: 9,
              }}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default TabsComponent;
