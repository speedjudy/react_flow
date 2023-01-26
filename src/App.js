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
    data: { label: 'Title A' },
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
    data: { label: "Title 2" },
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
    position: { x: 10, y: 10 },
    parentNode: 'B',
    extent: 'parent',
  },
  {
    id: 'B-2',
    data: { label: 'Child Node 2' },
    position: { x: 10, y: 90 },
    parentNode: 'B',
    extent: 'parent',
  },
  {
    id: 'B-3',
    data: { label: 'Child Node 3' },
    position: { x: 10, y: 170 },
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
