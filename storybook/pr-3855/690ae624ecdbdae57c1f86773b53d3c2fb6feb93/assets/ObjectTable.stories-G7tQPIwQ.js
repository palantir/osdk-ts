import{j as i}from"./iframe-DmtH0n9a.js";import{O as p}from"./object-table-DSG3kUhS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CASFtvOK.js";import"./preload-helper-BVTRjjKw.js";import"./Table-DHAnAkAC.js";import"./index-BdFb3QwW.js";import"./Dialog-CkpOo05g.js";import"./cross-BCEjrsY6.js";import"./svgIconContainer-Pw6aLkay.js";import"./useBaseUiId-BBuvUIea.js";import"./InternalBackdrop-BwkCMvDX.js";import"./composite-BkzMbckt.js";import"./index-D5LxgD1e.js";import"./index-ChyY_H7T.js";import"./index-B1xGkMAT.js";import"./useEventCallback-Mg5l6TND.js";import"./SkeletonBar-DanhEJYD.js";import"./LoadingCell-bfoOoDnL.js";import"./ColumnConfigDialog-GmpwDDNL.js";import"./DraggableList-BsaXdUcd.js";import"./search-Dao56fJg.js";import"./Input-pGfNFQVP.js";import"./useControlled-CywIKAhB.js";import"./Button-B3WaeV_y.js";import"./small-cross-DMJDKcSR.js";import"./ActionButton-iSIRshBZ.js";import"./Checkbox-D38sos2N.js";import"./useValueChanged-BfNlh3cV.js";import"./CollapsiblePanel-Dj3mKq6F.js";import"./MultiColumnSortDialog-CU3kQ5VB.js";import"./MenuTrigger-Dr2dGFQr.js";import"./CompositeItem-BeRdWG_-.js";import"./ToolbarRootContext-BSo8gEvR.js";import"./getDisabledMountTransitionStyles-EmLAn1yb.js";import"./getPseudoElementBounds-BtDyGFcL.js";import"./chevron-down-Chw1fxBZ.js";import"./index-Dbxm_8DG.js";import"./error-CgFhqpwO.js";import"./BaseCbacBanner-CbMFrPLT.js";import"./makeExternalStore-Z-52Zdib.js";import"./Tooltip-CySQEz_z.js";import"./PopoverPopup-COnDHYtw.js";import"./toNumber-B5JyEZZZ.js";import"./useOsdkClient-zwEH2FqK.js";import"./tick-CJTjGk_1.js";import"./DropdownField-fSFBaBCr.js";import"./withOsdkMetrics-CY_Q9bgr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
