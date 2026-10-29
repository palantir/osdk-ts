import{j as i}from"./iframe-CjqaNb_6.js";import{O as p}from"./object-table-BLp0NQy8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChCDf0ub.js";import"./preload-helper-CGa3vgnS.js";import"./Table-C9Ts5vCP.js";import"./index-vq-4ZEFu.js";import"./Dialog-Cyu4HK_T.js";import"./cross-BpdOGJyJ.js";import"./svgIconContainer-DjFXNtcD.js";import"./useBaseUiId-BlK4VlOb.js";import"./InternalBackdrop-t0TxIlY7.js";import"./composite-C2vCaoMT.js";import"./index-CicBoOrA.js";import"./index-_mZt-hWo.js";import"./index-Cuh_ZcBo.js";import"./useEventCallback-DpCsUsma.js";import"./SkeletonBar-BNDqBgQ7.js";import"./LoadingCell-GbbbFo6u.js";import"./ColumnConfigDialog-B8Hmr4Iw.js";import"./DraggableList-KApAS3IC.js";import"./search-DVbD0a3n.js";import"./Input-BvVBd0y-.js";import"./useControlled-DENE4AVf.js";import"./Button-d7ygQEjr.js";import"./small-cross-CwlKy0u0.js";import"./ActionButton-BJGjBTpO.js";import"./Checkbox-B-NTnxav.js";import"./useValueChanged-BhQo8aRa.js";import"./CollapsiblePanel-DowHk0nd.js";import"./MultiColumnSortDialog-B9x5EL7H.js";import"./MenuTrigger-CR-xcnEV.js";import"./CompositeItem-DdNr1E7d.js";import"./ToolbarRootContext-BkN7DcjO.js";import"./getDisabledMountTransitionStyles-DpBysH4p.js";import"./getPseudoElementBounds-CAI6qpMe.js";import"./chevron-down-DCYjYXHO.js";import"./index-Dd6FNa4t.js";import"./error-CICrjBQf.js";import"./BaseCbacBanner-D_2WY7v4.js";import"./makeExternalStore-DymPkA7f.js";import"./Tooltip-DP0dSQE1.js";import"./PopoverPopup-DLqc0nMK.js";import"./debounce-CS5Zky73.js";import"./useOsdkClient-KzXi1Mfu.js";import"./tick-DFEtV6b8.js";import"./DropdownField-B6TBtxf2.js";import"./isEqual-BHczr-VC.js";import"./withOsdkMetrics-DqLs3Yq6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
