import React, { Component } from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import last from 'lodash/last';
import PropTypes from 'prop-types';

constgetPaddingLeft = (level, type) => {
    let paddingLeft = level * 20;
    if (type === 'file') paddingLeft += 20;
    return paddingLeft;
}

const StyledTreeNode = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 8px;
    padding-left: ${props => getPaddingLeft(props.level, props.type)}px;

    &:hover {
        background: lightgray;
    }
`;

const NodeIcon = syled.div`
    font-size: 12px;
    margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;


const getNodeLabel = (node) => last(node.path.split('/'));


const TreeNode = (props) => {
    const { node, getChildNodes, level } = props;

    
    return (
        <React.Fragment>
            <StyledTreeNode level={level} type={node.type}>
                <NodeIcon onClick={() => ontoggle(node)}>
                    { node.type === 'folder' && (node.isOpen ? <FaChevronDown /> : <FaChevronRight/>)}
                </NodeIcon>
            
                <NodeIcon marginRight={10}>
                    { node.type === 'file' && <FaFile />}
                    { node.type === 'folder' && node.isOpen === true && <FaFolderOpen />}
                    { node.type === 'folder' && !node.isOpen && <FaFolder />}
                </NodeIcon>

                <span role="button">
                    { getNodeLabel(node)}
                </span>
            </StyledTreeNode>

            { node.isOpen && getChildNodes(node).map(childNode => (
                <TreeNode
                    {...props}
                    node={childNode}
                    level={level + 1}
                />
            ))}
        </React.Fragment>
    );
}
    
