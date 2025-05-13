# INF653 Back End Web Development - Final Project


[<img src="https://cdn.gomix.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix-button.svg" width="163px" />](https://glitch.com/edit/#!/import/github/bolelove/Final_Project_NoahS)

**Click button to deploy**

**Description**

# 🌎 US States REST API

This project is a Node.js REST API built with Express and MongoDB that provides detailed data about US states, including basic facts and fun facts stored in a MongoDB collection. It supports full CRUD operations for managing state fun facts, and is deployable using Glitch.

---

## 📚 Project Overview

The API serves data from two sources:

- **statesData.json**: Contains the majority of state data, like capital, population, admission date, etc.
- **MongoDB**: Stores fun facts about selected states.

The API supports both static data delivery and dynamic updates to fun facts through POST, PATCH, and DELETE requests.

---

## 🚀 Features

- Retrieve full or partial lists of US states
- Filter contiguous and non-contiguous states
- Get specific details like capital, nickname, population, and admission date
- Add, update, and delete fun facts for specific states
- Random fun fact selection
- JSON and HTML 404 error handling
- Clean project structure using MVC pattern

---

## 🌐 API Endpoints

### ✅ GET Requests

| Endpoint | Description |
|---------|-------------|
| `/states` | Returns all state data |
| `/states/?contig=true` | Returns only contiguous states (excludes AK and HI) |
| `/states/?contig=false` | Returns only non-contiguous states (AK and HI) |
| `/states/:state` | Returns data for a specific state (use state code like `KS`) |
| `/states/:state/funfact` | Returns a random fun fact for the given state |
| `/states/:state/capital` | Returns the capital of the state |
| `/states/:state/nickname` | Returns the nickname of the state |
| `/states/:state/population` | Returns the population of the state |
| `/states/:state/admission` | Returns the date the state was admitted to the union |

### ✏️ POST Request

| Endpoint | Description |
|---------|-------------|
| `/states/:state/funfact` | Adds one or more fun facts to the state |

### ✏️ PATCH Request

| Endpoint | Description |
|---------|-------------|
| `/states/:state/funfact` | The result received from MongoDB |

