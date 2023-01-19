import styles from './my-comps.module.css';

/* eslint-disable-next-line */
export interface MyCompsProps {}

export function MyComps(props: MyCompsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyComps! i am calling this component</h1>
    </div>
  );
}

export default MyComps;
