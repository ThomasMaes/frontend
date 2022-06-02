import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { useTheme } from "../../models/contexts/ThemeContext";
import { useSearch } from "../../reducers";
import { SearchBar } from "../SearchBar";
import { ISearchContainerProps, ISearchContainerStyleProps, ISearchContainerStyles } from "./SearchContainer.types";

const getClassNames = classNamesFunction<ISearchContainerStyleProps, ISearchContainerStyles>();

export const SearchContainerBase: React.FC<ISearchContainerProps> = (props) => {
	const { onExecuteSearch } = props;

	const { currentQuery, submitQuery } = useSearch();
	const [searchQuery, setSearchQuery] = React.useState<string | undefined>(currentQuery);

	// Styling initialization
	const { className, styles, theme: themeProp, title, big } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	const handleQueryChange = (newValue: string | undefined) => {
		setSearchQuery(newValue);
	};

	const handleSearch = (searchText: string) => {
		if (!!onExecuteSearch) {
			onExecuteSearch(searchText);
		}

		submitQuery(searchText);
	};

	return (
		<div className={classNames.root}>
			<div className={big ? classNames.wrapper : classNames.wrapperSmall}>
				<span className={classNames.searchTitle}>{title}</span>
				<SearchBar onChange={handleQueryChange} onSearch={handleSearch} value={searchQuery} />
			</div>
		</div>
	);
};
