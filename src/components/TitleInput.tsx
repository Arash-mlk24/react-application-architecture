import { CSSProperties } from "react";

interface TitleInputProps {
    value: string;
    onChange: (text: string) => void;
    title: string;
    titleColor?: string;
    style?: CSSProperties;
    width?: number;
    height?: number;
    titleSize?: number;
    backgroundColor?: string;
}

const TitleInput = (props: TitleInputProps) => {
    return (
        <div>
            <p style={{ color: props.titleColor ?? '#FFFFFF', margin: 0, fontSize: props.titleSize ?? 24, fontWeight: 'bold' }} >
                {props.title}
            </p>
            <input
                style={{
                    ...{
                        height: props.height ?? 60,
                        borderRadius: 8,
                        backgroundColor: props.backgroundColor ?? '#d7f9ff',
                        margin: 0,
                        overflow: 'hidden',
                        outlineWidth: 0,
                        borderWidth: 0,
                        width: props.width ? props.width - 24 : 388,
                        paddingLeft: 12,
                        paddingRight: 12
                    },
                    ...props.style
                }}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default TitleInput