import React, { useEffect } from 'react';
import cx from 'classnames';
import { ReactComponent as Screen } from '../../../../assets/images/screen-image.svg';
import { v4 as uuid } from 'uuid';
import { updateMatrixElement } from '../../../../utils/updateMatrixElem';

const HallGrid = ({ items, setItems, setCurrentElement, currentElement }) => {
  useEffect(() => {
    // Butun sahifa darajasida hodisani tinglash
    window.addEventListener('keydown', handleKeyDown);

    // Komponent unmounted bo'lganda event listenerni tozalash
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentElement]);

  const handleKeyDown = (ev) => {
    //Left
    if (ev.keyCode == 37) {
      setCurrentElement((prev) => {
        console.log('TTTTTTTT', prev.y - 1);
        if (prev.y - 1 >= 0) {
          return {
            x: prev.x,
            y: prev.y - 1
          };
        } else return prev;
      });
      return;
    }
    //up
    if (ev.keyCode == 38) {
      setCurrentElement((prev) => {
        if (prev.x - 5 >= 1) {
          return {
            y: prev.y,
            x: prev.x - 1
          };
        } else return prev;
      });
      return;
    }
    //right
    if (ev.keyCode == 39) {
      setCurrentElement((prev) => {
        if (items[0]?.length - 1 >= currentElement?.y + 1) {
          return {
            x: prev.x,
            y: prev.y + 1
          };
        } else return prev;
      });
      return;
    }
    //down
    if (ev.keyCode == 40) {
      setCurrentElement((prev) => {
        if (items.length - 2 >= prev.x) {
          return {
            y: prev.y,
            x: prev.x + 1
          };
        } else return prev;
      });
      return;
    }
    if (ev.keyCode == 13) {
      if (currentElement?.x >= 0 && currentElement?.y >= 0 && currentElement.x - 5 >= 1) {
        const element = { id: uuid(), type: 'square' };
        updateMatrixElement(currentElement?.x, currentElement?.y, element, setItems);
      }

      setCurrentElement((prev) => {
        if (items[prev.x].length - 2 >= prev.y + 1)
          return {
            x: prev.x,
            y: prev.y + 1
          };
      });
    }
    if (ev.keyCode == 46) {
      if (items[currentElement?.x][currentElement?.y]) {
        updateMatrixElement(currentElement?.x, currentElement?.y, null, setItems);
      }
    }
  };

  const handleDoubleClick = (x, y) => {
    console.log('HANDLEEEEEEEEEE', items[x][y]);
    if (!items[x][y]) {
      const element = { id: uuid(), type: 'square' };
      updateMatrixElement(x, y, element, setItems);
    }
  };

  console.log('Matrix', items, currentElement);
  return (
    <div className="relative flex flex-col items-center justify-center flex-1 overflow-auto">
      <div className="top-0  absolute z-10">
        <Screen />
      </div>
      {items.map((row, x) => (
        <div key={x} className="flex">
          {row.map((item, y) => (
            <div
              key={y}
              onClick={() => setCurrentElement({ x, y })}
              onDoubleClick={() => handleDoubleClick(x, y)}
              // ref={drop}
              className={cx('grid-element', {
                'cursor-animation': x == currentElement?.x && y == currentElement?.y
              })}>
              {item?.id && (
                <div className="bg-[#2d2d2d] w-[37px] h-[37px] rounded-[4px] absolute"></div>
              )}
              {/*{x == currentElement?.x && y == currentElement?.y &&*/}
              {/*    <>*/}
              {/*        <span className='left-arrow '>*/}
              {/*            <FaArrowRightLong color='red' size={15}/>*/}
              {/*         </span>*/}
              {/*        <span className='right-arrow'>*/}
              {/*             <FaArrowRightLong color='red' size={15}/>*/}
              {/*         </span>*/}
              {/*        <span className='top-arrow'>*/}
              {/*            <FaArrowRightLong color='red' size={15}/>*/}
              {/*        </span>*/}
              {/*        <span className='bottom-arrow'>*/}
              {/*            <FaArrowRightLong color='red' size={15}/>*/}
              {/*        </span>*/}
              {/*    </>*/}
              {/*}*/}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HallGrid;
