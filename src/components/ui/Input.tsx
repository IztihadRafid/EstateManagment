import React from "react";

interface BaseProps {
  label: string;
  name: string;
  error?: string;
  as?: "input" | "textarea";
  value: string;
  onchange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
type InputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export const Input = ({}: InputProps | TextareaProps) => {
  return <div>Input</div>;
};
