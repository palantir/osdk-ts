import{j as i}from"./iframe-DhfS3RZc.js";import{O as p}from"./object-table-B-fxfLut.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C4vAwsg0.js";import"./preload-helper-DURZGd9r.js";import"./Table-CK1bsTfV.js";import"./index-CmWcsqzv.js";import"./Dialog-BSsp0rWl.js";import"./cross-BcryMkCa.js";import"./svgIconContainer-kbCk0NE_.js";import"./useBaseUiId-DfXKjGnz.js";import"./InternalBackdrop-DBGl_T4H.js";import"./composite-DAyuLXEI.js";import"./index-B97WNJKr.js";import"./index-DZobiGK0.js";import"./index-s0PrsLZK.js";import"./useEventCallback-DfaqPmrk.js";import"./SkeletonBar-yG-gm33m.js";import"./LoadingCell-ClU8fKgv.js";import"./ColumnConfigDialog-DT12I59U.js";import"./DraggableList-D6xYyVtg.js";import"./search-Bpp188FL.js";import"./Input-3HEaYe6X.js";import"./useControlled-DdFF90Aj.js";import"./Button-r9_lJTgE.js";import"./small-cross-CjiaImbP.js";import"./ActionButton-ClS-793Z.js";import"./Checkbox-WGLQOE5J.js";import"./useValueChanged-TUXL-Whv.js";import"./CollapsiblePanel-DDymuiwU.js";import"./MultiColumnSortDialog-Bc-BaGA4.js";import"./MenuTrigger-W_1TWk6A.js";import"./CompositeItem-Dq06wRHV.js";import"./ToolbarRootContext-BXCR2bw0.js";import"./getDisabledMountTransitionStyles-CjkU88c4.js";import"./getPseudoElementBounds-BowutHEK.js";import"./chevron-down-BFTO0kIL.js";import"./index-D8QgLOCs.js";import"./error-B7gsEzyH.js";import"./BaseCbacBanner-C7h0RdHe.js";import"./makeExternalStore-C0FFZIpP.js";import"./Tooltip-B6gLwk9y.js";import"./PopoverPopup-Ci542wak.js";import"./debounce-CUoR3aUb.js";import"./useOsdkClient-I8SPvkL2.js";import"./tick-DMUoUbt9.js";import"./DropdownField-CvT9323I.js";import"./isEqual-pykNuk-r.js";import"./withOsdkMetrics-huuH2-qQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
