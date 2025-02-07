export default class Environment {
	public static isStaging = process.env.NODE_ENV === "production" ? false : true;

	public static siteName: any = 'Mster Club';

	public static portNumber: number = Number(process.env.PORT_NUMBER);

	public static baseUrl: any = process.env.BASE_URL;

}