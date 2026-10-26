import{j as i}from"./iframe-C_udlJU4.js";import{O as p}from"./object-table-D8btKdtG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BO-WYcs-.js";import"./preload-helper-D7A5VPqB.js";import"./Table-BxZ4FlUB.js";import"./index-D5Td05wZ.js";import"./Dialog-B-7Y63ma.js";import"./cross-aLVt525v.js";import"./svgIconContainer-YTE10dOj.js";import"./useBaseUiId-D9eSz4SE.js";import"./InternalBackdrop-wUvFwLWj.js";import"./composite-0__3ht0j.js";import"./index-kFWYrntg.js";import"./index-BIYZQ0cF.js";import"./index-Bt6VxweC.js";import"./useEventCallback-DZ1nXXaM.js";import"./SkeletonBar-DVvww04b.js";import"./LoadingCell-BArURkSy.js";import"./ColumnConfigDialog-BGmnqW1G.js";import"./DraggableList-D9SeTSjx.js";import"./search-BeZJ_QRn.js";import"./Input-DnhGyrNk.js";import"./useControlled-BScpaCoT.js";import"./Button-DMGSDF9f.js";import"./small-cross-bAfYX1bR.js";import"./ActionButton-CCV1Er0F.js";import"./Checkbox-Drxv5VPv.js";import"./useValueChanged-D5Daoi2-.js";import"./CollapsiblePanel-ZDu1kmyl.js";import"./MultiColumnSortDialog-D7FKiF7W.js";import"./MenuTrigger-ThxxugOw.js";import"./CompositeItem-D9nRDYX0.js";import"./ToolbarRootContext-Cypj8NdZ.js";import"./getDisabledMountTransitionStyles-D8uTEEjX.js";import"./getPseudoElementBounds-ADoHBIxL.js";import"./chevron-down-BaUNK2Yk.js";import"./index-CzIBiuyR.js";import"./error-DvqmoNGN.js";import"./BaseCbacBanner-BsFmMMHy.js";import"./makeExternalStore-DSU-MzRu.js";import"./Tooltip-B_PTRmKi.js";import"./PopoverPopup-InrtXQrT.js";import"./debounce-SX_bnHC2.js";import"./useOsdkClient-DEmnm4QT.js";import"./tick-LuoIBRv5.js";import"./DropdownField-zTIV4KYc.js";import"./isEqual-Bsc5Qs3H.js";import"./withOsdkMetrics-Bs3JzGD4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
