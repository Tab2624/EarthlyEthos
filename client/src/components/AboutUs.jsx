import React from "react";
import { useEffect, useState } from "react";


const AboutUs = (props) => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll back to the top
    // when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div>
      <div className="large-margin-top-2 d-flex">
        <img
          className="border flex-short"
          src="https://i.pinimg.com/736x/fd/d3/24/fdd324c8c1bc83420825b7018c34ef1c.jpg"
          alt="caring for the planet"
        />
        <div className="pt-3 m-2 text-center flex-short-2 ps-5 pe-5">
          <h1 className="m-2 text-end">About Us</h1>
          <hr />
          <h3 className="m-2 mt-5">What We Are About</h3>
          <p className="m-2 ">
            Welcome to EarthlyEthos, where sustainability meets style. We are
            passionate about making a positive impact on the planet by providing
            high-quality, eco-friendly products that inspire conscious living.
          </p>
          <h3 className="m-2 mt-5">Our Mission</h3>
          <p className="m-2 ">
            At EarthlyEthos, our mission is to promote a sustainable lifestyle
            by offering a curated selection of environmentally friendly
            products. We believe that small, everyday choices can make a big
            difference, and we are committed to providing you with alternatives
            that reduce your environmental footprint.
          </p>
          <h3 className="m-2 mt-5">Our Commitment to Sustainability</h3>
          <ul className="m-2">
            <li>
              <b>Environmentally Conscious Sourcing:</b>
            </li>
            <li>
              We carefully source our products from ethical and eco-friendly
              suppliers who share our commitment to sustainability.
            </li>
            <li>
              <b>Plastic-Free Packaging:</b>
            </li>
            <li>
              We are dedicated to minimizing waste. That's why our packaging is
              plastic-free and made from recycled or compostable materials.
            </li>
            <li>
              <b>Carbon-Neutral Shipping:</b>
            </li>
            <li>
              We strive to offset our carbon footprint by partnering with
              eco-friendly shipping providers and investing in carbon offset
              programs.
            </li>
          </ul>
          <h3 className="m-2 mt-5">Our Product Range</h3>
          <p className="m-2">
            From reusable and biodegradable items to upcycled and ethically
            produced goods, our product range is thoughtfully curated to align
            with your values. Whether you're looking for stylish alternatives to
            single-use plastics or seeking innovative solutions to reduce waste,
            we have something for everyone.
          </p>
          <h3 className="m-2 mt-5">Join Us on the Green Journey</h3>
          <p className="m-2">
            Embark on a journey with EarthlyEthos towards a greener, more
            sustainable future. Together, we can make a difference—one
            eco-friendly product at a time. Thank you for choosing EarthlyEthos
            as your partner in sustainable living.
          </p>
        </div>
      </div>
      <div className="d-flex">
        <div className="pt-3 m-2 text-center flex-short-2 ps-5 pe-5">
          <h1 className="text-start ">Store Policies</h1>
          <hr />
          <ul>
            <li>
              <h3 className="m-2 mt-5">Privacy Policy</h3>
            </li>
            <li>
              At EarthlyEthos, we value your privacy and are committed to
              protecting any information you provide on our website. Our Privacy
              Policy outlines how we collect, use, and protect your personal
              information. By using our website, you agree to the terms outlined
              in this policy.
            </li>
            <li>
              <h3 className="m-2 mt-5">Terms and Conditions</h3>
            </li>
            <li>
              Please read our Terms and Conditions carefully before using
              EarthlyEthos. These terms govern your use of our website and any
              products or services offered. By accessing or using our website,
              you agree to be bound by these terms.
            </li>
            <li>
              <h3 className="m-2 mt-5">Return and Refund Policy</h3>
            </li>
            <li>
              As EarthlyEthos is a student project and doesn't involve real
              products or transactions, we do not offer returns or refunds. Feel
              free to explore the website and its features without any financial
              commitment.
            </li>
            <li>
              <h3 className="m-2 mt-5">Cookie Policy</h3>
            </li>
            <li>
              Our Cookie Policy explains how we use cookies on EarthlyEthos.
              Cookies are small text files stored on your device to enhance user
              experience. By using our website, you consent to the use of
              cookies as described in our Cookie Policy.
            </li>
            <li>
              <h3 className="m-2 mt-5">Intellectual Property</h3>
            </li>
            <li>
              All content on EarthlyEthos, including but not limited to text,
              images, and graphics, is the property of the student project team.
              Unauthorized use or reproduction of our content is prohibited.
            </li>
          </ul>
        </div>
        <img
          className="border flex-short"
          src="https://blog.techguard.com/hubfs/Policies_Procedures.png"
          alt="policies"
        />
      </div>
      <div className="d-flex">
        <img className="flex-short" width="400px" src="https://bluerevolution.ifremer.fr/var/storage/images/_aliases/fullsize/medias-ifremer/medias-bluerevolution/contact-us/1811720-1-eng-GB/Contact-us.png" alt="contact us" />
        <div className="pt-3 m-2 mt-5 text-center flex-short-2 ps-5 pe-5" id="contactUs">
            <h1 className="text-end">Contact Us</h1>
            <hr />
            <h3>
                Contact Information
            </h3>
            <p>Email: redacted@redacted.com</p>
            <p>Phone: (555) 555-5555</p>
            <h3>
                Our Office
            </h3>
            <p>12345 Smith Road, Columbus, OH 43210, United States</p>
            <h3>
                Social Media
            </h3>
            <div className="justify-center d-flex">
            <img
              className="p-1 ms-2"
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="facebook-new"
            />
            <img
              className="p-1"
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
            <img
              className="p-1"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/twitter.png"
              alt="twitter"
            />
            </div>
            <h3>Customer Support</h3>
            <p>Our dedicated customer support team is available to assist you.</p>
            <p>Business Hours: Monday to Friday, 9:00 AM to 5:00 PM (Eastern Standard Time)</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
