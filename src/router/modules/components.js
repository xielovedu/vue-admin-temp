/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
        title: 'Components',
        icon: 'component'
    },
    children: [{
            path: 'dropzone',
            component: () =>
                import ('@/views/components-demo/dropzone'),
            name: 'DropzoneDemo',
            meta: { title: 'Dropzone' }
        },
        {
            path: 'count-to',
            component: () =>
                import ('@/views/components-demo/count-to'),
            name: 'CountToDemo',
            meta: { title: 'Count To' }
        },
        {
            path: 'back-to-top',
            component: () =>
                import ('@/views/components-demo/back-to-top'),
            name: 'BackToTopDemo',
            meta: { title: 'Back To Top' }
        },
        {
            path: 'drag-dialog',
            component: () =>
                import ('@/views/components-demo/drag-dialog'),
            name: 'DragDialogDemo',
            meta: { title: 'Drag Dialog' }
        },
    ]
}

export default componentsRouter