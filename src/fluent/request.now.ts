import { Table, StringColumn} from '@servicenow/sdk/core'
export const x_snc_lwp_demo_request = Table({
    name: 'x_snc_lwp_demo_request',
    label: 'My To Do Requests',
    schema: {
        status: StringColumn({ label: 'Status', maxLength: 40 }),
        state: StringColumn({
            label: 'State',
            choices: {
                ready: { label: 'Ready' },
                completed: { label: 'Completed' },
                in_progress: { label: 'In Progress' },
            },
        }),
    },
})