const deflautConfigs: any = {};

deflautConfigs.isStaging = process.env.NODE_ENV === "production" ? false : true;

deflautConfigs.siteName = 'Mster Club';

deflautConfigs.portNumber = Number(process.env.PORT_NUMBER);

deflautConfigs.baseUrl = process.env.BASE_URL;

export default deflautConfigs;