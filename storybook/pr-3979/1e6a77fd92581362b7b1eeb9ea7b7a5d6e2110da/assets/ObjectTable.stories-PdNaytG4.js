import{j as i}from"./iframe-E5iWaRrU.js";import{O as p}from"./object-table-DYYLM9YB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B6ZompfC.js";import"./preload-helper-Dqk_s4rt.js";import"./Table-SRHZ8Wnm.js";import"./index-C3_SZq7Z.js";import"./Dialog-CPf2pgV9.js";import"./cross-JL-akl7t.js";import"./svgIconContainer-DEuUBUqq.js";import"./useBaseUiId-D4npvdT-.js";import"./InternalBackdrop-DDD6NSDl.js";import"./composite-Bz9wP40Z.js";import"./index-DceoitFi.js";import"./index-BbXCDRNC.js";import"./index-D75HgB7Y.js";import"./useEventCallback-CyXvLOTQ.js";import"./SkeletonBar-YbzI2HU-.js";import"./LoadingCell-CZW3NZst.js";import"./ColumnConfigDialog-C84EhSb0.js";import"./DraggableList-Dzp4AhOv.js";import"./search-ChBTd86p.js";import"./Input-C3CP2H26.js";import"./useControlled-Df4M33J1.js";import"./Button-Cat6_J_5.js";import"./small-cross-WUKc4wzh.js";import"./ActionButton-CxLb80et.js";import"./Checkbox-Dyq6vKsd.js";import"./useValueChanged-EVQifgYs.js";import"./CollapsiblePanel-BrkpisiN.js";import"./MultiColumnSortDialog-DT7WuJBk.js";import"./MenuTrigger-Bi3Tv-Yx.js";import"./CompositeItem-DMa2K3iN.js";import"./ToolbarRootContext-CBnKcEyp.js";import"./getDisabledMountTransitionStyles-yQAdsL-J.js";import"./getPseudoElementBounds-CQAue5bo.js";import"./chevron-down-BkyonfV4.js";import"./index-DSBMRtFR.js";import"./error-DXOYczi7.js";import"./BaseCbacBanner-BKWsBk-N.js";import"./makeExternalStore-HEA345T9.js";import"./Tooltip-BMHXT91H.js";import"./PopoverPopup-CPj_RJ75.js";import"./debounce-B9bcrHjS.js";import"./useOsdkClient-CYVurRKB.js";import"./tick-BpTe-h6v.js";import"./DropdownField-Cjcq2217.js";import"./isEqual-DrYLE_W0.js";import"./withOsdkMetrics-h-AdLa11.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
