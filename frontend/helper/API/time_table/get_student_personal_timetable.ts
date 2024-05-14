"use server"

import axios from "axios";
import {cookies} from "next/headers";
import { SimpleLog } from "@satvikshukla/beautify-console";

interface requestType{
}

interface TimeTableByClass{
    table_data:{
        class_id : number
        day : "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY"
        lecture : number
        subject_id : number
        teacher_id : number
        teacher_name : string
        subject_name : string
        class_name : string
    }[],
    class_data:{
        class_id : number
        class_name : string
        start_date : string | null
        end_date : string | null
        coordinator : string | null
    }
}

interface responseType{
    error: boolean,
    data ?: TimeTableByClass,
    message ?: string[],
    status_code: number
}

const API_Get_Student_Specific_Timetable = async () : Promise<responseType> =>{
    const cookieFactory = cookies()
    const accessToken = cookieFactory.get("accessToken")?.value;

    if(!accessToken)
        return {
            error : true,
            status_code: 401,
            message : ["SignIn again"]
        }

    try{
        SimpleLog.info(`[ CALLED ] : API_Get_Student_Specific_Timetable :`)
        const response:responseType =  await axios.get(process.env.BACKEND_URL + "/v1/timetable/get_student_personal_timetable", {
            headers:{
                authorization: accessToken,
            }
        }).then(res => res.data);
        SimpleLog.info(`[ RETURN ] : API_Get_Student_Specific_Timetable : ${JSON.stringify(response)}`)
        return  response;
    }catch (e){
        SimpleLog.error(`[ ERROR ] : API_Get_Student_Specific_Timetable : ${JSON.stringify(e)}`)
        return {
            error : true,
            status_code : 501,
            message : ["Internal Server Error"]
        }
    }
}

export {API_Get_Student_Specific_Timetable}
