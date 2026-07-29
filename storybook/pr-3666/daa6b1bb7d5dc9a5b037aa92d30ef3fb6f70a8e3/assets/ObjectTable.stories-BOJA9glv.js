import{j as i}from"./iframe-qUoJ8bD1.js";import{O as p}from"./object-table-C32Rb_v3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CpkOjadt.js";import"./preload-helper-ol3ztxLZ.js";import"./Table-DRuLsJ_W.js";import"./index-vMykFoz6.js";import"./Dialog-Qn8cLgI0.js";import"./cross-Cb35bm_z.js";import"./svgIconContainer-BFdHToqX.js";import"./useBaseUiId-DfL4ZZ8P.js";import"./InternalBackdrop-Cy_T0_FE.js";import"./composite-tj8owiCg.js";import"./index-DP_UhRTF.js";import"./index-Cz64Jyqa.js";import"./index-CB8C7-cG.js";import"./useEventCallback-DyvP_A81.js";import"./SkeletonBar-B4W7I0T9.js";import"./LoadingCell-C15wAKb0.js";import"./ColumnConfigDialog-BYKxoyE9.js";import"./DraggableList-DoSjLXZ2.js";import"./search-tL4GtzWj.js";import"./Input-CvSd3bUP.js";import"./useControlled-FmFohdHO.js";import"./isEqual-B_BmCAxf.js";import"./isObject-Dq2guUP7.js";import"./Button-DKNtfJMf.js";import"./ActionButton-CzoT9_MD.js";import"./Checkbox-MV4Nduzg.js";import"./useValueChanged-B3K31CFr.js";import"./CollapsiblePanel-Dkg1AscN.js";import"./MultiColumnSortDialog-DQTHxNJz.js";import"./MenuTrigger-2erLp3kW.js";import"./CompositeItem-BQsHw04j.js";import"./ToolbarRootContext-B_pSOxlb.js";import"./getDisabledMountTransitionStyles-CAcIXuef.js";import"./getPseudoElementBounds-BjRM6Xgm.js";import"./chevron-down-CMcKK_Lk.js";import"./index-SLkx8Rlc.js";import"./error-CbX-Ektr.js";import"./BaseCbacBanner-DQSGrcdr.js";import"./makeExternalStore-Os8YTNFV.js";import"./Tooltip-DpDnM_U4.js";import"./PopoverPopup-BMhFJB_0.js";import"./toNumber-6Rdthf3C.js";import"./useOsdkClient-BZmE3ry2.js";import"./tick-y6xP0Rva.js";import"./DropdownField-CqolFLg9.js";import"./withOsdkMetrics-DxfUN9ge.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
