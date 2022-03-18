import Link from 'next/link'
import React from 'react'

const links = [
    { href: '/', label: 'Top' },
    { href: '#', label: 'For Everyone' },
    { href: '#', label: 'Benefit' },
    { href: '#', label: 'Preview' },
    { href: '#', label: 'Penulis' },
  ];

const Header = () => {
  return (
    <header className='bg-black sticky top-0 z-50 py-4 text-white px-10'>
        <div className="flex justify-between items-center h-14">
            <Link href='/'><div className="text-4xl font-bold font-serif cursor-pointer">
                Logo
            </div></Link>
            <nav className='hidden md:block'>
                <ul className='flex justify-between items-center space-x-8'>
                    {links.map(({href, label}) => (
                        <li key={label}>
                            <p className='hover:underline cursor-pointer'>
                                {label}
                            </p>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className='text-gray-700 px-6 py-3 bg-white rounded-full hover:bg-white/90'>
                Donwload
            </button>
        </div>
    </header>
  )
}

export default Header