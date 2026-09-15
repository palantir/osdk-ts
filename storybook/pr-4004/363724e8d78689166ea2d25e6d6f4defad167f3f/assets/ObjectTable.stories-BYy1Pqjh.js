import{j as i}from"./iframe-D8hMLNEt.js";import{O as p}from"./object-table-BKVAudWN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DgdPd1sT.js";import"./preload-helper-DdG7SQNV.js";import"./Table-DPcU3goU.js";import"./index-QDiAeGPl.js";import"./Dialog-CTNbHSyM.js";import"./cross-SP4nOs9x.js";import"./svgIconContainer-BJNLg_qp.js";import"./useBaseUiId-O-XOb3K-.js";import"./InternalBackdrop-BWmGo_0i.js";import"./composite-36-nzuho.js";import"./index-D2Eij5lS.js";import"./index-B7f8WC_6.js";import"./index-CYi3P9bP.js";import"./useEventCallback-BUFtzlGF.js";import"./SkeletonBar-Br5GneAQ.js";import"./LoadingCell-Dc5q-JgP.js";import"./ColumnConfigDialog-Bv-9rG9y.js";import"./DraggableList-DFj2LmBF.js";import"./search-fDezn5AL.js";import"./Input-DMnyIvQ_.js";import"./useControlled-60YnUuGr.js";import"./Button-C5El-Ott.js";import"./small-cross-CnL6sI_q.js";import"./ActionButton-BBpnUKPy.js";import"./Checkbox-Cha3BFPL.js";import"./useValueChanged-Bm34Du_O.js";import"./CollapsiblePanel-Cy98f2QZ.js";import"./MultiColumnSortDialog-DXezHdvO.js";import"./MenuTrigger--bnc-pAS.js";import"./CompositeItem-C5rE64Sx.js";import"./ToolbarRootContext-D5yv28Ry.js";import"./getDisabledMountTransitionStyles-C0Hmpzmq.js";import"./getPseudoElementBounds-BmPS8XBk.js";import"./chevron-down-BOORn2QE.js";import"./index-CXwV2iqk.js";import"./error-CLijhntf.js";import"./BaseCbacBanner-B0WVh69X.js";import"./makeExternalStore-Bvnv1DDu.js";import"./Tooltip-Cll_9OQu.js";import"./PopoverPopup-CnH8jKUA.js";import"./debounce-DSbZ-o5K.js";import"./useOsdkClient-Dp1gI7BH.js";import"./tick-CGx1uDyI.js";import"./DropdownField-B31FtCPd.js";import"./isEqual-Dbe--Ogh.js";import"./withOsdkMetrics-wAiRx6GW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
