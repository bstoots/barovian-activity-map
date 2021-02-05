class Client {

  constructor ({host, port}) {
    this.host = host;
    this.port = port;
  }

  fetchAssets({successFn, errorFn = this.defaultErrorHandler}) {
    fetch(`http://${this.host}:${this.port}/api/assets/`)
      .then(response => response.json())
      .then(data => successFn(data))
      .catch(error => errorFn(error));
  }

  fetchEventTypes({successFn, errorFn = this.defaultErrorHandler}) {
    fetch(`http://${this.host}:${this.port}/api/events/`)
      .then(response => response.json())
      .then(data => successFn(data))
      .catch(error => errorFn(error));
  }

  fetchEvents({successFn, errorFn = this.defaultErrorHandler}) {
    fetch(`http://${this.host}:${this.port}/api/events/`)
      .then(response => response.json())
      .then(data => successFn(data))
      .catch(error => errorFn(error));
  }

  defaultErrorHandler (error) {
    console.error(error);
  }

}

export default Client;
