import{j as i}from"./iframe-BLUQ5n2c.js";import{O as p}from"./object-table-BJvkeLAv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D_xFsqxu.js";import"./preload-helper-DMlP9NYW.js";import"./Table-BzDrSoDv.js";import"./index-CsLnk6pi.js";import"./Dialog-CPph2Z9X.js";import"./cross-lsoPApi8.js";import"./svgIconContainer-Cp4hDvLL.js";import"./useBaseUiId-BeXNNW2Y.js";import"./InternalBackdrop-CSoztZdj.js";import"./composite-DpCo7vDA.js";import"./index-CRHr79L0.js";import"./index-3ijF1jpZ.js";import"./index-Cu1ZahnW.js";import"./useEventCallback-Bj8tWb2p.js";import"./SkeletonBar-CkH9gL38.js";import"./LoadingCell-BFm_IhfR.js";import"./ColumnConfigDialog-BCD7IAOK.js";import"./DraggableList-DtXpJvTm.js";import"./search-BxVXVDMi.js";import"./Input-CJtdNhxn.js";import"./useControlled-B201dL0t.js";import"./Button-SHEnCOjG.js";import"./small-cross-PSmIAOl0.js";import"./ActionButton-D86_SLzn.js";import"./Checkbox-CrtpiRPG.js";import"./useValueChanged-DRWNLZgS.js";import"./CollapsiblePanel-YVQttI65.js";import"./MultiColumnSortDialog-D7RRsETP.js";import"./MenuTrigger-Cn5L-B4M.js";import"./CompositeItem-BFmGj5TY.js";import"./ToolbarRootContext-DgTgfzIH.js";import"./getDisabledMountTransitionStyles-Bhs6m7gR.js";import"./getPseudoElementBounds-BUU7Awzx.js";import"./chevron-down-5sopWHZC.js";import"./index-C0S21z2f.js";import"./error-CimK2De2.js";import"./BaseCbacBanner-BJtZEIgT.js";import"./makeExternalStore-cNeOPsE8.js";import"./Tooltip-DrCIXT4c.js";import"./PopoverPopup-CZdF7XOC.js";import"./debounce-CALuRR5X.js";import"./useOsdkClient-vyzs8V6e.js";import"./tick-DbzhA004.js";import"./DropdownField-Bm51UKRg.js";import"./isEqual-DR8RDtey.js";import"./withOsdkMetrics-XVg1B84_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
