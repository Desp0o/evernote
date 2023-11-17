import React, {useContext} from 'react'
import { ProviderPass } from '../Provider'
import "./SideBar.css"
import Search from '../Search/Search'
import AddNew from '../addNew/AddNew'
import SidebarLinkBlock from './SidebarLinkBlock'

import home from "../../utils/icons/home.webp"
import checkedGrey from "../../utils/icons/checkedGrey.webp"
import notesGrey from "../../utils/icons/notesGrey.webp"
import CreateButton from "../createButton/CreateButton"


export default function SideBar() {

  const {handleLogout} = useContext(ProviderPass)

  return (
    <div className='sidebar'>

        <div className='sidebar_top'>
          <Search />
          <AddNew />
        </div>

        <div className='sidebar_bottom'>
          <SidebarLinkBlock linkName='Home' icon={home} path='/pages/Evernote'/>
          <SidebarLinkBlock linkName='Notes' icon={checkedGrey} path='/'/>
          <SidebarLinkBlock linkName='Tasks' icon={notesGrey}/>
        </div>

        <div className='logout_div'>
          <CreateButton text="Log Out" funName={handleLogout}/>
        </div>
        
    </div>
  )
}
