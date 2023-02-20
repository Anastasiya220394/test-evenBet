import { Circle } from '../Circle';

import './LeftBlock.css';

type Props = {
    circleRef: React.RefObject<HTMLParagraphElement>;
}

export const LeftBlock: React.FC<Props> = ({ circleRef }) => (
    <div className="left-block">
        <Circle circleRef={circleRef}/>
        1
    </div>
)
