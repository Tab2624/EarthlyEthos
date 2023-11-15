import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import TrashCan from "./TrashCan";
import { useSelector } from "react-redux";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const Checkout = (props) => {
  const user = useSelector((state) => state.user);
  console.log(user)
  const [price, setPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [newPrice, setNewPrice] = useState(price);
  const [donationCost, setDonationCost] = useState(0);
  const [finalPrice, setFinalPrice] = useState(price);
  const products = [
    {
      name: "Backpack",
      image:
        "https://www.stoneycloverlane.com/cdn/shop/products/0326_Shot_13_Hand_Model_Classic_Backpack_CottonCandy_0271_RT_V3_grande.jpg?v=1650573274",
      description: "This is a backpack",
      price: 14.99,
    },
    {
      name: "Mousepad",
      image:
        "https://m.media-amazon.com/images/I/61RheQjHm+L._AC_UF894,1000_QL80_.jpg",
      description: "Mousepad which is ethically sourced",
      price: 10.99,
    },
    {
      name: "Edible Forks",
      image:
        "https://i.cbc.ca/1.4763252.1532634753!/fileImage/httpImage/bakey-s-3.jpg",
      description: "Edible forks instead of plastic!",
      price: 12.0,
    },
    {
      name: "Go Green shirt",
      image:
        "https://i.pinimg.com/originals/a4/6a/bb/a46abbaf15440e5daf83e9350fc4e9b7.jpg",
      description: "Recycled material shirt, sport the green!",
      price: 19.99,
    },
    {
      name: "Reuseable bag",
      image:
        "https://cdn.shopify.com/s/files/1/0070/7032/files/blank_tote_merch_swag_fashion_print_on_demand.jpg?v=1689965049",
      description: "Reuseable and recycled bag",
      price: 9.99,
    },
    {
      name: "Reuseable tupperware silicone lids",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681744106-orblue-silicone-stretch-lids-643d60d5ac251.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description: "Reuseable silicone lids",
      price: 9.99,
    },
    {
      name: "Cow Statue",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681744106-orblue-silicone-stretch-lids-643d60d5ac251.jpg?crop=1xw:1xh;center,top&resize=980:*",
      description: "Small cow statuette",
      price: 9.99,
    },
  ];

  function calculateTotal(products) {
    let total = 0;
    for (let product of products) {
      total += product.price;
    }
    return +(Math.round(total + "e+2") + "e-2");
  }

  function calculateTotalNew(shippingCost, price) {
    const newTotal = parseFloat(shippingCost) + parseFloat(price);
    return +(Math.round(newTotal + "e+2") + "e-2");
  }

  useEffect(() => {
    const total = calculateTotal(products);
    setPrice(total);
  }, []);

  useEffect(() => {
    const newTotal = calculateTotalNew(shippingCost, price);
    setNewPrice(newTotal);
  }, [donationCost, shippingCost, price, finalPrice]);

  useEffect(() => {
    const finalTotal = calculateTotalNew(donationCost, newPrice);
    setFinalPrice(finalTotal);
  }, [shippingCost, donationCost, price]);

  const handleShippingChange = (event) => {
    setShippingCost(event.target.value);
    setNewPrice(calculateTotalNew(event.target.value, price));
  };
  const handleDonationChange = (event) => {
    setDonationCost(event.target.value);
  };

  return (
    <div className="large-margin-top-2">
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>View Cart - $ {newPrice}</Accordion.Header>
            <Accordion.Body>
              {products.map((product) => (
                <div
                  id={product.name}
                  className="justify-between p-1 m-1 w-100 border-bottom d-flex"
                >
                  <p>{product.name}</p>
                  <div className="d-flex">
                    <p>$ {product.price}</p>
                    <TrashCan />
                  </div>
                </div>
              ))}
              <div className="justify-between p-1 m-2 w-100 border-bottom d-flex">
                <h5>Net Total</h5>
                <h5>$ {price}</h5>
              </div>

              <h5 className="mt-3">Select Shipping</h5>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="shipping"
                  id="shipping-free"
                  value="0"
                  checked={shippingCost === "0"}
                  onChange={handleShippingChange}
                />
                <label class="form-check-label" for="shipping-free">
                  FREE Shipping -- 5-9 Buisness Days
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="shipping"
                  id="shipping-299"
                  value="2.99"
                  checked={shippingCost === "2.99"}
                  onChange={handleShippingChange}
                />
                <label class="form-check-label" for="shipping-299">
                  $2.99 Shipping -- 3-6 Buisness Days
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="shipping"
                  id="shipping-699"
                  value="6.99"
                  checked={shippingCost === "6.99"}
                  onChange={handleShippingChange}
                />
                <label class="form-check-label" for="shipping-699">
                  $6.99 Shipping -- 1-2 Buisness Days
                </label>
              </div>
              <div className="justify-between p-1 m-2 w-100 border-bottom d-flex">
                <h3>Total</h3>
                <h3>$ {newPrice}</h3>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Details - $ {finalPrice}</Accordion.Header>
            <Accordion.Body>
              <h3>Would you like to donate $1 to help save the world*?</h3>
              <p>
                For more information on how we use this donation,{" "}
                <a href="#">click here.</a>
              </p>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="save-the-world"
                  id="save-world-yes"
                  value="1"
                  checked={donationCost === "1"}
                  onChange={handleDonationChange}
                />
                <label class="form-check-label" for="save-world-yes">
                  Yes! Donate a dollar.
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="save-the-world"
                  id="save-world-no"
                  value="0"
                  checked={donationCost === "0"}
                  onChange={handleDonationChange}
                />
                <label class="form-check-label" for="save-world-no">
                  Not today
                </label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Shipping</Accordion.Header>
            <Accordion.Body>
              <form>
                <div className="justify-between d-flex">
                  <div class="input-group mb-3 me-3">
                    <span class="input-group-text" id="basic-addon1">
                      First Name
                    </span>
                    <input
                      value={user.given_name}
                      type="text"
                      class="form-control"
                      placeholder="First Name..."
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Last Name
                    </span>
                    <input
                    value={user.family_name}
                      type="text"
                      class="form-control"
                      placeholder="Last Name..."
                    />
                  </div>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Address
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="123 Example Street..."
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Address (optional)
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apt, Lot, Ste..."
                  />
                </div>
                <div className="justify-between d-flex">
                  <div class="input-group mb-3 me-3">
                    <span class="input-group-text " id="basic-addon1">
                      Zip code
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="12345..."
                    />
                  </div>
                  <div class="input-group mb-3 me-3">
                    <span class="input-group-text " id="basic-addon1">
                      City
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="New York..."
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      State
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="NY..."
                    />
                  </div>
                </div>
                <hr />
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Phone Number
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="(555) 555-5555..."
                  />
                </div>
                <div className="justify-between d-flex">
                  <div class="input-group mb-3 me-3">
                    <span class="input-group-text" id="basic-addon1">
                      Email
                    </span>
                    <input
                      value={user.email}
                      type="text"
                      class="form-control"
                      placeholder="123@example.com..."
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      Confirm Email
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="123@example.com..."
                    />
                  </div>
                </div>
              </form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Payment</Accordion.Header>
            <Accordion.Body>
              <div class="input-group">
                <span class="input-group-text">Card Information</span>
                <input
                  type="password"
                  aria-label="card-number"
                  class="form-control w-50"
                  placeholder="Card Number"
                />
                <input
                  type="text"
                  aria-label="cvc"
                  class="form-control"
                  placeholder="CVC"
                />
                <input
                  type="text"
                  aria-label="expiration-date"
                  class="form-control"
                  placeholder="MM/YY"
                />
              </div>
              <h5 className="mt-4">Billing Address</h5>
              <hr />
              <div className="justify-between d-flex">
                <div class="input-group mb-3 me-3">
                  <span class="input-group-text" id="basic-addon1">
                    First Name
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name..."
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    Last Name
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name..."
                  />
                </div>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Address
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="123 Example Street..."
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  Address (optional)
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Apt, Lot, Ste..."
                />
              </div>
              <div className="justify-between d-flex">
                <div class="input-group mb-3 me-3">
                  <span class="input-group-text " id="basic-addon1">
                    Zip code
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="12345..."
                  />
                </div>
                <div class="input-group mb-3 me-3">
                  <span class="input-group-text " id="basic-addon1">
                    City
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="New York..."
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    State
                  </span>
                  <input type="text" class="form-control" placeholder="NY..." />
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Complete</Accordion.Header>
            <Accordion.Body>
              <h3>Finish Payment</h3>
              <hr />
              <p>
                EarthlyEthos is a <strong>student project</strong> and does NOT
                sell, ship, and/or produce any actual products, therefor cannot
                charge for anything. The button below does not submit any card
                information and will NOT charge you, and you will NOT recieve
                any products that you have "purchased".
              </p>
              <Link className="mt-3 btn btn-success" to="/thank-you">Submit Order</Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Checkout;
