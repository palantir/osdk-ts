import{j as i}from"./iframe-DoZpKAuy.js";import{O as p}from"./object-table-DRW4kY3M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-RIcB7018.js";import"./preload-helper-VWDIqFcw.js";import"./Table-CkJ--xpo.js";import"./index-DI9gHjQw.js";import"./Dialog-BLZbylxk.js";import"./cross-BOIWmSa8.js";import"./svgIconContainer-DaZ9l-Xt.js";import"./useBaseUiId-DGOpwqqR.js";import"./InternalBackdrop-CXaIk_fc.js";import"./composite-BwuXi3Qd.js";import"./index-CJ3t3vUm.js";import"./index-D3VbgQBY.js";import"./index-DsGBi-gt.js";import"./useEventCallback-q8sTQiWB.js";import"./SkeletonBar-COaLIR3K.js";import"./LoadingCell-BN8yrwmK.js";import"./ColumnConfigDialog-CrrtK0Ko.js";import"./DraggableList-CQLRPqV0.js";import"./search-D2oluobe.js";import"./Input-DA4z6leT.js";import"./useControlled-Dtv5pYI4.js";import"./Button-Bx4A8oJL.js";import"./small-cross-B5Wvka-s.js";import"./ActionButton-rr5yoRIG.js";import"./Checkbox-BWUk6GkC.js";import"./useValueChanged-D34j0py5.js";import"./CollapsiblePanel-CjPIi1du.js";import"./MultiColumnSortDialog-DhJrKoCa.js";import"./MenuTrigger-BEGEz8dr.js";import"./CompositeItem-JZBFttqy.js";import"./ToolbarRootContext-CkYvN6qQ.js";import"./getDisabledMountTransitionStyles-DiIXvqNo.js";import"./getPseudoElementBounds-DVZ5aDyN.js";import"./chevron-down-Chs2Nvxl.js";import"./index-Dwncc-H5.js";import"./error-vQUKN10-.js";import"./BaseCbacBanner-COxyuxvY.js";import"./makeExternalStore-A-gxfiQg.js";import"./Tooltip-B3gh8s19.js";import"./PopoverPopup-C_2AHMFH.js";import"./debounce-TKcLqlSn.js";import"./useOsdkClient-BD-YRINd.js";import"./tick-ChJIONOw.js";import"./DropdownField-5YM5_cwC.js";import"./isEqual-DsuHKnmz.js";import"./withOsdkMetrics-wa8YRQpQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
