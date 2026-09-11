import{j as i}from"./iframe-CuKia_EN.js";import{O as p}from"./object-table-CmttaJ0f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BFqXdllG.js";import"./preload-helper-DZuarx_D.js";import"./Table-D2fC7E-R.js";import"./index-CVRiO_BO.js";import"./Dialog-D7PuDkh6.js";import"./cross-X509BjS9.js";import"./svgIconContainer-6Becg_K2.js";import"./useBaseUiId-C8uIC3Bm.js";import"./InternalBackdrop-ofNkj6qc.js";import"./composite-Cpd5KJD8.js";import"./index-q4KNVnv_.js";import"./index-Dx9fpQkg.js";import"./index-DRmu1dZx.js";import"./useEventCallback-eNr2_rgV.js";import"./SkeletonBar-CQrsNGDe.js";import"./LoadingCell-Fw6A3SCw.js";import"./ColumnConfigDialog-Da23NrBb.js";import"./DraggableList-C_j1TSmW.js";import"./search-Bab6PZbG.js";import"./Input-BIdaiZoI.js";import"./useControlled-UwQVkGem.js";import"./Button-CVMu9YDi.js";import"./small-cross-BeBD9G2Y.js";import"./ActionButton-DU7cLlj1.js";import"./Checkbox-DFS3qNO0.js";import"./useValueChanged-ChchmKxl.js";import"./CollapsiblePanel-HNtDo0gw.js";import"./MultiColumnSortDialog-DV2ZYylK.js";import"./MenuTrigger-QFhkU378.js";import"./CompositeItem-CJjI731A.js";import"./ToolbarRootContext-Bn8zU9xQ.js";import"./getDisabledMountTransitionStyles-CjBLuMnB.js";import"./getPseudoElementBounds-BKhdgpRc.js";import"./chevron-down-DJVJwxKZ.js";import"./index-BcyKe8qn.js";import"./error-C19RYWaj.js";import"./BaseCbacBanner-BeCxEPHQ.js";import"./makeExternalStore-DzI0MTA7.js";import"./Tooltip-3KVWe3HV.js";import"./PopoverPopup-BZX5fwgl.js";import"./debounce-KF7wF3li.js";import"./useOsdkClient-nV1NX6Cm.js";import"./tick-_5nSoxyV.js";import"./DropdownField-DQBcY_Rm.js";import"./isEqual-DM5iv7nZ.js";import"./withOsdkMetrics-5runl_VG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
