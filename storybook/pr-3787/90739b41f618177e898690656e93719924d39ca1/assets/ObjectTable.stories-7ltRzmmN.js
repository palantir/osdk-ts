import{j as i}from"./iframe-BzWIB64s.js";import{O as p}from"./object-table-DhfCjMZa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BrqKxy0V.js";import"./preload-helper-rFyywtxe.js";import"./Table-4uZ9_6Ne.js";import"./index-DfNwDZkB.js";import"./Dialog-DWNafTlc.js";import"./cross-Ckuh3sxL.js";import"./svgIconContainer-CqmqwQ_y.js";import"./useBaseUiId-CxW8wnCT.js";import"./InternalBackdrop-DGQzj-kD.js";import"./composite-CAPd73HO.js";import"./index-OSq7gO3K.js";import"./index-CSOQLHLc.js";import"./index-CicY2RuE.js";import"./useEventCallback-P1ZgnZOE.js";import"./SkeletonBar-bYTd4rJZ.js";import"./LoadingCell-Dq6XtdVW.js";import"./ColumnConfigDialog-Dme3oykV.js";import"./DraggableList-CZAZg46n.js";import"./search-BwW8B6vN.js";import"./Input-jzz_WLdV.js";import"./useControlled-BurtOwE_.js";import"./isEqual-CI8dWNwP.js";import"./isObject-Cqjoz7ZR.js";import"./Button-D-HHsrb0.js";import"./ActionButton-BOXurmj1.js";import"./Checkbox-DlkLdICv.js";import"./useValueChanged-BExBI2qc.js";import"./CollapsiblePanel-C_abRnbI.js";import"./MultiColumnSortDialog-Ci4Tj2Gu.js";import"./MenuTrigger-BUuYNFK-.js";import"./CompositeItem-Cko4FjAL.js";import"./ToolbarRootContext-BvYqQjl4.js";import"./getDisabledMountTransitionStyles-n0VH86Np.js";import"./getPseudoElementBounds-CycmnbqW.js";import"./chevron-down-OVbf4Oys.js";import"./index-hj2OXCFm.js";import"./error-BOU7Ocpj.js";import"./BaseCbacBanner-Q96kxK1u.js";import"./makeExternalStore-CND2K_mN.js";import"./Tooltip-Cx8rylOT.js";import"./PopoverPopup-B11pUap8.js";import"./toNumber-CNhbAXun.js";import"./useOsdkClient-PaKg2no4.js";import"./tick-CB79yduw.js";import"./DropdownField-Dd008IEL.js";import"./withOsdkMetrics-DLIsJJkp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
