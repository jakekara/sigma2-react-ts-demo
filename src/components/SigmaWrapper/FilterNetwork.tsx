import { MultiUndirectedGraph } from "graphology";
import React, { useEffect, useRef } from "react";
// TODO - figure out why this isn't the entrypoint for the package
import * as sigma from "sigma/build/sigma.min";

export interface NodeCoordinate {
  x: number;
  y: number;
  z?: number;
}

export interface NetworkNode {
  id: string;
  attributes: any;
  coordinates?: NodeCoordinate;
  visible: boolean;
}

export interface NetworkEdge {
  source: NetworkNode;
  target: NetworkNode;
  directed: boolean;
  visible: boolean;
}

export interface NetworkData {
  nodes: Array<NetworkNode>;
  edges: Array<NetworkEdge>;
}

export interface FilterNetworkProps {
  data: NetworkData;
}

export default function FilterNetwork(props: FilterNetworkProps) {
  const container = useRef<HTMLDivElement>(null);
  const { data } = props;
  // initialize the graph
  const graph = new MultiUndirectedGraph();

  // add nodes
  data.nodes.forEach((node: NetworkNode) => {
    const newNodeProperties = {
      ...node,
      ...node.coordinates,
      ...node.attributes,
    };
    graph.addNode(node.id, newNodeProperties); //, color: "rgba(255,0,0,1)" })
  });

  data.edges.forEach((edge: NetworkEdge, i) => {
    if (!edge.visible) {
      return;
    }
    try {
      graph.addEdge(edge.source.id, edge.target.id, {
        color: "rgba(10,10,10,0.1)",
      });
    } catch (e) {
      console.warn("Error adding node", e);
    }
  });

  useEffect(() => {
    if (!container.current) {
      return;
    }
    // clear out the container
    container.current.innerHTML = "";

    // create new renderer
    const renderer = new sigma.WebGLRenderer(graph, container.current, {});

    // return cleanup function
    return () => renderer.kill();
  }, [container, graph]);

  return <div style={{ height: "500px" }} ref={container}></div>;
}
