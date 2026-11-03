import{j as i}from"./iframe-CH27AqHZ.js";import{O as p}from"./object-table-CkoI542e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bn04i390.js";import"./preload-helper-DGi0xS-h.js";import"./Table-CH_NPSwe.js";import"./index-D1s_GF0g.js";import"./Dialog-BO88dVa7.js";import"./cross-wK4dNyGg.js";import"./svgIconContainer-CAAPLquq.js";import"./useBaseUiId-Bqw5UKiE.js";import"./InternalBackdrop-Evn3ET9-.js";import"./composite-C0QdjDW_.js";import"./index-w-QWzjNw.js";import"./index-idKZoric.js";import"./index-lRC7FyDu.js";import"./useEventCallback-BFq5H1RT.js";import"./SkeletonBar-B3ahzSk9.js";import"./LoadingCell-VcDh5duI.js";import"./ColumnConfigDialog-CNI_Akv4.js";import"./DraggableList-DbhEH_qG.js";import"./search-BvrU7tK_.js";import"./Input-BZHUVJPq.js";import"./useControlled-bZT9hVeg.js";import"./Button-C_aQELrm.js";import"./small-cross-20hmyH-H.js";import"./ActionButton-D3WKqPWv.js";import"./Checkbox-DDWJRWmN.js";import"./useValueChanged-NcbXJrC1.js";import"./CollapsiblePanel-BPS1IKxI.js";import"./MultiColumnSortDialog-YjUETmiQ.js";import"./MenuTrigger-CA2X_MRB.js";import"./CompositeItem-Bp-0qryG.js";import"./ToolbarRootContext-CS86aP8Z.js";import"./getDisabledMountTransitionStyles-BC1jSC_a.js";import"./getPseudoElementBounds-CtFtcdYV.js";import"./chevron-down-BknLO_BB.js";import"./index-CyGPth6m.js";import"./error-ADuRb4lm.js";import"./BaseCbacBanner-lOIAIJ4-.js";import"./makeExternalStore-D2OeNChh.js";import"./Tooltip-Bz17X0U3.js";import"./PopoverPopup-dBkoEvm7.js";import"./debounce-DQvh5AcE.js";import"./useOsdkClient-DOGyfDWc.js";import"./tick-BpVCvq9_.js";import"./DropdownField-Xq1F_pI0.js";import"./isEqual-iLCg8Cj2.js";import"./withOsdkMetrics-w7ir5H-Z.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
