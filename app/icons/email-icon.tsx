interface EmailIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const EmailIcon = ({ width = 26, height = 26, color = "#0B0F1A" }: EmailIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_285_2071)">
                <path d="M3.25 7.58366C3.25 7.00902 3.47827 6.45792 3.8846 6.05159C4.29093 5.64527 4.84203 5.41699 5.41667 5.41699H20.5833C21.158 5.41699 21.7091 5.64527 22.1154 6.05159C22.5217 6.45792 22.75 7.00902 22.75 7.58366V18.417C22.75 18.9916 22.5217 19.5427 22.1154 19.9491C21.7091 20.3554 21.158 20.5837 20.5833 20.5837H5.41667C4.84203 20.5837 4.29093 20.3554 3.8846 19.9491C3.47827 19.5427 3.25 18.9916 3.25 18.417V7.58366Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.25 7.58301L13 14.083L22.75 7.58301" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_285_2071">
                    <rect width="26" height="26" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default EmailIcon;
