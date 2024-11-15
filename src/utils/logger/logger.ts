export class Logger {
  private prefix: string;
  
  constructor(prefix: string = '') {
    this.prefix = prefix;
  }

  log(message: string, data?: any) {
    const timestamp = new Date().toISOString();
    if (data) {
      console.log(`[${timestamp}] ${this.prefix}${message}`, data);
    } else {
      console.log(`[${timestamp}] ${this.prefix}${message}`);
    }
  }

  error(message: string, error: any) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] ${this.prefix}ERROR: ${message}`, error);
  }
}