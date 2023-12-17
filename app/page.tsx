import styles from '@/app/ui/home.module.css';

import Row from '@/app/ui/row'

export default function Home() {
  return (
    <main className="flex flex-col max-h-screen justify-between">
      <div className="flex-grow overflow-auto h-screen mt-10 mx-10 border border-red-500">
        <div className='float-left w-2/5 h-full border border-yellow-500 overflow-auto'>
          <div className={styles.innerdiv}>Content 1</div>
          <div className={styles.innerdiv}>Content 2</div>
          <div className={styles.innerdiv}>Content 3</div>
          <div className={styles.innerdiv}>Content 4</div>
          <div className={styles.innerdiv}>Content 5</div>
          <div className={styles.innerdiv}>Content 6</div>

      </div>
      <div className='float-right flex w-1/3 h-full flex-grow mr-10 border border-yellow-500'>
        <div className='w-full border border-green-500'>
          <Row count={1} />
          <Row count={9} />
          <Row count={17} />
        </div>
      </div>
     </div>
    </main>
  )
}
