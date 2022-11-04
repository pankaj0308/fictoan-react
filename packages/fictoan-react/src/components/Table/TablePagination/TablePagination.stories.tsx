import React from "react";
import { createStoryFromTemplate, FictoanStory } from "../../../utils/storyUtils";
import { TablePagination } from "./TablePagination";
import { Table } from "../Table";
const Template: FictoanStory<typeof TablePagination> = (args) => <TablePagination {...args} />;
Template.displayName = TablePagination.displayName;

export const Default: FictoanStory<typeof TablePagination> = createStoryFromTemplate(Template);
Default.args = {
    pageIndex: 1,
    rangeStart: 1,
    rangeEnd: 10,
    hasPreviousPage: true,
    hasNextPage: true,
    totalRecords: 100,
    onPageChange:(page)=>page,
};

