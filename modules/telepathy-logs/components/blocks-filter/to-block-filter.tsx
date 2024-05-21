import { useLogsStore } from "../../stores";
import * as Form from "@radix-ui/react-form";
import { useEffect, useState } from "react";
import S from "./blocks-filter.module.css";

export const ToBlockFilter = () => {
	const store = useLogsStore();
	const [formState, setFormState] = useState<number>(store.toBlock);

	useEffect(() => {
		setFormState(store.toBlock);
	}, [store.toBlock]);

	const validateInput = (toBlock: number): number => {
		if (toBlock < store.earliestBlock) {
			return store.earliestBlock + 1;
		}

		return Math.min(toBlock, store.latestBlock);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validatedToBlock = validateInput(formState);

		setFormState(validatedToBlock);
		store.updateRangeOffset(validatedToBlock);
	};

	return (
		<Form.Root onSubmit={handleSubmit}>
			<Form.Field name="offset" className={S.field}>
				<Form.Label className={S.formLabel}>
					starting block
				</Form.Label>
				<div className={S.formField}>
					<Form.Control asChild>
						<input
							className={S.inputField}
							value={formState}
							onChange={(e) =>
								setFormState(
									Number.parseInt(e.target.value)
								)
							}
							type="number"
						/>
					</Form.Control>

					<Form.Submit
						disabled={
							store.toBlock === formState ||
							store.status === "LOADING"
						}
						className={S.submitButton}
					>
						apply
					</Form.Submit>
				</div>
			</Form.Field>
		</Form.Root>
	);
};
