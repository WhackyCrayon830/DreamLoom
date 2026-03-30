import { useState, useEffect } from "react"
import {
  IconSettings,
  IconSquareX,
  IconWindowMaximize,
  IconWindowMinimize
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "../ui/button-group"

import {
  Quit,
  WindowMaximise,
  WindowUnmaximise,
  WindowIsMaximised
} from "@/../wailsjs/runtime/runtime"
import { SidebarTrigger } from "../ui/sidebar"

export function TitleBar() {

  const [isMaximized, setIsMaximized] = useState(false)

  useEffect(() => {

    let frame: number

    const syncState = async () => {
      const state = await WindowIsMaximised()

      setIsMaximized(prev => {
        if (prev !== state) return state
        return prev
      })

      frame = requestAnimationFrame(syncState)
    }

    frame = requestAnimationFrame(syncState)

    return () => cancelAnimationFrame(frame)

  }, [])

  const toggleMaximize = async () => {

    const maximized = await WindowIsMaximised()

    if (maximized) {
      await WindowUnmaximise()
    } else {
      await WindowMaximise()
    }

  }

  return (
    <div className="relative flex items-center h-(--titlebar-height) border-b px-4 border-border draggable">

      <div className="flex items-center gap-2">
        <SidebarTrigger size="icon-lg"/>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 font-semibold">
        DreamLoom
      </div>

      <div className="ml-auto flex items-center gap-2">
        <ButtonGroup>

          <Button
            className="hover:bg-emerald-500!"
            variant="outline"
            size="icon-lg"
          >
            <IconSettings size={18}/>
          </Button>

          <Button
            className="hover:bg-amber-500!"
            variant="outline"
            size="icon-lg"
            onClick={toggleMaximize}
          >
            {isMaximized
              ? <IconWindowMinimize size={18}/>
              : <IconWindowMaximize size={18}/>}
          </Button>

          <Button
            className="hover:bg-destructive!"
            variant="outline"
            size="icon-lg"
            onClick={Quit}
          >
            <IconSquareX size={18}/>
          </Button>
        </ButtonGroup>
      </div>

    </div>
  )
}