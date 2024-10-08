import {useMutation} from "react-query";
import {requestPost} from "../../requets";
import {STAFFS_API,} from "../../../constants/apiConstatns";

export function useCreateStaffMutation() {
    return useMutation({
        mutationFn: (data) => requestPost(STAFFS_API, {data: data}),
    });
}
