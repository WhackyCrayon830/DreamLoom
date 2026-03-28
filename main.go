package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {

	app := NewApp()

	err := wails.Run(&options.App{
		Title:  "DreamLoom",
		Width:  1024,
		Height: 768,

		// ❌ do NOT use Frameless
		Frameless: true,

		Windows: &windows.Options{
			BackdropType: windows.Acrylic,
			WindowIsTranslucent:  true,
			WebviewIsTransparent: true,
		},

		AssetServer: &assetserver.Options{
			Assets: assets,
		},

		OnStartup: app.startup,

		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}