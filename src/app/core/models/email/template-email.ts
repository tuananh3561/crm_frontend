export const IS_NOT_ACTIVE = 0;
export const IS_ACTIVE     = 1;
export const STATUS_LIST   = [
	{id : IS_ACTIVE, name : 'Hoạt động', disabled : false},
	{id : IS_NOT_ACTIVE, name : 'Dừng hoạt động', disabled : false}
];

export const TYPE_EMAIL = 1;
export const TYPE_SMS   = 2;
export const TYPE_LIST  = [
	{id : TYPE_EMAIL, name : 'EMAIL', disabled : false},
	{id : TYPE_EMAIL, name : 'SMS', disabled : false}
];

export const GROUP_TEMPLATE 	= 0;
export const GROUP_TEXT     	= -1;
export const GROUP_DUPLICATE    = -2;
export const GROUP_LIST         = [
	{id : GROUP_TEMPLATE, name : "TEMPLATE", disabled : false},
	{id : GROUP_DUPLICATE, name : "DUPLICATE", disabled : false},
	{id : GROUP_TEXT, name : "TEXT", disabled : false},
];
export const GROUP_TEXT_DUPLICATE = [
	{id : GROUP_DUPLICATE, name : "DUPLICATE", disabled : false},
	{id : GROUP_TEXT, name : "TEXT", disabled : false}
];

export const KEY_TEMPLATE_CONTENT : string = "{{innerContent}}";
export const SLUG_TEMPLATE : string = "TEMPLATE";
export const SLUG_DUPLICATE: string = "DUPLICATE";


export enum TemplateEmail {

}

export enum TemplateEmailSearch {

}
