import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/18427563?s=460&u=1c4c883ea72d5d7dc9bb49dc9992942f3eb28aa6&v=4" alt="Fabio Bandacheski" />
            <div>
                <strong>Fabio Bandacheski</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}
