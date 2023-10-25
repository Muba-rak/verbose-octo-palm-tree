import React from "react";
import Progress from "./Progress";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Goal = ({ title, description, progress, id }) => {
  return (
    <div className="border-bottom border-3 border-secondary-subtle pb-4 px-4 mt-4 shadow-sm">
      <h2 className="fw-bold text-capitalize">{title}</h2>
      <p>{description} </p>
      <div className="d-block d-md-flex align-items-end justify-content-between">
        <Progress num={progress} />
        <div className="mt-2 mt-lg-0 d-flex gap-4">
          <button className="blue-bg  updatebtn">
            <Link
              to={`/update/${id}`}
              className="text-decoration-none text-white"
            >
              <MdOutlineModeEditOutline /> Update Progress{" "}
            </Link>{" "}
          </button>
          <button className=" border-none bg-transparent transparent delbtn">
            <RiDeleteBinLine /> Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
