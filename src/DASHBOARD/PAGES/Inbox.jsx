import React from "react";
import Sidebar from "../COMPONENTS/Sidebar";
import { SlEnvelopeOpen } from "react-icons/sl";

export default function Inbox() {
  return (
    <section className="lg:p-12 py-8 flex flex-col md:flex-row gap-6">
      <Sidebar />

      <section className="p-4 rounded-2xl border w-full flex flex-col gap-6">
        <h1 className="text-sm min-[900px]:text-lg lg:text-2xl text-left font-main font-semibold">
          Inbox
        </h1>

        <section className="p-4 flex flex-col items-center justify-center gap-5 md:max-w-[60%] w-full mx-auto">
          <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center">
            <SlEnvelopeOpen className="text-primary text-5xl" />
          </div>
          <span className="text-[16px]">You don't have any messages</span>
          <span className="text-[13px] text-gray-500 text-center">
            Here you will be able to see all the messages that we send you. Stay
            tuned
          </span>
        </section>
      </section>
    </section>
  );
}
