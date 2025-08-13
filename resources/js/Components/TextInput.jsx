import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';

const TextInput = forwardRef(function TextInput(
    { 
        type = 'text', 
        defaultValue,
        className = '', 
        variant = 'primary',
        isFocused = false, 
        placeholder,
        isError,
        ...props 
    },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    // Define variant styles
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary-outline':
                return 'bg-white border-2 border-orange-500 text-gray-900';
            case 'error':
                return 'bg-white border-2 border-red-500 text-gray-900';
            case 'primary':
            default:
                return 'bg-white border border-gray-300 text-gray-900';
        }
    };

    const getErrorStyles = () => {
        return isError ? 'border-red-500 border-2' : '';
    };

    return (
        <input
            {...props}
            type={type}
            defaultValue={defaultValue}
            className={`
                rounded-2xl 
                py-[13px] 
                px-7 
                w-full 
                placeholder-gray-400
                focus:outline-none 
                focus:ring-2 
                focus:ring-orange-500 
                focus:border-transparent
                ${getVariantStyles()}
                ${getErrorStyles()}
                ${className}
            `}
            ref={localRef}
            placeholder={placeholder}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default TextInput;