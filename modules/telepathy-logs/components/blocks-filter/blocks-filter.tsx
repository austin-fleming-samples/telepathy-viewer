import { RangeFilter } from "./range-filter";
import { ToBlockFilter } from "./to-block-filter";
import S from './blocks-filter.module.css'

export const BlocksFilter = () => {
	return (
		<div>
			<div className={S.row}>
				<RangeFilter />
				<ToBlockFilter />
			</div>
		</div>
	);
};
