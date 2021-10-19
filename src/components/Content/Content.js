import React from 'react';
import PropTypes from 'prop-types';
import TaskForm from "../TaskForm/TaskForm";
import Search from "./Control/Search/Search";
import Sort from "./Control/Sort/Sort";
import TaskList from "./TaskList/TaskList";
import Pagination from "./Pagination/Pagination";

Content.propTypes = {};

function Content(props) {
    return (
        <div className="text-center col-end-13 col-span-8 rounded-lg shadow-lg border border-gray-200 ">
            <div className="text-left pb-2 ml-6 mt-5">
                <button className="bg-blue-500 py-2 px-10 rounded-md text-white hover:bg-blue-400">
                    <i className="fas fa-plus-circle"/>&nbsp; Thêm mới
                </button>
            </div>
            <div className=" flex justify-start items-center mx-6 mt-4 relative ">
                <Search/>
                <Sort/>
            </div>
            <div className="bg-white rounded-lg py-6">
                <div className="block overflow-x-auto mx-6 pb-5">
                <TaskList/>
                </div>
                <Pagination/>
            </div>

        </div>
    );
}

export default Content;