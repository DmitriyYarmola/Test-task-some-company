import { AnnouncementType } from '@Pages/Annoucement/Model'

export const searchSimilarAnnouncement = (
	id: number,
	title: string,
	description: string,
	announcement: AnnouncementType
): AnnouncementType | undefined => {
	const arrayOfTitle = title.split(' ')
	const arrayOfDescription = description.split(' ')
	const conditionId = announcement.id !== id
	const longerI =
		arrayOfTitle.length > arrayOfDescription.length
			? arrayOfTitle.length
			: arrayOfDescription.length
	for (let i = 0; i < longerI; i++) {
		const arrayOfAnnouncementTitle = announcement.title.split(' ')
		const arrayOfAnnouncementDescription = announcement.description.split(' ')
		const longerJ =
			arrayOfAnnouncementTitle.length > arrayOfAnnouncementDescription.length
				? arrayOfAnnouncementTitle.length
				: arrayOfAnnouncementDescription.length
		for (let j = 0; j < longerJ; j++) {
			const titleInclude = arrayOfAnnouncementTitle[j] === arrayOfTitle[i]
			const titleOfAnnouncementAndDescriptionInclude =
				arrayOfAnnouncementTitle[j] === arrayOfDescription[i]
			const DescriprionOfAnnouncementAndTitleInclude =
				arrayOfAnnouncementDescription[j] === arrayOfTitle[i]
			const descriptionInclude =
				arrayOfAnnouncementDescription[j] === arrayOfDescription[i]
			if (
				titleInclude &&
				descriptionInclude &&
				conditionId &&
				titleOfAnnouncementAndDescriptionInclude &&
				DescriprionOfAnnouncementAndTitleInclude
			)
				return announcement
		}
	}
}
