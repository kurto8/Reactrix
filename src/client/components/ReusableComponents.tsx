import * as React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import OrgTreeComponent, { useTree } from 'react-drag-hierarchy-tree';

export default function DraggableComponent() {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
    options: {
      dropEffect: 'copy',
    },
  }));

  const { treeRef } = useTree();

  return collected.isDragging ? <div ref={dragPreview} /> : <div></div>;
}
