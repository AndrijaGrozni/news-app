import React, { useState, useRef } from 'react';
import { Transition, Transitioning } from 'react-native-reanimated';
import { arrow } from '../../settings/images';
import * as S from './styles';

const transition = (
	<Transition.Together>
		<Transition.In type="fade" durationMs={250} />
		<Transition.Change />
		<Transition.Out type="fade" durationMs={250} />
	</Transition.Together>
);

const Accordion = ({ navigate, headline, children, index }) => {
	const [isOpen, setIsOpen] = useState(true);
	const ref = useRef(index);

	return (
		<Transitioning.View ref={ref} transition={transition}>
			<S.AccordionOutter>
				<S.AccordionHeader>
					<S.Headline onPress={navigate} size={1}>
						{headline}
					</S.Headline>
					<S.AccordionTouch
						onPress={() => {
							ref.current.animateNextTransition();
							setIsOpen(!isOpen);
						}}
					>
						<S.ArrowIcon source={arrow} size={20} isOpen={isOpen} />
					</S.AccordionTouch>
				</S.AccordionHeader>
				<S.AccordionContent>{isOpen && children}</S.AccordionContent>
			</S.AccordionOutter>
		</Transitioning.View>
	);
};

Accordion.propTypes = {};

Accordion.defaultProps = {};

export default Accordion;
