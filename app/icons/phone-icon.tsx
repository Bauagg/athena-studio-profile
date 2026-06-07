interface PhoneIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const PhoneIcon = ({ width = 26, height = 26, color = "#0B0F1A" }: PhoneIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_285_2077)">
                <path d="M5.41667 4.33301H9.75L11.9167 9.74967L9.20833 11.3747C10.3685 13.7272 12.2725 15.6311 14.625 16.7913L16.25 14.083L21.6667 16.2497V20.583C21.6667 21.1576 21.4384 21.7087 21.0321 22.1151C20.6257 22.5214 20.0746 22.7497 19.5 22.7497C15.2742 22.4929 11.2885 20.6984 8.2949 17.7048C5.3013 14.7112 3.5068 10.7255 3.25 6.49967C3.25 5.92504 3.47827 5.37394 3.8846 4.96761C4.29093 4.56128 4.84203 4.33301 5.41667 4.33301Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_285_2077">
                    <rect width="26" height="26" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default PhoneIcon;
