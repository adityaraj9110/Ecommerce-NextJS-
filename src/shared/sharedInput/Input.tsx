
import { Controller } from 'react-hook-form';
import { FormValues, FormValuesForLogin } from '../utils/DataTypes/ResponsedataType';

type InputProps<T extends FormValues | FormValuesForLogin> = {
  type: string;
  id: string;
  className: string;
  control: any;
  name: string; 
  validationOptions?: Record<string, any>;
  error?: string;
};

const Input = <T extends FormValues | FormValuesForLogin>({
  type,
  id,
  className,
  control,
  name,
  validationOptions,
  error,
}: InputProps<T>) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <Controller
        control={control}
        name={name} 
        render={({ field }) => (
          <input
            type={type}
            id={id}
            className={className}
            {...field} 
          />
        )}
        rules={validationOptions} 
      />
      {error && <p className="error">{error}</p>}
    </>
  );
};

export default Input;
