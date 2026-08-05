import{j as i}from"./iframe-BIOsg0yg.js";import{O as p}from"./object-table-Bv-jTr_6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCKLvYoJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CEluti9g.js";import"./index-CXxxffKM.js";import"./Dialog-B14iocFB.js";import"./cross-DXVZ1txE.js";import"./svgIconContainer-BkHCNiNP.js";import"./useBaseUiId-CI5brcwC.js";import"./InternalBackdrop-tMJHepsy.js";import"./composite-Bzv73STo.js";import"./index-CTJttYim.js";import"./index-CicBu4pP.js";import"./index-PWGOaitX.js";import"./useEventCallback-DygnA5iv.js";import"./SkeletonBar-DKoFIIb5.js";import"./LoadingCell-e2dh2zV9.js";import"./ColumnConfigDialog-D1hHquyD.js";import"./DraggableList-BVMTt1Ma.js";import"./search-S6CNfqFw.js";import"./Input-C75g0i0Z.js";import"./useControlled-Ceujs-Sz.js";import"./isEqual-BDKoeOYt.js";import"./isObject-CKvn21No.js";import"./Button-CFF0wQHv.js";import"./ActionButton-CLLtbvgw.js";import"./Checkbox-3zRR2de6.js";import"./useValueChanged-DaddYqnH.js";import"./CollapsiblePanel-Biheurcv.js";import"./MultiColumnSortDialog-CWRCALSD.js";import"./MenuTrigger-BU_2xml7.js";import"./CompositeItem-Bmfg2MMt.js";import"./ToolbarRootContext-flI5qLGO.js";import"./getDisabledMountTransitionStyles-C3hhUMKD.js";import"./getPseudoElementBounds-BJvsxubx.js";import"./chevron-down-CW-QNXU8.js";import"./index-CH801GQX.js";import"./error-D8basjnA.js";import"./BaseCbacBanner-qT2RssNH.js";import"./makeExternalStore-2uOet4Ks.js";import"./Tooltip-BvO_g_qF.js";import"./PopoverPopup-Cm3NRji8.js";import"./toNumber-D-g99z2N.js";import"./useOsdkClient-BOBaZiLo.js";import"./tick-CfihsH4S.js";import"./DropdownField-CNA8fbtF.js";import"./withOsdkMetrics-l02yUZn_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
