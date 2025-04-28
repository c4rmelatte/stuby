// components/SidebarDrawer.tsx
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Menu,
  Timer,
  BookOpen,
  Notebook,
  Music2,
  StickyNote,
} from "lucide-react";

export default function SidebarDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-3">
            <Menu className="text-[#304D3B] w-6 h-6" />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="bg-[#304D3B] w-56 p-4 text-[#C0B28C]">
          <div className="text-2xl font-bold mb-6 text-[#C0933D]">stuby.</div>

          <nav className="flex flex-col gap-6 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <Timer className="w-5 h-5" /> POMODORO
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5" /> FLASHCARD
            </div>
            <div className="flex items-center gap-3">
              <Notebook className="w-5 h-5" /> TO DO LIST
            </div>
            <div className="flex items-center gap-3">
              <Music2 className="w-5 h-5" /> MUSIC
            </div>
            <div className="flex items-center gap-3">
              <StickyNote className="w-5 h-5" /> NOTEPAD
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
