import{j as i}from"./iframe-zGF2yItg.js";import{O as p}from"./object-table-B-_rm4CA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0oka486.js";import"./preload-helper-DKR91DwN.js";import"./Table-B6IMnTKP.js";import"./index-CI0AAd7R.js";import"./Dialog-CWDyspc2.js";import"./cross-BclfVS0V.js";import"./svgIconContainer-CfbP11Km.js";import"./useBaseUiId-D8XkRAoN.js";import"./InternalBackdrop-C8zej5On.js";import"./composite-BhRiZx70.js";import"./index-CpyS4ByO.js";import"./index-C9gBj_QQ.js";import"./index-jHsjLuIA.js";import"./useEventCallback-Cg6-L5Ug.js";import"./SkeletonBar-CzCR3F20.js";import"./LoadingCell-C56P9DI-.js";import"./ColumnConfigDialog-DxlPqZ10.js";import"./DraggableList-CZyDDYiK.js";import"./search-Dr3ly3kj.js";import"./Input-gx0WGAlP.js";import"./useControlled-Bcq_19a7.js";import"./Button-CUzrpo83.js";import"./small-cross-B5aXXuf_.js";import"./ActionButton-Cpin8hGS.js";import"./Checkbox-DKB8j1aW.js";import"./useValueChanged-Bz7hhRgE.js";import"./CollapsiblePanel-CGpSwayQ.js";import"./MultiColumnSortDialog-CDL5uEaa.js";import"./MenuTrigger-DwGkpRY7.js";import"./CompositeItem-BGuYZ8t8.js";import"./ToolbarRootContext-zfiNhCTv.js";import"./getDisabledMountTransitionStyles-C8rPshX7.js";import"./getPseudoElementBounds-_KhoGvMt.js";import"./chevron-down-BYonktV5.js";import"./index-Ce2iCB2D.js";import"./error-rXo5lK8q.js";import"./BaseCbacBanner-qvusjPLY.js";import"./makeExternalStore-BDBIRBp5.js";import"./Tooltip-BDl8XaA7.js";import"./PopoverPopup-BjSro2CC.js";import"./debounce-fRUSIOCu.js";import"./useOsdkClient-DI9zvGd-.js";import"./tick-DAv5Wwbg.js";import"./DropdownField-y9zCIkHo.js";import"./isEqual-tYCzP_Jl.js";import"./withOsdkMetrics-CQPruHu_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
