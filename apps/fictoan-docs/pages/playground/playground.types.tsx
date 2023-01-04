// prettier-ignore
export interface ComponentsObj {
	id	 : string;
	name : string;
}

export interface PropTypes {
	name: string;
	value: Array<string> | boolean | string | number;
}

export interface UpdatedComponentsobj extends ComponentsObj {
	children: UpdatedComponentsobj[];
	props: PropTypes[];
}

