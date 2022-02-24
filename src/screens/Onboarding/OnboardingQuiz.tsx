// @flow
import React, { useCallback, useMemo, useState } from "react";
import {
  Flex,
  FlowStepper,
  Text,
  Button,
  Transitions,
} from "@ledgerhq/native-ui";
import { useTranslation } from "react-i18next";
import { RenderTransitionProps } from "@ledgerhq/native-ui/components/Navigation/FlowStepper";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { TrackScreen } from "../../analytics";
import { ScreenName } from "../../const";

import quizImage1 from "./assets/quizImage1.png";
import quizImage2 from "./assets/quizImage2.png";
import quizImage3 from "./assets/quizImage3.png";

import OnboardingQuizItem from "./OnboardingQuizItem";

const transitionStyles = [StyleSheet.absoluteFill, { flex: 1 }];

const renderTransitionSlide = ({
  activeIndex,
  previousActiveIndex,
  status,
  duration,
  children,
}: RenderTransitionProps) => (
  <Transitions.Slide
    status={status}
    duration={duration}
    direction={(previousActiveIndex || 0) < activeIndex ? "left" : "right"}
    style={transitionStyles}
  >
    {children}
  </Transitions.Slide>
);

const Header = ({ step }: { step: number }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
    >
      <Button iconName="ArrowLeft" size="large" onPress={onBack} />
      <Flex justifyContent="center" alignItems="center">
        <Text variant="small">
          {t("transfer.lending.enable.stepperHeader.stepRange", {
            currentStep: step,
            totalSteps: 3,
          })}
        </Text>
        <Text variant="h3">{t("v3.onboarding.quizz.label")}</Text>
      </Flex>
      <Button
        iconName="Close"
        size="large"
        onPress={() => {
          // @TODO skip to pair nano
        }}
      />
    </Flex>
  );
};

function OnboardingQuiz({ navigation }: { navigation: any }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [bg, setBg] = useState("primary.c60");

  const route = useRoute<
    RouteProp<
      {
        params: {
          deviceModelId: string;
        };
      },
      "params"
    >
  >();

  const [userAnswers, setAnswers] = useState(0);

  const quizData = useMemo(
    () =>
      [
        {
          question: t("v3.onboarding.quizz.coins.title"),
          image: quizImage1,
          answers: [
            {
              answer: t("v3.onboarding.quizz.coins.answers.correct"),
              correct: true,
              desc: t("v3.onboarding.quizz.coins.modal.text"),
              title: t("v3.onboarding.quizz.modal.success"),
            },
            {
              answer: t("v3.onboarding.quizz.coins.answers.wrong"),
              correct: false,
              desc: t("v3.onboarding.quizz.coins.modal.text"),
              title: t("v3.onboarding.quizz.modal.fail"),
            },
          ].sort(() => 0.5 - Math.random()),
        },
        {
          question: t("v3.onboarding.quizz.recoveryPhrase.title"),
          image: quizImage2,
          answers: [
            {
              answer: t("v3.onboarding.quizz.recoveryPhrase.answers.correct"),
              correct: true,
              desc: t("v3.onboarding.quizz.recoveryPhrase.modal.text"),
              title: t("v3.onboarding.quizz.modal.success"),
            },
            {
              answer: t("v3.onboarding.quizz.recoveryPhrase.answers.wrong"),
              correct: false,
              desc: t("v3.onboarding.quizz.recoveryPhrase.modal.text"),
              title: t("v3.onboarding.quizz.modal.fail"),
            },
          ].sort(() => 0.5 - Math.random()),
        },
        {
          question: t("v3.onboarding.quizz.privateKey.title"),
          image: quizImage3,
          answers: [
            {
              answer: t("v3.onboarding.quizz.privateKey.answers.correct"),
              correct: true,
              desc: t("v3.onboarding.quizz.privateKey.modal.text"),
              title: t("v3.onboarding.quizz.modal.success"),
            },
            {
              answer: t("v3.onboarding.quizz.privateKey.answers.wrong"),
              correct: false,
              desc: t("v3.onboarding.quizz.privateKey.modal.text"),
              title: t("v3.onboarding.quizz.modal.fail"),
            },
          ].sort(() => 0.5 - Math.random()),
        },
      ].sort(() => 0.5 - Math.random()),
    [t],
  );

  console.log(route.params);

  const onNext = useCallback(
    correct => {
      setAnswers(a => (correct ? a + 1 : a));
      setBg("primary.c60");
      if (index < quizData.length - 1) {
        setIndex(i => i + 1);
      } else {
        navigation.navigate(ScreenName.OnboardingQuizFinal, {
          ...route.params,
          success: userAnswers >= 2,
        });
      }
    },
    [index, navigation, quizData.length, route.params, userAnswers],
  );

  return (
    <Flex bg={bg} flex={1}>
      <SafeAreaView style={{ flex: 1 }}>
        <TrackScreen category="Onboarding" name="Quiz" />
        <FlowStepper
          activeIndex={index}
          renderTransition={renderTransitionSlide}
          transitionDuration={500}
          header={() => <Header step={index + 1} />}
          progressBarProps={{ bg }}
        >
          {quizData.map((data, i) => (
            <OnboardingQuizItem
              data={data}
              key={i}
              onNext={onNext}
              setBg={setBg}
              cta={
                i < quizData.length - 1
                  ? t("v3.onboarding.quizz.nextQuestion")
                  : t("v3.onboarding.quizz.finish")
              }
            />
          ))}
        </FlowStepper>
      </SafeAreaView>
    </Flex>
  );
}

export default OnboardingQuiz;