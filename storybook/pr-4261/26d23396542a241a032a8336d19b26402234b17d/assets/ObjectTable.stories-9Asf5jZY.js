import{j as i}from"./iframe-B2PftgNv.js";import{O as p}from"./object-table-ClDAZpys.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CT3nRJoR.js";import"./preload-helper-CEJ8wrbo.js";import"./Table-HWVEUDWm.js";import"./index-DLh6R3k3.js";import"./Dialog-C0Aqqg6h.js";import"./cross-DUUoKIdp.js";import"./svgIconContainer-BpxY4u4w.js";import"./useBaseUiId-Z6N9hVn8.js";import"./InternalBackdrop-C_Gp7NJL.js";import"./composite-ClzGHvMl.js";import"./index-CKDtR0br.js";import"./index-D5vOugya.js";import"./index-B_Dc_l-I.js";import"./useEventCallback-CQGtLwNK.js";import"./SkeletonBar-DTuV6I9E.js";import"./LoadingCell-Dgm9Srrt.js";import"./ColumnConfigDialog-B4LlJdmt.js";import"./DraggableList-DiiNiM-a.js";import"./search-By7WOD0U.js";import"./Input-BtteuOYK.js";import"./useControlled-CrpHgYxN.js";import"./Button-B8NZKNU8.js";import"./small-cross-BrcFqK6e.js";import"./ActionButton-B6gXvkdC.js";import"./Checkbox-C7Rc1ejm.js";import"./useValueChanged-C-aUTwRA.js";import"./CollapsiblePanel-DYRFEvlw.js";import"./MultiColumnSortDialog-Bz--MVn6.js";import"./MenuTrigger-0kNz5fpY.js";import"./CompositeItem-DXQI1LIg.js";import"./ToolbarRootContext-DSVVLYlD.js";import"./getDisabledMountTransitionStyles-CIcAeq8K.js";import"./getPseudoElementBounds-Bzb7fIgD.js";import"./chevron-down-CZZTKstq.js";import"./index-D12Somt8.js";import"./error-DLN9t7ZG.js";import"./BaseCbacBanner-7hqzmHST.js";import"./makeExternalStore-XDjeZ5H6.js";import"./Tooltip-D-7EvLcH.js";import"./PopoverPopup-bHujGyHj.js";import"./debounce-Dy8J1v9c.js";import"./useOsdkClient-8mR2SN13.js";import"./tick-BHo22fTJ.js";import"./DropdownField-Dj__11WN.js";import"./isEqual-DgLHABrY.js";import"./withOsdkMetrics-CoGkur03.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
