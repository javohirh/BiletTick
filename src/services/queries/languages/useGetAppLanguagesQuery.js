import {useQuery} from "react-query";
import {requestGet} from "../../requets";
import {APP_LANGUAGES_API} from "../../../constants/apiConstatns";

export function useGetAppLanguagesQuery(options) {
    return useQuery(
        ['app-languages-list'],
        () => requestGet(APP_LANGUAGES_API),
        options,
    );
}
