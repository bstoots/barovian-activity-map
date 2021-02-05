/**
 * API client class for Barovian Activity Map application
 */
class Client {

  /**
   * Constructor
   * 
   * @param {object} param0      Object containing client configuration values
   * @param {string} param0.host Hostname for the API server
   * @param {string} param0.port Port for the API server
   */
  constructor ({host, port}) {
    this.host = host;
    this.port = port;
  }

  /**
   * Gets all assets
   * 
   * @param {object} param0           Object containing success and failure callbacks
   * @param {object} param0.successFn Callback to be run on success
   * @param {object} param0.errorFn   Callback to be run on failure
   * @returns {array}                 Array of asset objects
   */
  fetchAssets({successFn, errorFn = this.defaultErrorHandler}) {
    fetch(`http://${this.host}:${this.port}/api/assets/`)
      .then(response => response.json())
      .then(data => successFn(data))
      .catch(error => errorFn(error));
  }

  /**
   * Gets all event types
   * 
   * @param {object} param0           Object containing success and failure callbacks
   * @param {object} param0.successFn Callback to be run on success
   * @param {object} param0.errorFn   Callback to be run on failure
   * @returns {array}                 Array of event type objects
   */
  fetchEventTypes({successFn, errorFn = this.defaultErrorHandler}) {
    fetch(`http://${this.host}:${this.port}/api/events/`)
      .then(response => response.json())
      .then(data => successFn(data))
      .catch(error => errorFn(error));
  }

  /**
   * Gets all events
   * 
   * @param {object} param0           Object containing success and failure callbacks
   * @param {object} param0.successFn Callback to be run on success
   * @param {object} param0.errorFn   Callback to be run on failure
   * @returns {array}                 Array of event objects
   */
  fetchEvents({successFn, errorFn = this.defaultErrorHandler}) {
    fetch(`http://${this.host}:${this.port}/api/events/`)
      .then(response => response.json())
      .then(data => successFn(data))
      .catch(error => errorFn(error));
  }

  /**
   * Default error handler used for all functions if no other handler is specified.
   * 
   * @param {*} error The error response caught from a failed fetch
   */
  defaultErrorHandler (error) {
    console.error(error);
  }

}

export default Client;
