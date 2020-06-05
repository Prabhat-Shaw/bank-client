import styled from 'styled-components';
import { Result } from 'antd';
import { typography, colors } from 'utils';

export const StyledResult = styled(Result)`
  padding: 48px 32px 0;
`;

export const StyledSubTitle = styled.div`
  padding: 0 32px 24px;
  line-height: 1.8;
`;

export const StyledAction = styled.div`
  padding: 0 0 28px;
`;

export const StyledPinCodeWrapper = styled.span`
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primaryBlue};
`;
