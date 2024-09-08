import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '0e391511454a4f6ebfb6c3647f32ea78'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'c1cdc611579f4affa32669318c72d52b'
                    }
                }
            }
        }
    }
}
