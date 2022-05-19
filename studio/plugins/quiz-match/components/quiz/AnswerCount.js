import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import {findCurrentQuestion} from '../../utils'
import styles from '../styles/AnswerCount.css'
import sanityClient from 'part:@sanity/base/client'

const client = sanityClient.withConfig({apiVersion: '2021-03-25'})

function AnswerCount(props) {
  const {currentQuestionKey, players = [], answers = []} = props.match
  const numberOfPlayers = players.length
  const numberOfAnswersToQuestion = answers.filter(
    answer => answer.questionKey === currentQuestionKey
  ).length

  return (
    <div className={styles.root}>
      <h2 className={styles.count}>
        {numberOfAnswersToQuestion}/{numberOfPlayers}
      </h2>
    </div>
  )
}

export default AnswerCount
