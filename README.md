# Barovian Activity Map

## About

An application that displays and reports happenings on a map of Barovia.

## Prerequisites

* Docker
* Docker Compose

## Install

### Development

These instructions will install the application stack setup for development.  Volumes are mounted to the host to allow for quick code iteration and hot reload is enabled on both the frontend and backend.

#### Install frontend dependencies

```
./run npm ci
```

#### Install backend dependencies

```
./run poetry install
```

#### Build and start containers

```
./run start
```

#### Create Django superuser account

Note: Any Django `manage` subcommand can be run this way.

```
./run manage createsuperuser
```

#### Migrate Database

```
./run manage migrate
```

#### Debugging

To follow all container logs use the following script command:

```
./run logs
```

#### Up and Running

At this point all services should be up and running navigate to the following URLs:

* Frontend: http://localhost:3000
* Backend Admin: http://localhost:8000/admin
* Backend API: http://localhost:8000/api

### Production

Not yet implemented
