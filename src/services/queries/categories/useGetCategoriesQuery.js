import {useQuery} from "react-query";
import {requestGet} from "../../requets";
import {CATEGORY_API} from "../../../constants/apiConstatns";

export function useGetCategoriesList(options) {
    return useQuery(
        ['categories'],
        () => requestGet(CATEGORY_API),
        options,
    );
}
