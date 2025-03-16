import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoModalProps {
  videoSrc: string;
  videoTitle?: string;
  buttonText?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
}

const VideoModal = ({
  videoSrc,
  videoTitle = "Video",
  buttonText = "Watch Video",
  buttonVariant = "outline",
  buttonSize = "lg",
}: VideoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size={buttonSize}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] p-0 overflow-hidden bg-black border-none">
        <div className="relative w-full h-full">
          <DialogClose className="absolute right-2 top-2 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
            <X className="h-5 w-5" />
          </DialogClose>
          <div
            className="w-full"
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
          >
            <iframe
              src={videoSrc}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title={videoTitle}
            ></iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
