
import React,{useState} from "react";
import { Button, Form, Input } from 'antd';
import { getAllType } from "../index";

type Props = {
    title: string,
    loading: boolean
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setGetAllData: React.Dispatch<React.SetStateAction<getAllType[]>>
    onHideHandleClick: any
};

const Creat: React.FC<Props> = ({ title, setTitle, setLoading, setGetAllData, onHideHandleClick }: Props) => {

    const onFinish = async (values: any) => {
        const empdata = { title, };
        try {
            setLoading(true);

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(empdata)
            });

            if (response.ok) {
                const postData = await response.json();
                setGetAllData((prevData) =>
                    prevData.filter((item) => item.title !== title)
                );
                setGetAllData((prevData) => [...prevData, { ...postData, empdata }]);
                onHideHandleClick();
            }
            setLoading(false);

        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="create"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Title"
                    name="title"
                >
                    <Input value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Creat;
