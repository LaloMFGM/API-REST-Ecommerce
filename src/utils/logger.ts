import winston, { format } from "winston";
const { combine, timestamp, errors, splat, json } = format;

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    splat(),
    json()
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);


export const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      logger.log("info", { message, service });
    },
    error: (message: string) => {
      logger.error({ message, service }); // ✅ Solo un argumento, el objeto
    },
    info: (message: string) => {
      logger.info({ message, service });
    }
  };
};
