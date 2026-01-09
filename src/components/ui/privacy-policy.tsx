'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface PrivacyPolicyDialogProps {
  variant?: 'contact' | 'footer';
  className?: string;
}

export default function PrivacyPolicyDialog({ variant = 'contact', className }: PrivacyPolicyDialogProps) {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage =
      content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  // Different trigger styles for different contexts
  const triggerClassName = variant === 'footer'
    ? `text-gray-300 text-base hover:text-orange-500 transition-colors hover:translate-x-2 transform duration-200 underline-offset-4 hover:underline ${className || ''}`
    : `text-white hover:text-white/80 underline p-0 h-auto ${className || ''}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={triggerClassName}>
          מדיניות הפרטיות
        </button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-2xl [&>button:last-child]:top-3.5 bg-black text-white border-gray-700">
        <DialogHeader className="contents space-y-0 text-right" dir="rtl">
          <DialogTitle className="border-b border-gray-700 px-6 py-4 text-base text-white">
            מדיניות פרטיות
          </DialogTitle>
          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="overflow-y-auto"
          >
            <DialogDescription asChild>
              <div className="px-6 py-4 text-right" dir="rtl">
                <div className="[&_strong]:text-white space-y-4 [&_strong]:font-semibold text-gray-200 text-right" style={{ direction: 'rtl' }}>

                  {/* Introduction */}
                  <div className="space-y-2">
                    <p>
                      <strong>1. כללי</strong>
                    </p>
                    <p>
                      ברוכים הבאים לאתר Ethed. אנחנו מתמחים בפתרונות אוטומציה מבוססי בינה מלאכותית, כולל צ'אטבוטים, אוטומציות עסקיות ומערכות CRM מותאמות אישית. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך.
                    </p>
                    <p>
                      השימוש באתר ובשירותים שלנו מהווה הסכמה למדיניות פרטיות זו. אם אינך מסכים לתנאים אלה, אנא הימנע משימוש באתר.
                    </p>
                  </div>

                  {/* Data Collection */}
                  <div className="space-y-2">
                    <p>
                      <strong>2. איסוף מידע</strong>
                    </p>
                    <p>
                      אנו אוספים מידע בשתי דרכים עיקריות:
                    </p>
                    <p>
                      <strong>מידע שאתה מוסר באופן ישיר:</strong>
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li>שם מלא</li>
                      <li>מספר טלפון</li>
                      <li>תחום העסק</li>
                      <li>פרטי יצירת קשר נוספים שתבחר לשתף</li>
                      <li>תכתובות עם צ'אטבוטים ושירותי AI שלנו</li>
                    </ul>
                    <p>
                      <strong>מידע שנאסף באופן אוטומטי:</strong>
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li>כתובת IP</li>
                      <li>סוג דפדפן ומכשיר</li>
                      <li>עוגיות (Cookies) ומזהים דומים</li>
                      <li>דפי האתר שבהם ביקרת ומשך הביקור</li>
                      <li>מקור ההפניה לאתר שלנו</li>
                    </ul>
                  </div>

                  {/* Data Usage */}
                  <div className="space-y-2">
                    <p>
                      <strong>3. שימוש במידע</strong>
                    </p>
                    <p>
                      אנו משתמשים במידע שנאסף למטרות הבאות:
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li><strong>מתן שירות:</strong> ליצירת קשר אתך, לספק את השירותים המבוקשים ולתמוך בצרכים העסקיים שלך</li>
                      <li><strong>שיפור שירותים:</strong> לשפר את ביצועי הצ'אטבוטים, האוטומציות ופתרונות ה-CRM שלנו</li>
                      <li><strong>התאמה אישית:</strong> להתאים את חוויית המשתמש שלך על פי העדפותיך</li>
                      <li><strong>שיווק:</strong> לשלוח מידע שיווקי (רק בהסכמתך המפורשת)</li>
                      <li><strong>אנליטיקה:</strong> לנתח דפוסי שימוש ולשפר את האתר והשירותים</li>
                      <li><strong>ציות חוקי:</strong> לעמוד בדרישות חוקיות ולהגן על זכויותינו</li>
                    </ul>
                  </div>

                  {/* Third Party Sharing */}
                  <div className="space-y-2">
                    <p>
                      <strong>4. שיתוף מידע עם צדדים שלישיים</strong>
                    </p>
                    <p>
                      אנו עשויים לשתף מידע בנסיבות הבאות בלבד:
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li><strong>שירותי אחסון:</strong> Google Sheets לאחסון פרטי יצירת קשר מטפסים</li>
                      <li><strong>אינטגרציות עסקיות:</strong> Make.com, Shopify, Google Workspace ושירותים דומים (רק במסגרת מתן שירות לך)</li>
                      <li><strong>הסכמה:</strong> כאשר נתת הסכמה מפורשת לשיתוף</li>
                      <li><strong>חובה חוקית:</strong> כאשר נדרש על פי חוק</li>
                      <li><strong>הגנה על זכויות:</strong> להגן על זכויותינו, רכושנו או בטיחות המשתמשים</li>
                      <li><strong>שותפים עסקיים:</strong> ספקי שירות הפועלים מטעמנו (תחת חובת סודיות)</li>
                    </ul>
                    <p>
                      <strong>חשוב:</strong> אנו לא מוכרים ולא משכירים את המידע האישי שלך לצדדים שלישיים למטרות שיווק.
                    </p>
                  </div>

                  {/* User Rights */}
                  <div className="space-y-2">
                    <p>
                      <strong>5. זכויות המשתמש</strong>
                    </p>
                    <p>
                      בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 ותיקון 13 (2024), יש לך את הזכויות הבאות:
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li><strong>זכות עיון:</strong> לדעת אילו נתונים אנו מחזיקים עליך</li>
                      <li><strong>זכות תיקון:</strong> לבקש תיקון מידע שגוי או לא מדויק</li>
                      <li><strong>זכות מחיקה:</strong> לבקש מחיקת המידע האישי שלך (בכפוף למגבלות חוקיות)</li>
                      <li><strong>ביטול הסכמה:</strong> לבטל הסכמה קודמת לקבלת חומר שיווקי</li>
                      <li><strong>התנגדות לעיבוד:</strong> להתנגד לעיבוד מידע במקרים מסוימים</li>
                    </ul>
                    <p>
                      למימוש זכויותיך, ניתן ליצור קשר דרך טופס יצירת הקשר באתר או בכתובת הדוא"ל המופיעה בסעיף "יצירת קשר" להלן.
                    </p>
                  </div>

                  {/* Data Security */}
                  <div className="space-y-2">
                    <p>
                      <strong>6. אבטחת מידע</strong>
                    </p>
                    <p>
                      אנו נוקטים באמצעי אבטחה טכניים וארגוניים סבירים להגנה על המידע שלך, כולל:
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li>הצפנת נתונים בעת העברה (SSL/TLS)</li>
                      <li>הגבלת גישה למידע למורשים בלבד</li>
                      <li>עדכון שוטף של מערכות אבטחה</li>
                      <li>גיבויים תקופתיים של נתונים</li>
                    </ul>
                    <p>
                      למרות מאמצינו, אין אנו יכולים להבטיח אבטחה מוחלטת. במקרה של דליפת מידע, נודיע לך בהתאם לדרישות החוק.
                    </p>
                  </div>

                  {/* Data Retention */}
                  <div className="space-y-2">
                    <p>
                      <strong>7. תקופת שמירת מידע</strong>
                    </p>
                    <p>
                      אנו שומרים את המידע האישי שלך כל עוד הוא נחוץ למטרות שלשמן נאסף, או על פי דרישות חוקיות. לאחר מכן, המידע יימחק או יהפוך לאנונימי.
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <p>
                      <strong>8. יצירת קשר</strong>
                    </p>
                    <p>
                      לשאלות, בקשות או הבהרות בנוגע למדיניות הפרטיות, ניתן ליצור קשר עם אחראי הגנת הפרטיות:
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li><strong>שם:</strong> טדי נוגין</li>
                      <li><strong>טלפון:</strong> 0584292852</li>
                      <li><strong>דוא"ל:</strong> ethedoss@gmail.com</li>
                      <li>או דרך טופס יצירת הקשר באתר</li>
                    </ul>
                  </div>

                  {/* Policy Changes */}
                  <div className="space-y-2">
                    <p>
                      <strong>9. שינויים במדיניות</strong>
                    </p>
                    <p>
                      Ethed שומרת לעצמה את הזכות לעדכן את מדיניות הפרטיות מעת לעת. שינויים מהותיים יפורסמו באתר עם ציון מועד העדכון.
                    </p>
                    <p>
                      המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה למדיניות המעודכנת.
                    </p>
                  </div>

                  {/* Legal Compliance */}
                  <div className="space-y-2">
                    <p>
                      <strong>10. ציות חוקי וסמכות שיפוט</strong>
                    </p>
                    <p>
                      מדיניות פרטיות זו כפופה לדיני מדינת ישראל, ובפרט:
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li><strong>חוק הגנת הפרטיות, התשמ"א-1981:</strong> החוק הבסיסי המסדיר את הגנת הפרטיות בישראל</li>
                      <li><strong>תיקון 13 לחוק הגנת הפרטיות (2024):</strong> התיקון המקיף שנכנס לתוקף במרץ 2024 וכולל:
                        <ul className="list-disc pr-6 mt-2 space-y-1">
                          <li>עיצומים כספיים של עד מיליוני שקלים בגין הפרות מהותיות</li>
                          <li>איסור על עיבוד מידע שנאסף באופן לא חוקי</li>
                          <li>חובת מינוי ממונה הגנת פרטיות בארגונים מסוימים (לא חל על Ethed כעסק קטן)</li>
                          <li>התאמה לסטנדרטים בינלאומיים כגון GDPR</li>
                          <li>הגברת זכויות הנפגע והרחבת סמכויות הרשות להגנת הפרטיות</li>
                        </ul>
                      </li>
                      <li><strong>חוק התקשורת (בזק ושידורים), התשמ"ב-1982:</strong> לעניין תקשורת דיגיטלית</li>
                      <li><strong>תקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017:</strong> המחייבות אמצעי אבטחה ספציפיים כמפורט בסעיף 6 למעלה</li>
                    </ul>
                    <p>
                      כל סכסוך הנובע ממדיניות זו יידון בבתי המשפט המוסמכים בישראל בלבד.
                    </p>
                    <p>
                      <strong>התאמה לתקני GDPR:</strong> למרות שהעסק פועל בישראל, אנו פועלים בהתאם לעקרונות ה-GDPR האירופאי ככל הניתן, כולל שקיפות, מזעור איסוף נתונים, ומתן זכויות מלאות למשתמשים.
                    </p>
                  </div>

                  {/* AI and Automation Specific */}
                  <div className="space-y-2">
                    <p>
                      <strong>11. שימוש בבינה מלאכותית (AI)</strong>
                    </p>
                    <p>
                      שירותי Ethed כוללים שימוש באלגוריתמים של בינה מלאכותית לניתוח נתונים, אוטומציית תהליכים ושיפור חוויית המשתמש.
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li><strong>עיבוד אוטומטי:</strong> הצ'אטבוט שלנו משתמש במודלי שפה טבעית (NLP) לצורך תקשורת ומענה ללקוחות</li>
                      <li><strong>למידה מתמשכת:</strong> המערכת משתפרת עם הזמן באמצעות ניתוח דפוסי שימוש (ללא זיהוי אישי)</li>
                      <li><strong>שקיפות:</strong> משתמשים יקבלו התראה כאשר הם מתקשרים עם צ'אטבוט AI ולא עם נציג אנושי</li>
                    </ul>
                  </div>

                  {/* CRM and Integrations */}
                  <div className="space-y-2">
                    <p>
                      <strong>12. אינטגרציות CRM וצדדים שלישיים</strong>
                    </p>
                    <p>
                      במסגרת השירותים שלנו, אנו עשויים לבצע אינטגרציות עם מערכות CRM ופלטפורמות צד שלישי כמו:
                    </p>
                    <ul className="list-disc pr-6 space-y-1">
                      <li><strong>Google Sheets:</strong> לניהול וארגון נתוני לקוחות</li>
                      <li><strong>Make.com (לשעבר Integromat):</strong> לאוטומציית תהליכים</li>
                      <li><strong>Shopify:</strong> לאינטגרציה עם חנויות מקוונות</li>
                      <li><strong>Google Workspace:</strong> לניהול תקשורת ופרודוקטיביות</li>
                    </ul>
                    <p>
                      כל אינטגרציה תתבצע רק לאחר קבלת הסכמתך המפורשת, ובכפוף למדיניות הפרטיות של הצד השלישי הרלוונטי.
                    </p>
                    <p>
                      אנו מתחייבים לבצע בדיקת נאותות (Due Diligence) של ספקים חיצוניים כדי להבטיח שהם עומדים בתקני אבטחה והגנת מידע גבוהים.
                    </p>
                  </div>

                </div>
              </div>
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="border-t border-gray-700 px-6 py-4 flex justify-center items-center">
          {!hasReadToBottom && (
            <span className="text-gray-400 text-xs text-center mb-2">
              קרא את כל המדיניות לפני הסכמה.
            </span>
          )}
          <DialogClose asChild>
            <Button
              type="button"
              disabled={!hasReadToBottom}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              הבנתי
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
