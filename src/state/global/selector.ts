import { useSelector } from 'react-redux';
import { AppState } from '..';

export function useThemeState(): boolean {
  const state = useSelector<AppState, AppState['global']>(s => s.global);
  return state.isDark;
}
