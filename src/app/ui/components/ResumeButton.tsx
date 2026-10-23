"use client";

import Button from "./Button";

interface IResumeButton {
  className?: string;
  downloadUrl?: string;
}

const ResumeButton = ({ className, downloadUrl }: IResumeButton) => {
  return (
    <Button className={className} href="/resume">
      Resume
    </Button>
  );
};

export default ResumeButton;
