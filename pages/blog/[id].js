/* eslint @next/next/no-img-element: 0 */

import Layout from '../../components/layout'
import { useSession } from "next-auth/react";
import React, { useRef, useState, Fragment } from "react";
import { motion } from 'framer-motion'
import ParticlesComponent from '../../components/paticlecomponent'
import prisma from '../../lib/prismadb.ts'
import Router from 'next/router';
import { Dialog, Transition } from '@headlessui/react'

export const getServerSideProps = async ({params}) => {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params?.id) || -1,
        },
        include: {
            author: {
                select: {
                    name: true, email: true, image: true
                }
            }
        }
    })
    return {
        props: post
    }
}

async function publishPost(id) {
    await fetch(`/api/publish/${id}`, {
        method: 'PUT'
    })
    await Router.push('/blog');
}

async function deletePost(id) {
    await fetch(`/api/post/${id}`, {
        method: 'DELETE'
    })
    await Router.push('/dashboard/drafts');
}

export default function Post (props) {

    const [isDelete, setIsDelete] = useState(false);
    const onClouseDelete = () => setIsDelete(false);

    const [isPublish, setIsPublish] = useState(false);
    const onClousePublish = () => setIsPublish(false);

    const cancelRef = useRef();

    const {data: session, loading} = useSession();

    if(loading){
        return <div>Authenticating!</div>
    }

    const userHasValidSession = Boolean(session);
    const postBelongsToUser = session?.user?.email === props.author?.email;

    return (
        <Layout>
        <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>
           <ParticlesComponent />
                 <div className='center PostPage'>
                     <div className='Box'>
                        <div className='Post'>
                            <h1 className='text-2xl font-bold'>{props.title} {!props.published && `(Draft)`}</h1>
                            <div className='mt-4 text' dangerouslySetInnerHTML={{ __html: props.content }}></div>
                            <div className='infos'>
                                <img src={props.author.image} alt={props.author.name} />
                                <p className='ml-4'>{props.author.name}</p>
                                <p className='ml-4'>{props.createdAt.toLocaleDateString()}</p>
                            </div>
                            {userHasValidSession && postBelongsToUser && 
                            <div className='mt-4'>
                                <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium DeleteBtn mr-4"
                                onClick={() => setIsDelete(true)}
                                >
                                Delete
                                </button>
                                {!props.published && 
                                    <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium PublishBtn"
                                    onClick={() => setIsPublish(true)}
                                    >
                                    Publish
                                    </button>
                                }
                            </div>
                            }
                        </div>
                     </div>
                 </div>
        </motion.div>
        <Transition appear show={isDelete} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClouseDelete}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete Post!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Warning! You can&apos;t undo this action afterwars.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-white text-sm font-medium CancelBtn mr-4"
                      onClick={onClouseDelete}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-white text-sm font-medium DeleteBtn"
                      onClick={() => deletePost(props.id)}
                    >
                      Delete
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isPublish} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClousePublish}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Publish Post!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Warning! You can&apos;t undo this action afterwars.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-white text-sm font-medium CancelBtn mr-4"
                      onClick={onClousePublish}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-white text-sm font-medium PublishBtn"
                      onClick={() => publishPost(props.id)}
                    >
                      Publish
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
    )
}