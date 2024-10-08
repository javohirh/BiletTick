import {useMutation} from "react-query";
import {requestPost} from "../../requets";
import {SETTINGS_FAQ_API} from "../../../constants/apiConstatns";


export function useCreateFaqMutation() {
    return useMutation({
        mutationFn: (data) => requestPost(SETTINGS_FAQ_API, { data:data}),
    });
}
