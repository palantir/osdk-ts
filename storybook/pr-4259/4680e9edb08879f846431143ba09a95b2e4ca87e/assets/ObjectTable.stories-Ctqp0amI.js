import{j as i}from"./iframe-CL0v58YA.js";import{O as p}from"./object-table-Bq2bBPP-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B7ZBKqkx.js";import"./preload-helper-YA1d6Ini.js";import"./Table-Cn0a8GAw.js";import"./index-Dbld71_D.js";import"./Dialog-CGLv1Gw3.js";import"./cross-CMjnlyn3.js";import"./svgIconContainer-C5xAXPyT.js";import"./useBaseUiId-C-B8c9Tq.js";import"./InternalBackdrop-BoEb1M5v.js";import"./composite-CnlM0z75.js";import"./index-B8Uk-bLz.js";import"./index-BvbkTHlh.js";import"./index-DXxGeQJl.js";import"./useEventCallback-BiRlE1G0.js";import"./SkeletonBar-aBATL-Tf.js";import"./LoadingCell-ClwklxX8.js";import"./ColumnConfigDialog-w4AQPypf.js";import"./DraggableList-CZJxf7TB.js";import"./search-1eZ8caHB.js";import"./Input-mgnWKdmk.js";import"./useControlled-CSC850so.js";import"./Button-D8zbKIcq.js";import"./small-cross-BtqQFOUy.js";import"./ActionButton-Bu4dL35R.js";import"./Checkbox-tY51RlBx.js";import"./useValueChanged-ByhtVHRE.js";import"./CollapsiblePanel-D2eGim3y.js";import"./MultiColumnSortDialog-CrDQobkj.js";import"./MenuTrigger-vBnLao72.js";import"./CompositeItem-DUAhoOI3.js";import"./ToolbarRootContext-Dar2Ujz6.js";import"./getDisabledMountTransitionStyles-Cjmtv4nr.js";import"./getPseudoElementBounds-DAXSaCVq.js";import"./chevron-down-BBB2aEWM.js";import"./index-B86UewVM.js";import"./error-DDQ2JALg.js";import"./BaseCbacBanner-C9gquFsU.js";import"./makeExternalStore-Bhj1U_Xf.js";import"./Tooltip-BzQZnpRI.js";import"./PopoverPopup-Xz0YTDkc.js";import"./debounce-CYoIEdAM.js";import"./useOsdkClient-C1SbSG22.js";import"./tick-DJs20ou9.js";import"./DropdownField-BclOEnPv.js";import"./isEqual-NoqYCfyd.js";import"./withOsdkMetrics-B3RxtapX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
