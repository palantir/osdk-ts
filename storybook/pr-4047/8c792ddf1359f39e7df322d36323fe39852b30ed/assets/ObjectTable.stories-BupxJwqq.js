import{j as i}from"./iframe-BUf-CLqY.js";import{O as p}from"./object-table-Dyvh2IGr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BsckbAvr.js";import"./preload-helper-riapeqtP.js";import"./Table-CzS-rh25.js";import"./index-C_MybgQ3.js";import"./Dialog-lZrjoHin.js";import"./cross-CGc-Hcb9.js";import"./svgIconContainer-DU0Ye5dG.js";import"./useBaseUiId-gpzCx-rm.js";import"./InternalBackdrop-C5ZNKnCf.js";import"./composite-ByB7nSsB.js";import"./index-CrCMLvTm.js";import"./index-DvN6Rba3.js";import"./index-B3D2SnAc.js";import"./useEventCallback-BywkN-Ff.js";import"./SkeletonBar-DFo16lR0.js";import"./LoadingCell-CdUbXIXo.js";import"./ColumnConfigDialog-BxDZ3Dv6.js";import"./DraggableList-B4cd4Qb-.js";import"./search-pVr5xk4n.js";import"./Input-DnSUiNyS.js";import"./useControlled-DEV21H7B.js";import"./Button-cOSWZtuo.js";import"./small-cross-CSJnPQqY.js";import"./ActionButton-BBw0Te-_.js";import"./Checkbox-C46p_nfP.js";import"./useValueChanged-MJAskWLg.js";import"./CollapsiblePanel-UPRERRAW.js";import"./MultiColumnSortDialog-Cf13_Nd2.js";import"./MenuTrigger-x9K-Wus0.js";import"./CompositeItem-Cjz_Qy2T.js";import"./ToolbarRootContext-tqZMT8gQ.js";import"./getDisabledMountTransitionStyles-BCAFuXq1.js";import"./getPseudoElementBounds-DzYucCEu.js";import"./chevron-down-CRvVeW5r.js";import"./index-CD5GlWla.js";import"./error-CZVIneLk.js";import"./BaseCbacBanner-CmW41sxI.js";import"./makeExternalStore-BFB7Uams.js";import"./Tooltip-Cm_gslQX.js";import"./PopoverPopup-BlmOLchB.js";import"./debounce-B-iF24A7.js";import"./useOsdkClient-ctroE3hm.js";import"./tick-B2EggPvK.js";import"./DropdownField-Sb9cC2Wv.js";import"./isEqual-BL-FfRPo.js";import"./withOsdkMetrics-BtUVOcAG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
