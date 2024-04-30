import React from 'react'

const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
          Welcome to
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        At compfy, we're passionate about bringing you the best selection of products combined with an exceptional shopping experience. Whether you're looking for the latest trends in fashion, cutting-edge gadgets, or unique home decor pieces, we've got you covered.
        <br />
        Our journey began with a simple idea: to create a destination where customers could find everything they need, all in one place. Since our inception, we've been committed to curating a diverse range of high-quality products sourced from trusted suppliers and brands worldwide.
        <br />
        What sets us apart is our dedication to customer satisfaction. We strive to exceed your expectations at every turn, from our user-friendly website and secure payment options to our responsive customer support team ready to assist you every step of the way.
        <br />
        But compfy is more than just an online retailer. We're a community of like-minded individuals who share a passion for discovery and innovation. We believe that shopping should be an adventure, and we're here to inspire you to explore new possibilities and elevate your lifestyle.
        <br />
        Thank you for choosing compfy. We're honored to be a part of your shopping journey, and we look forward to serving you for years to come.
        <br />
        Happy shopping!
        <br />
        Comfy Team
      </p>
    </>
  )
}

export default About