import {useQuery} from "react-query";
import {requestGet} from "../../requets";
import { SETTINGS_FAQ_API} from "../../../constants/apiConstatns";

export function useGetFaqsListQuery(options) {
    return useQuery(
        ['faqs'],
        () => requestGet(SETTINGS_FAQ_API),
        options,
    );
}
