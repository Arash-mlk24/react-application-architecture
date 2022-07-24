import { CSSProperties } from 'react'

interface LinkTextProps {
    linkText: string;
    preText?: string;
    onLinkClick?: () => void;
    linkTextColor?: string;
    preTextColor?: string;
    style?: CSSProperties;
}


const LinkText = (props: LinkTextProps) => {
    return (
        <div style={{ ...mainContainerStyle, ...props.style }}>
            {
                props.preText &&
                <p
                    style={{
                        ...textStyle,
                        color: props.preTextColor ?? '#FFFFFF'
                    }}
                >
                    {props.preText}
                </p>
            }
            <p
                onClick={props.onLinkClick}
                style={{
                    ...textStyle,
                    color: props.linkTextColor ?? '#FFFFFF',
                    textDecorationLine: 'underline',
                    marginLeft: 9,
                    cursor: 'pointer'
                }}
            >
                {props.linkText}
            </p>
        </div>
    )
}

const mainContainerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const textStyle: CSSProperties = {
    fontSize: 24,
    marginTop: 0,
    marginBottom: 0,
}

export default LinkText