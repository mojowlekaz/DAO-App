import React from 'react'

export default function Modal({closeModal}) {
  return (
    <div>
     <button onClick={() =>  closeModal(false)}>CLOSE</button>
    </div>
  )
}
