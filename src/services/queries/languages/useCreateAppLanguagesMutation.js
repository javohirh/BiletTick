import {useMutation} from "react-query";
import {requestPost} from "../../requets";
import {APP_LANGUAGES_API} from "../../../constants/apiConstatns";

export function useCreateAppLanguagesMutation() {
    return useMutation({
        mutationFn: (data) => requestPost(APP_LANGUAGES_API, {data: data}),
    });
}
