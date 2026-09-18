import{j as i}from"./iframe-DlB65lJW.js";import{O as p}from"./object-table-CcWD3WsP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DhUeGs5q.js";import"./preload-helper-DV_Jg5FM.js";import"./Table-DcDqojBO.js";import"./index-B8sBGRC5.js";import"./Dialog-DLhwrcm-.js";import"./cross-BYT-n1qT.js";import"./svgIconContainer-DE9YLrbK.js";import"./useBaseUiId-C0JAm9wS.js";import"./InternalBackdrop-SH1n7UWl.js";import"./composite-CUY2PD51.js";import"./index-Dk8pEk6M.js";import"./index-vvEU_kVM.js";import"./index-BvPZVp58.js";import"./useEventCallback-NsVuizNp.js";import"./SkeletonBar-DttNsmst.js";import"./LoadingCell-CCfFG6NQ.js";import"./ColumnConfigDialog-DYTKAZ8a.js";import"./DraggableList-Ci64cDF2.js";import"./search-DUnv4tIx.js";import"./Input-CXcuZUCe.js";import"./useControlled-CQNoni_g.js";import"./Button-C6hVNenO.js";import"./small-cross-QFgDRgyE.js";import"./ActionButton-CQcpOspk.js";import"./Checkbox-CgdfUSaF.js";import"./useValueChanged-C824U35_.js";import"./CollapsiblePanel-SDxq7GAZ.js";import"./MultiColumnSortDialog-msaLaZzx.js";import"./MenuTrigger-BT36bnMp.js";import"./CompositeItem-PpZ3j7ZS.js";import"./ToolbarRootContext-BDX936Z-.js";import"./getDisabledMountTransitionStyles-CDFfMpVr.js";import"./getPseudoElementBounds-PXmrM0eY.js";import"./chevron-down-BHTjgyZJ.js";import"./index-D-Hc9dUX.js";import"./error-DriOx_PR.js";import"./BaseCbacBanner-C5HWYNvi.js";import"./makeExternalStore-OTHtuU79.js";import"./Tooltip-D7WLW3WV.js";import"./PopoverPopup-BG_vJMqS.js";import"./debounce-N0tv_m3M.js";import"./useOsdkClient-Bw3TotSy.js";import"./tick-u8fu2QmD.js";import"./DropdownField-dOSM9Rw1.js";import"./isEqual-D9P5SRPk.js";import"./withOsdkMetrics-6eg3mxYV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
