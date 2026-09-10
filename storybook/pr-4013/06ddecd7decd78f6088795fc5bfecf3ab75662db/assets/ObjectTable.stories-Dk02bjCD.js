import{j as i}from"./iframe-mrGpuMKA.js";import{O as p}from"./object-table-BiIiKzx_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlaBTj_t.js";import"./preload-helper-bDWJHmtM.js";import"./Table-DqGvWfmy.js";import"./index-hISY08zN.js";import"./Dialog-DpVboJif.js";import"./cross-DPMi-K_N.js";import"./svgIconContainer-C-bY0sdP.js";import"./useBaseUiId-BkHLkay-.js";import"./InternalBackdrop-U3rubu2u.js";import"./composite-7erdXABz.js";import"./index-DMu33fvM.js";import"./index-Bqma_fPL.js";import"./index-DYAfevna.js";import"./useEventCallback-BPIHKofH.js";import"./SkeletonBar-DwNj8MYg.js";import"./LoadingCell-DrzDyWTO.js";import"./ColumnConfigDialog-DgOQeC4G.js";import"./DraggableList-D745B4C7.js";import"./search-Yrs_12vc.js";import"./Input-B84oc61c.js";import"./useControlled-Dq35lwdk.js";import"./Button-CQDVf8SZ.js";import"./small-cross-BiLUn5X_.js";import"./ActionButton-BM4rNAaR.js";import"./Checkbox-Bk7WJIlt.js";import"./useValueChanged-BZtpoNnx.js";import"./CollapsiblePanel-DDMWJLSE.js";import"./MultiColumnSortDialog-DNOtZGzF.js";import"./MenuTrigger-BQThW244.js";import"./CompositeItem-DUJu_nDn.js";import"./ToolbarRootContext-C5hM_2Bp.js";import"./getDisabledMountTransitionStyles-X6_-V5uQ.js";import"./getPseudoElementBounds-C8xxQ8d5.js";import"./chevron-down-CoivH60m.js";import"./index-OuRiGyxD.js";import"./error-DssOxS7p.js";import"./BaseCbacBanner-dJKflXBI.js";import"./makeExternalStore-Dc6_6-hA.js";import"./Tooltip-C8kXdT26.js";import"./PopoverPopup-QRxeem_z.js";import"./debounce-BKwdeDHg.js";import"./useOsdkClient-D4Z99yZb.js";import"./tick-BcvMJ5PG.js";import"./DropdownField-BqkHAkPF.js";import"./isEqual-D-2vVEF9.js";import"./withOsdkMetrics-MvJWQIwU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
