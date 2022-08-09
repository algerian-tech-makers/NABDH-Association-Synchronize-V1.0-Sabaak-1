import { latestEvents } from "../../assets/home";
import {
	ListWidgetContainer,
	LightTd,
	ListWidgetImg,
	ListWidgetTable,
	ListWidgetTh,
	ListWidgetUser,
	ListWidgetTitle,
} from "../../styles/Home";

const ListWidget = () => {
	return (
		<ListWidgetContainer>
			<ListWidgetTitle>اخر الاحداث</ListWidgetTitle>
			<ListWidgetTable>
				<tr>
					<ListWidgetTh>المنشئ</ListWidgetTh>
					<ListWidgetTh>الهدف</ListWidgetTh>
					<ListWidgetTh>المبلغ الحالي</ListWidgetTh>
					<ListWidgetTh>تاريخ الانطلاق</ListWidgetTh>
					<ListWidgetTh>تاريخ النهاية</ListWidgetTh>
				</tr>
				{latestEvents &&
					latestEvents.map((item) => (
						<tr>
							<ListWidgetUser>
								<ListWidgetImg src={item.image} alt={item.autor} />
								<span> {item.title} </span>
							</ListWidgetUser>
							<LightTd>{item.author}</LightTd>
							<LightTd>{item.goal}</LightTd>
							<LightTd>{item.raised}</LightTd>
							<LightTd>{item.startingDate}</LightTd>
							<LightTd>{item.endingDate}</LightTd>
							<td>
								<i className='fas fa-edit'></i>

								<i className='fa-solid fa-trash-can'></i>
							</td>
						</tr>
					))}
			</ListWidgetTable>
		</ListWidgetContainer>
	);
};
export default ListWidget;
