import{j as i}from"./iframe-DXehzrLy.js";import{O as p}from"./object-table-eq6MmzNO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DIWdoci1.js";import"./preload-helper-kK_P88Zt.js";import"./Table-BrjIQUiH.js";import"./index-CXAIDCBV.js";import"./Dialog-DSREPINS.js";import"./cross-CRuTMTSr.js";import"./svgIconContainer-DQDL5XU9.js";import"./useBaseUiId-DZnCUGwj.js";import"./InternalBackdrop-CT6Wdma2.js";import"./composite-DYr_GRHn.js";import"./index-D0HNivTS.js";import"./index-BZAJEyr8.js";import"./index-Dnoineba.js";import"./useEventCallback-CZG_LILO.js";import"./SkeletonBar-DJmf5vx2.js";import"./LoadingCell-B_gs1veW.js";import"./ColumnConfigDialog-BY_QY2kY.js";import"./DraggableList-DzeBMc9N.js";import"./search-DeuEp5ow.js";import"./Input-CpfpiQM-.js";import"./useControlled-Dzo11YgF.js";import"./Button-arOEvFAs.js";import"./small-cross-VrEzkJ3d.js";import"./ActionButton-t4tgv0qW.js";import"./Checkbox-Dkrna0kS.js";import"./useValueChanged-CFb9BlJL.js";import"./CollapsiblePanel-Cc67GzP9.js";import"./MultiColumnSortDialog-wPam3DYq.js";import"./MenuTrigger-Cs-Esf_B.js";import"./CompositeItem-B8unsUL4.js";import"./ToolbarRootContext-CjkOTyMm.js";import"./getDisabledMountTransitionStyles-DTMwFgZF.js";import"./getPseudoElementBounds-CdE3xhre.js";import"./chevron-down-D0FRwBSH.js";import"./index-19DjQapZ.js";import"./error-DuLOR7GK.js";import"./BaseCbacBanner-CZebZxFt.js";import"./makeExternalStore-CXnsRNRI.js";import"./Tooltip-D3vpqYyy.js";import"./PopoverPopup-BMj9dgf7.js";import"./debounce-Bq9WTc_K.js";import"./useOsdkClient-DcXtZI_6.js";import"./tick-D67MiW11.js";import"./DropdownField-CNXn3QuQ.js";import"./isEqual-D-xvKB5X.js";import"./withOsdkMetrics-CA3oK6ip.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
