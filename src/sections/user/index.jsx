import React from 'react';
import ContentLayout from "../../components/content-layout";
import Table from "../../components/table";

function UserScreen() {
    return (
        <ContentLayout title='Users' loader={false}>
            <Table
                withOrder={true}
                content={[
                    {header: 'name', key: 'name'},
                    {header: 'key', key: 'key'},
                    {header: 'value', key: 'value'},
                    {header: 'item', key: 'item'},
                    {
                        header: 'amount',
                        key: 'amount',
                        width: 100,
                        renderCell: (row) => <p className='text-main'>{row.amount}</p>
                    },
                ]}
                list={[
                    {id: 1, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 2, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 3, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 4, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 5, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                    {id: 6, name: 'name', value: 'test', key: 'key', item: 'item', amount: 'amount'},
                ]}
            />
        </ContentLayout>
    );
}

export default UserScreen;
