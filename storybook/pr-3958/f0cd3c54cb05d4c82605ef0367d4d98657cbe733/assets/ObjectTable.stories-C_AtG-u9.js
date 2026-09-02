import{j as i}from"./iframe-CQw56iWo.js";import{O as p}from"./object-table-_b87z9yg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7dvKbZ3R.js";import"./preload-helper-Cb-iTVGL.js";import"./Table-BjVQv3Ut.js";import"./index-BbcRXNNj.js";import"./Dialog-DQjpS1ko.js";import"./cross-Nlfk9xaA.js";import"./svgIconContainer-CJszD9JX.js";import"./useBaseUiId-wSHMnGD-.js";import"./InternalBackdrop-Il8xAP3p.js";import"./composite-CrcBBrnx.js";import"./index-3NrBg7OY.js";import"./index-B-4hZkSR.js";import"./index-DnT2_768.js";import"./useEventCallback-D5srKw5L.js";import"./SkeletonBar-BF1cQEzt.js";import"./LoadingCell-CV9XZ9Uc.js";import"./ColumnConfigDialog-COYitlC3.js";import"./DraggableList-CBeAoOWH.js";import"./search-BeZpj5L6.js";import"./Input-BjEM47WF.js";import"./useControlled-Brc4EdI6.js";import"./Button-CE9o7PIg.js";import"./small-cross-CnTvk0Kj.js";import"./ActionButton-2adJk00V.js";import"./Checkbox-CfsX_vZH.js";import"./useValueChanged-DGcNWuA7.js";import"./CollapsiblePanel-Dw6R1hci.js";import"./MultiColumnSortDialog-CZ4APG3L.js";import"./MenuTrigger-hUaCMsAR.js";import"./CompositeItem-B1bezKZw.js";import"./ToolbarRootContext-R1fb82vZ.js";import"./getDisabledMountTransitionStyles-CVZQPl4y.js";import"./getPseudoElementBounds-BX5Pi7co.js";import"./chevron-down-Df0py7y_.js";import"./index-C5iZ-ss4.js";import"./error-C5hkCc6v.js";import"./BaseCbacBanner-Dp2SlZsT.js";import"./makeExternalStore-CCwV61OO.js";import"./Tooltip-CtxV_51G.js";import"./PopoverPopup-BgEulf2-.js";import"./debounce-CNCpWjWV.js";import"./useOsdkClient-9L2S2s7W.js";import"./tick-CPHWizrD.js";import"./DropdownField-BNLfoGtV.js";import"./isEqual-DvLhOnOz.js";import"./withOsdkMetrics-D9HOSlTb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
