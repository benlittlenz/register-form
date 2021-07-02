import React, { ChangeEvent, useState } from 'react';

type FormPayload = {
  initialValues: any;
  onSubmit: () => void;
  validations?: any;
}

export const useForm = ({
  initialValues,
  onSubmit,
  validations
}: FormPayload) => {
  const [data, setData] = useState(initialValues);
  const [errors, setErrors] = useState<any>({});

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

    if (validations) {
      let valid = true;
      const newErrors = {} as any;
      for (const key in validations) {
        const value = data[key];
        const {
          required,
          pattern
        } = validations[key];
        if (value in required) {
          valid = false;
          newErrors[key] = required.message;
        }

        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (onSubmit) onSubmit();
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors
  };
};
