import{j as i}from"./iframe-Y5vGGcvP.js";import{O as p}from"./object-table-Blzm30lw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtBEKKSh.js";import"./preload-helper-BDwImvib.js";import"./Table-BvILrCt9.js";import"./index-BTH20MTv.js";import"./Dialog-DmPDYfFl.js";import"./cross-C6XfWSCb.js";import"./svgIconContainer-BIHKAVWB.js";import"./useBaseUiId-RL85XbnS.js";import"./InternalBackdrop-3iFgptId.js";import"./composite-DfEzUBGr.js";import"./index-BF11wRFE.js";import"./index-BqEmZbFH.js";import"./index-Dieu7sw2.js";import"./useEventCallback-BrJrk-oU.js";import"./SkeletonBar-B2IEnFw2.js";import"./LoadingCell-Dwh9mj4m.js";import"./ColumnConfigDialog-CAwjWoDJ.js";import"./DraggableList-CayGgjyU.js";import"./search-DfUtBVkM.js";import"./Input-Dw8vFEHs.js";import"./useControlled-jE3VG63K.js";import"./Button--cxRM2vq.js";import"./small-cross-CVI-wDtt.js";import"./ActionButton-D3iVYvw7.js";import"./Checkbox-DKAF5YFj.js";import"./useValueChanged-Ds6t04CB.js";import"./CollapsiblePanel-BSjexsrO.js";import"./MultiColumnSortDialog-hwh-vYqB.js";import"./MenuTrigger-BmbiLkn9.js";import"./CompositeItem-1PZRLRt5.js";import"./ToolbarRootContext-BC-Ed_Oq.js";import"./getDisabledMountTransitionStyles-DCTtkVay.js";import"./getPseudoElementBounds-BFGt4T59.js";import"./chevron-down-mTWE-r4G.js";import"./index-CNA7S_DK.js";import"./error-DU3E2pjz.js";import"./BaseCbacBanner-n-Zbrh0L.js";import"./makeExternalStore-CH64p8Fa.js";import"./Tooltip-eBcGmQzJ.js";import"./PopoverPopup-DqmMzuaX.js";import"./debounce-DOiQ_IlB.js";import"./useOsdkClient-s9zf-Ja3.js";import"./tick-B3ZeEauG.js";import"./DropdownField-BYVuO4wd.js";import"./isEqual-Cqi6FdsA.js";import"./withOsdkMetrics-CAQdN2b1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
