import{j as i}from"./iframe-fw03FCk5.js";import{O as p}from"./object-table-C0cY5G1p.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCOJIeKU.js";import"./preload-helper-P9E4Gy6I.js";import"./Table-Fp44mOL0.js";import"./index-cLbCIlyy.js";import"./Dialog-BpeYGZOK.js";import"./cross-Cwm_6W5t.js";import"./svgIconContainer-DTMIi6B0.js";import"./useBaseUiId-R4A3P2Wz.js";import"./InternalBackdrop-B4CFFx_T.js";import"./composite-D_MYaedS.js";import"./index-DFgmoBbG.js";import"./index-DZcROz4y.js";import"./index-C60tKhQE.js";import"./useEventCallback-DP4IinGV.js";import"./SkeletonBar-CLswlhKR.js";import"./LoadingCell-Bi1Dmks0.js";import"./ColumnConfigDialog-CLfNxsHx.js";import"./DraggableList-DHw0AQf7.js";import"./search-6gQRaMIj.js";import"./Input-Cr_VCQb2.js";import"./useControlled-Bwl7RhM1.js";import"./Button-B6XGTdgm.js";import"./small-cross-BquVTguM.js";import"./ActionButton-YSM36rBh.js";import"./Checkbox-BFEEUGNU.js";import"./useValueChanged-CG3lqo2r.js";import"./CollapsiblePanel-BSUAw99t.js";import"./MultiColumnSortDialog-DV0Rp5WR.js";import"./MenuTrigger-C7uy9UPk.js";import"./CompositeItem-BsCKjv-0.js";import"./ToolbarRootContext-BkWOeIIg.js";import"./getDisabledMountTransitionStyles-Bz-DeKbz.js";import"./getPseudoElementBounds-D0KG0Y6V.js";import"./chevron-down-CoqXE8sv.js";import"./index-Br7cHrYo.js";import"./error-Dfv9QpfZ.js";import"./BaseCbacBanner-CFFvJZA3.js";import"./makeExternalStore-Bmm8rP_V.js";import"./Tooltip-CcSsRqls.js";import"./PopoverPopup-OHXCDTwv.js";import"./debounce-Uta78yLR.js";import"./useOsdkClient-bVTcwCG3.js";import"./tick-R2G1Vx7E.js";import"./DropdownField-BI32TYx-.js";import"./isEqual-SpXDcrrv.js";import"./withOsdkMetrics-DxwGMBTH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
