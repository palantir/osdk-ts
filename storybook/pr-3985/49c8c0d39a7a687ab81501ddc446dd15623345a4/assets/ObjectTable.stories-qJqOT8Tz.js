import{j as i}from"./iframe-BjMPQmdZ.js";import{O as p}from"./object-table-52MAir1D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFJpFluT.js";import"./preload-helper-B8Ak4a51.js";import"./Table-CyWrmmW1.js";import"./index-oZX62iJS.js";import"./Dialog-BjRNm7TP.js";import"./cross-JpXN3sJS.js";import"./svgIconContainer-Dwz9d1MN.js";import"./useBaseUiId-D8cmXz0j.js";import"./InternalBackdrop-8oVqxHi8.js";import"./composite-CSAWSVfE.js";import"./index-D9GWSad1.js";import"./index-DtER7TIS.js";import"./index-NlopW1lK.js";import"./useEventCallback-DPBscyoY.js";import"./SkeletonBar-2PecOG9Y.js";import"./LoadingCell-DzLTK-4l.js";import"./ColumnConfigDialog-CQElBG8e.js";import"./DraggableList-BdgMwfNX.js";import"./search-D6_fqh0V.js";import"./Input-D7HYNJJj.js";import"./useControlled-DmP1tMz2.js";import"./Button-CZzc-gIr.js";import"./small-cross-Bu27Obc4.js";import"./ActionButton-DdGak1A0.js";import"./Checkbox-Bj8NpVU0.js";import"./useValueChanged-BruLlZZe.js";import"./CollapsiblePanel-CO_htu_q.js";import"./MultiColumnSortDialog-I0_RtTxG.js";import"./MenuTrigger-DTmliU1n.js";import"./CompositeItem-ejF_MhIC.js";import"./ToolbarRootContext-BJ3LM2Fu.js";import"./getDisabledMountTransitionStyles-DYlb6B2g.js";import"./getPseudoElementBounds-BEZQ3U0s.js";import"./chevron-down-IIBkH-oY.js";import"./index-4XbIxfFx.js";import"./error-BP2V_PLi.js";import"./BaseCbacBanner-DK26JmqY.js";import"./makeExternalStore-B8EVnW0L.js";import"./Tooltip-DQ9zqIRE.js";import"./PopoverPopup-z3RJyiP2.js";import"./debounce-B--2yBpk.js";import"./useOsdkClient-qEswp40d.js";import"./tick-CODMTGal.js";import"./DropdownField-DR1RPbxl.js";import"./isEqual-BY0uKEbW.js";import"./withOsdkMetrics-DcvRTKGS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
