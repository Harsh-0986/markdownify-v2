import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {})
} catch (error) {
  console.error(error)
}
