import{j as i}from"./iframe-C-tkmioo.js";import{O as p}from"./object-table-BZaq3tn6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CLuCAWXv.js";import"./preload-helper-DfuNKgCp.js";import"./Table-yh79B9Qv.js";import"./index-mhh8JEg6.js";import"./Dialog-B83feRHx.js";import"./cross-C44ftUHc.js";import"./svgIconContainer-CWpp_2jS.js";import"./useBaseUiId-Cm7MFvra.js";import"./InternalBackdrop-D_Y9aPDh.js";import"./composite-C8fhvEre.js";import"./index-hoVNSPuR.js";import"./index-B90a8S-M.js";import"./index-B2RSfjfJ.js";import"./useEventCallback-CUGSbf6p.js";import"./SkeletonBar-BiIW-GDj.js";import"./LoadingCell-OT1ynwa9.js";import"./ColumnConfigDialog-BjIWXLI1.js";import"./DraggableList-B6YwMZwa.js";import"./search-i-B1QBlz.js";import"./Input-DLE-7B-W.js";import"./useControlled-C9aUqxO7.js";import"./Button-CGB2DjlW.js";import"./small-cross-CsUjbm9n.js";import"./ActionButton-CSf7aDsX.js";import"./Checkbox-DFI4mm_O.js";import"./useValueChanged-o5jZZ60n.js";import"./CollapsiblePanel-BS6YIswr.js";import"./MultiColumnSortDialog-Dhbg2w2w.js";import"./MenuTrigger-DgLDD6M4.js";import"./CompositeItem-Byuaai_8.js";import"./ToolbarRootContext-BgWudj9O.js";import"./getDisabledMountTransitionStyles-BxVfE1UN.js";import"./getPseudoElementBounds-DRiaJ7G-.js";import"./chevron-down-CDLMbCJ_.js";import"./index-C_kRO_H9.js";import"./error-CXAWYJfd.js";import"./BaseCbacBanner-D9tZInLS.js";import"./makeExternalStore-Bksv4soB.js";import"./Tooltip-B6Q61cjD.js";import"./PopoverPopup-Dh8bwyRK.js";import"./debounce-CzHRNvfy.js";import"./useOsdkClient-CJta-8BD.js";import"./tick-C0oAE1Ij.js";import"./DropdownField-Cbsq4sP1.js";import"./isEqual-DjxLkWRx.js";import"./withOsdkMetrics-vqDit70J.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
