import { useState, useEffect } from "react"
import { IconSettings, IconSquareX, IconWindowMaximize, IconWindowMinimize } from "@tabler/icons-react"

import { Button } from "@/components/ui/button.tsx"
import { ButtonGroup} from "../ui/button-group"
import { Quit, WindowToggleMaximise, WindowIsMaximised } from "@/../wailsjs/runtime/runtime"


export function TitleBar(){

    const [isMaximized, setIsMaximized] = useState(false)

    useEffect(() => {
        const checkState = async () => {
        const state = await WindowIsMaximised()
        setIsMaximized(state)
        }
        checkState()
    }, [])

    const toggleMaximize = async () => {
        await WindowToggleMaximise()
        const state = await WindowIsMaximised()
        setIsMaximized(state)
    }


    return(
        <div className="relative flex items-center h-12 border-b px-4 border-border draggable">
            <div className="flex items-center gap-2">
                Files
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 font-semibold">
                DreamLoom
            </div>
            <div className="ml-auto flex items-center gap-2">
                <ButtonGroup>
                    <Button className="hover:bg-emerald-500!" variant="outline" size="icon-lg" >
                        <IconSettings/>
                    </Button>
                    <Button className="hover:bg-amber-500!" variant="outline" size="icon-lg" onClick={ toggleMaximize }>
                        {isMaximized ? <IconWindowMinimize /> : <IconWindowMaximize />}
                    </Button>
                    <Button className="hover:bg-destructive!" variant="outline" size="icon-lg" onClick={ Quit }>
                        <IconSquareX/>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}