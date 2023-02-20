import './Circle.css';

type Props = {
    circleRef: React.RefObject<HTMLParagraphElement>;
}

export const Circle: React.FC<Props> = ({ circleRef }) => <div className="circle" ref={circleRef} />
