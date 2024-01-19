import {
  CloseApp,
  CreateNote,
  DeleteNote,
  GetNotes,
  GetOS,
  ReadNote,
  WriteNote
} from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('ContextIsolation must be enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
    createNote: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNote', ...args),
    writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args),
    deleteNote: (...args: Parameters<DeleteNote>) => ipcRenderer.invoke('deleteNote', ...args),
    getos: (...args: Parameters<GetOS>) => ipcRenderer.invoke('getOS', ...args),
    close: (...args: Parameters<CloseApp>) => ipcRenderer.invoke('closeApp', ...args)
  })
} catch (error) {
  console.error(error)
}
