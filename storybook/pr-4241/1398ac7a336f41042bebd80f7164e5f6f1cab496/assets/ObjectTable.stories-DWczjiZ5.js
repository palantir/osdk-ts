import{j as i}from"./iframe-50Cg_Ain.js";import{O as p}from"./object-table-BMqdBJge.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DLEkBNdB.js";import"./preload-helper-DMtB3Ytn.js";import"./Table-C5HnzxvU.js";import"./index-jwJr-CWL.js";import"./Dialog-Ct-gNA2Q.js";import"./cross-COS10AaY.js";import"./svgIconContainer-CcJ3Jv7r.js";import"./useBaseUiId-KVfK4IPD.js";import"./InternalBackdrop-BuJcJtL5.js";import"./composite-Dp3rlZDO.js";import"./index-pDWKxWtb.js";import"./index-Bnqsnheo.js";import"./index-beR5Qk5I.js";import"./useEventCallback--j9Bwo9R.js";import"./SkeletonBar-vCg5I0cB.js";import"./LoadingCell-DESO8adh.js";import"./ColumnConfigDialog-DWzi7-44.js";import"./DraggableList-BM6r3rgP.js";import"./search-BrkmnBZA.js";import"./Input-MpATsBua.js";import"./useControlled-BYCjMK_X.js";import"./Button-D1Gjjj1e.js";import"./small-cross-zbNUvU_s.js";import"./ActionButton-BOVhqgS3.js";import"./Checkbox-C7M83zVO.js";import"./useValueChanged-4L6Dzkoi.js";import"./CollapsiblePanel-DLDG4Y-F.js";import"./MultiColumnSortDialog-TRuvFkkZ.js";import"./MenuTrigger-BJe-69N1.js";import"./CompositeItem-PSBD5_9a.js";import"./ToolbarRootContext-wGzcHK2n.js";import"./getDisabledMountTransitionStyles-CcshyzIS.js";import"./getPseudoElementBounds-Cy_X7Dzd.js";import"./chevron-down-XrKrb8VS.js";import"./index-CKYD_SOl.js";import"./error-COSlANXI.js";import"./BaseCbacBanner-BbrXhr06.js";import"./makeExternalStore-mw5x5KPf.js";import"./Tooltip-CY7BNFvk.js";import"./isObject-DzKLNJWj.js";import"./debounce-ClHlqela.js";import"./useOsdkClient-CSxkcmdq.js";import"./tick-BHY7Momf.js";import"./DropdownField-Bu7usqGG.js";import"./isEqual-CO8gKk2r.js";import"./_baseIsEqual-CE8CWXW1.js";import"./withOsdkMetrics-DCjsjr3q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
