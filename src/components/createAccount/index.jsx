import React from "react";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import First from "../first";
import Second from "../second";
import Third from "../third";
import { useSelector, useDispatch } from "react-redux";
import { next, prev } from "../Fetures/formSlice/formSlice";

const { Step } = Steps;

const steps = [
	{
		title: "First",
		content: <First />,
	},
	{
		title: "Second",
		content: <Second />,
	},
	{
		title: "Last",
		content: <Third />,
	},
];

const CreateAccount = () => {
	const current = useSelector((state) => state.steper.current);
	console.log("this is the current", current);
	const dispatch = useDispatch();

	return (
		<>
			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className="steps-content">{steps[current].content}</div>
			<div className="steps-action" style={{ display: "none" }}>
				{current < steps.length - 1 && (
					<Button type="primary" onClick={() => dispatch(next())}>
						Next
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button
						type="primary"
						onClick={() => message.success("Processing complete!")}
					>
						Done
					</Button>
				)}
				{current > 0 && (
					<Button style={{ margin: "0 8px" }} onClick={() => dispatch(prev())}>
						Previous
					</Button>
				)}
			</div>
		</>
	);
};
export default CreateAccount;
