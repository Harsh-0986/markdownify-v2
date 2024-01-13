import { ComponentProps } from 'react'
import { NotePreview } from '@/components'
import { twMerge } from 'tailwind-merge'
import { useNotesLists } from '@/hooks/useNotesList'
import { isEmpty } from 'lodash'

export const NotePreviewList = ({
  className,
  onSelect,
  ...props
}: ComponentProps<'ul'> & { onSelect?: () => void }) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesLists({ onSelect })

  if (!notes || isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>Start by creating a note!</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          isActive={selectedNoteIndex === index}
          key={note.title + note.lastEditTime}
          onClick={handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
