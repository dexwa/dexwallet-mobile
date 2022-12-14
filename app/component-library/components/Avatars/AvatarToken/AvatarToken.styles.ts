// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';

// External dependencies.
import { AvatarBaseSize } from '../AvatarBase';
import { Theme } from '../../../../util/theme/models';

// Internal dependencies.
import { AvatarTokenStyleSheetVars } from './AvatarToken.types';

/**
 * Style sheet function for AvatarToken component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars AvatarToken stylesheet vars.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: AvatarTokenStyleSheetVars;
}) => {
  const { vars, theme } = params;
  const { size, style, showFallback, isHaloEnabled } = vars;

  const avatarSizeWithHalo =
    isHaloEnabled && !showFallback
      ? {
          width: 20,
          height: 20,
          borderRadius: 0,
        }
      : {};

  const fallbackAvatarStyle = showFallback
    ? {
        backgroundColor: theme.colors.background.alternative,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.colors.border.muted,
        borderWidth: 1,
      }
    : {};

  const baseStyle = {
    ...fallbackAvatarStyle,
    ...avatarSizeWithHalo,
  };

  const haloSize = Number(AvatarBaseSize.Md);

  return StyleSheet.create({
    base: Object.assign(baseStyle, style) as ViewStyle,
    haloImage: {
      opacity: 0.5,
    },
    halo: {
      width: haloSize,
      height: haloSize,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 0,
    },
    label: size === AvatarBaseSize.Xs ? { lineHeight: 16 } : {},
    image: {
      flex: 1,
      height: undefined,
      width: undefined,
    },
  });
};

export default styleSheet;
