import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { getAllType } from "../index";
import Creat from "../Create";
import { Button, Dialog, Classes } from "@blueprintjs/core";
import Edit from "../Edit";
interface Todo {
    id: number;
    title: string;
};

type Props = {
    getAllData: getAllType[];
    setGetAllData: React.Dispatch<React.SetStateAction<getAllType[]>>;
};

const Listings: React.FC<Props> = ({ getAllData, setGetAllData }: Props) => {
    const [loading, setLoading] = useState(true);
    const [firstModalOpen, setFirstModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);
    const [id, setId] = useState<number>()
    const [title, setTitle] = useState("")


    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setGetAllData(json);
                setLoading(false);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
                setLoading(false);
            });
    }, [setGetAllData]);


    const handleDelete = async (id: number) => {
        if (window.confirm("Do you want to remove?")) {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${id}`,
                    {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    }
                );

                if (response.ok) {
                    alert("Removed successfully.");
                    setLoading(true);
                    //Filter
                    setGetAllData((prevData) =>
                        prevData.filter((item) => item.id !== id)
                    );
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.log("Error deleting data:", error);
            }
        }
    };

    const handleEdit = (id: number) => {
        setSecondModalOpen(true)
        setId(id)
    }
    const handleEditHide = () => {
        setSecondModalOpen(false)
    }
    const onShowHandleClick = () => {
        setFirstModalOpen(true);
    }
    const onHideHandleClick = () => {
        setFirstModalOpen(false)
    }

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
            render: (_: any, record: Todo) => (
                <div >
                    <Space>
                        <Button style={{ border: 'none', background: 'unset', color: 'orange' }} icon="edit" onClick={() => handleEdit(record.id)} >
                            <Dialog onClose={handleEditHide} isOpen={secondModalOpen} title="Edit Post">
                                <div className={Classes.DIALOG_BODY}>
                                    <Edit id={id} title={title} setTitle={setTitle} loading={loading} setLoading={setLoading} setGetAllData={setGetAllData} handleEditHide={handleEditHide} />
                                </div>
                            </Dialog>
                        </Button>
                        <Button onClick={() => handleDelete(record.id)} icon="trash" intent="danger" />
                    </Space>
                </div>

            ),
        },
    ];

    return (
        <div>
            <Button onClick={onShowHandleClick} style={{ right: '0' }} icon="plus" >
                <Dialog onClose={onHideHandleClick} isOpen={firstModalOpen} title="Add Post">
                    <div className={Classes.DIALOG_BODY}>
                        <Creat title={title} setTitle={setTitle} loading={loading} setLoading={setLoading} setGetAllData={setGetAllData} onHideHandleClick={onHideHandleClick} />
                    </div>
                </Dialog>
            </Button>
            <Table dataSource={getAllData} columns={columns} loading={loading} rowKey='id' />
        </div>
    );
};

export default Listings;
