import { styled } from "../../../stitches.config";

export function Label(props) {
  return <LabelField htmlFor="">{props.label}</LabelField>;
}

const LabelField = styled('label', {
    fontSize: '2rem',
    fontFamily: '$Inter',
    fontWeight: 'bold',
});