import{j as i}from"./iframe-wedJSnud.js";import{O as p}from"./object-table-BajGG0to.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-JirmtnZj.js";import"./preload-helper-DcVHnV_i.js";import"./Table-BLY9Mong.js";import"./index-BsI8HLJz.js";import"./Dialog-J4Cd9_OE.js";import"./cross-CxbFlbaI.js";import"./svgIconContainer-CJJHSkNv.js";import"./useBaseUiId-BGqSil3r.js";import"./InternalBackdrop-CYExiY0H.js";import"./composite-CGFDwdnq.js";import"./index-Nf3FTUKP.js";import"./index-BCNEaR-3.js";import"./index-DaGnA4hb.js";import"./useEventCallback-CSpaNNY7.js";import"./SkeletonBar-mu4DFzMg.js";import"./LoadingCell-BT-nN-EI.js";import"./ColumnConfigDialog-Bmw7mdxZ.js";import"./DraggableList-xmn571DV.js";import"./search-B0U_YWQT.js";import"./Input-Z8OuidlN.js";import"./useControlled-RZ5VMgMB.js";import"./Button-UisMFP1d.js";import"./small-cross-Cn8qa5Sh.js";import"./ActionButton-DaNuKssk.js";import"./Checkbox-BY-XFwqd.js";import"./useValueChanged-Bb0TAKp4.js";import"./CollapsiblePanel-C69XGwDY.js";import"./MultiColumnSortDialog-M_bQCmOw.js";import"./MenuTrigger-COtuRsgu.js";import"./CompositeItem-DUPpieEN.js";import"./ToolbarRootContext-Bs5SB0fX.js";import"./getDisabledMountTransitionStyles-DGGlYbfe.js";import"./getPseudoElementBounds-C5lKtGGS.js";import"./chevron-down-DkT3Qzaa.js";import"./index-DWYfh9fQ.js";import"./error-BFWppJ2G.js";import"./BaseCbacBanner-BQwi4y0V.js";import"./makeExternalStore-cCCuNZuQ.js";import"./Tooltip-BnvTu1M2.js";import"./PopoverPopup-BS1FnNJF.js";import"./debounce-slxGNpXd.js";import"./useOsdkClient-C_rjoUrX.js";import"./tick-B3xCBs79.js";import"./DropdownField-DA0RqhyD.js";import"./isEqual-7xOAoX3N.js";import"./withOsdkMetrics-B2en0C3P.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
