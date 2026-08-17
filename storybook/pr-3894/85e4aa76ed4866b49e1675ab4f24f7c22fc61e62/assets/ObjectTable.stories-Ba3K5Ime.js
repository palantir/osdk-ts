import{j as i}from"./iframe-71AE2c8s.js";import{O as p}from"./object-table-UYofKsdi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnpWVEMf.js";import"./preload-helper-BtlTcUvi.js";import"./Table-xrwghvfR.js";import"./index-70-LFm6P.js";import"./Dialog-BLMww6GM.js";import"./cross-DPU8k9PA.js";import"./svgIconContainer-CQVZ0EfL.js";import"./useBaseUiId-koFcKlW2.js";import"./InternalBackdrop-DSsgF3k7.js";import"./composite-CJjbOeLp.js";import"./index-_yJiFnLU.js";import"./index-C_ZG4zPp.js";import"./index-CubMyL5c.js";import"./useEventCallback-DCKstoaM.js";import"./SkeletonBar-CyVSDhVA.js";import"./LoadingCell-DEx_LkxO.js";import"./ColumnConfigDialog-DgCfVhpc.js";import"./DraggableList-9P3rKwuX.js";import"./search-DRjn4zmO.js";import"./Input-BTOTZdkr.js";import"./useControlled-ARtkj8_v.js";import"./Button-NFl_FDQS.js";import"./small-cross-DQMGM7ye.js";import"./ActionButton-mGI9HBkv.js";import"./Checkbox-Dy9E1N6v.js";import"./useValueChanged-Bgebujyt.js";import"./CollapsiblePanel-D3SarGBu.js";import"./MultiColumnSortDialog-Bu4iguJN.js";import"./MenuTrigger-DPX8NUq1.js";import"./CompositeItem-Cu549WoE.js";import"./ToolbarRootContext-lpwl76Za.js";import"./getDisabledMountTransitionStyles-CHz2fGHP.js";import"./getPseudoElementBounds-PPP_HaMX.js";import"./chevron-down-BOqQXOX9.js";import"./index-CRRe-iJL.js";import"./error-qex0YiDZ.js";import"./BaseCbacBanner-tM1OMb7g.js";import"./makeExternalStore-Bv5nMmxN.js";import"./Tooltip-BgYmNIJk.js";import"./PopoverPopup-DN5RzoVw.js";import"./debounce-DXWm-QpH.js";import"./useOsdkClient-C4P5dLRq.js";import"./tick-PepXr6jD.js";import"./DropdownField-SCGgbCNn.js";import"./isEqual-DJ0v_bAA.js";import"./withOsdkMetrics-TK9LRg4L.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
