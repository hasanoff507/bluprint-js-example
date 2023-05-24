import React from "react";
import { Button, Form, Input } from 'antd';
import { getAllType } from "../index";


type Props = {
    title: string,
    loading: boolean
    id: number | undefined
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setGetAllData: React.Dispatch<React.SetStateAction<getAllType[]>>
    handleEditHide: any
};

const Edit: React.FC<Props> = ({ title, loading, id, setTitle, setLoading, setGetAllData, handleEditHide }: Props) => {

    const onHandleFinish = async (values:any) => {
        console.log('Success:', values);
        const empdata = { title };
        
        try {
          setLoading(true);
      
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH', // Use PATCH instead of PUT
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(empdata)
          });
      
          if (response.ok) {
            setGetAllData(prevData => {
              const updatedData = prevData.map(item => {
                if (item.id === id) {
                  return { ...item, title }; // Update only the title
                }
                return item;
              });
              return updatedData;
            });
            handleEditHide();
          } else {
            console.error('Error:', response.status);
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      };
      

    const onHandleFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="edit"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onHandleFinish}
                onFinishFailed={onHandleFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
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

export default Edit;