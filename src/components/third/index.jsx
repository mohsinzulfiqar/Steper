import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCompanyDetail, prev } from "../Fetures/formSlice/formSlice";
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: "${label} is required!",
};

function Third() {
	const cData=useSelector(state=>state.steper.companyDetail)
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const Company = useSelector((state) => state.steper.companyDetail);
	const onFinish = (e) => {
		dispatch(addCompanyDetail(e));
        
	};
	console.log("Company Data",cData);
	const onFill = () => {
		form.setFieldsValue({
			company: Company.company,
            Designation: Company.Designation,
            Admin:Company.Admin
		});
	};

	return (
		<div>
			{" "}
			<Form
				{...layout}
				name="nest-messages"
				onFinish={onFinish}
				validateMessages={validateMessages}
				form={form}
			>
				<Form.Item
					name="company"
					label="Street"
					rules={[{ required: true }]}
				>
					<Input required />
				</Form.Item>
				<Form.Item
					name="Designation"
					label="City"
					rules={[{ required: true }]}
				>
					<Input required />
				</Form.Item>
				<Form.Item
					name="province"
					label="Province"
					rules={[{ required: true }]}
				>
					<Input required />
				</Form.Item>
				<Form.Item name="Admin" valuePropName="checked">
					<Checkbox>
						Admin
					</Checkbox>
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
					<Button htmlType="button" onClick={()=>{dispatch(prev())}}>
						Previous
					</Button>
					<Button htmlType="button" onClick={onFill}>
						Fill
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default Third;
