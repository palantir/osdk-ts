import{j as i}from"./iframe-CE_irqki.js";import{O as p}from"./object-table-BtpjRJ67.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B5q4rRIM.js";import"./preload-helper-B0wObQeK.js";import"./Table-C_YbgNlG.js";import"./index-CbZ4Cj79.js";import"./Dialog-fe6M2c65.js";import"./cross-CiDhEPuo.js";import"./svgIconContainer-co06VEp6.js";import"./useBaseUiId-Cuodx7xu.js";import"./InternalBackdrop-Dkqi7a0r.js";import"./composite-CCcrzfR2.js";import"./index-D0l0Hg2C.js";import"./index-C-NLbbDg.js";import"./index-_MWob-Zb.js";import"./useEventCallback-CUNobEcy.js";import"./SkeletonBar-BLmbpfxb.js";import"./LoadingCell-nunxEioL.js";import"./ColumnConfigDialog-AdaF-ihs.js";import"./DraggableList-DcFYfUSk.js";import"./search-BPF_4D3u.js";import"./Input-CQv_PU5A.js";import"./useControlled-BqInFAvQ.js";import"./Button-Do97WS9c.js";import"./small-cross-DBd0iCaF.js";import"./ActionButton-B_cFwAVF.js";import"./Checkbox-CJ-JBQSc.js";import"./useValueChanged-BA6THRKJ.js";import"./CollapsiblePanel-CzBB3n5y.js";import"./MultiColumnSortDialog-B-M_e88G.js";import"./MenuTrigger-CP0q2n0o.js";import"./CompositeItem-BnnmhO1F.js";import"./ToolbarRootContext-CDB_L_pZ.js";import"./getDisabledMountTransitionStyles-CYc6tB7S.js";import"./getPseudoElementBounds-QK10hLQz.js";import"./chevron-down-oqAS4iB6.js";import"./index-BrqtMSKB.js";import"./error-yF4FDunH.js";import"./BaseCbacBanner-D_xSicx0.js";import"./makeExternalStore-BFTnjumI.js";import"./Tooltip-C24crhHA.js";import"./PopoverPopup-BcZdQHxz.js";import"./debounce-CRdC3fBU.js";import"./useOsdkClient-DUBVzTuP.js";import"./tick-DeDyRDcO.js";import"./DropdownField-Cc5Zze2e.js";import"./isEqual-CY2x9raR.js";import"./withOsdkMetrics-TAUr-869.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
