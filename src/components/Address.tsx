// // Copyright 2022-2023 @Polkasafe/polkaSafe-ui authors & contributors
// // This software may be modified and distributed under the terms
// // of the Apache-2.0 license. See the LICENSE file for details.


// import { shortenAddress } from '@/utils/string';
// import Identicon from '@polkadot/react-identicon';
// import clsx from 'clsx';

// import React, { FC } from 'react';

// // import styled from 'styled-components';

// interface IAddressProps {
// 	address: string;
// 	className?: string;
// 	disableAddress?: boolean;
// 	disableIdenticon?: boolean;
// 	disableExtensionName?: string;
// 	displayInline?: boolean;
// 	extensionName?: string;
// 	identiconSize?: number;
// 	shortenAddressLength?: number;
// 	textClassName?: string;
// }

// const Address: FC<IAddressProps> = (props) => {
// 	const { address, className, displayInline, disableIdenticon, disableAddress, disableExtensionName, extensionName, identiconSize, shortenAddressLength } = props;
// 	return (
// 		<div className={clsx(
// 			'flex items-center gap-x-3 w-full',
// 			className,
// 			{
// 				'inline-flex': displayInline
// 			}
// 		)}>
// 			{
// 				!disableIdenticon ?
// 					<Identicon
// 						className='image identicon'
// 						value={address}
// 						size={identiconSize ? identiconSize : 30}
// 						theme={'polkadot'}
// 					/>
// 					: null
// 			}
// 			{
// 				<p className='flex flex-col gap-y-[6px] font-normal text-xs leading-[13px] text-start'>
// 					{!disableExtensionName? <span className=''>{extensionName }</span>: null}
// 					{!disableAddress? <span className='text-text_secondary'>{shortenAddress(address)}</span>: null}
// 				</p>
// 			}
// 		</div>
// 	);
// };

// export default Address
