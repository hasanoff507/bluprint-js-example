import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Table } from "antd";
import { Button } from "@blueprintjs/core";
import Listings from "./listing";
type Props = {};
export interface getAllType {
    completed:boolean
    id:number
    title:string
    userId:number
}
const Components: React.FC<Props> = ({ }: Props) => {
    const [getAllData, setGetAllData] = useState<getAllType[]>([])
    
   


    return (
        <div>
            <Listings getAllData={getAllData} setGetAllData={setGetAllData} />
        </div>
    );
};

export default Components;