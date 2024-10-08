import {useQuery} from "react-query";
import {requestGet} from "../../requets";
import {SETTINGS_DOCUMENTS_API} from "../../../constants/apiConstatns";

export function useGetAllDocumentsQuery(options) {
    return useQuery(
        ['settings-documents'],
        () => requestGet(SETTINGS_DOCUMENTS_API),
        options,
    );
}
