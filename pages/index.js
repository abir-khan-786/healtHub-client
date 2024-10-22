import Counter from '@/components/homePages/Counter'
import Header from '@/components/homePages/Header'
import MedicalExpert from '@/components/homePages/MedicalExpert'
import RootLayout from '@/components/layout/RootLayout'

export default function Home() {
  return (
    <div>
      <Header />
      <MedicalExpert />
      <Counter />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
