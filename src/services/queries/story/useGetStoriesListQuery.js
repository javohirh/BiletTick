import {useQuery} from "react-query";
import {requestGet} from "../../requets";
import {STORIES_API} from "../../../constants/apiConstatns";

export function useGetStoriesListQuery(options) {
    return useQuery(
        ['stories-list'],
        () => requestGet(STORIES_API),
        options,
    );
}
