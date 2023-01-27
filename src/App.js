import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';


const initialEdges = [

];

const NestedFlow = () => {

  let initialNodes = [
    {
      id: 'A',
      data: {
        label: (
          <>
            <div id='group_header' style={{ width: "100%" }}>
              <span id="header_title" style={{ float: "left" }}>
                Title A
              </span>
              <button id='addNodeBtn' onClick={() => handleAddNode('A')} style={{ float: 'right' }}>+</button>
            </div>
          </>
        )
      },
      position: { x: 0, y: 0 },
      style: {
        width: '20%',
        height: '100%',
        backgroundColor: 'rgba(255, 0, 0, 0)',
        color: 'white',
        border: "solid 2px grey",
      },
      draggable: false,
      dragging: false
    },
    {
      id: 'A-1',
      data: {
        label: (
          <>
            <div id='normal_node'>
              <div id="node_header">
                NodeType A 1
              </div>
              <div id="node_content">NodeType A</div>
            </div>
          </>
        )
      },
      position: { x: 10, y: 90 },
      sourcePosition: 'right',
      targetPosition: 'left',
      parentNode: 'A',
      extent: 'parent',
      style: {
        width: 200
      }
    },
    {
      id: 'A-2',
      data: {
        label: (
          <>
            <div id='normal_node'>
              <div id="node_header">
                NodeType A 2
              </div>
              <div id="node_content">NodeType A</div>
            </div>
          </>
        )
      },
      position: { x: 10, y: 180 },
      sourcePosition: 'right',
      targetPosition: 'left',
      parentNode: 'A',
      extent: 'parent',
      style: {
        width: 200
      }
    },
    {
      id: 'A-3',
      data: {
        label: (
          <>
            <div id='normal_node'>
              <div id="node_header">
                NodeType A 3
              </div>
              <div id="node_content">NodeType A</div>
            </div>
          </>
        )
      },
      position: { x: 10, y: 270 },
      sourcePosition: 'right',
      targetPosition: 'left',
      parentNode: 'A',
      extent: 'parent',
      style: {
        width: 200
      }
    },
    {
      id: 'B',
      data: {
        label: (
          <>
            <div id='group_header' style={{ width: "100%" }}>
              <span id="header_title" style={{ float: "left" }}>
                Title B
              </span>
              <button id='addNodeBtn' onClick={() => handleAddNode('B')} style={{ float: 'right' }}>+</button>
            </div>
          </>
        )
      },
      position: { x: 400, y: 0 },
      style: {
        width: '20%',
        height: '100%',
        backgroundColor: 'rgba(255, 0, 0, 0)',
        color: 'white',
        border: "solid 2px grey",
      },
      draggable: false,
      dragging: false
    },
    {
      id: 'B-1',
      data: {
        label: (
          <>
            <div id='normal_node'>
              <div id="node_header">
                NodeType B 1
              </div>
              <div id="node_content">NodeType B</div>
            </div>
          </>
        )
      },
      position: { x: 10, y: 90 },
      sourcePosition: 'right',
      targetPosition: 'left',
      parentNode: 'B',
      extent: 'parent',
      style: {
        width: 200
      }
    },
    {
      id: 'B-2',
      data: {
        label: (
          <>
            <div id='normal_node'>
              <div id="node_header">
                NodeType B 2
              </div>
              <div id="node_content">NodeType B</div>
            </div>
          </>
        )
      },
      position: { x: 10, y: 180 },
      sourcePosition: 'right',
      targetPosition: 'left',
      parentNode: 'B',
      extent: 'parent',
      style: {
        width: 200
      }
    },
    {
      id: 'B-3',
      data: {
        label: (
          <>
            <div id='normal_node'>
              <div id="node_header">
                NodeType B 3
              </div>
              <div id="node_content">NodeType B</div>
            </div>
          </>
        )
      },
      position: { x: 10, y: 270 },
      sourcePosition: 'right',
      targetPosition: 'left',
      parentNode: 'B',
      extent: 'parent',
      style: {
        width: 200
      }
    },
    {
      id: 'C',
      data: {
        label: (
          <>
            <div id='group_header' style={{ width: "100%" }}>
              <span id="header_title" style={{ float: "left" }}>
                Title C
              </span>
              <button id='addNodeBtn' onClick={() => handleAddNode('C')} style={{ float: 'right' }}>+</button>
            </div>
          </>
        )
      },
      position: { x: 800, y: 0 },
      style: {
        width: '20%',
        height: '100%',
        backgroundColor: 'rgba(255, 0, 0, 0)',
        color: 'white',
        border: "solid 2px grey",
      },
      draggable: false,
      dragging: false
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleAddNode = (rootId) => {
    let nextNodeId = 0;
    let nextYPosition = 0;
    for (let i = 0; i < initialNodes.length; i++) {
      let nodesId = initialNodes[i].id.split('-');
      if (rootId === nodesId[0]) {
        if (nextNodeId < nodesId[1] * 1) {
          nextNodeId = nodesId[1] * 1;
        }
        if (nextYPosition < initialNodes[i].position.y) {
          nextYPosition = initialNodes[i].position.y;
        }
      }
    }
    let nextNodeNum = nextNodeId + 1;
    nextNodeId = rootId + '-' + (nextNodeId + 1);
    nextYPosition += 90;
    let newNode = {
      id: nextNodeId,
      position: { x: 10, y: nextYPosition },
      data: {
        label: (
          <>
            <div id='normal_node'>
              <div id="node_header">
                NodeType {rootId} {nextNodeNum}
              </div>
              <div id="node_content">NodeType {rootId}</div>
            </div>
          </>
        )
      },
      parentNode: rootId,
      sourcePosition: 'right',
      targetPosition: 'left',
      extent: 'parent',
      style: {
        width: 200
      }
    };

    initialNodes = initialNodes.concat(newNode);
    setNodes(initialNodes.concat(newNode));

  }

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes='smoothstep'
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        className="react-flow-subflows-example"
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </>
  );
};

export default NestedFlow;
