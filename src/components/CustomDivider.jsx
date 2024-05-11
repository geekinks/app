import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import styles from './styles.module.css';

function CustomDivider({ label }) {
  return (
    <Divider className={styles.customDivider}>
      <Chip
        label={label}
        size="large"
        className={styles.customChip}
      />
    </Divider>
  );
}

export default CustomDivider;
