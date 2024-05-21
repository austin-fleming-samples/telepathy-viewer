import { useLogsStore } from "../../stores";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";
import { LOGS_MAX_BLOCKS_RANGE } from "../../constants";
import S from "./blocks-filter.module.css";

export const RangeFilter = () => {
	const store = useLogsStore();
	const [formState, setFormState] = useState<number>(store.searchRange);

	const validateInput = (range: number): number => {
		if (range < 1) {
			return 1;
		}
		return Math.min(range, LOGS_MAX_BLOCKS_RANGE);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const validatedRange = validateInput(formState);

		setFormState(validatedRange);
		store.updateRange(validatedRange);
	};

	return (
		<Form.Root
			onSubmit={handleSubmit}
			className="flex flex-row items-center justify-center gap-2"
		>
			<Form.Field name="range" className={S.field}>
				<Form.Label className={S.formLabel}>range</Form.Label>
				<div className={S.formField}>
					<Form.Control asChild>
						<input
							className={S.inputField}
							value={formState}
							onChange={(e) =>
								setFormState(
									validateInput(
										Number.parseInt(e.target.value)
									)
								)
							}
							type="number"
							max={LOGS_MAX_BLOCKS_RANGE}
							min={1}
						/>
					</Form.Control>
					<Form.Submit
						disabled={
							store.searchRange === formState ||
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
