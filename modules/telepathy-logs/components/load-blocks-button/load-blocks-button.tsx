import { useLogsStore } from "@modules/telepathy-logs/stores";
import { Button } from "@radix-ui/themes";

export const LoadBlocksButton = () => {
	const store = useLogsStore();

	return (
		<div className="flex flex-col items-center justify-center max-w-screen-sm pt-4 pb-48 mx-auto">
			{store.hasNextPage && (
				<Button
					className="text-md rounded-full bg-brandbright-900 text-branddark-900 py-[1.25em] px-[1.5em]"
					disabled={store.status === "LOADING"}
					onClick={() => {
						store.loadNextPage();
					}}
				>
					{store.status === "LOADING" && "loading..."}
					{store.status === "ERROR" && "oops..."}
					{store.status === "SUCCESS" && "Load More"}
				</Button>
			)}
			{!store.hasNextPage && <p>End of logs</p>}
		</div>
	);
};
