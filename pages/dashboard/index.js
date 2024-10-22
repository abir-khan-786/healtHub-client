import DashboardLayout from '@/components/layout/DashboardLayout/DashboardLayout'
import React from 'react'

const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: 'Total Drug Recommended',

      value: 5,
      color: 'bg-indigo-500',
    },
    {
      id: 2,
      name: 'Total Patient',
      color: 'bg-red-500',
      value: 5,
    },
    {
      id: 1,
      name: 'Appointments Made',
      color: 'bg-yellow-500',
      value: 5,
    },
    {
      id: 1,
      name: 'Total Docters',
      color: 'bg-cyan-500',
      value: 5,
    },
  ]

  return (
    <section>
      <div className="  ">
        <div className="     grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4  gap-4 ">
          {data.map((item) => (
            <div
              key={item.id}
              className={`${item.color} shadow-md rounded-lg   text-justify p-4    `}
            >
              <div className=" text-center ">
                <p
                  className={`px-2 py-1 text-xs font-bold    text-white rounded-full`}
                >
                  {item.value}
                </p>
                <span className="    text-sm ">{item.name}</span>
                <span className="block text-xs underline"> More info</span>
              </div>
            </div>
          ))}
        </div>

        <div className="  grid grid-cols-2 gap-4 mt-8">
          <h2 className=" text-center">
            You Can Not Do Anything until you create Profile
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
