import React from 'react'
import {Dropdown,Menu, Drawer} from 'antd'
import Todo from '../images/icon-todo.svg'
import calender from '../images/icon-calendar.svg'
import remainder from '../images/icon-reminders.svg'
import arrow from '../images/icon-arrow-down.svg'
import plan from '../images/icon-planning.svg'
import logo from '../images/logo.svg'
import menuicon from '../images/icon-menu.svg'
import {useState} from 'react'



const menu =(
  <Menu style={{padding: '10px'}}
  items={[
    {
      key: '1',
      label: (<a className='flex justify-center items-center' href="/">
        <img src={Todo} alt='todo' />
        <h1 className='px-3'>Todo List</h1>
      </a>),
    },
    {
      key: '2',
      label: (<a className='flex justify-center items-center' href="/">
      <img src={calender} alt='todo' />
      <h1 className='px-3'>Calendar</h1>
    </a>),
    },
    {
      key: '3',
      label: (<a className='flex justify-center items-center' href="/">
      <img src={remainder} alt='todo' />
      <h1 className='px-3'>Reminders</h1>
    </a>),
    },
    {
      key: '4',
      label: (<a className='flex justify-center items-center' href="/">
      <img src={plan} alt='todo' />
      <h1 className='px-3'>Planning</h1>
    </a>),
    },
  ]}
   />
)

const company =(
  <Menu style={{padding: '5px'}}
  items={[
    {
      key: '1',
      label: 'History'
    },
    {
      key: '2',
      label: 'Our Team'
    },
    {
      key: '3',
      label: 'Blog'
    },
  ]}
   />
)

const items = [
  
]

function Nav() {
  
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <section className='flex justify-between p-4'>
        <div className='flex justify-evenly items-center'>
            <img src={logo} className='justify-self-center w-16 lg:ml-10' alt="logo" />
            <div className='lg:flex mb-1 hidden'>
              <Dropdown placement="bottomCenter" overlay={menu}>
                <div className='flex mx-8 justify-center items-center'>
                <a className=' font-semibold transition ease-in-out text-gray-400 hover:text-black ' href='/' >
                  Features
                </a>
                <img src={arrow} className='h-2 ml-1 transition ease-in-out text-gray-400 hover:text-black' alt="" />
                </div>
              </Dropdown>
              <Dropdown overlay={company} placement="bottomCenter">
                <div className='flex mx-8justify-center items-center'>
                <a className='font-semibold transition ease-in-out text-gray-400 hover:text-black' href='/'>
                  Company
                </a>
                <img src={arrow} alt="arrow" className='h-2 ml-1' />
                </div>
              </Dropdown>
              <a href='/' className='font-semibold mx-5 transition ease-in-out text-gray-400 hover:text-black'>
                  Careers
                </a>
                <a href='/' className='font-semibold mx-5 transition ease-in-out text-gray-400 hover:text-black'>
                  About
                </a>
            </div>
        </div>
        <div>
        </div>
          <button className='flex lg:hidden' onClick={showDrawer}><img src={menuicon} alt="menu" /></button>
        <div className='lg:flex justify-center items-center hidden'>
          <button className='transition ease-in-out text-gray-400 hover:text-black mx-4'>Login</button>
          <button className='mx-3 border-2 py-1 border-black px-4 rounded-xl transition ease-in-out text-gray-400 hover:text-black mx-4'>Register</button>
        </div>
        <Drawer placement='right' onClose={onClose} visible={visible} width={200}>
        <div className='flex justify-start flex-col'>
            <div className='lg:hidden justify-start w-1/3 sm:flex flex-col'>
              <Dropdown  overlay={menu}>
                <h1 className='font-semibold transition ease-in-out text-gray-400 hover:text-black ' >
                  Features
                </h1>
              </Dropdown>
              <Dropdown overlay={company} placement="bottomCenter">
                <a className='font-semibold transition ease-in-out text-gray-400 hover:text-black my-2'>
                  Company
                </a>
              </Dropdown>
              <a href='/' className='font-semibold transition ease-in-out text-gray-400 hover:text-black my-2'>
                  Careers
                </a>
                <a href='/' className='font-semibold transition ease-in-out text-gray-400 hover:text-black my-2'>
                  About
                </a>
            </div>
            <div className='flex flex-col'>
          <button className='transition my-2 ease-in-out text-gray-400 hover:text-black mx-4'>Login</button>
          <button className='mx-3 border-2 my-2 py-1 border-black px-4 rounded-xl transition ease-in-out text-gray-400 hover:text-black mx-4'>Register</button>
        </div>
        </div>
        <div>
        </div>
        </Drawer>
    </section>
  )
}

export default Nav