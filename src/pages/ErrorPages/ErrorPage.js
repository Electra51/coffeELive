import React from "react";
import { MdArrowBack } from "react-icons/md";
import ErrorImage from "../../assets/Error.svg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-[350px] md:max-w-[750px] lg:max-w-[1210px] mx-auto mt-20">
      <div className="relative">
        <Link to="/">
          <button className="border rounded-[8px] px-[40px] lg:px-[30px] py-[20px] lg:py-[10px] flex justify-center items-center gap-1 bg-black text-white hover:bg-paragraphColor hover:text-white mt-8 text-xl mx-auto lg:mx-0 absolute top-[40%] left-[40%]">
            <MdArrowBack />
            <p
              className="text-[18px] font-semibold"
              style={{
                fontFamily: "value_sans_proregular",
              }}>
              Back to home
            </p>
          </button>
        </Link>
        <img src={ErrorImage} alt="" className="h-full w-full object-fill" />
      </div>
    </div>
  );
};

export default ErrorPage;
