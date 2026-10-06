import * as React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function UserNav() {
  return (
    <Avatar className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer hover:ring-2 hover:ring-primary/40 transition-all">
      <AvatarFallback className="bg-primary text-on-primary">
        <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
      </AvatarFallback>
    </Avatar>
  );
}
