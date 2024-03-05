import styles from './styles.module.css'

export interface ContainerProps {
  maxWidth: number | string
}

export const Container = ({
  maxWidth,
  children,
}: React.PropsWithChildren<ContainerProps>) => (
  <div className={styles.container}>
    <div className={styles.box} style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  </div>
)
