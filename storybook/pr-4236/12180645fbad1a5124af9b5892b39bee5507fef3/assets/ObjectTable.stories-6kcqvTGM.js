import{j as i}from"./iframe-C-_1TazU.js";import{O as p}from"./object-table-Beb5fH2d.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmAqt1eO.js";import"./preload-helper-CkKF1Buf.js";import"./Table-BCBSDpni.js";import"./index-Bpncd7pQ.js";import"./Dialog-DsM0_WQ8.js";import"./cross-C4V96JZV.js";import"./svgIconContainer-CMraZsuF.js";import"./useBaseUiId-_AW1QpO6.js";import"./InternalBackdrop-C5_BMHIb.js";import"./composite-Dz3hbzMM.js";import"./index-BubkWFVt.js";import"./index-CMC--zdt.js";import"./index-90cPmaM8.js";import"./useEventCallback-D70YOU97.js";import"./SkeletonBar-BNfm8GyJ.js";import"./LoadingCell-B0Nv_30_.js";import"./ColumnConfigDialog-KOc_l0BB.js";import"./DraggableList-k0m91GC-.js";import"./search-Brf_HBSH.js";import"./Input-CRdjsgvE.js";import"./useControlled-B0TcQP9p.js";import"./Button-3Z_BNFpX.js";import"./small-cross-CJnmFJ9d.js";import"./ActionButton-4JN5WqHj.js";import"./Checkbox-CJUicpa4.js";import"./useValueChanged-APgIOvq6.js";import"./CollapsiblePanel-BH9UnnpL.js";import"./MultiColumnSortDialog-DQKESGLV.js";import"./MenuTrigger-C0WE1G2S.js";import"./CompositeItem-CUiyh8KX.js";import"./ToolbarRootContext-DKRIHX6q.js";import"./getDisabledMountTransitionStyles-Drv-bm06.js";import"./getPseudoElementBounds-B3bHIS4L.js";import"./chevron-down-C9eSOQPA.js";import"./index-BbmPsGxd.js";import"./error-Bm-o3dV9.js";import"./BaseCbacBanner-DhXCr72Y.js";import"./makeExternalStore-Bt0DPf8S.js";import"./Tooltip-CC5f6fsc.js";import"./PopoverPopup-BRmr0_XW.js";import"./debounce-BZOoCBd7.js";import"./useOsdkClient-cVvbHq8H.js";import"./tick-qWt9TM4D.js";import"./DropdownField-C3zSIjmP.js";import"./isEqual-BMSQp6EM.js";import"./withOsdkMetrics-DfOFosKa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
