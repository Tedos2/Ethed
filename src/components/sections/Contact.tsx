"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { User, Phone, Briefcase, Shield, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Spline3DScene from "@/components/ui/Spline3DScene";
import PrivacyPolicyDialog from "@/components/ui/privacy-policy";
import { PixelSnow } from "@/components/ui/PixelSnow";
import { trackLead, trackContact } from "@/lib/fbPixel";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "השם חייב להכיל לפחות 2 תווים"),
  phone: z.string().regex(/^0\d{1,2}-?\d{7}$/, "מספר טלפון לא תקין"),
  businessField: z.string().min(2, "נא להזין את תחום העסק"),
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
    setShowError(false);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          businessField: data.businessField,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      // Success
      setShowSuccess(true);

      // Track Facebook Lead conversion
      trackLead({
        content_name: 'Contact Form',
        content_category: 'Lead Generation',
      });
      trackContact();

      reset();
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="relative py-12 md:py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Pixel Snow Background Effect */}
        <PixelSnow />
      </div>

      <div className="container mx-auto px-6 md:px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Unified block with bot and form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-900 backdrop-blur-md border border-gray-800 rounded-3xl p-4 md:p-8 shadow-2xl"
          >
            {/* Two-column grid inside unified block */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">

              {/* Left Column - Form (switched position) */}
              <div className="order-1"
              >
                {/* Heading inside form card */}
                <h3 className="text-white text-2xl md:text-3xl mb-2 text-right" style={{ fontWeight: '900' }} suppressHydrationWarning>
                  רוצים לשמוע איך אפשר לייעל את העסק שלכם?
                </h3>
                <p className="text-white/90 text-lg mb-6 text-right" suppressHydrationWarning>
                  תאמו איתנו שיחת אפיון ראשונית ללא עלות:
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="block text-white font-medium mb-2 text-right" suppressHydrationWarning>
                  שם <span className="text-white" suppressHydrationWarning>*</span>
                </label>
                <div className="relative">
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF7742] pointer-events-none" />
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    placeholder="הכנס את שמך"
                    dir="rtl"
                    suppressHydrationWarning
                    className={cn(
                      "w-full bg-white/10 border rounded-lg pr-12 pl-4 py-3 text-white text-right placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all",
                      errors.name
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/20 focus:ring-white/50"
                    )}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-200 text-sm mt-1 text-right">{errors.name.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label htmlFor="phone" className="block text-white font-medium mb-2 text-right" suppressHydrationWarning>
                  טלפון <span className="text-white" suppressHydrationWarning>*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF7742] pointer-events-none" />
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    placeholder="הכנס את מספר הטלפון שלך"
                    dir="rtl"
                    suppressHydrationWarning
                    className={cn(
                      "w-full bg-white/10 border rounded-lg pr-12 pl-4 py-3 text-white text-right placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all",
                      errors.phone
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/20 focus:ring-white/50"
                    )}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-200 text-sm mt-1 text-right">{errors.phone.message}</p>
                )}
              </div>

              {/* Business Field */}
              <div className="relative">
                <label htmlFor="businessField" className="block text-white font-medium mb-2 text-right" suppressHydrationWarning>
                  תחום העסק <span className="text-white" suppressHydrationWarning>*</span>
                </label>
                <div className="relative">
                  <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FF7742] pointer-events-none" />
                  <input
                    {...register("businessField")}
                    type="text"
                    id="businessField"
                    placeholder="הכנס את תחום העסק שלך"
                    dir="rtl"
                    suppressHydrationWarning
                    className={cn(
                      "w-full bg-white/10 border rounded-lg pr-12 pl-4 py-3 text-white text-right placeholder:text-white/50 focus:outline-none focus:ring-2 transition-all",
                      errors.businessField
                        ? "border-red-400 focus:ring-red-400/50"
                        : "border-white/20 focus:ring-white/50"
                    )}
                  />
                </div>
                {errors.businessField && (
                  <p className="text-red-200 text-sm mt-1 text-right">
                    {errors.businessField.message}
                  </p>
                )}
              </div>

              {/* Privacy Consent */}
              <div className="flex items-start gap-3 flex-row-reverse">
                <label htmlFor="privacyConsent" className="text-white/90 text-base flex-1 text-right cursor-pointer" suppressHydrationWarning>
                  אני מסכים למסור את פרטיי בהתאם ל
                  <span className="inline-block mx-1" suppressHydrationWarning>
                    <PrivacyPolicyDialog variant="contact" />
                  </span>
                  <span className="text-white" suppressHydrationWarning>*</span>
                </label>
                <input
                  {...register("privacyConsent")}
                  type="checkbox"
                  id="privacyConsent"
                  className="w-6 h-6 mt-1 accent-[#FF7742] cursor-pointer rounded border-2 border-white/30 bg-white/10"
                />
              </div>
              {errors.privacyConsent && (
                <p className="text-red-200 text-sm -mt-4 text-right">
                  {errors.privacyConsent.message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#FF7742] font-bold py-4 px-8 rounded-lg hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#FF7742]/30 border-t-[#FF7742] rounded-full animate-spin" />
                    שולח...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    שליחה
                  </>
                )}
              </button>
            </form>
              </div>

              {/* Right Column - 3D Bot Component (Desktop Only) */}
              <div className="hidden md:flex order-2 justify-center md:justify-end">
                <div className="w-full max-w-md h-[350px] md:h-[500px]">
                  <Spline3DScene />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
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
