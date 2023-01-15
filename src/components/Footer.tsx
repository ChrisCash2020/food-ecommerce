import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'
import { CgDesktop } from 'react-icons/cg'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
const Footer = ({
  logo,
  title,
  links,
}: {
  logo: string
  title: string
  links: { href: string; icon: any }[]
}) => {
  return (
    <footer className='p-4 bg-primary  max-[330px]:scale-[0.9] sm:p-6 w-full'>
      <div className='flex justify-center md:justify-start py-4 items-center'>
        <div className='mb-3 md:mb-0'>
          <Link
            className='flex gap-8  items-center hover:animate-[swing_500ms_linear]'
            to='/'
          >
            <img
              src={logo}
              className='w-10 md:w-36 object-contain hover:animate-[swing_500ms_linear] '
              alt='Logo'
            />
            <span className='self-center text-lg md:text-2xl font-semibold whitespace-nowrap headingColor'>
              {title}
            </span>
          </Link>
        </div>
      </div>
      <hr className='my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
      <div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
        <span className='text-sm text-gray-500 text-center dark:text-gray-400'>
          © 2022 {title}™. All Rights Reserved.
        </span>
        <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:text-xl'>
          {links.map((link) => (
            <a
              target='_blank'
              key={nanoid()}
              rel='noreferrer'
              href={link.href}
              className='text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center'
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
