// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';

// External dependencies.
import { Theme } from '../../../../util/theme/models';

// Internal dependencies.
import {
  ButtonSecondaryStyleSheetVars,
  ButtonSecondaryVariant,
} from './ButtonSecondary.types';

/**
 * Style sheet function for ButtonSecondary component.
 *
 * @param params Style sheet params.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: ButtonSecondaryStyleSheetVars;
}) => {
  const { vars, theme } = params;
  const { colors } = theme;
  const { style, variant, pressed } = vars;
  let borderColor: string;
  switch (variant) {
    case ButtonSecondaryVariant.Normal:
      borderColor = pressed
        ? colors.primary.alternative
        : colors.primary.default;
      break;
    case ButtonSecondaryVariant.Danger:
      borderColor = pressed ? colors.error.alternative : colors.error.default;
      break;
  }

  return StyleSheet.create({
    base: Object.assign(
      {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor,
      } as ViewStyle,
      style,
    ) as ViewStyle,
  });
};

export default styleSheet;
