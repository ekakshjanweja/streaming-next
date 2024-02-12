"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CopyButton } from "./copy-button";

interface KeyCardProps {
  value: string | null;
}

export const KeyCard = ({ value }: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              placeholder="Stream Key"
            />
          </div>
        </div>
        <CopyButton value={value || ""} />
        <Button
          size="sm"
          variant="link"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide" : "Show"}
        </Button>
      </div>
    </div>
  );
};
