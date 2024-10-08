import {useQuery} from "react-query";
import {requestGet} from "../../requets";
import {STAFFS_API, STORIES_API} from "../../../constants/apiConstatns";

export function useGetStaffsQuery(options) {
    return useQuery(
        ['staffs-list'],
        () => requestGet(STAFFS_API),
        options,
    );
}
