import React from "react";
import Head from "next/head";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "../data/data";

const customers = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Customer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between px-4 pt-4">
          <h2 className="capitalize">Customer</h2>
          <h2 className="capitalize">Welcome back, Clint</h2>
        </div>
        <div className="p-4">
          <div className="customerList m-auto sm:p-4 p-2 border rounded-lg bg-white">
            <div className="sm:my-3 my-0 p-2 grid md:grid-cols-4 grid-cols-2 items-center">
              <span className="capitalize">name</span>
              <span className="md:blocks hidden capitalize">email</span>
              <span className="md:block hidden capitalize">last order</span>
              <span>
                <span className="capitalize md:block sm:hidden block">
                  Method
                </span>
                <span className="capitalize lg:hidden md:hidden sm:block hidden ">
                  email &amp; method
                </span>
              </span>
            </div>
            <ul>
              {data.map((order, id) => (
                <li
                  key={id}
                  className="grid md:grid-cols-4 grid-cols-2 items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 lg:p-3 p-1 rounded-lg">
                      <BsPersonFill className="text-purple-800" />
                    </div>
                    <p className="person lg:pl-4 pl-2">
                      {order.name.first + " " + order.name.last}
                    </p>
                  </div>
                  <p className="sm:block hidden text-gray-600">
                    {order.name.first}@email.com
                  </p>
                  <p className="sm:block hidden">{order.date}</p>
                  <div className="flex justify-between items-center">
                    <p className="methodTitle">{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default customers;
