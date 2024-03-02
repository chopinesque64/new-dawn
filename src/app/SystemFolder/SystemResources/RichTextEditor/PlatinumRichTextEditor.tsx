'use client'

import PlatinumRichTextEditorStyles
    from "@/app/SystemFolder/SystemResources/RichTextEditor/PlatinumRichTextEditor.module.scss";
import {
    BoldItalicUnderlineToggles,
    CodeToggle,
    headingsPlugin,
    InsertThematicBreak,
    markdownShortcutPlugin,
    MDXEditor,
    MDXEditorMethods,
    quotePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo
} from "@mdxeditor/editor"
import {FC} from 'react'

interface EditorProps {
    markdown: string
    editorRef?: React.MutableRefObject<MDXEditorMethods | null>
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported SystemFolder don't support refs.
 */
const Editor: FC<EditorProps> = ({markdown, editorRef}) => {
    return <div className={PlatinumRichTextEditorStyles.platinumRichTextEditor}>
        <MDXEditor ref={editorRef} markdown={markdown} contentEditableClassName="prose"
                   plugins={[headingsPlugin(), headingsPlugin(),
                       quotePlugin(),
                       thematicBreakPlugin(),
                       markdownShortcutPlugin(),
                       toolbarPlugin({
                           toolbarContents: () => (
                               <>
                                   {' '}
                                   <UndoRedo/>
                                   <BoldItalicUnderlineToggles/>
                                   <CodeToggle></CodeToggle>
                                   <InsertThematicBreak></InsertThematicBreak>
                               </>
                           )
                       })
                   ]}/></div>
}

export default Editor
