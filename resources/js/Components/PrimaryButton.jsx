import PropTypes from "prop-types";
import '../../css/button.css'

export default function PrimaryButton({
    className = '',
    variant = 'primary',
    disabled,
    processing = false,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`}
            disabled={disabled || processing}
        >
            {children}
        </button>
    );
}

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
};