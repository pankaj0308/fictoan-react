import { isEqual } from "lodash-es";
import { PropTypes, UpdatedComponentsobj } from "./playground.types";

export const renderjsx = (buildUI, data: UpdatedComponentsobj[]) => {
	return (
		<>
			{data?.map((item: UpdatedComponentsobj) => {
				return buildUI[item.name](item.id, item?.children, item.props);
			})}
		</>
	);
};

export function addChildreninUI(
	arr: UpdatedComponentsobj[],
	obj: UpdatedComponentsobj,
	value: string
) {
	arr.forEach((i: UpdatedComponentsobj) => {
		if (isEqual(i.id, value)) {
			i.children = [...i.children, obj];
		} else {
			addChildreninUI(i.children, obj, value);
		}
	});
	return arr;
}

export function updatePropsinUI(
	arr: UpdatedComponentsobj[],
	obj: PropTypes,
	value: string
) {
	arr.forEach((i: UpdatedComponentsobj) => {
		if (isEqual(i.id, value)) {
			const includesProp = i.props.some((ok) => ok.name === obj.name);
			if (includesProp) {
				i.props.find((os, idx) => {
					if (os.name === obj.name) {
						i.props[idx].value = obj.value;
					}
				});
				return;
			}
			i.props = [...i.props, obj];
		} else {
			updatePropsinUI(i.children, obj, value);
		}
	});
	return arr;
}

export function getPropsValue(arr: UpdatedComponentsobj[], id: string, propName:string) {
    for (const item of arr) {
        if (isEqual(item.id, id)) {
            const propobject = item.props.find((prop) => prop.name === propName);
            return propobject;
        }
        return getPropsValue(item?.children, id, propName);
    }
}

