import{j as i}from"./iframe-DpbVK0Z4.js";import{O as p}from"./object-table-D_55a_1X.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Det4WOIm.js";import"./preload-helper-BMTjOH4m.js";import"./Table-kq4CpFSp.js";import"./index-FV6PMg5w.js";import"./Dialog-HKso5UO8.js";import"./cross-CfOksEOQ.js";import"./svgIconContainer-BopSq90e.js";import"./useBaseUiId-DPGPywgp.js";import"./InternalBackdrop-BkpFCSNm.js";import"./composite-B3hTwjvJ.js";import"./index-CtCwm9A8.js";import"./index-DjzWs5sw.js";import"./index-Bxy7ANPj.js";import"./useEventCallback-CELKL3T2.js";import"./SkeletonBar-BebtoPD2.js";import"./LoadingCell-DGTzDvme.js";import"./ColumnConfigDialog-5LfAslvW.js";import"./DraggableList-Bh-ur1kT.js";import"./search-Bpcgz7ed.js";import"./Input-AjQ1LbFX.js";import"./useControlled-C8mfwfwA.js";import"./Button-DXRDup3v.js";import"./small-cross-Bd3WaBs1.js";import"./ActionButton-B-neCEMC.js";import"./Checkbox-BfHeZkor.js";import"./useValueChanged-DgVW91ai.js";import"./CollapsiblePanel-DPTDjISk.js";import"./MultiColumnSortDialog-BP7j-gF2.js";import"./MenuTrigger-DPV4rvDp.js";import"./CompositeItem-7xXFyPB2.js";import"./ToolbarRootContext-EQtWNPb0.js";import"./getDisabledMountTransitionStyles-yPHluku3.js";import"./getPseudoElementBounds-0wL7ed4r.js";import"./chevron-down-BPIZ_aJd.js";import"./index-DFzod05J.js";import"./error-Ddzskxi-.js";import"./BaseCbacBanner-DzidXmNq.js";import"./makeExternalStore-hBeqTILr.js";import"./Tooltip-CsGpMJrz.js";import"./PopoverPopup-BKIXB1bp.js";import"./debounce-D12j_pu2.js";import"./useOsdkClient-BbUmDnru.js";import"./tick-L9ql_aPl.js";import"./DropdownField-BbOufXCH.js";import"./isEqual-CUNBvXsF.js";import"./withOsdkMetrics-CogiPj_o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
