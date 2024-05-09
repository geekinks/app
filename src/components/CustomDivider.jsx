import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

function CustomDivider({ label }) {
  return (
    <Divider style={{ width: '80vw', margin: 'auto', color: 'green' }}>
      <Chip
        label={label}
        size="large"
        style={{
          backgroundColor: '#E2F9F9',
          color: 'green',
          border: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      />
    </Divider>
  );
}

export default CustomDivider;
