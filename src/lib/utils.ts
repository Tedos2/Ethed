import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Card data for glass cards component
export const cardData = [
  {
    id: 1,
    title: "בניית צ'אטבוטים מבוססי AI",
    description: "למד לבנות צ'אטבוטים חכמים שמבינים שפה טבעית ומספקים מענה מדויק ללקוחות. תתמחה בשילוב GPT-4, טיפול בשיחות מורכבות וניהול הקשר שיחה.",
    color: "rgba(255, 119, 66, 0.8)"
  },
  {
    id: 2,
    title: "אוטומציות ותהליכי עבודה",
    description: "שלוט בכלים המתקדמים ביותר לאוטומציה - Make.com, Zapier ו-n8n. תלמד לבנות תהליכים אוטומטיים שחוסכים שעות עבודה ומגבירים פרודוקטיביות.",
    color: "rgba(255, 119, 66, 0.8)"
  },
  {
    id: 3,
    title: "מערכות CRM מותאמות אישית",
    description: "בנה מערכות ניהול לקוחות חכמות המשולבות עם AI. תלמד לעקוב אחרי לידים, לנתח נתונים ולהפיק תובנות שיעזרו לעסקים להצליח.",
    color: "rgba(255, 119, 66, 0.8)"
  },
  {
    id: 4,
    title: "אנליטיקה ומדידת תוצאות",
    description: "למד להציג ערך ללקוחות דרך מדידת KPIs ודיווחים מפורטים. תדע להראות בדיוק כמה כסף וזמן חסכת לעסק - מה שיהפוך אותך לבלתי-נתפס.",
    color: "rgba(255, 119, 66, 0.8)"
  }
];
