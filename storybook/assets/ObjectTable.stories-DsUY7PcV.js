import{j as i}from"./iframe-9OpC_N8y.js";import{O as p}from"./object-table-YQ6rNkeJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BHqAEqJ4.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B7sghAV5.js";import"./index-DSxditmY.js";import"./Dialog-DkBx-FR1.js";import"./cross-BfZJOFYH.js";import"./svgIconContainer-oJMft6mx.js";import"./useBaseUiId-DBqP-0QL.js";import"./InternalBackdrop-CpFIES9m.js";import"./composite-CrXso5kT.js";import"./index-BYheStGz.js";import"./index-BWMAAzDl.js";import"./index-OPaHrZDF.js";import"./useEventCallback-CZw_6uow.js";import"./SkeletonBar-O0q8dBq8.js";import"./LoadingCell-n49qRtbT.js";import"./ColumnConfigDialog-C7U7c6EQ.js";import"./DraggableList-lRzakoV6.js";import"./search-TnHR6DGv.js";import"./Input-22pjcFCD.js";import"./useControlled-B9BwmRqN.js";import"./Button-CEDTBjQ9.js";import"./small-cross-CDqdsFm-.js";import"./ActionButton-FY_WWuvt.js";import"./Checkbox-DE0s0SIE.js";import"./useValueChanged-hzDLPvi0.js";import"./CollapsiblePanel-ACU3l7Tu.js";import"./MultiColumnSortDialog-BwRCQV-y.js";import"./MenuTrigger-oZth-qms.js";import"./CompositeItem-BQvPBjhd.js";import"./ToolbarRootContext-D8Su1VOS.js";import"./getDisabledMountTransitionStyles-DmxHVaGO.js";import"./getPseudoElementBounds-DWUvgXva.js";import"./chevron-down-DRK_INXA.js";import"./index-BDwZVFt2.js";import"./error-BFjtkE9z.js";import"./BaseCbacBanner-8Bsxco84.js";import"./makeExternalStore-Dcb2I-X9.js";import"./Tooltip-BSdinWV1.js";import"./PopoverPopup-y0Wo_ssq.js";import"./debounce-CUmYTyYO.js";import"./useOsdkClient-nTvUHUDa.js";import"./tick-CTciLGmY.js";import"./DropdownField-D6KYcCTh.js";import"./isEqual-pgyVw8bX.js";import"./withOsdkMetrics-BMtD0lPR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
