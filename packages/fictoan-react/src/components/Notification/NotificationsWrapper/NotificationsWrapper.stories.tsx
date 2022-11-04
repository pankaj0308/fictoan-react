import React from "react";

import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { NotificationItem, NotificationItemCustomProps } from "../NotificationItem/NotificationItem";
import { NotificationsWrapper } from "./NotificationsWrapper";
import { Default as NotificationItemStory } from "../NotificationItem/NotificationItem.stories";

const Template: FictoanStory<typeof NotificationsWrapper> = (args) => <NotificationsWrapper {...args} />;
Template.displayName = NotificationsWrapper.displayName;

export const Default: FictoanStory<typeof NotificationsWrapper> = createStoryFromTemplate(Template);
Default.args = {
    children: <NotificationItem {...(NotificationItemStory.args as NotificationItemCustomProps)} />,
};
