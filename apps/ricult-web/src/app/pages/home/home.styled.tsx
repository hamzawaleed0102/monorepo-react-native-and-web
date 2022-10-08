import { BaseTheme } from '@ricult/models';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: ${({ theme }: { theme: BaseTheme }) => theme.colors.background};
`;
