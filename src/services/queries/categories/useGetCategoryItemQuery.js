import {useQuery} from "react-query";
import {requestGet} from "../../requets";
import {CATEGORY_API} from "../../../constants/apiConstatns";

export function useGetCategoryItemQuery(categoryId, options) {
    return useQuery(
        ['category-item'],
        () => requestGet(`${CATEGORY_API}/${categoryId}`),
        options,
    );
}
