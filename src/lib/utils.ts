import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Card data for glass cards component
export const cardData = [
  {
    id: 1,
    icon: "Calendar",
    title: "חיסכון בזמן וכסף",
    description: "יותר מ-20% מהזמן העובדים בעסק ממוזע, משוקעת על פעולות כמו הזנת נתונים, שליחת אימיילים קבועים ועוד פעולות זמן-חוזרות. הפתרונות שלנו חוסכים לעסק ולעובדים בו זמן וכסף.",
    color: "rgba(255, 119, 66, 0.8)"
  },
  {
    id: 2,
    icon: "Heart",
    title: "שיפור חווית הלקוח",
    description: "אוטומציות ובוטים חכמים שיקטינו מענה אוטומטי לבעיות ושאלות שונות מעיניים בכדי לייעל את הזמן הממוזן מחרו לשעות הפעלות 24/7",
    color: "rgba(255, 119, 66, 0.8)"
  },
  {
    id: 3,
    icon: "Settings",
    title: "ייעול התהליכים והמחלקות",
    description: "העבודה והמעבר בין מחלקות העסק יכול להיות ידני ומבולגן, כשהתהליכים אלא אוטומטים העסק יעיל יותר והעבודה קלה יותר.",
    color: "rgba(255, 119, 66, 0.8)"
  },
  {
    id: 4,
    icon: "UserCheck",
    title: "מקסום הלידים והמכירות",
    description: "חיבור כל מקורות הלידים למערכת אחת, הודעת ווצאפ אוטומטית לספר המכירה והמתאמה אישית של הפתרון המדויק לצרכים של העסק שלכם.",
    color: "rgba(255, 119, 66, 0.8)"
  }
];
