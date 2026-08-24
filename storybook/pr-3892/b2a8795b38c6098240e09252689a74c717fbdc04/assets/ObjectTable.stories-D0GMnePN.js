import{j as i}from"./iframe-DCaGj3l0.js";import{O as p}from"./object-table-D0mt5DPJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CReHiVGS.js";import"./preload-helper-gC7fLLdU.js";import"./Table-Ds7HS37W.js";import"./index-DHJOctOT.js";import"./Dialog-BvfSMtlB.js";import"./cross-BpMnC369.js";import"./svgIconContainer-BdchtLLj.js";import"./useBaseUiId-DGrKf2Eo.js";import"./InternalBackdrop-CSwqTrZw.js";import"./composite-BmlfmHXv.js";import"./index-lxz2Q88D.js";import"./index-CqOnqOgj.js";import"./index-BzSaS7Cw.js";import"./useEventCallback-B32f23SN.js";import"./SkeletonBar-4_sAq1N_.js";import"./LoadingCell-DaN63Ldr.js";import"./ColumnConfigDialog-DB8cbZnm.js";import"./DraggableList-BFubNhXI.js";import"./search-Bhwoz9oz.js";import"./Input-ndPiwRRZ.js";import"./useControlled-CmhVbQER.js";import"./Button-BwAz3h5J.js";import"./small-cross-yPYVW9ma.js";import"./ActionButton-CLaZ3sVC.js";import"./Checkbox-B7HTI25J.js";import"./useValueChanged-BSGKh55p.js";import"./CollapsiblePanel-kflJyW8i.js";import"./MultiColumnSortDialog-B-Hv7au_.js";import"./MenuTrigger-Xyg7dls5.js";import"./CompositeItem-BD31eM2W.js";import"./ToolbarRootContext-DYMdUcY2.js";import"./getDisabledMountTransitionStyles-CPT9oXs8.js";import"./getPseudoElementBounds-CFsJDsKN.js";import"./chevron-down-DD_PJCyI.js";import"./index-C1b2qvva.js";import"./error-BT5-tKwD.js";import"./BaseCbacBanner-DMFela52.js";import"./makeExternalStore-DJQIf4q1.js";import"./Tooltip-BsrpxabU.js";import"./PopoverPopup-DckcAQlp.js";import"./debounce-B1LoYU07.js";import"./useOsdkClient-6qfYQwQq.js";import"./tick-NvbgN8tQ.js";import"./DropdownField-DVsSESTI.js";import"./useDebouncedCallback-BPfUve02.js";import"./withOsdkMetrics-IcI5BvBR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
