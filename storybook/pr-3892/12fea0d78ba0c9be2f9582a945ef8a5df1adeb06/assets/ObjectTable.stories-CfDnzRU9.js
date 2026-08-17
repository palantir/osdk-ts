import{j as i}from"./iframe-B6vHMBGp.js";import{O as p}from"./object-table-hplHVgdX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ca3goo8N.js";import"./preload-helper-Cp58PBL8.js";import"./Table-Cbkm2869.js";import"./index-CJzsmVv3.js";import"./Dialog-DO1kXGDu.js";import"./cross-9x5JmZ4A.js";import"./svgIconContainer-wg0Lc9CR.js";import"./useBaseUiId-h3pAp7nr.js";import"./InternalBackdrop-CCFcfiJW.js";import"./composite-DWtkffoP.js";import"./index-CujXwWwq.js";import"./index-i--ASWRG.js";import"./index-CT_nyNsS.js";import"./useEventCallback-B4FnW4FK.js";import"./SkeletonBar-D9zmYxM0.js";import"./LoadingCell-BrDuqTHC.js";import"./ColumnConfigDialog-CTMC6TNx.js";import"./DraggableList-B-bZaqE6.js";import"./search-DfKXJtDr.js";import"./Input-B7KllzPA.js";import"./useControlled-BVsysqHb.js";import"./Button-DGAYYgZ-.js";import"./small-cross-cIP7Vben.js";import"./ActionButton-C1eM3Km_.js";import"./Checkbox-wr-Xfc3W.js";import"./useValueChanged-BjmzSrQM.js";import"./CollapsiblePanel-DyJhoXcY.js";import"./MultiColumnSortDialog-Cx1QNkZS.js";import"./MenuTrigger-D1Xe-7_v.js";import"./CompositeItem-DDQHWJ0b.js";import"./ToolbarRootContext-7AQ420yY.js";import"./getDisabledMountTransitionStyles-sssYHGVb.js";import"./getPseudoElementBounds-Dsjz6vCL.js";import"./chevron-down-6pFsTB_r.js";import"./index-CzbMhBIL.js";import"./error-BqGkptHP.js";import"./BaseCbacBanner-Cc4gB5EG.js";import"./makeExternalStore-Blbdey5m.js";import"./Tooltip-tywS1TT8.js";import"./PopoverPopup-TsRJnCd_.js";import"./debounce-DW_YRCCu.js";import"./useOsdkClient-BpgI32Ud.js";import"./tick-CoPn3U77.js";import"./DropdownField-DpvuVLRh.js";import"./isEqual-BwEsvaE9.js";import"./withOsdkMetrics-CL6kHg8G.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
