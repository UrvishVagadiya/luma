import Image from "next/image"


const Hero = () => {
  return (
    <div className="flex justify-center mx-auto gap-20 mt-12">
      <div className="max-w-95 mt-24 px-4">
        <div className="w-19 h-7.5 mb-6">
          <Image src="/luma.png" alt="Luma" width={76} height={38} />
        </div>
        <div className="text-[60px] leading-18 font-semibold font-family-['Inter']">
          Delightful events
          <div className="bg-[radial-gradient(circle_at_0_0,#099ef1_0%,#6863f8_18.82%,#d84ffa_32.6%,#f058c5_52.83%,#ff4f90_68.03%,#ff6558_87.66%,#ff891f_100%)] bg-clip-text text-transparent">
            start here.
          </div>
        </div>        
        <div className="mt-6 text-xl text-[#131517a3]">Set up an event page, invite friends and sell tickets. Host a memorable event today.</div>
        <button className='bg-black text-white px-4 py-2 rounded-[10px] mt-6'>Create Your First Event</button>
      </div>
      <div className='w-155 h-165'>
        <video autoPlay loop muted src="https://cdn.lu.ma/landing/phone-light.webm" className='w-full h-auto rounded-xl bg-transparent' />
      </div>
    </div>
  )
}

export default Hero