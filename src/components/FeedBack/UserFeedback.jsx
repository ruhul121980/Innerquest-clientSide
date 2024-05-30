import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CardFeedback from './CardFeedback';

export default function UserFeedback() {
    const data=useLoaderData();
  return (
    <div className='grid grid-cols-2'>
      {
        data.map(datam=><CardFeedback key={datam._id} data={datam}></CardFeedback>)
      }
    </div>
  )
}
