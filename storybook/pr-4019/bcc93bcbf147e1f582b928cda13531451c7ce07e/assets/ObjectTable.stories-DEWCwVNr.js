import{j as i}from"./iframe-CbWKQTAd.js";import{O as p}from"./object-table-MR0jbZG5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dyjs_vV8.js";import"./preload-helper-BodAnLGY.js";import"./Table-CYjFiXE1.js";import"./index-tkyBrQAe.js";import"./Dialog-mAFF5Qnl.js";import"./cross-DgoT9wry.js";import"./svgIconContainer-DOikMtqk.js";import"./useBaseUiId-XRd770-U.js";import"./InternalBackdrop-aJh4Cj33.js";import"./composite-DcG51BnW.js";import"./index-CvOYyjqx.js";import"./index-B9_31cVf.js";import"./index-Bln6Sg35.js";import"./useEventCallback-0naykCU3.js";import"./SkeletonBar-DsGaioLv.js";import"./LoadingCell-Dx6PyYMV.js";import"./ColumnConfigDialog-BTsF37nb.js";import"./DraggableList-HQiyRzPU.js";import"./search-DGKjGcgN.js";import"./Input-DFzbl_7I.js";import"./useControlled-Lsl_hIqj.js";import"./Button-BKLVv1MD.js";import"./small-cross-BUr6qJjI.js";import"./ActionButton-DcAqfgCZ.js";import"./Checkbox-CfG5f4Qa.js";import"./useValueChanged-DvUqsBxA.js";import"./CollapsiblePanel-doEvfhG5.js";import"./MultiColumnSortDialog-By9Zwthb.js";import"./MenuTrigger-CLQngVNg.js";import"./CompositeItem-C2HqLZ_Z.js";import"./ToolbarRootContext-0YQDLW37.js";import"./getDisabledMountTransitionStyles-GXdrPdpy.js";import"./getPseudoElementBounds-B4n-FV3q.js";import"./chevron-down-eXF_jIno.js";import"./index-b_e1xyL7.js";import"./error-CW2P3uO4.js";import"./BaseCbacBanner-CGjwljHM.js";import"./makeExternalStore-DdKrBv4a.js";import"./Tooltip-d_DmM_MB.js";import"./PopoverPopup-Btctsiv_.js";import"./debounce-5-704DJU.js";import"./useOsdkClient-IqzxIclx.js";import"./tick-BitNuW6k.js";import"./DropdownField-BhWFFRno.js";import"./isEqual-D_hpX-EQ.js";import"./withOsdkMetrics-C5qCRIWi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
