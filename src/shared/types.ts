import { NoteContent, NoteInfo } from '@shared/models'

export type GetNotes = () => Promise<NoteInfo[]>
export type ReadNote = (title: NoteInfo['title']) => Promise<NoteContent>
export type WriteNote = (title: NoteInfo['title'], content: NoteContent) => Promise<void>
export type CreateNote = () => Promise<NoteInfo['title'] | false>
export type DeleteNote = (filename: NoteInfo['title']) => Promise<boolean>
export type GetOS = () => NodeJS.Platform
export type CloseApp = () => void
