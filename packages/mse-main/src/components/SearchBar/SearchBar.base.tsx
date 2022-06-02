import { IconButton, SearchBox } from "office-ui-fabric-react";
import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { useTheme } from "../../models/contexts/ThemeContext";
import { ISearchBarProps, ISearchBarStyleProps, ISearchBarStyles } from "./SearchBar.types";

const getClassNames = classNamesFunction<ISearchBarStyleProps, ISearchBarStyles>();

export const SearchBarBase: React.FC<ISearchBarProps> = (props) => {
	const { value, onChange: onChangeProp, onSearch: onSearchProp } = props;

	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	const handleSearch = (newValue: string) => {
		if (!!onSearchProp) {
			onSearchProp(newValue);
		}
	};

	const handleInputChange = (event?: React.ChangeEvent<HTMLInputElement>, newValue?: string) => {
		if (!!onChangeProp) {
			onChangeProp(newValue);
		}
	};

	const onButtonClick = () => {
		handleSearch(value || "");
	};

	return (
		<div className={classNames.root}>
			<SearchBox
				className={classNames.searchBox}
				onChange={handleInputChange}
				onSearch={handleSearch}
				placeholder="Zoeken..."
				value={value}
			/>
			<IconButton className={classNames.button} iconProps={{ iconName: "Search" }} onClick={onButtonClick} />
		</div>
	);
};
