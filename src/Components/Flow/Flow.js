import { useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import "./Flow.css";
import { useEffect } from "react";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "slice" },
    position: { x: 0, y: 25 },
  },
  {
    id: "2",
    type: "",
    data: { label: "find string" },
    position: { x: 0, y: 125 },
  }
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

function Flow(props) {
  const [nodes, setNodes] = useState(props.nodes.Nodes || initialNodes);
  const [edges, setEdges] = useState(props.nodes.Connecter || initialEdges);

  useEffect(() => {
    setNodes(props.nodes.Nodes);
    setEdges(props.nodes.Connecter)
  }, [props.nodes.Nodes, props.nodes.Connecter])
  return (
      <ReactFlow nodes={nodes} edges={edges} fitView />
  );
}

export default Flow;
