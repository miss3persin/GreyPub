import React from 'react'
import { SectionTitle } from '../Components/SectionTitle'
import Image from 'next/image'
import submit_project from '/public/project-submit-icon.png'
import collaborate from '/public/collaborate-icon.png'
import plan from '/public/plan-icon.png'
import result_get from '/public/result-icon.png'
import flow_connector from '/public/flow-connector.png'

export const WorkflowSection = () => {
  return (
    <>
    <SectionTitle text="HOW IT WORKS"/>

    <div className='container px-20 mt-16 mb-40 flex items-center justify-between'>
        <div className='text-white max-w-[11.5rem] flex flex-col gap-1'>
            <Image src={submit_project} />
            <p className='font-medium text-sm'>Submit Your Project</p>
            <p className='font-light text-[0.8rem]'>Upload necessary details about the project any work done so far.</p>
        </div>

        <div><Image src={flow_connector}/></div>

        <div className='text-white max-w-[11.5rem] flex flex-col gap-1'>
            <Image src={collaborate} />
            <p className='font-medium text-sm'>collaborate With Experts</p>
            <p className='font-light text-[0.8rem]'>Experienced researchers in the field begin research on the project.</p>
        </div>

        <div><Image src={flow_connector}/></div>

        <div className='text-white max-w-[11.5rem] flex flex-col gap-1'>
            <Image src={plan} />
            <p className='font-medium text-sm'>Get A Custom Plan</p>
            <p className='font-light text-[0.8rem]'>Select project requirements which generates a custom tailored price.</p>
        </div>

        <div><Image src={flow_connector}/></div>

        <div className='text-white max-w-[11.5rem] flex flex-col gap-1'>
            <Image src={result_get} />
            <p className='font-medium text-sm'>Receive Your Results</p>
            <p className='font-light text-[0.8rem]'>Get complete project sent to mail after complete payments.</p>
        </div>

    </div>
    </>
  )
}
