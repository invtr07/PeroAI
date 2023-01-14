import React from 'react'
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css'; 

export default function Tree() {

  const nodes = [
    {
      id: '0',
      position: { x: 700, y: 425 },
      data: { label: 'TreeAI' },
      type: 'input',
    },
    {
      id: '1',
      position: { x: 950, y: 300 },
      data: { label: 'Data 1' },
      type: 'input',
    },
    {
      id: '2',
      position: { x: 950, y: 550 },
      data: { label: 'Data 2' },
      type: 'input',
    },
    {
      id: '3',
      position: { x: 450, y: 300 },
      data: { label: 'Data 3' },
      type: 'input',
    },
    {
      id: '4',
      position: { x: 450, y: 550 },
      data: { label: 'Data 3' },
      type: 'input',
    }
  ]

  const edges = [
    {
      id: 'e1-2',
      source: '0',
      target: '1',
      label: 'edge label'
    }
  ]

  return (
    <>
     <div style={{ height: '100%' }}>
        <ReactFlow nodes={nodes} edges = {edges} >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}