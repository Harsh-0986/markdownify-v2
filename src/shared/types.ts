import { NoteContent, NoteInfo } from '@shared/models'

export type GetNotes = () => Promise<NoteInfo[]>

export type ReadNote = (title: NoteInfo['title']) => Promise<NoteContent>
