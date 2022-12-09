import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Table({ trigger }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    handleClick();
  }, [trigger]);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const params = {
        size: 40,
        page: 1,
      };
      const { data, statusText } = await axios.get(
        "http://localhost:8082/card",
        {
          params,
        }
      );
      if (statusText == "OK") {
        setData(data);
      }
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <table className="min-w-full table-auto border-collapse border border-slate-400 ... ">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-16 py-2 border border-slate-600 ...">
            <span className="text-gray-800">Name</span>
          </th>
          <th className="px-16 py-2 border border-slate-600 ...">
            <span className="text-gray-800">Card Number</span>
          </th>
          <th className="px-16 py-2 border border-slate-600 ...">
            <span className="text-gray-800">Balance</span>
          </th>
          <th className="px-16 py-2 border border-slate-600 ...">
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
  );
}
