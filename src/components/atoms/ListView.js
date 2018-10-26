import React from 'react'
import PropTypes from 'prop-types'
//

const getItem = ({ renderItem, getItemKey }) => (dataItem, idx, arr) => ({
  ...renderItem(dataItem, idx, arr),
  key: (typeof getItemKey === 'function' && getItemKey(dataItem, idx, arr)) || idx,
})

export const RawList = ({ data, renderItem, getItemKey }) =>
  data.map(getItem({ renderItem, getItemKey }))
RawList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export const ListView = ({ data, renderItem, getItemKey, ...rest }) => (
  <div {...rest}>
    <RawList {...{ data, renderItem, getItemKey }} />
  </div>
)
ListView.propTypes = {
  ...RawList.propTypes,
}

export default ListView
