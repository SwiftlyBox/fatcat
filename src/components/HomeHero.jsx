import React from "react";
import Image from "next/image";
import Link from "next/link";
import love from "../assets/love.jpg";
import Script from "next/script"

const HomeHero = () => {
  return (
    <div>
      <Script
        type="text/javascript"
        src="https://apiv2.popupsmart.com/api/Bundle/394496"
        async
      ></Script>{" "}
      <section className="hero is-primary is-large header-image">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Restaurants and more,delivered to your porch.
            </h1>
            <h2 className="subtitle">With just one tap of a finger.</h2>
          </div>
        </div>
      </section>
      <style global jsx>{`
        .header-image {
          background-image: url("https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=600");
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-color: #999;
        }
      `}</style>
    </div>
  );
};

export default HomeHero;
