import {useMutation} from "react-query";
import {requestPost} from "../../requets";
import {CATEGORY_API} from "../../../constants/apiConstatns";


export function useCreateCategoryMutation() {
    return useMutation({
        mutationFn: (data) => requestPost(CATEGORY_API, { data:data}),
    });
}
