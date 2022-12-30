import Layout from '../../components/layout'
import ParticlesComponent from '../../components/paticlecomponent'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { useSession, signIn } from "next-auth/react"
import { useRef, useState } from 'react'
import Router from 'next/router'

import { Editor } from '@tinymce/tinymce-react';


export default function CreatePost() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
          setContent(editorRef.current.getContent());
        }
      };

    const { data: session } = useSession({
        required: true
      })

    if(!session){
        return <button className={`login-btn`} onClick={() => signIn()}>Sign in</button>
    }

    const submitPost = async (e) => {
        e.preventDefault();
        try{
            const body = {title, content};
            await fetch(`/api/post`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            await Router.push('/dashboard/drafts');
        } catch (err) {
            console.log(err);
        }
    }

    if(session.user.role === "Admin"){
        return (
            <Layout>
               <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
                      <ParticlesComponent />
                            <div className='center CreatePost'>
                                <div className='Box'>
                                    <h1 className='text-2xl mb-4 font-bold'>Create a Post</h1>
                                    <div className='mt-2'>
                                        <textarea autoFocus placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} rows={1} cols={30} />
                                    </div>
                                    <Editor
                                        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [
                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                                        ],
                                        toolbar: 'undo redo | blocks | ' +
                                            'bold italic forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                    <button className='btn mr-2' onClick={log}>Log all text!</button>
                                    <button className='btn mt-4' onClick={submitPost}>Submit</button>
                                </div>
                            </div>
                </motion.div>
            </Layout>
          )
    }

  return(
    <Layout>
        <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
           <ParticlesComponent />
                 <div className='center'>
                     <h1 className='text-2xl'>You don&apos;t have perms for that!</h1>
                 </div>
        </motion.div>
    </Layout>
    )
}