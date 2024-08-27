import Inventory from '@/app/ui/Inventory'
import Barter from '@/app/ui/barter'
import Test from '@/app/ui/Test'


export default function Home() {
  return (
    <main className="grid grid-cols-7 gap-2 h-screen justify-between ">
        <Test /> 
      <div className='col-span-2 border h-full border-blue-500'>
      </div>
      <div className='col-span-3 p-5 pr-10'>
        <Inventory />
      
      </div>
    </main>
  )
}
