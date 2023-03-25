import React from 'react'
import { Add } from '@mui/icons-material';
import { useList } from '@pankod/refine-core'
import { Box, Stack, Typography } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6';

import { PropertyCard, CustomButton } from 'components';

const Allproperties = () => {

  const navigate = useNavigate()

  return (
    <Box>
      <Stack direction="row"
        justifyContent="space-between"
        alignItems="center">
          <Typography fontSize={25} fontWeight={700} color="#11142">
            All Properties
          </Typography>
          <CustomButton 
            title="Add Properties"
            handleClick={()=> navigate('/properties/create')}
            backgroundColor='#475be8'
            color='#fcfcfc'
            icon={ <Add /> }
          />
      </Stack>  
      <Box mt='20px' sx={{ display: 'flex', flexWrap: 'wrap' }}>

      </Box>
    </Box>
  )
}

export default Allproperties