import React, { use, useState } from "react";
import Container from "../Container/Container";
import Carts from "../Carts/Carts";
import Textstates from "../Textstates/Textstates";
import Resolve from "../Resolve/Resolve";

const Containbox = ({ reachiv, setReachiv, resolve, setResolve, customer }) => {
  const cusJson = use(customer);
  const [customerJson, setCustomerJson] = useState(cusJson);

  const dataFunction = (p) => {
    const taskRemove = reachiv.filter((res) => res.id !== p.id);
    const resolveTask = customerJson.filter((res) => res.id === p.id);
    setResolve([...resolve, resolveTask]);
    setReachiv(taskRemove);
    const cardRemove = customerJson.filter((res) => res.id !== p.id);
    setCustomerJson(cardRemove);
  };
  return (
    <div className="py-5">
      <Container>
        <div>
          <h1 className="text-2xl font-bold">Customer Tickets</h1>
          <div className="grid md:grid-cols-7 md:gap-6">
            <div className="mt-8 grid md:grid-cols-2 gap-5 md:col-span-5">
              {/* cart */}

              {customerJson.map((res) => (
                <Carts
                  key={res.id}
                  res={res}
                  reachiv={reachiv}
                  setReachiv={setReachiv}
                ></Carts>
              ))}
            </div>
            {/* sms container */}
            <div className="rounded-xl col-span-2">
              <Textstates
                reachiv={reachiv}
                dataFunction={dataFunction}
              ></Textstates>
              <Resolve resolve={resolve}></Resolve>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Containbox;
