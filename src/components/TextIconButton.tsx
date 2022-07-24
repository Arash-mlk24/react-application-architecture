import { CSSProperties } from 'react'
import { CircleLoader } from 'react-spinners'

interface TextIconButtonProps {
    title: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    onClick: () => void;
    style?: CSSProperties;
    backgroundColor?: string;
    textColor?: string;
    isLoading?: boolean;
}

const TextIconButton = (props: TextIconButtonProps) => {
    return (
        <button style={{ ...getMainContainerStyle(props.backgroundColor!), ...props.style }} onClick={props.onClick}>
            <props.icon width={15} height={15} style={{ marginRight: 12 }} />

            {props.isLoading ?
                <CircleLoader />
                :
                <p style={getTextStyle(props.textColor!)}>
                    {props.title}
                </p>
            }
        </button>
    )
}

const getMainContainerStyle = (backgroundColor: string): CSSProperties => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 100,
        backgroundColor: backgroundColor ?? '#031926',
        borderWidth: 0,
        cursor: 'pointer',
    }
}


const getTextStyle = (textColor: string): CSSProperties => {
    return {
        color: textColor ?? '#FFFFFF',
        fontSize: 16,
        margin: 0,
        fontWeight: 'bold',
    }
}

export default TextIconButton