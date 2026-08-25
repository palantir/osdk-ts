import{j as i}from"./iframe-cVISvyfe.js";import{O as p}from"./object-table-CfPdI04T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CA5fMgOV.js";import"./preload-helper-CV7QtPzK.js";import"./Table-B2UA_DCP.js";import"./index-Cp1JV-_2.js";import"./Dialog-B9Yyrz7z.js";import"./cross-BQcZgDu4.js";import"./svgIconContainer-BLZRnc85.js";import"./useBaseUiId-CkxMnH4M.js";import"./InternalBackdrop-PhrF7f-Y.js";import"./composite-pva2vyCm.js";import"./index-BqMrmVK2.js";import"./index-mfykt0Ga.js";import"./index-CSmwm2LA.js";import"./useEventCallback-QAsE75sQ.js";import"./SkeletonBar-CbuqG1qR.js";import"./LoadingCell-1PHAs7Pa.js";import"./ColumnConfigDialog-CgrHgHAw.js";import"./DraggableList-7Qhjocb-.js";import"./search-Ck4999wE.js";import"./Input-6utg62a_.js";import"./useControlled-_y7ng7_J.js";import"./Button-CXrCi2Zt.js";import"./small-cross-Bd7ODnfC.js";import"./ActionButton-CU5q3Svh.js";import"./Checkbox-DyJCrmM1.js";import"./useValueChanged-Ceh5Fuv-.js";import"./CollapsiblePanel-Tbw4mP0W.js";import"./MultiColumnSortDialog-CciSkKfg.js";import"./MenuTrigger-BbBy_ec1.js";import"./CompositeItem-BIYi67JM.js";import"./ToolbarRootContext-Kuy8kCkh.js";import"./getDisabledMountTransitionStyles-Dff_0x3d.js";import"./getPseudoElementBounds-JGOI8eqt.js";import"./chevron-down-CuCy4Lvp.js";import"./index-BwvBu9MX.js";import"./error-BPDzH4j4.js";import"./BaseCbacBanner-FANvmh6A.js";import"./makeExternalStore-Bt321Qwa.js";import"./Tooltip-C4wgS6jm.js";import"./PopoverPopup-0BqC9snu.js";import"./debounce-beaBvIAK.js";import"./useOsdkClient-TzGlUFiU.js";import"./tick-Nt4YSm9S.js";import"./DropdownField-BZ37aPXN.js";import"./isEqual-DKSKQ7M9.js";import"./withOsdkMetrics-CKuQj_0t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
