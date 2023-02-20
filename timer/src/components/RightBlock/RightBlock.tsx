import './RightBlock.css';

type Props = {
    RightBlockRef: React.RefObject<HTMLParagraphElement>;
}

export const RightBlock: React.FC<Props> = ({ RightBlockRef }) => (
    <div className="right-block">
        <p ref={RightBlockRef}>2</p>
    </div>
)
