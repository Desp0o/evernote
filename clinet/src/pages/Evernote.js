import React from 'react'
import "./styles/evernote.css"
import NotesDashboard from '../components/notesDashbouard/NotesDashboard'
import ScratchPad from '../components/scratchPad/ScratchPad'

export default function Evernote() {
  return (
    <div>
        

        <div className='main_container'>
          
            <div className='main_container_bg' />
              
            <div className='top_widgets'>
              <NotesDashboard />

              <ScratchPad />
            </div> 
            
            
        </div>
    </div>
  )
}