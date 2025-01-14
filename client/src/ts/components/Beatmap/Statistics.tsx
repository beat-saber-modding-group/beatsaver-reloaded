import React, { FunctionComponent } from 'react'
import { formatDate } from '../../utils/formatDate'
import { Statistic } from './Statistic'

interface IProps {
  map: IBeatmap

  hideTime?: boolean
}

export const BeatmapStats: FunctionComponent<IProps> = ({ map, hideTime }) => (
  <ul>
    <Statistic type='text' emoji='🔑' text={map.key} />

    {hideTime ? null : (
      <Statistic
        type='text'
        emoji='🕔'
        text={formatDate(map.uploaded)}
        hover={new Date(map.uploaded).toISOString()}
      />
    )}

    <Statistic
      type='num'
      emoji='💾'
      number={map.stats.downloads}
      hover='Downloads'
    />

    <Statistic
      type='num'
      emoji='👍'
      number={map.stats.upVotes}
      hover='Upvotes'
    />

    <Statistic
      type='num'
      emoji='👎'
      number={map.stats.downVotes}
      hover='Downvotes'
    />

    <Statistic
      type='num'
      emoji='💯'
      number={map.stats.rating}
      fixed={1}
      percentage={true}
      hover='Beatmap Rating'
    />
  </ul>
)
