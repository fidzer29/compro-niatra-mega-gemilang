"use client";
import { Phone, MapPin, Mail, LoaderCircle } from "lucide-react";
import FadeContent from "@/components/react-bits/FadeContent";
import { useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { AnimatedWords } from "@/components/animations/AnimatedWords";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const toast = useRef<Toast>(null);
  const [submitted, setSubmitted] = useState(false);
  const hasError = (value: string) => submitted && value.trim() === "";
  const isValidPhone = (phone: string) => {
    const regex = /^(?:\+62|0)[0-9]{9,13}$/;
    return regex.test(phone);
  };

  const isValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    isValidPhone(formData.phone) &&
    formData.message.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^[0-9+]*$/.test(value)) return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (!isValid || loading) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      toast.current?.show({
        severity: "success",
        summary: "Berhasil",
        detail: "Pesan Anda telah terkirim!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setSubmitted(false);
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Gagal",
        detail: "Terjadi kesalahan saat mengirim pesan",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="mt-24 grid grid-cols-1 gap-12 px-4 sm:px-8 lg:mt-15 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="flex flex-col gap-2">
          <motion.h3 className="text-primary h-max text-2xl leading-[1.2] font-medium sm:text-4xl lg:text-6xl">
            <AnimatedWords text="Mari Diskusikan Kebutuhan Outsourcing Perusahaan Anda" />
          </motion.h3>

          <p className="text-sm sm:text-base">
            Kami siap membantu perusahaan Anda dalam menyediakan solusi outsourcing yang profesional
            dan sesuai kebutuhan operasional. Hubungi tim kami untuk konsultasi, pertanyaan layanan,
            atau penawaran kerja sama.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div className="text-accent flex items-center gap-2">
              <MapPin size={20} />
              Blk. VD 03, Jl. Ecopolis Boulevard Utama No.42, Mekar Bakti, Kec. Panongan, Kabupaten
              Tangerang, Banten 15710 (Depan Gramedia)
            </div>
            <div className="text-accent flex items-center gap-2">
              <Phone size={20} />
              +62 813-8310-880
            </div>
            <div className="text-accent flex items-center gap-2">
              <Mail size={20} />
              pt.niatramegagemilang@gmail.com
            </div>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-primary text-sm">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className={`rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                    hasError(formData.name)
                      ? "border-red-500 focus:ring-red-500"
                      : "border-primary-white focus:ring-primary"
                  } `}
                />

                {hasError(formData.name) && (
                  <span className="text-xs text-red-500">Nama wajib diisi</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-primary text-sm">Alamat Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  className={`rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                    hasError(formData.email)
                      ? "border-red-500 focus:ring-red-500"
                      : "border-primary-white focus:ring-primary"
                  } `}
                />

                {hasError(formData.email) && (
                  <span className="text-xs text-red-500">Email wajib diisi</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-primary text-sm">No Telepon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Masukkan no telepon"
                className={`rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                  hasError(formData.phone)
                    ? "border-red-500 focus:ring-red-500"
                    : "border-primary-white focus:ring-primary"
                } `}
              />

              {hasError(formData.phone) && (
                <span className="text-xs text-red-500">No Telepon wajib diisi</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-primary text-sm">Pesan</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Masukkan pesan"
                className={`rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                  hasError(formData.message)
                    ? "border-red-500 focus:ring-red-500"
                    : "border-primary-white focus:ring-primary"
                } `}
              />

              {hasError(formData.message) && (
                <span className="text-xs text-red-500">Pesan wajib diisi</span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid || loading}
              className={`flex w-fit items-center gap-2 rounded-lg px-6 py-3 transition duration-300 ${
                !isValid || loading
                  ? "cursor-not-allowed bg-gray-300 text-gray-700"
                  : "bg-primary hover:bg-primary/90 text-white"
              }`}
            >
              {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : "Kirim"}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16">
        <FadeContent blur={true} duration={1000} initialOpacity={0}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22988.21002644403!2d107.60561995199572!3d-6.921891802500724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e97b3eaee5a3%3A0x7ebc54e48626fe82!2sARASSO!5e0!3m2!1sen!2sid!4v1769673575150!5m2!1sen!2sid"
            className="h-screen w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </FadeContent>
      </div>
      <Toast ref={toast} />
    </div>
  );
}
