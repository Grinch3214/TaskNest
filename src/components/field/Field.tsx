import type { HTMLInputTypeAttribute, Ref } from 'react';

interface FieldProps {
  className?: string;
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: (value: string) => void;
  ref?: Ref<HTMLInputElement>;
  error?: string;
}

const Field = ({
  className = '',
  id,
  label,
  type = 'text',
  value,
  onChange,
  ref,
  error,
}: FieldProps) => {
  return (
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`field__input ${error ? 'field__input--invalid' : ''}`}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
        value={value}
        onInput={(event) => onChange?.(event.currentTarget.value)}
        ref={ref}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
};

export default Field;
