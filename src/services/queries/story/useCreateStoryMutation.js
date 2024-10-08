import {useMutation} from "react-query";
import {requestPost} from "../../requets";
import {STORIES_API} from "../../../constants/apiConstatns";

export function useCreateStoryMutation() {
    return useMutation({
        mutationFn: (data) => requestPost(STORIES_API, {data: data}),
    });
}
