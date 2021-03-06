import { observer } from 'mobx-react'
import React from 'react'

import appStore from '../lib/app-store'

const GlobalError = observer(() => {
  if (!appStore.error) return null

  const remove = () => {
    appStore.setError(null)
  }

  return (
    <div className='global-error alert alert-danger'>
      <p>
        <i className='fa fa-warning'></i>{' '}
        <strong>{appStore.error.name || 'Unexpected Error'}</strong>
      </p>
      <p dangerouslySetInnerHTML={{
        __html: appStore.error.message.split('\n').join('<br />'),
      }} />
      <button className='btn btn-link close' onClick={remove}>
        <i className='fa fa-remove' />
      </button>
    </div>
  )
})

export default GlobalError
