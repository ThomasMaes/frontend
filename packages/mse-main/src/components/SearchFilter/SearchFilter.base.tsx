import { Dropdown, IDropdownOption } from "office-ui-fabric-react";
import { classNamesFunction } from "office-ui-fabric-react/lib/Utilities";
import * as React from "react";
import { useTheme } from "../../models/contexts/ThemeContext";
import { ISearchFilterProps, ISearchFilterStyleProps, ISearchFilterStyles } from "./SearchFilter.types";

const getClassNames = classNamesFunction<ISearchFilterStyleProps, ISearchFilterStyles>();

export const SearchFilterBase: React.FC<ISearchFilterProps> = (props) => {
	const { fieldName, values, onSelected: onChangeProp } = props;
	const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);

	const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    if (item) {
      setSelectedKeys(
        item.selected ? [...selectedKeys, item.key as string] : selectedKeys.filter(key => key !== item.key),					
      );
			if (!!onChangeProp) {
				onChangeProp(fieldName, item.key as string);
			}
    }
  };

	// Styling initialization
	const { className, styles, theme: themeProp } = props;
	const theme = themeProp || useTheme();
	const classNames = getClassNames(styles, { className, theme: theme! });

	const dropdownValues = values.map((it) => ({ key: it.key, text: it.text }));

	return (
		<div className={classNames.root}>
			<Dropdown
				placeholder="All"
				label={fieldName}
				selectedKeys={selectedKeys}
				onChange={onChange}
				multiSelect
				options={dropdownValues}
			/>
		</div>
	);
};
