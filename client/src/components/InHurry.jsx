import React from "react";

const InHurry = () => {
  return (
    <>
      <div className="m-2 text-center">In hurry? use below</div>
      <div className=" flex justify-center items-center mb-2 ">
        <table border={true}>
          <div className="border-2  p-5  bg-gray-100 rounded-2xl ">
            <tr className="p-5">
              <th>Email</th>
              <th>Password</th>
            </tr>
            <tr className="p-5">
              <td className="text-center">user@gmail.com</td>
              <td className="text-center">123456</td>
            </tr>
            <tr className="p-5">
              <td className="text-center">deployed@gmail.com</td>
              <td className="text-center">123456</td>
            </tr>
          </div>
        </table>
      </div>
    </>
  );
};

export default InHurry;
