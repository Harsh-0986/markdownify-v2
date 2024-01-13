import { useMarkdownEditor } from '@/hooks/useMarkdownEditor'
import {
  MDXEditor,
  codeBlockPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  sandpackPlugin
} from '@mdxeditor/editor'

export const MarkdownEditor = () => {
  const { selectedNote } = useMarkdownEditor()

  if (!selectedNote) return null

  return (
    <MDXEditor
      key={selectedNote.title}
      markdown={selectedNote?.content}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        codeBlockPlugin(),
        markdownShortcutPlugin(),
        sandpackPlugin(),
        codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', py: 'Python' } })
      ]}
      contentEditableClassName="prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-[''] outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500"
    />
  )
}
