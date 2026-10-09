import React from 'react'


function Card({username, name}) {
  return (
    <div>
      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl"><div>
      <img class="size-48 shadow-xl rounded-md" alt="" src="https://cdn-imgix.headout.com/tour/19364/TOUR-IMAGE/a0f87f7e-434d-4c3c-9584-f7ee351d5f64-10432-dubai-img-worlds-of-adventure---uae-resident-offer-01.jpg?auto=compress%2Cformat&w=510.8727272727273&h=401.4&q=90&ar=14%3A11&crop=faces&fit=crop" /></div>
        <div class="flex items-center md:items-start">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span class="font-medium text-sky-500">{username} {name} </span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
