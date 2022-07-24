interface TextWrapperProps {
  text: string;
  backgroundColor?: string;
  isRound?: boolean;
  fontSize?: number;
}

const TextWrapper = (props: TextWrapperProps) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 8,
          borderRadius: props.isRound ? 100 : 8,
          backgroundColor: props.backgroundColor ?? '#D7F9FF',
          fontSize: props.fontSize ?? 12
        }}
      >
        {props.text}
      </div>
    </div>
  )
}

export default TextWrapper