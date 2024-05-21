import { useState } from "react";
import { toast } from "react-toastify";

type CopiedValue = string | undefined;
type CopyFn = (text: string) => Promise<void>;

// modified from https://usehooks-ts.com/
export function useCopyToClipboard(): [CopiedValue, CopyFn] {
	const [copiedText, setCopiedText] = useState<CopiedValue>();

	const copy: CopyFn = async (text) => {
		if (!navigator?.clipboard || !window?.isSecureContext) {
			toast.warn("Clipboard not supported");
			return;
		}

		await navigator.clipboard.writeText(text);
		setCopiedText(text);
		toast.success("Copied to clipboard!");
	};

	return [copiedText, copy];
}
