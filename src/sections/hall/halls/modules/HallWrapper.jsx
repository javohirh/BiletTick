import React, {useState} from 'react';
import ElementsList from './ElementsList';
import HallGrid from './HallGrid';
import ContentLayout from "../../../../components/content-layout";
import './screen.css'

const initialSourceItems = [
    {id: 1, text: 'Item 1'},
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'},
    {id: 4, text: 'Item 4'}
];

const n = 27; // Target grid rows
const m = 20; // Target grid columns
const initialTargetItems = new Array(m).fill(new Array(n).fill(null));

const HallWrapper = () => {
    const [sourceItems, setSourceItems] = useState([{id: 1, title: 'square'}, {id: 2, title: 'circle'}]);
    const [targetItems, setTargetItems] = useState(initialTargetItems);
    const [currentElement, setCurrentElement] = useState(null);

    return (
        <ContentLayout>
            <div className="flex gap-6">
                <ElementsList items={sourceItems}/>
                <HallGrid
                    items={targetItems}
                    setItems={setTargetItems}
                    setCurrentElement={setCurrentElement}
                    currentElement={currentElement}
                />
            </div>
        </ContentLayout>
    );
};

export default HallWrapper;
