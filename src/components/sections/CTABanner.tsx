"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PrivacyPolicyDialog from "@/components/ui/privacy-policy";
import { trackLead, trackContact } from "@/lib/fbPixel";

export default function CTABanner() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessField, setBusinessField] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    const newErrors: { [key: string]: boolean } = {};

    // Validate fields
    if (!name.trim()) newErrors.name = true;
    if (!phone.trim()) newErrors.phone = true;
    if (!businessField.trim()) newErrors.businessField = true;
    if (!privacyConsent) newErrors.privacyConsent = true;

    // If there are errors, show them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          businessField: businessField.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');

        // Track Facebook Lead conversion
        trackLead({
          content_name: 'CTA Banner Form',
          content_category: 'Lead Generation',
        });
        trackContact();

        // Clear form
        setName('');
        setPhone('');
        setBusinessField('');
        setPrivacyConsent(false);

        // Show success message
        alert('הטופס נשלח בהצלחה! נחזור אליך בהקדם');

        // Scroll to contact section after brief delay
        setTimeout(() => {
          document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 500);
      } else {
        throw new Error(data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      alert('שגיאה בשליחת הטופס. אנא נסה שוב');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-4 md:py-6">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="bg-gradient-to-r from-[#B54A2A] to-[#C14D2D] rounded-2xl p-4 md:p-6 shadow-xl shadow-orange-900/20">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">

              {/* Main Row - Title + Form Fields */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                {/* Right Side - Headline Text (RTL) */}
                <div className="text-white text-right w-full md:flex-1" dir="rtl">
                  <h2 className="text-lg md:text-2xl font-bold leading-tight" suppressHydrationWarning>
                    נשמע מעניין? בואו לשמוע איך אנחנו יכולים לייעל את העסק שלך:
                  </h2>
                </div>

                {/* Left Side - Form Fields */}
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto" dir="rtl">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({...errors, name: false});
                    }}
                    placeholder="שם"
                    dir="rtl"
                    suppressHydrationWarning
                    className={`bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base font-medium placeholder:text-white/70 focus:outline-none focus:ring-2 transition-all border min-w-[100px] text-right ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/20 focus:ring-white/50'
                    }`}
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({...errors, phone: false});
                    }}
                    placeholder="טלפון"
                    dir="rtl"
                    suppressHydrationWarning
                    className={`bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base font-medium placeholder:text-white/70 focus:outline-none focus:ring-2 transition-all border min-w-[100px] text-right ${
                      errors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/20 focus:ring-white/50'
                    }`}
                  />
                  <input
                    type="text"
                    value={businessField}
                    onChange={(e) => {
                      setBusinessField(e.target.value);
                      if (errors.businessField) setErrors({...errors, businessField: false});
                    }}
                    placeholder="תחום העסק"
                    dir="rtl"
                    suppressHydrationWarning
                    className={`bg-black/40 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base font-medium placeholder:text-white/70 focus:outline-none focus:ring-2 transition-all border min-w-[120px] text-right ${
                      errors.businessField
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/20 focus:ring-white/50'
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                    className={`bg-white text-black px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-gray-100 hover:shadow-lg cursor-pointer hover:scale-105 transform'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span suppressHydrationWarning>שולח...</span>
                        <span className="animate-spin" suppressHydrationWarning>⟳</span>
                      </>
                    ) : (
                      <>
                        <span suppressHydrationWarning>שליחה</span>
                        <span suppressHydrationWarning>◄</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Privacy Consent Checkbox - Below form */}
              <div className={`flex items-start gap-3 justify-center md:justify-end bg-black/20 p-3 rounded-lg border transition-all ${
                errors.privacyConsent ? 'border-red-500' : 'border-white/20'
              }`} dir="rtl">
                <input
                  type="checkbox"
                  id="ctaPrivacyConsent"
                  checked={privacyConsent}
                  onChange={(e) => {
                    setPrivacyConsent(e.target.checked);
                    if (errors.privacyConsent) setErrors({...errors, privacyConsent: false});
                  }}
                  className="mt-0.5"
                  style={{
                    width: '20px',
                    height: '20px',
                    minWidth: '20px',
                    minHeight: '20px',
                    accentColor: '#ffffff',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                />
                <label
                  htmlFor="ctaPrivacyConsent"
                  className="text-white text-sm cursor-pointer flex-1"
                  suppressHydrationWarning
                >
                  אני מסכים למסור את פרטיי בהתאם ל
                  <span className="inline-block mx-1">
                    <PrivacyPolicyDialog variant="contact" />
                  </span>
                  <span className="text-yellow-300">*</span>
                </label>
              </div>

            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
