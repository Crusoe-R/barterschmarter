import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

interface ItemProps {
 imagePath: string;
}

export function Item({ imagePath }: ItemProps) {
 return (
 <div className={styles.inventoryitem}>
   <Image
           src={imagePath}
           alt=''
           width={500} // replace with your image's width
           height={300} // replace with your image's height
           className="dynamic-width"
         />
    <p>Amount</p>
 </div>
 );
}


interface RowProps {
    count: number;
   }
   
   export default function Row({ count }: RowProps) {
    const items = Array.from({ length: 8 }, (_, i) => (
      <Item key={i} imagePath={`/items/Image_${count + i}.png`} />
    ));
   
    return (
      <div className={styles.inventoryrow}>
        {items}
      </div>
    );
   }
 