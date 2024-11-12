import { currentUser } from '@clerk/nextjs/server'
import Navigation from './navigation'
export default async  function Header() {
  const user = await currentUser()  
  return (
    <header className="w-full flex items-center">
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        <h1>W3MW STACK</h1>
     <Navigation />
      </div>
    </header>
  )
}
