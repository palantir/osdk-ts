import{j as i}from"./iframe-CtbKcdah.js";import{O as p}from"./object-table-BcacSCN4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bdr2-qzf.js";import"./preload-helper-EU-ENyZQ.js";import"./Table-DDvi8H0_.js";import"./index-CwYTowdT.js";import"./Dialog-B9V_CHZo.js";import"./cross-DpOV5wae.js";import"./svgIconContainer-Cet6vu_r.js";import"./useBaseUiId-0bJN_qdd.js";import"./InternalBackdrop-DchFpK7_.js";import"./composite-BHhkxlsM.js";import"./index-DZQwww7d.js";import"./index-fOPXI3EL.js";import"./index-BrPDDtPb.js";import"./useEventCallback-DH2mBgYy.js";import"./SkeletonBar-DgWwIArl.js";import"./LoadingCell-DexMxGnO.js";import"./ColumnConfigDialog-CE99YesT.js";import"./DraggableList-DQiUbEHW.js";import"./search-BwzKNgs0.js";import"./Input-JG5cgvZN.js";import"./useControlled-BcslQkqc.js";import"./Button-B-vHHAok.js";import"./small-cross-BIpZh2I9.js";import"./ActionButton-BMI6qLuN.js";import"./Checkbox-DzgQD_l6.js";import"./useValueChanged-C9bAZlcS.js";import"./CollapsiblePanel-BmBuCIHD.js";import"./MultiColumnSortDialog-DoC4d9gu.js";import"./MenuTrigger-DXL8cJrO.js";import"./CompositeItem-lZSk-3LJ.js";import"./ToolbarRootContext-1H0rLmo4.js";import"./getDisabledMountTransitionStyles-Bx8H60NU.js";import"./getPseudoElementBounds-BU-GKez8.js";import"./chevron-down-DBDRq4_M.js";import"./index-ePGgCjvy.js";import"./error-D69Vfmfe.js";import"./BaseCbacBanner-CXbIB7CA.js";import"./makeExternalStore-QdIdUwH6.js";import"./Tooltip-i8kW-oFE.js";import"./PopoverPopup-B4NW6jDW.js";import"./debounce-5R1Uvz-P.js";import"./useOsdkClient-DtvN553N.js";import"./tick-BOLhtKSX.js";import"./DropdownField-B8IW1RM3.js";import"./isEqual-DxGVR0hC.js";import"./withOsdkMetrics-BjcrUEVS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
