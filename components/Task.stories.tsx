import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Task, { TaskData } from './Task'

export default {
  component: Task,
  title: 'Task',
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
} as const

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...(Default.args.task as Required<TaskData>),
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...(Default.args.task as Required<TaskData>),
    state: 'TASK_ARCHIVED',
  },
}
