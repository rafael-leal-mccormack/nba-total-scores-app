import Image from 'next/image'
import HardRockImg from '../../../public/hardrockOct2024.jpg';

export default function HardRockButton() {
  return <a href='https://hrb.onelink.me/aSsa/j8zz8rsz' target='_ref'>
    <Image className=' w-80' alt="Join Hard Rock Bet with my link and we both get a Bonus Bet up to $50 🤝" src={HardRockImg}></Image>
    <p className='mt-2 text-xs text-center'>Hard Rock Bets - Place a first bet up to $50 and <br/> get a bonus bet to match!</p>
  </a>
}