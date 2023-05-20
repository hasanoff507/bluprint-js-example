import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Table } from "antd";
import { Button } from "@blueprintjs/core";
type Props = {};

const Components: React.FC<Props> = ({ }: Props) => {
    const [getAllData, setGetAllData] = useState()
    console.log(getAllData);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setGetAllData(json))
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: () => (
                <div>
                    <Button icon="play" intent="primary" />
                    <Button icon="edit" intent="warning" />
                    <Button icon="trash" intent="danger" />
                </div>
            )
        },
    ];
    return (
        <div>
            <Table dataSource={getAllData} columns={columns} rowKey='id' />
        </div>
    );
};

export default Components;