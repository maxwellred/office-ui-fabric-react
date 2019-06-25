import { ISearchBoxStyleProps, ISearchBoxStyles } from 'office-ui-fabric-react/lib/SearchBox';

export const SearchBoxStyles = (props: ISearchBoxStyleProps): Partial<ISearchBoxStyles> => {
  const { theme, underlined } = props;
  const { effects, palette } = theme;

  return {
    root: [
      {
        borderRadius: effects.roundedCorner2,
        borderColor: palette.neutralTertiary
      },
      underlined && {
        borderRadius: '0px'
      }
    ],
    iconContainer: {
      color: palette.themeDarkAlt
    },
    clearButton: {
      selectors: {
        '&:hover .ms-Button': {
          backgroundColor: 'transparent'
        },
        '&:hover .ms-Button-icon': {
          color: palette.neutralPrimary
        },
        '.ms-Button-icon': {
          color: palette.neutralSecondary
        }
      }
    }
  };
};
