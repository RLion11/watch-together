import React from "react"
import { useState, useEffect } from "react"
import 'tailwindcss/tailwind.css'
import './page-global.css'
import StandardToolBar from './menus/standardToolBar.js'
import axios from 'axios'
import { ST } from "next/dist/shared/lib/utils.js"

export default function App() {
    // react component with a form component to get the room code from the user and redirect them to the room
    // else give options to create a new room, upload a video and manage uploaded videos
    const [room, setRoom] = useState("")
    return(
        <div>
            <StandardToolBar/>
            <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
                <div className="w-2/3">
                    <form className="flex flex-row justify-start">
                        <input id="room-id" type="text" placeholder="Enter Room Code" className="rounded-lg p-2 text-black mr-2 w-2/3"/>
                        <button className="rounded-lg p-2 bg-blue-600 text-white" onClick={
                            () => {
                                setRoom(document.getElementById('room-id').value)
                            }
                        }>Join Room</button>
                    </form>
                    {/* buttons section */}
                    <div className="flex flex-col mt-4 justify-start">
                        <button className="rounded-lg p-2 bg-blue-600 text-white w-2/3 mt-4">Create Room</button>
                        <button className="rounded-lg p-2 bg-blue-600 text-white w-2/3 mt-4">Upload Video</button>
                        <button className="rounded-lg p-2 bg-blue-600 text-white w-2/3 mt-4">Manage Videos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}