import React from 'react'
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css'; 
import './Tree.css'

export default function Tree(props) {

  const nodes = [
    {
      id: '1',
      position: { x: 700, y: 425 },
      data: { label: 'TreeAI' },
      type: 'input',
    },
  ]

  return (
    <>
     <div style={{ height: '100%' }}>
        <ReactFlow nodes={nodes}>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}
