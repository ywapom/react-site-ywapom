import React, { Component } from 'react';

class Tree extends Component {
    state = { 
        nodes: data
    }

    getRootNodes = () => {
        const { nodes } = this.state;
        return values(nodes).filter(node => node.isRoot === true);
    }

    getChildNodes = (node) => {
        const { nodes } = this.state;
        if(!node.children) return [];
        return node.childre.map(path => nodes[path]);
    }

    onToggle = (node) => {
        const { nodes } = this.state;
        nodes[node.path].isOpen = !node.isOpen;
        this.setState({ nodes });
    }

    render() { 
        const rootNodes = this.getRootNodes();
        return ( 
            <div>
                { rootNodes.map(node => (
                    <TreeNode
                        node={node}
                        getChildNodes={this.getRootNodes}
                    />
                ))}
            </div>
        );
    }
}
 
export default Tree;