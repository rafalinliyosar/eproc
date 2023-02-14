/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=18;			// Number of first level items
	var LowBgColor='#2d2a62';			// Background color when mouse is not over
	var LowSubBgColor='#4036B6';			// Background color when mouse is not over on subs
	var HighBgColor='#4036B6';			// Background color when mouse is over
	var HighSubBgColor='#9790e9';			// Background color when mouse is over on subs
	var FontLowColor='#FFFFFF';			// Font color when mouse is not over
	var FontSubLowColor='#FFFFFF';			// Font color subs when mouse is not over
	var FontHighColor='#FFFFFF';			// Font color when mouse is over
	var FontSubHighColor='#FFFFFF';			// Font color subs when mouse is over
	var BorderColor='#FFFFFF';			// Border color
	var BorderSubColor='#FFFFFF';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="Tahoma"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=0;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.1;			// vertical overlap child/ parent
	var StartTop=0;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=8;				// Left padding
	var TopPaddng=4;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=500;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='GUmenu';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['images/tri.gif',5,10,'images/tridown.gif',10,5,'images/trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}

/*
// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"


Menu1=new Array("About University","javascript:void(0)","",4,20,119);
Menu1_1=new Array("Introduction","master_affiliate_type.php","",0,20,119);
Menu1_2=new Array("Facilities","master_course_type.php","",20,20,119);
			Menu1_2_1=new Array("Ocean Science and Technology Cell","homenews_list.php","",0,35,150);
			Menu1_2_2=new Array("University Science Instrumentation Centre ","homenews_list.php","",0,35,198);
			Menu1_2_3=new Array("Remote Sensing Laboratory","homenews_list.php","",0,20,158);
			Menu1_2_4=new Array("Campus Network and Internet Facility","homenews_list.php","",0,35,118);
			Menu1_2_5=new Array("Computer Centre","homenews_list.php","",0,20,118);
			Menu1_2_6=new Array("IPR Unit","homenews_list.php","",0,20,118);
			Menu1_2_7=new Array("Publication Unit","homenews_list.php","",0,20,118);
			Menu1_2_8=new Array("Counselling, Career Guidance and Employment Cell","homenews_list.php","",0,35,125);
			Menu1_2_9=new Array("National Service Scheme","homenews_list.php","",0,20,118);
			Menu1_2_10=new Array("College Development Council","homenews_list.php","",0,20,118);
			Menu1_2_11=new Array("Standing Committee on Sexual Harassment","homenews_list.php","",0,35,125);
			Menu1_2_12=new Array("Hostel Accomodation","homenews_list.php","",0,20,118);
			Menu1_2_13=new Array("Directorate of Student Welfare and Cultural Affairs","homenews_list.php","",0,35,125);
			Menu1_2_14=new Array("Sports","homenews_list.php","",0,20,118);
			Menu1_2_15=new Array("Extra Mural Studies and Extension Services","homenews_list.php","",0,35,118);
			Menu1_2_16=new Array("Health Centre","homenews_list.php","",0,20,125);
			Menu1_2_17=new Array("Goa University Consumer Co-operative Society Ltd. ","homenews_list.php","",0,35,118);
			Menu1_2_18=new Array("Goa University Alumni Association","homenews_list.php","",0,35,118);
			Menu1_2_19=new Array("UGC-NET and SET","homenews_list.php","",0,20,125);
			Menu1_2_20=new Array("Other Facilities","homenews_list.php","",0,20,118);
Menu1_3=new Array("Officials","master_affiliate.php","",4,20,119);
			Menu1_3_1=new Array("Chancellor","homenews_list.php","",0,20,150);
			Menu1_3_2=new Array("Vice Chancellor","homenews_list.php","",0,20,118);
			Menu1_3_3=new Array("Registrar","homenews_list.php","",0,20,118);
			Menu1_3_4=new Array("Dean","homenews_list.php","",0,20,118);
Menu1_4=new Array("Administration","master_affiliate.php","",0,20,119);
//Menu1_4=new Array("PHD","master_PHD.php","",0,20,119);
//Menu1_5=new Array("Convocation","master_convocation.php","",0,20,119);
//Menu1_6=new Array("Facility","master_facility.php","",0,20,119);
//Menu1_7=new Array("Awards","master_award.php","",0,20,119);
//Menu1_8=new Array("Staff Course","master_staff_courses.php","",0,20,119);
//Menu1_9=new Array("Awards","master_award.php","",0,20,119);





Menu2=new Array("Faculties","academic_structure.php","",1,20,119);
	Menu2_1=new Array("Faculty of Life Science","master_faculty.php","",1,24,169);
		Menu2_1_1=new Array("Department of Physics","master_faculty.php","",0,24,119);
	

Menu3=new Array("Academics","master_yearbook.php",".gif",6,20,119);
	Menu3_1=new Array("University Handbook","newsletter_disp.php","",0,20,140);
	Menu3_2=new Array("Courses Offered","homenews_list.php","",3,20,118);
			Menu3_2_1=new Array("Under Graduate Programs","homenews_list.php","",0,20,150);
			Menu3_2_2=new Array("Post Graduate Programs","homenews_list.php","",0,20,118);
			Menu3_2_3=new Array("Ph.D Research Programs","homenews_list.php","",0,20,118);
	Menu3_3=new Array("Admission News","newsletter_disp.php","",0,20,118);
	Menu3_4=new Array("Academic Staff College","newsletter_disp.php","",0,20,118);
	Menu3_5=new Array("Foreign Students","homenews_list.php","",0,20,118);
	Menu3_6=new Array("List of Prizes and Awards","homenews_list.php","",0,20,118);

Menu4=new Array("Innovative Programs","homenews_list.php","",4,20,118);
						Menu4_1=new Array("Study India Program","homenews_list.php","",0,20,200);
						Menu4_2=new Array("Distance Education, Information and Training Infrastructure (DEITI)","homenews_list.php","",0,35,225);
						Menu4_3=new Array("Online Distance Learning Programs(UNIGIS)","homenews_list.php","",0,35,118);
						Menu4_4=new Array("Post Graduate Diploma in Information Technology (PGDIT) of IIT Mumbai","homenews_list.php","",0,35,118);
						

Menu5=new Array("Affliated Institutions","homenews_list.php","",3,20,118);
		Menu5_1=new Array("Non Professional Colleges","homenews_list.php","",0,20,140);
		Menu5_2=new Array("Professional Colleges","homenews_list.php","",0,20,140);
		Menu5_3=new Array("Recognised Institutions","homenews_list.php","",0,20,140);

Menu6=new Array("Examinations","master_student.php","",3,20,119);
	Menu6_1=new Array("Exam Notice Board","newsletter_disp.php","",0,20,118);
	Menu6_2=new Array("Results","homenews_list.php","",0,20,150);
	Menu6_3=new Array("Student Repository","homenews_list.php","",0,20,118);
	

Menu7=new Array("Library","master_alumni.php","",0,20,119);
//	Menu5_1=new Array("Groups","master_groups.php","",0,20,119);
	
Menu8=new Array("GU News Desk","master_faculty.php","",0,20,119);
	Menu8_1=new Array("Leave A Legacy","elshaddai_legacy.php","",0,20,118);
	
Menu9=new Array("Assistance","change_passwd.php","",7,20,119);
	Menu9_1=new Array("Applying for Convocation","thanx_list.php","",0,20,235);
	Menu9_2=new Array("Obtaining Duplicate/Provisional Marksheet","thanx_list.php","",0,20,118);
	Menu9_3=new Array("Obtaining Duplicate Degree Certificate","thanx_list.php","",0,20,118);
	Menu9_4=new Array("Obtaining Transfer Certificate","thanx_list.php","",0,20,118);
	Menu9_5=new Array("Obtaining Migration Certificate","thanx_list.php","",0,20,118);
	Menu9_6=new Array("Applying for Admission","thanx_list.php","",0,20,118);
	Menu9_7=new Array("Applying for Re-evaluation of Marks","thanx_list.php","",0,20,118);
	
Menu10=new Array("Citizen Charter","master_faculty.php","",0,20,119);

Menu11=new Array("Placements","master_faculty.php","",0,20,119);
	
Menu12=new Array("Alumni","logout.php","",0,20,118);

Menu13=new Array("Tenders","logout.php","",0,20,118);

Menu14=new Array("Vacancies","logout.php","",0,20,118);

Menu15=new Array("Contact Us","logout.php","",0,20,118);
	*/