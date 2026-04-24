"use client";

import { useContactModal, type ContactVariant } from "./ContactModal";

interface Props {
  variant?: ContactVariant;
  className?: string;
  children: React.ReactNode;
}

export default function ContactButton({ variant = "message", className, children }: Props) {
  const { openModal } = useContactModal();
  return (
    <button type="button" onClick={() => openModal(variant)} className={className}>
      {children}
    </button>
  );
}
