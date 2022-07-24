import { CSSProperties } from 'react'
import { ClipLoader } from 'react-spinners'

interface IAppButton {
    title: string;
    onClick: () => void;
    style?: CSSProperties;
    isLoading?: boolean;
    fontSize?: number;
    backgroundColor?: string;
    height?: number;
    width?: number;
    titleColor?: string;
}

const AppButton = (props: IAppButton) => {
    return (
        <button disabled={props.isLoading} style={{ ...getMainContainerStyle(props), ...props.style }} onClick={props.onClick}>
            {props.isLoading ?
                <ClipLoader size={32} color='#031926' />
                :
                <p style={getTextStyle(props)}>
                    {props.title}
                </p>
            }
        </button>
    )
}

const getMainContainerStyle = (props: IAppButton): CSSProperties => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: props.width ?? 172,
        height: props.height ?? 60,
        borderRadius: 60,
        backgroundColor: props.backgroundColor ?? '#e3b23c',
        borderWidth: 0,
        cursor: 'pointer',
    }
}

const getTextStyle = (props: IAppButton): CSSProperties => {
    return {
        color: props.titleColor ?? '#FFFFFF',
        fontSize: props.fontSize ?? 24,
    }
}


export default AppButton