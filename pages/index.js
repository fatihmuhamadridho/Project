import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Users from './login/userLogin'

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Users />
    </div>
  )
}
