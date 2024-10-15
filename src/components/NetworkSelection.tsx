'use client'

import { Spinner } from '@/components/ui/spinner';
import { useApiContext } from '@/providers/ApiProvider';
import { SUPPORTED_NETWORKS } from '@/utils/networks';
import Image from 'next/image';

function NetworkStatusIndicator() {
  const { apiReady } = useApiContext();

  if (apiReady) {
    return <div className='w-3 h-3 rounded-full bg-green-500'  />;
  } else {
    return <Spinner className='w-4 h-4' />;
  }
}

export default function NetworkSelection() {
  const { network, setNetwork } = useApiContext();
  // const [smallest] = useMediaQuery('(max-width: 325px)');

  return (
    <div className='flex items-center justify-center gap-2 border  p-2 rounded-xl shadow-md cursor-pointer'>
      <Image src={network.logo} alt={network.name} width={22} height={22} style={{ borderRadius: 4 }} />

       <NetworkStatusIndicator />

    </div>
    // <Menu autoSelect={false} >
    //   <MenuButton as={Button} flexShrink={0} backgroundColor={'#89d7e9'} rounded={'full'}   _hover={{
    //           shadow: "md",
    //           backgroundColor: "#C8F5FF",
    //         }}>
    //     <Flex direction='row' align='center' gap={2} >
    //       <Image src={network.logo} alt={network.name} width={22} height={22} style={{ borderRadius: 4 }} />
    //       {/* {!smallest && <span>{network.name}</span>} */}

    //       <Box flexShrink={0}>
    //         <NetworkStatusIndicator />
    //       </Box>
    //     </Flex>
    //   </MenuButton>
    //   <MenuList>
    //     {Object.values(SUPPORTED_NETWORKS).map((one) => (
    //       <MenuItem
    //         key={one.id}
    //         onClick={() => setNetwork(one)}
    //         backgroundColor={one.id === network.id ? 'gray.200' : ''}>
    //         <Flex direction='row' align='center' gap={2}>
    //           {/* <Image src={one.logo} alt={one.name} width={18} height={18} style={{ borderRadius: 4 }}/> */}
    //           <span>{one.name}</span>
    //         </Flex>
    //       </MenuItem>
    //     ))}
    //   </MenuList>
    // </Menu>
  );
}
