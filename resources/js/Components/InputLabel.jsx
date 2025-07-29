export default function InputLabel({
    value,
    className = '',
    children,
    forInput, // Explicitly accept forInput prop
    ...props
}) {
    return (
        <label
            {...props}
            htmlFor={forInput} // Use htmlFor instead of forInput for label
            className={
                `text-base block mb-2 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}