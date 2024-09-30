import React from 'react'
import { SectionTitle } from '../Components/SectionTitle'
import { GreyPubFeatures } from '../Components/GreyPubFeatures'
import Image from 'next/image'
import dude_pc from '/public/dude-pc.png'
import { StudentCard } from '../Components/StudentCard'

export const FeaturesSection = () => {
  return (
    <>
    <SectionTitle text='FEATURES'/>

    <div className='container px-7 lg:px-20 xl:px-28 gap-4 xl:gap-0 flex flex-col-reverse lg:flex-row items-center justify-between mt-10  md:mt-20 mb-20 md:mb-40'>
        <div className='flex flex-col mt-10 md:mt-16 lg:mt-0 gap-6'>
            <GreyPubFeatures title='Code Implementation' description='Get expertly written and tested code for your research projects.'/>
            <GreyPubFeatures title='Project Write-ups' description='Comprehensive and well-documented write-ups that meet academic standards.'/>
            <GreyPubFeatures title='Literature Review Assistance' description='Access to centralized literature and methodologies tailored to your topic.'/>
            <GreyPubFeatures title=' Consultation & Support' description='One-on-one consultations to guide you through your project.'/>
        </div>

        <div>
            <div className='w-[290px] h-[285px] lg:w-[400px] lg:h-[401px] xl:w-[465px] md:h-[468px] bg-slate-800 rounded-xl md:rounded-3xl overflow-hidden relative'>
                <StudentCard/>
                <Image src={dude_pc} alt='' className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
    </>
  )
}
