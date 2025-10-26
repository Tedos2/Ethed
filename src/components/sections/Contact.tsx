"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { User, Phone, Briefcase, Settings, Shield, Send } from "lucide-react";
import { cn } from "@/lib/utils";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "השם חייב להכיל לפחות 2 תווים"),
  phone: z.string().regex(/^0\d{1,2}-?\d{7}$/, "מספר טלפון לא תקין"),
  businessField: z.string().min(2, "נא להזין את תחום העסק"),
  currentSystem: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "יש לאשר את מדיניות הפרטיות",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    setIsSubmitting(false);
    setShowSuccess(true);
    reset();

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500"
          >
            איך AI יכול לשפר את העסק שלך?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-center text-gray-300 mb-12"
          >
            נשמח לשמוע על העסק שלך ולהציע פתרונות מותאמים
          </motion.p>

          {/* Form Card */}
          <motion.div
            variants={itemVariants}
            className="bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="name" className="block text-white font-medium mb-2 text-right">
                  שם <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    placeholder="הכנס את שמך"
                    dir="rtl"
                    className={cn(
                      "w-full bg-black/50 border rounded-lg pr-12 pl-4 py-3 text-white text-right placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all",
                      errors.name
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-orange-500/30 focus:ring-orange-500/50"
                    )}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1 text-right">{errors.name.message}</p>
                )}
              </motion.div>

              {/* Phone Field */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="phone" className="block text-white font-medium mb-2 text-right">
                  טלפון <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    placeholder="הכנס את מספר הטלפון שלך"
                    dir="rtl"
                    className={cn(
                      "w-full bg-black/50 border rounded-lg pr-12 pl-4 py-3 text-white text-right placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all",
                      errors.phone
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-orange-500/30 focus:ring-orange-500/50"
                    )}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1 text-right">{errors.phone.message}</p>
                )}
              </motion.div>

              {/* Business Field */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="businessField" className="block text-white font-medium mb-2 text-right">
                  תחום העסק <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                  <input
                    {...register("businessField")}
                    type="text"
                    id="businessField"
                    placeholder="הכנס את תחום העסק שלך"
                    dir="rtl"
                    className={cn(
                      "w-full bg-black/50 border rounded-lg pr-12 pl-4 py-3 text-white text-right placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all",
                      errors.businessField
                        ? "border-red-500 focus:ring-red-500/50"
                        : "border-orange-500/30 focus:ring-orange-500/50"
                    )}
                  />
                </div>
                {errors.businessField && (
                  <p className="text-red-400 text-sm mt-1 text-right">
                    {errors.businessField.message}
                  </p>
                )}
              </motion.div>

              {/* Current System Field (Optional) */}
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="currentSystem" className="block text-white font-medium mb-2 text-right">
                  עם איזו מערכת אתם עובדים היום?
                </label>
                <div className="relative">
                  <Settings className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500" />
                  <input
                    {...register("currentSystem")}
                    type="text"
                    id="currentSystem"
                    placeholder="בחר מערכת (לא חובה)"
                    dir="rtl"
                    className="w-full bg-black/50 border border-orange-500/30 rounded-lg pr-12 pl-4 py-3 text-white text-right placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                  />
                </div>
              </motion.div>

              {/* Privacy Consent */}
              <motion.div variants={itemVariants} className="flex items-start gap-3 flex-row-reverse">
                <input
                  {...register("privacyConsent")}
                  type="checkbox"
                  id="privacyConsent"
                  className="w-5 h-5 mt-1 accent-orange-500 cursor-pointer"
                />
                <label htmlFor="privacyConsent" className="text-gray-300 text-sm flex-1 text-right">
                  אני מסכים למסור את פרטיי בהתאם ל
                  <a
                    href="/privacy-policy"
                    className="text-orange-500 hover:text-orange-400 underline mx-1"
                  >
                    מדיניות הפרטיות
                  </a>
                  <span className="text-orange-500">*</span>
                </label>
              </motion.div>
              {errors.privacyConsent && (
                <p className="text-red-400 text-sm -mt-4 text-right">
                  {errors.privacyConsent.message}
                </p>
              )}

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    שולח...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    שליחה
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 z-50"
        >
          <Shield className="w-6 h-6" />
          <div>
            <p className="font-bold">תודה!</p>
            <p className="text-sm">ניצור איתך קשר בקרוב</p>
          </div>
        </motion.div>
      )}

      {/* Error Toast */}
      {showError && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 z-50"
        >
          <Shield className="w-6 h-6" />
          <div>
            <p className="font-bold">שגיאה</p>
            <p className="text-sm">אנא נסה שוב מאוחר יותר</p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
