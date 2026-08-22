import{j as i}from"./iframe-De8gl-wb.js";import{O as p}from"./object-table-Bz2FDPwn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C3JOSOoc.js";import"./preload-helper-CZp3UEUX.js";import"./Table-B1Cak9D7.js";import"./index-yM1iOqxa.js";import"./Dialog-CTd_Fh2m.js";import"./cross-Rb4_YcYg.js";import"./svgIconContainer-O0KE-yUX.js";import"./useBaseUiId-D2bKh7zK.js";import"./InternalBackdrop-CaA3mfgc.js";import"./composite-CsYpzAzm.js";import"./index-CZuFPKTq.js";import"./index-yZ2YDAwx.js";import"./index-adqLLECi.js";import"./useEventCallback-M_gVxY2G.js";import"./SkeletonBar-Cpr1mmtD.js";import"./LoadingCell-B5JUoAiW.js";import"./ColumnConfigDialog-D5-gNagN.js";import"./DraggableList-DWokTizm.js";import"./search-gqOR6dWB.js";import"./Input-jUEOhmQC.js";import"./useControlled-DGI8qUj-.js";import"./Button-C8NRJqZ9.js";import"./small-cross-DCeop5gl.js";import"./ActionButton-9l7y1yGD.js";import"./Checkbox-DBD54aFK.js";import"./useValueChanged-FUmu471A.js";import"./CollapsiblePanel-C9mOk4td.js";import"./MultiColumnSortDialog-DzcM_iH0.js";import"./MenuTrigger-r0ZzgG-T.js";import"./CompositeItem-CLhIql87.js";import"./ToolbarRootContext-RfA3FV7l.js";import"./getDisabledMountTransitionStyles-B1oXkIam.js";import"./getPseudoElementBounds-2piZIYla.js";import"./chevron-down-DwDibcrO.js";import"./index-CEZAAMx5.js";import"./error-DNa-KthT.js";import"./BaseCbacBanner-q7Lsj7j7.js";import"./makeExternalStore-BgPv4tiZ.js";import"./Tooltip-CUSzcSPf.js";import"./PopoverPopup-CQa18L3d.js";import"./debounce-CnDZcNXl.js";import"./useOsdkClient-DVrTO4hw.js";import"./tick-CsI3c4Q2.js";import"./DropdownField-CDqudMgk.js";import"./isEqual-BtVuQz1J.js";import"./withOsdkMetrics-Cqq5lG27.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
