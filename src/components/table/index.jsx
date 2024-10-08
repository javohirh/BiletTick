import React from 'react';
import TextField from "../input/TextField";
import Pagination from "./pagination";
import {useSearchParams} from "react-router-dom";
import TButton from '../button'
import { LuFilter } from "react-icons/lu";
import { GrDocumentDownload } from "react-icons/gr";
import cx from "classnames";


function Table({
    list,
    content,
    withOrder,
    withSearch=true,
    withHeader=true,
    paginationProp
}) {
    let [searchParams, setSearchParams] = useSearchParams();
    const handleSearch = (ev) => {
        const key = ev.target.value;
        setSearchParams({
            query:key,
            page:1
        })
    }

    return (
        <div className="overflow-x-auto rounded-[12px] flex flex-col">
            {withHeader &&
                <div className='w-full h-[72px] bg-[#080808] py-3 px-4 flex items-center justify-between'>
                    <div>
                        {withSearch &&
                            <TextField
                                onChange={handleSearch}
                                value={searchParams.get('query')}
                                className={'h-10'}
                                placeholder='Поиск'
                            />}
                    </div>
                    <div className='flex items-center gap-3'>
                        <TButton className='h-[48px] px-4 bg-[#1d1d1d] flex gap-3 items-center text-gray-2'>
                           <LuFilter color='#a1a1a1' size={18}/> Фильтр
                        </TButton>
                        <TButton className='h-[48px] px-4 bg-[#1d1d1d] flex gap-3 items-center text-gray-2'>
                          <GrDocumentDownload color='#a1a1a1' size={18}/>  Экспорт
                        </TButton>
                    </div>


                </div>}
            <table className="whitespace-nowrap">
                <thead>
                <tr className='bg-[#0f0f0f] px-6' >
                    {withOrder && <th width={60} className="pl-6 text-start">№</th>}
                    {content.map((item,index) => (
                        <th
                            key={index}
                            width={item?.width}
                            className="text-start h-12">
                            {item.header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className='h-full overflow-auto'>
                {list.map((row, index) => (
                    <tr key={index} className="hover:bg-accent-gray bg-[#080808] px-6">
                        {withOrder && <td className="border-b border-accent-gray pl-6" width={70}>{index+1}</td>}
                        {content.map((contentItem, i) => (
                            <td
                                key={i}
                                width={contentItem?.width}
                                className={cx("py-6 border-b border-accent-gray",contentItem?.className)}>
                                {contentItem.renderCell ?
                                    contentItem.renderCell(row) :
                                    row[contentItem.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            {paginationProp &&
                <Pagination
                    itemsPerPage={paginationProp?.itemsPerPage}
                    totalItems={paginationProp?.totalItems}
                />}
        </div>
    );
}

export default Table;
