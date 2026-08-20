import{j as i}from"./iframe-C5mCK2PO.js";import{O as p}from"./object-table-Csnyr5o0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DYppQKJx.js";import"./preload-helper-B71-F3-E.js";import"./Table-CAoCD-r3.js";import"./index-x2FMdUXO.js";import"./Dialog-BUKOY0Bm.js";import"./cross-C2KqS3Pb.js";import"./svgIconContainer-jCGuJEaw.js";import"./useBaseUiId-CRwAptA4.js";import"./InternalBackdrop-CiAJU9Y9.js";import"./composite-DhwPvOlp.js";import"./index-CXO1mTHj.js";import"./index-DqURmoPO.js";import"./index-DFhuUbBY.js";import"./useEventCallback-DyFcPFjY.js";import"./SkeletonBar-PJRGOQI5.js";import"./LoadingCell-CQE0kFzu.js";import"./ColumnConfigDialog-DC8fdFoU.js";import"./DraggableList-C6E2mjha.js";import"./search-QRaPLFIx.js";import"./Input-ClKT9i6x.js";import"./useControlled-B76SscLe.js";import"./Button-QzVHZwrk.js";import"./small-cross-CFmTQ2DK.js";import"./ActionButton-BXbp-XTu.js";import"./Checkbox-Byyu80XK.js";import"./useValueChanged-a0LJAptk.js";import"./CollapsiblePanel-CvCqtl8y.js";import"./MultiColumnSortDialog-9GFPfOFK.js";import"./MenuTrigger-CDg2Tml1.js";import"./CompositeItem-CcgiUeN1.js";import"./ToolbarRootContext-Bjoxw1BG.js";import"./getDisabledMountTransitionStyles-Bgm3-BfC.js";import"./getPseudoElementBounds-BP73-JGK.js";import"./chevron-down-DkRHA-R2.js";import"./index-BYdvbw5G.js";import"./error-9wJAHEot.js";import"./BaseCbacBanner-CCanzxJR.js";import"./makeExternalStore-Dpr3oewV.js";import"./Tooltip-JfIAa3Wv.js";import"./PopoverPopup-C9KSsLOP.js";import"./debounce-CypeZyyS.js";import"./useOsdkClient-BLLliW7s.js";import"./tick-uKXRfO2h.js";import"./DropdownField-B_zeyfsK.js";import"./isEqual-DmC_VlXk.js";import"./withOsdkMetrics-Cx5_Zqh1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
