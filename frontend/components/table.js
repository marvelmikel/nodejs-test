import axios from "axios";
import React, { useState, useEffect } from "react";
import Preloader from "./preloader";
import NoItem from "./noitem";
import { toast } from "react-toastify";

export default function Table() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const params = {
        size: 40,
        page: 1,
      };
      const { data, statusText } = await axios.get(
        "http://localhost:5000/card",
        {
          params,
        }
      );
      if (statusText == "OK") {
        setData(data);
      }
    } catch (error) {
      toast("Invalid Card", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
      setSubmitting(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          {data.length ? (
            <table className="min-w-full table-auto border-collapse ">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-16 py-2">
                    <span className="text-gray-800">Name</span>
                  </th>
                  <th className="px-16 py-2">
                    <span className="text-gray-800">Card Number</span>
                  </th>
                  <th className="px-16 py-2">
                    <span className="text-gray-800">Balance</span>
                  </th>
                  <th className="px-16 py-2">
                    <span className="text-gray-800">Limit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-200">
                {data.map((item, i) => (
                  <tr key={i} className="bg-gray-50 text-center">
                    <td className="px-16 py-2 border border-slate-600 ...">
                      <span className="text-center ml-2 font-semibold">
                        {item.name}
                      </span>
                    </td>
                    <td className="px-16 py-2 border border-slate-600 ...">
                      <span className="">{item.cardNumber}</span>
                    </td>
                    <td className="px-16 py-2 border border-slate-600 ... ">
                      <span className="">£{item.balance}</span>
                    </td>
                    <td className="px-16 py-2  border border-slate-600 ...">
                      <span className="">£{item.limit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <NoItem />
          )}
        </div>
      )}
    </div>
  );
}
