/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTaskInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  status?: string | null;
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateTaskInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  status?: string | null;
};

export type DeleteTaskInput = {
  id?: string | null;
};

export type CreatePrivateNoteInput = {
  id?: string | null;
  content: string;
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteConditionInput | null> | null;
  or?: Array<ModelPrivateNoteConditionInput | null> | null;
  not?: ModelPrivateNoteConditionInput | null;
};

export type UpdatePrivateNoteInput = {
  id: string;
  content?: string | null;
};

export type DeletePrivateNoteInput = {
  id?: string | null;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  body?: string | null;
  completed?: boolean | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  body?: ModelStringInput | null;
  completed?: ModelBooleanInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  body?: string | null;
  completed?: boolean | null;
};

export type DeleteTodoInput = {
  id?: string | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteFilterInput | null> | null;
  or?: Array<ModelPrivateNoteFilterInput | null> | null;
  not?: ModelPrivateNoteFilterInput | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  body?: ModelStringInput | null;
  completed?: ModelBooleanInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeletePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  body: string | null;
  completed: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  body: string | null;
  completed: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  body: string | null;
  completed: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items: Array<{
    __typename: "Task";
    id: string;
    title: string;
    description: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPrivateNoteQuery = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListPrivateNotesQuery = {
  __typename: "ModelPrivateNoteConnection";
  items: Array<{
    __typename: "PrivateNote";
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  body: string | null;
  completed: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    body: string | null;
    completed: boolean | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeletePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  body: string | null;
  completed: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  body: string | null;
  completed: boolean | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  body: string | null;
  completed: boolean | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreatePrivateNote(
    input: CreatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<CreatePrivateNoteMutation> {
    const statement = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        createPrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePrivateNoteMutation>response.data.createPrivateNote;
  }
  async UpdatePrivateNote(
    input: UpdatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<UpdatePrivateNoteMutation> {
    const statement = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        updatePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePrivateNoteMutation>response.data.updatePrivateNote;
  }
  async DeletePrivateNote(
    input: DeletePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<DeletePrivateNoteMutation> {
    const statement = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        deletePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePrivateNoteMutation>response.data.deletePrivateNote;
  }
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          body
          completed
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          body
          completed
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          body
          completed
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetPrivateNote(id: string): Promise<GetPrivateNoteQuery> {
    const statement = `query GetPrivateNote($id: ID!) {
        getPrivateNote(id: $id) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPrivateNoteQuery>response.data.getPrivateNote;
  }
  async ListPrivateNotes(
    filter?: ModelPrivateNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPrivateNotesQuery> {
    const statement = `query ListPrivateNotes($filter: ModelPrivateNoteFilterInput, $limit: Int, $nextToken: String) {
        listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPrivateNotesQuery>response.data.listPrivateNotes;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          body
          completed
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            body
            completed
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  OnCreateTaskListener: Observable<
    SubscriptionResponse<OnCreateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<OnUpdateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<OnDeleteTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;

  OnCreatePrivateNoteListener: Observable<
    SubscriptionResponse<OnCreatePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePrivateNote($owner: String!) {
        onCreatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePrivateNoteSubscription>>;

  OnUpdatePrivateNoteListener: Observable<
    SubscriptionResponse<OnUpdatePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePrivateNote($owner: String!) {
        onUpdatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePrivateNoteSubscription>>;

  OnDeletePrivateNoteListener: Observable<
    SubscriptionResponse<OnDeletePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePrivateNote($owner: String!) {
        onDeletePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePrivateNoteSubscription>>;

  OnCreateTodoListener: Observable<
    SubscriptionResponse<OnCreateTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          body
          completed
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTodoSubscription>>;

  OnUpdateTodoListener: Observable<
    SubscriptionResponse<OnUpdateTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          body
          completed
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTodoSubscription>>;

  OnDeleteTodoListener: Observable<
    SubscriptionResponse<OnDeleteTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          body
          completed
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTodoSubscription>>;
}
