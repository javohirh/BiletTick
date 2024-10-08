import {useMutation} from "react-query";
import {requestPut} from "../../requets";
import {CATEGORY_API} from "../../../constants/apiConstatns";


export function useEditCategoryItemMutation() {
    return useMutation({
        mutationFn: (categoryId,data) => requestPut(`${CATEGORY_API}/${categoryId}`, { data:data}),
    });
}
