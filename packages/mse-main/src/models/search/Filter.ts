// tslint:disable:no-any
export interface IFilter {
	items: IFilterValue[];
	name: any;
}

export interface IFilterValue{
	text: string;
	key: string;
}