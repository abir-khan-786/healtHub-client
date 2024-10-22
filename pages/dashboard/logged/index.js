import DashboardLayout from '@/components/layout/DashboardLayout/DashboardLayout'
import React from 'react'

const Logged = () => {
  return (
    <div>
      <h2>Logged as Nur</h2>
    </div>
  )
}

export default Logged

Logged.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>
}
