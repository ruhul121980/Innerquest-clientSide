import React from "react";

export default function Banner() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src="https://i.ibb.co/1RJ5m48/jason-goodman-w-Vh5gr-SMYa-Y-unsplash.jpg"
          className="w-full md:w-72 lg:w-96 rounded-lg shadow-2xl mb-6 lg:mb-0 lg:mr-8"
          alt="Artwork"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {" "}
            Welcome to Inner Quest Counseling Center{" "}
          </h1>
          <p className="py-2 lg:py-0 lg:pl-4 text-base md:text-lg lg:text-xl">
            {" "}
            we understand that life's journey can be filled with challenges,
            uncertainties, and moments of profound growth. That's why we're here
            to offer you compassionate support and guidance every step of the
            way.Our team of experienced counselors is dedicated to helping you
            navigate life's complexities and discover your inner strength.
            Whether you're struggling with anxiety, depression, relationship
            issues, or simply seeking personal growth, we provide a safe and
            non-judgmental space for you to explore your thoughts, emotions, and
            aspirations.
          </p>
        </div>
      </div>
    </div>
  );
}
