"use client";

import Button from "./Button";

interface IResumeButton {
  className?: string;
  downloadUrl?: string;
}

const ResumeButton = ({ className, downloadUrl }: IResumeButton) => {
  return (
    <Button className={className} href={downloadUrl}>
      Resume
    </Button>
  );
};

export default ResumeButton;
