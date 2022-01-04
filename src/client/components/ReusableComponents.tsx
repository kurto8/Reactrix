import * as React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import * as shortid from 'shortid';
import { Button, ListItem } from '@material-ui/core';

import EachReusableComponent from './EachReusableComponent';

const SIDEBAR_ITEM = 'sidebarItem';

export default function DraggableComponent() {
  const reusableComponents = [
    {
      id: shortid.generate(),
      type: SIDEBAR_ITEM,
      component: {
        type: 'component',
        content: 'Container 4',
      },
    },
    {
      id: shortid.generate(),
      type: SIDEBAR_ITEM,
      component: {
        type: 'component',
        content: 'Container 5',
      },
    },
    {
      id: shortid.generate(),
      type: SIDEBAR_ITEM,
      component: {
        type: 'component',
        content: 'Child 4',
      },
    },
    {
      id: shortid.generate(),
      type: SIDEBAR_ITEM,
      component: {
        type: 'component',
        content: 'Child 5',
      },
    },
  ];

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
    options: {
      dropEffect: 'copy',
    },
  }));

  return collected.isDragging ? (
    <div ref={dragPreview} />
  ) : (
    <div>
      {Object.values(reusableComponents).map((ele) => (
        <EachReusableComponent key={ele.id} content={ele.component.content} />
      ))}
    </div>
  );
}
