import React from 'react'

export default function CardFeedback({data}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">User Feedback</h2>
    <p>{data.feedback}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
  )
}
