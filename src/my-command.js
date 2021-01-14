import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  // 加载webview
  const BrowserWindow = require('sketch-module-web-view')
  let win = new BrowserWindow({ width: 800, height: 600, frame: false, show: true, titleBarStyle: 'hidden', alwaysOnTop: true })
  win.loadURL(require('../web/plugin/dist/index.html'))

  // win.webContents
  // .executeJavaScript(`someGlobalFunctionDefinedInTheWebview("${initial}")`)
  // .then((res) => {
  //   // do something with the result
  //   sketch.UI.message("完成和webview之间的通信 🙌")
  // })

  // 获取选中文档
  win.webContents.on('readDoc', function (s) {
    sketch.UI.message(`获取选中文档，参数：${s}`)
    const document = require('sketch/dom').getSelectedDocument()
    const selection = document.selectedLayers;
    let initial = '图层：';
    selection.forEach(layer => {
      initial += layer.name
    })
    return initial;
  })

  // 写入选中文档
  win.webContents.on('writeDoc', function (s) {
    sketch.UI.message(`写入选中文档，参数：${s}`)
    const document = sketch.getSelectedDocument()
    // Next we want to extract the selected page of the document
    const page = document.selectedPage
    // Now let's create a new text layer, and a traditional value...
    const layer = new sketch.Text({
      parent: page,
      alignment: sketch.Text.Alignment.center,
      text: 'Hello World',
    })
    // ...resize it so that the text just fits...
    layer.adjustToFit()
    // Finally, lets center the view on our new layer
    // so that we can see where it is.
    document.centerOnLayer(layer)
  })
}
