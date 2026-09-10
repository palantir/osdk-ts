import{j as i}from"./iframe-B-80Mkm7.js";import{O as p}from"./object-table-BxqG_MJT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DXFj6uan.js";import"./preload-helper-CqWsSCnZ.js";import"./Table-C7bKg006.js";import"./index-AUifcsh0.js";import"./Dialog-BBuyV7h3.js";import"./cross-BVjH4vnv.js";import"./svgIconContainer-CCfq-fpw.js";import"./useBaseUiId-7EkOsbTl.js";import"./InternalBackdrop-Df9XtON3.js";import"./composite-BvjfwejW.js";import"./index-C1oNvpYj.js";import"./index-CdT_AVM0.js";import"./index-C18AT3O2.js";import"./useEventCallback-xTkopZf4.js";import"./SkeletonBar-BJMxpIod.js";import"./LoadingCell-BlgeOYUC.js";import"./ColumnConfigDialog-CyWZJtKj.js";import"./DraggableList-jsQL9QIH.js";import"./search-B3LLLRfT.js";import"./Input-DSreAQ9Z.js";import"./useControlled-BL4sDI8Q.js";import"./Button-BhiWz6E2.js";import"./small-cross-KsVnY-WY.js";import"./ActionButton-BLc6kuh0.js";import"./Checkbox-C2_wKFYL.js";import"./useValueChanged-iPInYZDI.js";import"./CollapsiblePanel-JpYsP8Zr.js";import"./MultiColumnSortDialog-Ddk-61Te.js";import"./MenuTrigger-BpyV9DBK.js";import"./CompositeItem-tArM5MUt.js";import"./ToolbarRootContext-C019PK9Y.js";import"./getDisabledMountTransitionStyles-7E1Dxexi.js";import"./getPseudoElementBounds-BJiS3phJ.js";import"./chevron-down-D6ZF1kx7.js";import"./index-Bh1jiVMQ.js";import"./error-D-y1nCx5.js";import"./BaseCbacBanner-iJcQHW_Y.js";import"./makeExternalStore-BgRq75tG.js";import"./Tooltip-j-8eocE7.js";import"./PopoverPopup-rPbNRW11.js";import"./debounce-BzHKeVby.js";import"./useOsdkClient-CqkTlt94.js";import"./tick-BEF_RXe7.js";import"./DropdownField-BkuadXbK.js";import"./isEqual-tN7XJasU.js";import"./withOsdkMetrics-B8oz1zlb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
