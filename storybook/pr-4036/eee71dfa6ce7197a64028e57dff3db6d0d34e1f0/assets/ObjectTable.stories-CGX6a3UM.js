import{j as i}from"./iframe-DALIkhit.js";import{O as p}from"./object-table-BhKt55cA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_uEodtq.js";import"./preload-helper-DctxGWdw.js";import"./Table-DtcDSPkw.js";import"./index-CRXXRxj8.js";import"./Dialog-B_RuCNwj.js";import"./cross-Lsk0KBg0.js";import"./svgIconContainer-spB4tjSy.js";import"./useBaseUiId-DYLAsVU1.js";import"./InternalBackdrop-aOf-2TsU.js";import"./composite-DNV43Yqw.js";import"./index-CoXaz5Dw.js";import"./index-OZ6WyzDP.js";import"./index-B4ELnjW2.js";import"./useEventCallback-DYhKCTqd.js";import"./SkeletonBar-DxPKDsZj.js";import"./LoadingCell-DexgFDI-.js";import"./ColumnConfigDialog-BcrcIj4z.js";import"./DraggableList-CN1TXGvD.js";import"./search-DGhvTCsG.js";import"./Input-lOkk4Did.js";import"./useControlled-D3lOoo5c.js";import"./Button-BsqgxFa7.js";import"./small-cross-C0Cw1tJu.js";import"./ActionButton-BxyaPNEd.js";import"./Checkbox-DMRQwsZt.js";import"./useValueChanged-ybVWH_rP.js";import"./CollapsiblePanel-C4equoJ3.js";import"./MultiColumnSortDialog-BWhsqyAr.js";import"./MenuTrigger-CX1MgxOd.js";import"./CompositeItem-jTsd3S2E.js";import"./ToolbarRootContext-C8BMIZR-.js";import"./getDisabledMountTransitionStyles-BGaY7OxB.js";import"./getPseudoElementBounds-ORsAqzKa.js";import"./chevron-down-CAkJr31e.js";import"./index-C_CgxuxZ.js";import"./error-D7k6AgT2.js";import"./BaseCbacBanner-DJyF9NAx.js";import"./makeExternalStore-ByjGMN0z.js";import"./Tooltip-C28mGjrB.js";import"./PopoverPopup-BB9pf0-g.js";import"./debounce-DBBvjiY6.js";import"./useOsdkClient-DRA9qEhw.js";import"./tick-DF-H6RV9.js";import"./DropdownField-DRTmVUHk.js";import"./isEqual-6UGvStcv.js";import"./withOsdkMetrics-YLhbsdmr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
