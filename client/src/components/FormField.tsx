import { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  LabelName: string;
  name: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSurpriseMe?(): void;
}

const FormField = ({ LabelName, name, handleChange, handleSurpriseMe, ...rest }: FormFieldProps) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {LabelName}
        </label>

        {handleSurpriseMe && (
          <button 
            type="button" 
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise me
          </button>
        )}       
      </div>

      <input 
        {...rest} 
        onChange={handleChange} 
        required 
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] outline-none block w-full p-3" 
      />
    </div>
  );
}

export default FormField;