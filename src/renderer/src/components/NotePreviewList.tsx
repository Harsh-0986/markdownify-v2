import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'
import { NotePreview } from '@/components'
import { twMerge } from 'tailwind-merge'

const mockNotes: NoteInfo[] = []
export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (mockNotes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>Start by creating a note!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {mockNotes.map((note) => (
        <NotePreview {...note} key={note.title + note.lastEditTime} />
      ))}
    </ul>
  )
}
