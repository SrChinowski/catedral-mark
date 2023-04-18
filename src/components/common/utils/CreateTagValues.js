import tagsJSON from '../../../utils/constants/itemsJSONs/tags';

const createLeaderTag = (leaderTag) => {
	return `00853${leaderTag?.state}${leaderTag?.registryType}${leaderTag?.biblioLevel}${leaderTag?.controlType}${leaderTag?.codeSchema}2200265${leaderTag?.codeLevel}${leaderTag?.catalogDesc}${leaderTag?.registryReqs}4500`;
}

const createControlField = (itemTags) => {
	let controlField = '';

	if (itemTags !== undefined) {
		Object.values(itemTags).map((value, idx) => { //eslint-disable-line
			controlField += value;
			if(idx !== (Object.values(itemTags) - 1)){
				controlField += ' | '
			}
		})
	}

	return controlField;
}

const findTag = (tag) => {
	const tagFound = tagsJSON.find(t => t.value === tag);
	return tagFound;
}

const findSubfields = (tag, subfieldKey) => {
	const tagFound = findTag(tag);
	const subfieldFound = tagFound?.subfields.find(s => s.value === subfieldKey);

	return subfieldFound;
}

export { createLeaderTag, createControlField, findTag, findSubfields };
