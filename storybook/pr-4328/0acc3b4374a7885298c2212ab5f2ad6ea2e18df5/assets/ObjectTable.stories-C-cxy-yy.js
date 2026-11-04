import{j as i}from"./iframe-DhySATRv.js";import{O as p}from"./object-table-Dg9P2Yk8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CnDXz4eK.js";import"./preload-helper-QnXVdlsZ.js";import"./Table-t5xUN4F0.js";import"./index-By0zFJXy.js";import"./Dialog-C9NeFGTs.js";import"./cross-dxd-Id56.js";import"./svgIconContainer-DPn7rviW.js";import"./useBaseUiId-CczNNmwY.js";import"./InternalBackdrop-CxgZaxwU.js";import"./composite-B7Q8k8Y1.js";import"./index-B5HI7DFW.js";import"./index-HQYJE3H_.js";import"./index-DxlsOiTd.js";import"./useEventCallback-DopCgfn9.js";import"./SkeletonBar-BpKKsUbf.js";import"./LoadingCell-D4H1GvHL.js";import"./ColumnConfigDialog-TpCke5_n.js";import"./DraggableList-Dietnrk6.js";import"./search-3iLspLPL.js";import"./Input-BQwljXsc.js";import"./useControlled-C3JFQqTN.js";import"./Button-BnJ18iND.js";import"./small-cross-CMpAYwo5.js";import"./ActionButton-DQQo_XtV.js";import"./Checkbox-CW7GlZ7a.js";import"./useValueChanged-Ct8XmU90.js";import"./CollapsiblePanel-Ddch5XBZ.js";import"./MultiColumnSortDialog-CGMuYggC.js";import"./MenuTrigger-dr45N3ay.js";import"./CompositeItem-CfgwqBcM.js";import"./ToolbarRootContext-COgLrlEX.js";import"./getDisabledMountTransitionStyles-PwdtwQyf.js";import"./getPseudoElementBounds-Csujpg1_.js";import"./chevron-down-dCWUIGnY.js";import"./index-C3T_yKoM.js";import"./error-DzMg1FzE.js";import"./BaseCbacBanner-BOiizU5d.js";import"./makeExternalStore-CM9PbEJi.js";import"./Tooltip-bRJHJ7Na.js";import"./PopoverPopup-BgCnKoSq.js";import"./debounce-DycsTy32.js";import"./useOsdkClient-pvjD5f0f.js";import"./tick-CP0_BxF4.js";import"./DropdownField-CUm8Lr1l.js";import"./isEqual-CdMQL4gS.js";import"./withOsdkMetrics-B8-SwDYi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
