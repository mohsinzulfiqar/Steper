import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { aboutAddress } from "../Fetures/formSlice/formSlice";
import { next, prev } from "../Fetures/formSlice/formSlice";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: "${label} is required!",
};

function First() {
	const dispatch = useDispatch();
	const address = useSelector((state) => state.steper.address);
	console.log("Address", address);
	const onFinish = (e) => {
		dispatch(aboutAddress(e));
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
					name="street"
					label="Street"
					rules={[{ required: true }]}
				>
					<Input required />
				</Form.Item>
				<Form.Item
					name="city"
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
				<Form.Item
					name="state"
					label="State"
					rules={[{ required: true }]}
				>
					<Input required />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type="primary" htmlType="submit">
						Next
					</Button>
					<Button
						onClick={() => {
							dispatch(prev());
						}}
					>
						Previous
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default First;
