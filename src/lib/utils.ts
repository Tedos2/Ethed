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
    description: "העובדים שלך מבזבזים 20% מהזמן על עבודה חוזרת – הזנת נתונים, מיילים, מעקבים. האוטומציות שלנו משחררות אותם לעשות את מה שבאמת חשוב.",
    color: "rgba(255, 119, 66, 0.8)",
    imagePath: "/images to use/חסכון בכסף.png"
  },
  {
    id: 2,
    icon: "Heart",
    title: "שיפור חווית הלקוח",
    description: "בוטים חכמים שעונים ללקוחות 24/7, פותרים בעיות בזמן אמת, ומשפרים את חווית השירות – בלי להוסיף עוד עובד לשכר.",
    color: "rgba(255, 119, 66, 0.8)",
    imagePath: "/images to use/חווויתתתת לקוחח.png"
  },
  {
    id: 3,
    icon: "Settings",
    title: "ייעול התהליכים והמחלקות",
    description: "תיאום בין מחלקות הופך לאוטומטי. תהליכים שנעשו ידנית עוברים לזרימה חלקה, והעסק שלך עובד כמו שעון – בלי בלגן ידני.",
    color: "rgba(255, 119, 66, 0.8)",
    imagePath: "/images to use/מחלקות.png"
  },
  {
    id: 4,
    icon: "UserCheck",
    title: "מקסום הלידים והמכירות",
    description: "כל הלידים שלך מתרכזים במקום אחד, התראות אוטומטיות לצוות המכירות, ומערכת מותאמת בדיוק לצרכים של העסק – לא תפספסו עוד אף לקוח.",
    color: "rgba(255, 119, 66, 0.8)",
    imagePath: "/images to use/מקסום הלידים.png"
  }
];
