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

const initialNodes = [
  {
    id: 'A',
    data: {
      label: (
        <>
          <div style={{ width: "100%" }}>
            <span id="row1" style={{ float: "left" }}>
              Title 1
            </span>
            <button onClick={this.handleAdd} id='A' style={{ float: 'right' }}>+</button>
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
  },
  {
    id: 'A-1',
    data: { label: 'Child Node 1' },
    position: { x: 10, y: 90 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'A-2',
    data: { label: 'Child Node 2' },
    position: { x: 10, y: 180 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'A-3',
    data: { label: 'Child Node 3' },
    position: { x: 10, y: 270 },
    parentNode: 'A',
    extent: 'parent',
  },
  {
    id: 'B',
    data: {
      label: (
        <>
          <div style={{ width: "100%" }}>
            <span id="row2" style={{ float: "left" }}>
              Title 2
            </span>
            <button style={{ float: 'right' }}>+</button>
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
  },
  {
    id: 'B-1',
    data: { label: 'Child Node 1' },
    position: { x: 10, y: 90 },
    parentNode: 'B',
    extent: 'parent',
  },
  {
    id: 'B-2',
    data: { label: 'Child Node 2' },
    position: { x: 10, y: 180 },
    parentNode: 'B',
    extent: 'parent',
  },
  {
    id: 'B-3',
    data: { label: 'Child Node 3' },
    position: { x: 10, y: 270 },
    parentNode: 'B',
    extent: 'parent',
  },
];

const initialEdges = [

];

const NestedFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  handleAdd = () => {
    window.alert();
  }
  // const handleAdd = useCallback(
  //   (event) => {
  //     const rootId = event.target.id;
  //     console.log(rootId, nodes);
  //     // we need to remove the wrapper bounds, in order to get the correct position
  //     // const newNode = {
  //     //   id,
  //     //   // we are removing the half of the node width (75) to center the new node
  //     //   position: project({ x: event.clientX - left - 75, y: event.clientY - top }),
  //     //   data: { label: `Node ${id}` },
  //     // };

  //     // setNodes((nds) => nds.concat(newNode));
  //     // setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
  //   },
  //   []
  // );


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
