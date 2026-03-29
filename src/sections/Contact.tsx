"use client";
import SectionWrapper from "../components/SectionWrapper";
import { SITE } from "../data/site.config";
import { SOCIALS } from "../data/socials";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";



export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();


  const onSubmit = async (data: any) => {
    // Placeholder: send data to email or API
    toast.success("Message sent! Thank you.");
    reset();
  };

  return (
    <SectionWrapper id="contact" className="py-24 max-w-3xl mx-auto">
      <Toaster />
      <h2 className="text-3xl font-bold mb-10 text-center text-green-700 dark:text-green-400">Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-lg p-8 flex flex-col gap-4">
        <input {...register("name", { required: true })} placeholder="Name" className="rounded px-4 py-3 border border-green-200 dark:border-green-800 focus:ring-2 focus:ring-green-400" />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
        <input {...register("email", { required: true })} type="email" placeholder="Email" className="rounded px-4 py-3 border border-green-200 dark:border-green-800 focus:ring-2 focus:ring-green-400" />
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
        <textarea {...register("message", { required: true })} placeholder="Message" rows={5} className="rounded px-4 py-3 border border-green-200 dark:border-green-800 focus:ring-2 focus:ring-green-400" />
        {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
        <button type="submit" disabled={isSubmitting} className="rounded-full px-8 py-3 bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition-all mt-2 disabled:opacity-60">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <div className="flex flex-col items-center mt-8 gap-2">
        <div className="flex gap-4 mb-2">
          {SOCIALS.map((s) => {
            let Icon;
            if (s.icon === "FaGithub") Icon = FaGithub;
            else if (s.icon === "FaLinkedin") Icon = FaLinkedin;
            else if (s.icon === "FaTwitter") Icon = FaTwitter;
            else if (s.icon === "FaWhatsapp") Icon = FaWhatsapp;
            else Icon = FaGithub;
            return (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-2xl text-green-600 hover:text-green-800 transition-colors">
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="text-zinc-700 dark:text-zinc-200 text-sm">{SITE.email} &bull; {SITE.phone}</div>
      </div>

    </SectionWrapper>
  );
}
