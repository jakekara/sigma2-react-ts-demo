import React, { useState } from "react";
import { fakeNetwork } from "./fakeNetwork";
import FilterNetwork from "./FilterNetwork";
export interface SigmaWrapperProps {
  maxNodesExponent: number;
  maxEdgesExponent: number;
}

export default function SigmaDemo(props: SigmaWrapperProps) {
  const [nodeCount, setNodeCount] = useState<number>(1);
  const [edgeCount, setEdgeCount] = useState<number>(1);

  const numberOfNodes = 10 ** nodeCount;
  const numberOfEdges = 10 ** edgeCount;

  return (
    <div>
      <input
        type="range"
        min={1}
        max={props.maxNodesExponent}
        value={nodeCount}
        onChange={(evt) => {
          setNodeCount(Number(evt.target.value));
        }}
      ></input>
      <input
        type="range"
        min={1}
        max={props.maxEdgesExponent}
        value={edgeCount}
        onChange={(evt) => {
          setEdgeCount(Number(evt.target.value));
        }}
      ></input>

      <div>
        <b>Nodes:</b> {numberOfNodes}
      </div>
      <div>
        <b>Edges:</b> {numberOfEdges}
      </div>

      <FilterNetwork data={fakeNetwork(numberOfNodes, numberOfEdges)} />
    </div>
  );
}
