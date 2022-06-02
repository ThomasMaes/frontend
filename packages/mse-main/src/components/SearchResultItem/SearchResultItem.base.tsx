import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { useTheme } from "../../models/contexts/ThemeContext";
import { ISearchResultItemProps, ISearchResultItemStyleProps, ISearchResultItemStyles } from "./SearchResultItem.types";

const getClassNames = classNamesFunction<ISearchResultItemStyleProps, ISearchResultItemStyles>();

export const SearchResultItemBase: React.FC<ISearchResultItemProps> = (props) => {
	const { isSelected, item } = props;


	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme!, isSelected });

	var highlightedDescription = item.description?.replace(new RegExp("<c0>", 'g'), `<span class='${classNames.highlight}'>`).replace(new RegExp("</c0>", 'g'), "</span>");
	highlightedDescription = highlightedDescription?.replace(new RegExp("<ddd/>", 'g'),"...");

	return (
		<div className={classNames.root} role="button">
			<div className={classNames.icon}><img src={item.icon} /></div>
			<div className={classNames.resultType}>{item.subType}</div>
			<div className={classNames.title}>{item.title}</div>
			<div className={classNames.description} dangerouslySetInnerHTML={{ __html: highlightedDescription ? highlightedDescription : "" }}></div>
			<hr className={classNames.seperator} />
		</div>

	);
};
