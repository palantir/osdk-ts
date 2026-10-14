import{j as i}from"./iframe-Cuknj9ph.js";import{O as p}from"./object-table-B2ghSWFR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dh5diuaJ.js";import"./preload-helper-DA49r888.js";import"./Table-24VKP0uk.js";import"./index-DUVMLmA5.js";import"./Dialog-jgyVThR1.js";import"./cross-9NrnDCFm.js";import"./svgIconContainer-Bxolnsq9.js";import"./useBaseUiId-ksC6H-yy.js";import"./InternalBackdrop-CBDaXKFL.js";import"./composite-CUDt05Vv.js";import"./index-B7AWjemI.js";import"./index-BPGm0MAa.js";import"./index-I722fGzW.js";import"./useEventCallback-BzkQL_AG.js";import"./SkeletonBar-BbxNu6H8.js";import"./LoadingCell-CDPlzg1b.js";import"./ColumnConfigDialog-CZyIFPTb.js";import"./DraggableList-BCAJmaDs.js";import"./search-BJhgCNFy.js";import"./Input-BEJtrH8a.js";import"./useControlled-D1P2IuRq.js";import"./Button-fi3zZM83.js";import"./small-cross-CInH2-yh.js";import"./ActionButton-DhNYUSlb.js";import"./Checkbox-DSUd8a7Y.js";import"./useValueChanged-BljXNw8x.js";import"./CollapsiblePanel-C2GTiw59.js";import"./MultiColumnSortDialog-BKIS72x4.js";import"./MenuTrigger-C8JhPNog.js";import"./CompositeItem-CyTGoO_U.js";import"./ToolbarRootContext-BMS0iTVE.js";import"./getDisabledMountTransitionStyles-BYU-ducs.js";import"./getPseudoElementBounds-BDhodCIt.js";import"./chevron-down-DYalT47P.js";import"./index-C1B0s3j1.js";import"./error-CYI1ELi7.js";import"./BaseCbacBanner-DQQ-tpgC.js";import"./makeExternalStore-VBmH-lGu.js";import"./Tooltip-DHjKu8cE.js";import"./PopoverPopup-ZZbgTqgr.js";import"./debounce-BbAyHLdF.js";import"./useOsdkClient-CB7r24bA.js";import"./tick-D_CF6UIY.js";import"./DropdownField-CJScNr2p.js";import"./isEqual-CLLsedGk.js";import"./withOsdkMetrics-BEbRkfCK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
