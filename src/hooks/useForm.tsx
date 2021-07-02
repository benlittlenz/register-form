import React, { ChangeEvent, useState } from 'react';

type FormPayload = {
  initialValues: any;
  onSubmit?: () => void
}
export const useForm = ({
  initialValues,
  onSubmit
}: FormPayload) => {
  const [data, setData] = useState(initialValues || {});

  const handleChange = (
    key: any,
    sanitizeFn?: (value: string) => any
  ) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return {
    data,
    handleChange,
    handleSubmit,
  };
};
