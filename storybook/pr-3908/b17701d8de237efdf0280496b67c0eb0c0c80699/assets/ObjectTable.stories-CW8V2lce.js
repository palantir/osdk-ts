import{j as i}from"./iframe-BD-LWr1p.js";import{O as p}from"./object-table-CJFF8n9s.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D-efkc52.js";import"./preload-helper-dmgTD7Sy.js";import"./Table-DptuV1pu.js";import"./index-C4WNdzjX.js";import"./Dialog-BAiinTZl.js";import"./cross-ek8KuXfH.js";import"./svgIconContainer-CIg5fwF3.js";import"./useBaseUiId-wrsAqB_t.js";import"./InternalBackdrop-ajo3Ljj6.js";import"./composite-BuDBmEPr.js";import"./index-YTdZ8qtU.js";import"./index-DrMY-03p.js";import"./index-AdOgxmTZ.js";import"./useEventCallback-PxF8Exlt.js";import"./SkeletonBar-B5Pg2PMT.js";import"./LoadingCell-9De3Hx9v.js";import"./ColumnConfigDialog-D9RYQvmN.js";import"./DraggableList-54NtNGRb.js";import"./search-Cesj0Sn1.js";import"./Input-H0p-Kdle.js";import"./useControlled-S-BenCcy.js";import"./Button-DYW0znBH.js";import"./small-cross-BGYlQIQ0.js";import"./ActionButton-CGAk7BMh.js";import"./Checkbox-DXkgkmDI.js";import"./useValueChanged-DhWzb1ZN.js";import"./CollapsiblePanel-D1v8TPV_.js";import"./MultiColumnSortDialog-CTz5B5Bi.js";import"./MenuTrigger-Dre0mHpq.js";import"./CompositeItem-BT4SOs7q.js";import"./ToolbarRootContext-W9Cyg5bT.js";import"./getDisabledMountTransitionStyles-DfzQBBqR.js";import"./getPseudoElementBounds-CWc-7ein.js";import"./chevron-down-DZyBBtLC.js";import"./index-qpSIk4b9.js";import"./error-CGXE3NEO.js";import"./BaseCbacBanner-ZvEz-m-p.js";import"./makeExternalStore-BglmpTlj.js";import"./Tooltip-FW4vRfEH.js";import"./PopoverPopup-BnuLOZmM.js";import"./debounce-BACFrRsD.js";import"./useOsdkClient-CN3BmlPj.js";import"./tick-CxY1HILU.js";import"./DropdownField-CtG7SSoj.js";import"./isEqual-BpoUtECJ.js";import"./withOsdkMetrics-CbPUGjlt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
