"use client";
import SectionWrapper from "../components/SectionWrapper";
import { SITE } from "../data/site.config";
import { SOCIALS } from "../data/socials";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const containerStyle = {
  width: "100%",
  height: "250px",
  borderRadius: "1rem",
  marginTop: "1.5rem",
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [mapLoaded, setMapLoaded] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

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
            const Icon = s.icon === "FaGithub" ? FaGithub : s.icon === "FaLinkedin" ? FaLinkedin : FaTwitter;
            return (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-2xl text-green-600 hover:text-green-800 transition-colors">
                <Icon />
              </a>
            );
          })}
        </div>
        <div className="text-zinc-700 dark:text-zinc-200 text-sm">{SITE.email} &bull; {SITE.phone}</div>
      </div>
      {/*
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: -1.2921, lng: 36.8219 }} // Replace with your location
          zoom={12}
          onLoad={() => setMapLoaded(true)}
        >
          <Marker position={{ lat: -1.2921, lng: 36.8219 }} />
        </GoogleMap>
      )}
      */}
    </SectionWrapper>
  );
}
