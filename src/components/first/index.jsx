import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { aboutDetail } from "../Fetures/formSlice/formSlice";
import { next } from "../Fetures/formSlice/formSlice";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};

function First() {
	const about = useSelector((state) => state.steper.about);
	const dispatch = useDispatch();
	console.log("About", about);

	const onFinish = (e) => {
		dispatch(aboutDetail(e));
		dispatch(next());
	};
	return (
		<div>
			{" "}
			<Form
				{...layout}
				name="nest-messages"
				onFinish={onFinish}
				validateMessages={validateMessages}
			>
				<Form.Item
					name="name"
					label="Name"
					rules={[{ required: true }]}
				>
					<Input required />
				</Form.Item>
				<Form.Item
					name="email"
					label="Email"
					rules={[{ type: "email" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="age"
					label="Age"
					rules={[{ type: "number", min: 0, max: 99 }]}
				>
					<InputNumber />
				</Form.Item>
				<Form.Item name="website" label="Website">
					<Input />
				</Form.Item>
				<Form.Item name="introduction" label="Introduction">
					<Input.TextArea />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Next
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default First;
