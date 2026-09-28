import{j as i}from"./iframe-DeJWYCn1.js";import{O as p}from"./object-table-DWE2VEpf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DxZ1JiHs.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DnOMAeVk.js";import"./index-B5Yva2Xc.js";import"./Dialog-BIJb_fD_.js";import"./cross-BHBLhOoQ.js";import"./svgIconContainer-D4OdXIbd.js";import"./useBaseUiId-DhBsrvdy.js";import"./InternalBackdrop-BJau4LqI.js";import"./composite-q4pLTQsX.js";import"./index-B6JIIbmg.js";import"./index-Bkdv8Oep.js";import"./index-Ccr_Oqxn.js";import"./useEventCallback-DdrNhhpd.js";import"./SkeletonBar-BwPzkscq.js";import"./LoadingCell-BVl8AVkF.js";import"./ColumnConfigDialog-dYRefZ2m.js";import"./DraggableList-BEs5_1MY.js";import"./search-ymO1htD2.js";import"./Input-ChnYFThm.js";import"./useControlled-DyW4-M2H.js";import"./Button-BTjXEyn6.js";import"./small-cross-CfWYRnkb.js";import"./ActionButton-DPXABoY3.js";import"./Checkbox-ByzxnXye.js";import"./useValueChanged-B2CAJ-lq.js";import"./CollapsiblePanel-BMKqCEZr.js";import"./MultiColumnSortDialog-B5PSdxf2.js";import"./MenuTrigger-DP6Vl1V5.js";import"./CompositeItem-BhfhJAmc.js";import"./ToolbarRootContext-Bw_XS67E.js";import"./getDisabledMountTransitionStyles-xtYaaI8G.js";import"./getPseudoElementBounds-Cyi5-PCV.js";import"./chevron-down-C0hhObXO.js";import"./index-B8RwvKuR.js";import"./error-CPbKcdrM.js";import"./BaseCbacBanner-CClRvK2W.js";import"./makeExternalStore-DYjFjmyg.js";import"./Tooltip-BhujbOiL.js";import"./PopoverPopup-BUbNU-wA.js";import"./debounce-DaBf6ZBx.js";import"./useOsdkClient-CNpvmYWs.js";import"./tick-DsYG6Jvb.js";import"./DropdownField-BiG-Qys8.js";import"./isEqual-Di2UFqa0.js";import"./withOsdkMetrics-BUS-C4Xd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
