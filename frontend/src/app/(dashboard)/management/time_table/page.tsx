"use client"

import React, {useEffect} from 'react';
import TimeTableByClass from "../../../../../components/dashboard/management/time_table/TimeTable_By_Class";
import TimeTableByTeacher from "../../../../../components/dashboard/management/time_table/TimeTable_By_Teacher";
import TimeTableNew from "../../../../../components/dashboard/management/time_table/TimeTable_New";
import TimeTableEdit from "../../../../../components/dashboard/management/time_table/TimeTable_Edit";

const Page = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<"CLASS"|"TEACHER"|""|"NEW"|"EDIT">("");
    const [optionalMounted, setOptionalMounted] = React.useState(<></>);

    useEffect(() => {
        if(selectedCategory==="CLASS")
            setOptionalMounted(<TimeTableByClass />)
        if(selectedCategory==="TEACHER")
            setOptionalMounted(<TimeTableByTeacher />)
        if(selectedCategory==="NEW")
            setOptionalMounted(<TimeTableNew />)
        if(selectedCategory==="EDIT")
            setOptionalMounted(<TimeTableEdit />)
    }, [selectedCategory]);

    return (
        <div className={`flex w-full pl-4 flex-col gap-6`}>
            <div className={`text-2xl pt-4 flex justify-between`}>
                <span className={`font-semibold`}>Time Table</span>
            </div>

            <div className={`flex gap-4`} key={selectedCategory}>
                <span onClick={()=>{setSelectedCategory("CLASS")}} className={`cursor-pointer bg-gray-100 rounded-md px-2 py-1 text-sm`}
                      style={{
                          backgroundColor: selectedCategory === "CLASS" ? "rgb(219,245,255)" : "",
                      }}
                >Class</span>
                <span onClick={()=>{setSelectedCategory("TEACHER")}} className={`cursor-pointer bg-gray-100 rounded-md px-2 py-1 text-sm`}
                      style={{
                          backgroundColor: selectedCategory === "TEACHER" ? "rgb(219,245,255)" : "",
                      }}
                >Teacher</span>
                <span onClick={()=>{setSelectedCategory("NEW")}} className={`cursor-pointer bg-gray-100 rounded-md px-2 py-1 text-sm `}
                      style={{
                          backgroundColor: selectedCategory === "NEW" ? "rgb(219,245,255)" : "",
                      }}
                >New</span>
                <span onClick={()=>{setSelectedCategory("EDIT")}} className={`cursor-pointer bg-gray-100 rounded-md px-2 py-1 text-sm`}
                      style={{
                          backgroundColor: selectedCategory === "EDIT" ? "rgb(219,245,255)" : "",
                      }}
                >Edit</span>
            </div>

            {optionalMounted}
        </div>
    );
};

export default Page;
