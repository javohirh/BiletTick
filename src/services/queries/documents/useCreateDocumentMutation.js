import {useMutation} from "react-query";
import {requestPost} from "../../requets";
import {SETTINGS_DOCUMENTS_API} from "../../../constants/apiConstatns";

export function useCreateDocumentMutation() {
    return useMutation({
        mutationFn: (data) => requestPost(SETTINGS_DOCUMENTS_API, {data: data}),
    });
}
