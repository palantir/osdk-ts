import{j as i}from"./iframe-iUGaKF-g.js";import{O as p}from"./object-table-BeD6fwla.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlEPo3WA.js";import"./preload-helper-C5QJwAu5.js";import"./Table-C4RNDYAH.js";import"./index-biVvCra3.js";import"./Dialog-Bwv5xC9X.js";import"./cross-BFNp-6V_.js";import"./svgIconContainer-D9SYWNzR.js";import"./useBaseUiId-Bf0uFdSS.js";import"./InternalBackdrop-DdW_D627.js";import"./composite-BdFuHmfd.js";import"./index-CABXZzlk.js";import"./index-CoBHmv7L.js";import"./index-Cof45HYg.js";import"./useEventCallback-C5wssiyI.js";import"./SkeletonBar-rf2cqXI-.js";import"./LoadingCell-VJOGm1a0.js";import"./ColumnConfigDialog-CCPWvcTE.js";import"./DraggableList-BY7dHUoN.js";import"./search-Bn0ITWKa.js";import"./Input-ChMcCw-p.js";import"./useControlled-BHtZ5WxN.js";import"./Button-DOHDr1Yv.js";import"./small-cross-BBd4zvtL.js";import"./ActionButton-C7IaQGOT.js";import"./Checkbox-CQTlFCNu.js";import"./useValueChanged-BzjxvPA-.js";import"./CollapsiblePanel-BziHNyai.js";import"./MultiColumnSortDialog-D1Z559Ip.js";import"./MenuTrigger-BwLCZgAB.js";import"./CompositeItem-BJtdPIpL.js";import"./ToolbarRootContext-CsWu5MBg.js";import"./getDisabledMountTransitionStyles-C6suAbyK.js";import"./getPseudoElementBounds-D3JDCaRV.js";import"./chevron-down-D6OM1qR9.js";import"./index-DIFFZVPL.js";import"./error-BPV1DyS9.js";import"./BaseCbacBanner-LmEMDQ7B.js";import"./makeExternalStore-DYociY-T.js";import"./Tooltip-CQC9ZA-1.js";import"./PopoverPopup-CjX0FeDE.js";import"./debounce-JprLheFU.js";import"./useOsdkClient-cV4LfF2W.js";import"./tick-BKSCw9Ac.js";import"./DropdownField-C0bAgzFB.js";import"./isEqual-B7Me7IYR.js";import"./withOsdkMetrics-BvgX9Hqp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
