import{j as i}from"./iframe-C9qhmNcZ.js";import{O as p}from"./object-table-RDjCkhrw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClK7q1sc.js";import"./preload-helper-wNbJb-Pp.js";import"./Table-Nh8gMrCA.js";import"./index-B8P3LB4x.js";import"./Dialog-Df2SSlRS.js";import"./cross-DabX7tW-.js";import"./svgIconContainer-_uLEbp2C.js";import"./useBaseUiId-BTthXH_t.js";import"./InternalBackdrop-CgJ7ZQ7K.js";import"./composite-z0XknHYc.js";import"./index-DsqCXRoD.js";import"./index-DqJwTMkP.js";import"./index-CqvxxowX.js";import"./useEventCallback-DaBlRRBo.js";import"./SkeletonBar-EKMH7dnu.js";import"./LoadingCell-DC6J4sE1.js";import"./ColumnConfigDialog-Dyq2_1MI.js";import"./DraggableList-S6M-4kd_.js";import"./search-BDZY5Txu.js";import"./Input-BAGZIUmV.js";import"./useControlled-BTlBSM6y.js";import"./Button-HuNNWrG7.js";import"./small-cross-v2H6eOD9.js";import"./ActionButton-CZp7gXsO.js";import"./Checkbox-B7m0CtgI.js";import"./useValueChanged-VNxj8dRl.js";import"./CollapsiblePanel-BvRA97qN.js";import"./MultiColumnSortDialog-Bs1VnL9V.js";import"./MenuTrigger-C7UQv66O.js";import"./CompositeItem-CA3YvoYV.js";import"./ToolbarRootContext-tAljMxWu.js";import"./getDisabledMountTransitionStyles-_-80yZua.js";import"./getPseudoElementBounds-vWw3gXmS.js";import"./chevron-down-CJK_UNyE.js";import"./index-7d_bwMVc.js";import"./error-Pw2WsETW.js";import"./BaseCbacBanner-BKt2Rvts.js";import"./makeExternalStore-D9Eq3Efe.js";import"./Tooltip-D942ZPAo.js";import"./PopoverPopup-CVg99Xmz.js";import"./debounce-DAIWBKzq.js";import"./useOsdkClient-CZBXaSe4.js";import"./tick-BB4s_qlQ.js";import"./DropdownField-o7TutVQ3.js";import"./isEqual-DBoLl1ZU.js";import"./withOsdkMetrics-COlZnM_t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
