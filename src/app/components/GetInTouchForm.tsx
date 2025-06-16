import React from 'react'
import { Flex } from 'antd'
import ContactForm from './ContactForm'
const GetInTouchForm = () => {
  return (    <section className="bg-[#006ABC] py-20 lg:pt-[180px] lg:py-30">
      <div className="max-w-6xl mx-auto px-6 md:px-20  lg:px-[80px]">
        <Flex
          wrap="wrap"
          justify="space-between"
          gap="large"
          className="text-white gap-y-12"
        >

          <div className="flex-1 min-w-[280px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Get in touch
            </h2>
            <div className="h-[2px] w-12 bg-white mb-6" />

            <p className="text-base md:text-lg mb-6">For general enquiries</p>

            <ul className="space-y-6">
              <li>
                <p className="text-lg font-semibold">Address:</p>
                <p className="text-sm md:text-base text-white/90">
                  110, 16th Road, Chembur, Mumbai - 400071
                </p>
              </li>

              <li>
                <p className="text-lg font-semibold">Phone:</p>
                <a
                  href="tel:+912225208822"
                  className="text-sm md:text-base !text-white/90 hover:!underline"
                >
                  +91 22 25208822
                </a>
              </li>

              <li>
                <p className="text-lg font-semibold">Email:</p>
                <a
                  href="mailto:info@supremegroup.co.in"
                  className="text-sm md:text-base !text-white/90 hover:!underline"
                >
                  info@supremegroup.co.in
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-1 flex-1 min-w-[290px] ">
            <ContactForm/>
            {/* <div className="bg-white/10 h-full w-full rounded-lg flex items-center justify-center text-white text-opacity-60 text-sm min-h-[250px]">
              [Placeholder for form or map]
            </div> */}
          </div>
        </Flex>
      </div>
    </section>
  )
}

export default GetInTouchForm
