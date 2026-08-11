import{j as i}from"./iframe-BQQenncx.js";import{O as p}from"./object-table-DfbCwTiy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DcTLePyS.js";import"./preload-helper-DE2zdEQ0.js";import"./Table-Cmaah35x.js";import"./index-AEra5GjR.js";import"./Dialog-CiV-H6wX.js";import"./cross-CU5c5uos.js";import"./svgIconContainer-DKhBOnYU.js";import"./useBaseUiId-BgSJ0JuX.js";import"./InternalBackdrop-DUQAObxa.js";import"./composite-CU8fvfsg.js";import"./index-BVUmKt0T.js";import"./index-ly2aBA7A.js";import"./index-hWkQAxDW.js";import"./useEventCallback-B8NeoGCO.js";import"./SkeletonBar-BrFOAxeA.js";import"./LoadingCell-W9xuj7VH.js";import"./ColumnConfigDialog-DqnpXYNI.js";import"./DraggableList-Bc8uF3OC.js";import"./search-CgjP2Jwy.js";import"./Input-70viAAti.js";import"./useControlled-C13sOQuV.js";import"./isEqual-sa52SWWU.js";import"./isObject-Ds2zxCKN.js";import"./Button-hetyNd0y.js";import"./ActionButton-D6ggDCLc.js";import"./Checkbox-NVtkWJ8H.js";import"./useValueChanged-FwEMaXBy.js";import"./CollapsiblePanel-Db4XoTeG.js";import"./MultiColumnSortDialog-C3m8vwg6.js";import"./MenuTrigger-BeG6leMZ.js";import"./CompositeItem-vvPbfk0M.js";import"./ToolbarRootContext-Bu_SuW92.js";import"./getDisabledMountTransitionStyles-eVYX_BMX.js";import"./getPseudoElementBounds-BjNpuUcd.js";import"./chevron-down-Bog31CQQ.js";import"./index-CGPUvFpI.js";import"./error-DmbVq6Jg.js";import"./BaseCbacBanner-D89jOczY.js";import"./makeExternalStore-CkGykhKx.js";import"./Tooltip-0nOBWHFn.js";import"./PopoverPopup-Ht7DQmdg.js";import"./toNumber-B4TNDdae.js";import"./useOsdkClient-0MgZdaOJ.js";import"./tick-zu9zWfhb.js";import"./DropdownField-MuED612X.js";import"./withOsdkMetrics-At11PAU6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
