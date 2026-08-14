import{j as i}from"./iframe-BqbigeuD.js";import{O as p}from"./object-table-ClqDNB1D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8mIXTuM.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-RQWAHosC.js";import"./index-D7s1vZwA.js";import"./Dialog-BuZiIJzM.js";import"./cross-CLJqu8dR.js";import"./svgIconContainer-CNyNUipw.js";import"./useBaseUiId-BrUQ1lUA.js";import"./InternalBackdrop-CADGsbSS.js";import"./composite-DOjpwy0F.js";import"./index-CLCCLTRM.js";import"./index-KjJeD42o.js";import"./index-CK3DihJa.js";import"./useEventCallback-B_T5g4Vi.js";import"./SkeletonBar-ByKW1A8u.js";import"./LoadingCell-DmWxZ4hr.js";import"./ColumnConfigDialog-LESDT8Pt.js";import"./DraggableList-Cw4KULFA.js";import"./search-BkoZ-p7h.js";import"./Input-w6FfiWMZ.js";import"./useControlled-BkV9XWg4.js";import"./Button-Bs_AcwvG.js";import"./small-cross-Wg6h33WU.js";import"./ActionButton-DESSk2L6.js";import"./Checkbox-Csso-sIn.js";import"./useValueChanged-BVNP8RsF.js";import"./CollapsiblePanel-BgblNzsZ.js";import"./MultiColumnSortDialog-HMq3ZHNG.js";import"./MenuTrigger-Bgxeic5c.js";import"./CompositeItem-dQj9Bt62.js";import"./ToolbarRootContext-B_mJM9-f.js";import"./getDisabledMountTransitionStyles-CCtmzqiZ.js";import"./getPseudoElementBounds-l5CwwhmS.js";import"./chevron-down-GBaXIHW1.js";import"./index-BfjKC9iU.js";import"./error-BChOvziS.js";import"./BaseCbacBanner-Bw6sSYx1.js";import"./makeExternalStore-kAlj8eNH.js";import"./Tooltip-CDaVt04k.js";import"./PopoverPopup-ClTiD7mI.js";import"./debounce-WRa7r5fz.js";import"./useOsdkClient-5ha46Acw.js";import"./tick-D0Qn2Cby.js";import"./DropdownField-CNzaS55x.js";import"./isEqual-CJ26dzBU.js";import"./withOsdkMetrics-rp-esplT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
