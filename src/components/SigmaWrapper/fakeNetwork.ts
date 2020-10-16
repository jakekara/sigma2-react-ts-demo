import faker from "faker";
import { NetworkData, NetworkEdge, NetworkNode } from "./FilterNetwork";

export function emptyNetwork(): NetworkData {
    return {
        nodes: [],
        edges: []
    }
}

export function fakeNetworkNode(options: object): NetworkNode {
    return {
        id: faker.random.uuid(),
        visible: faker.random.boolean(),
        coordinates: {
            x: Math.random() * 100,
            y: Math.random() * 100,
        },
        ...options,
        attributes: {
            label: faker.name.firstName()
        }
    }

}

export function fakeNetworkEdge(network: NetworkData, options: object): NetworkEdge {
    if (network.nodes.length < 1) { throw new Error("network must have at least one node") }
    const randomNode: () => NetworkNode = () => network.nodes[Math.floor(Math.random() * network.nodes.length)];

    return {
        source: randomNode(),
        target: randomNode(),
        directed: false,
        visible: faker.random.boolean(),
        ...options
    }
}

export function fakeNetwork(nodeCount: number, edgeCount: number) {

    const network = emptyNetwork();
    network.nodes = Array(nodeCount).fill(0).map(() => fakeNetworkNode({ visible: true }));
    network.edges = Array(edgeCount).fill(0).map(() => fakeNetworkEdge(network, { visible: true }));

    return network;
}