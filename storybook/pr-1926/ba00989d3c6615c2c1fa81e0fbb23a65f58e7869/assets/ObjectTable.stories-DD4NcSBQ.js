import{j as i}from"./iframe-B0U1IQX4.js";import{O as p}from"./object-table-DU-i9Wwo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cu1V9s7L.js";import"./preload-helper-DiPVcWmm.js";import"./Table-DSvTXIVi.js";import"./index-D1KZRywE.js";import"./Dialog-C-t3ZORO.js";import"./cross-DuFcQq4i.js";import"./svgIconContainer-C5UOcoAR.js";import"./useBaseUiId-BYy3PLTZ.js";import"./InternalBackdrop-CR_tzpk3.js";import"./composite-CsiVeWul.js";import"./index-D9gCwCdH.js";import"./index-BCAnJ-ng.js";import"./index-cymf7Sk-.js";import"./useEventCallback-psrziwfU.js";import"./SkeletonBar-DG8DA1lc.js";import"./LoadingCell-DMH3wxy0.js";import"./ColumnConfigDialog-CAmdKZOw.js";import"./DraggableList-DIROkhvc.js";import"./search-TA6KQkXz.js";import"./Input-DxzIDyUo.js";import"./useControlled-CRRNdgyj.js";import"./Button-xPZvVWHf.js";import"./small-cross-BpMsA5cq.js";import"./ActionButton-0i0W7jAV.js";import"./Checkbox--a3P63C2.js";import"./useValueChanged-DjbPPhzb.js";import"./CollapsiblePanel-CDvcpi1D.js";import"./MultiColumnSortDialog-knebl6ML.js";import"./MenuTrigger-fTPJ_Gc5.js";import"./CompositeItem-DHef4_L4.js";import"./ToolbarRootContext-CcCkr_bi.js";import"./getDisabledMountTransitionStyles-B-Kz2nRd.js";import"./getPseudoElementBounds-CGPWBcaM.js";import"./chevron-down-DeePtBa4.js";import"./index-DF7Hoa49.js";import"./error-jOboOslV.js";import"./BaseCbacBanner-D30NdAjZ.js";import"./makeExternalStore-f14_qRGB.js";import"./Tooltip-B8U1i2GM.js";import"./PopoverPopup-CZIoD0Rp.js";import"./debounce-Cx5RzNC6.js";import"./useOsdkClient-B7fDZnt9.js";import"./tick-C4uqHxqI.js";import"./DropdownField-B4i07c_b.js";import"./isEqual-Ck562tyb.js";import"./withOsdkMetrics-CSt3jXAU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
