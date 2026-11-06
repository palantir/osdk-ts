import{j as i}from"./iframe-DalzUr1q.js";import{O as p}from"./object-table-D2quk6NQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DenOiJNh.js";import"./preload-helper-D_n2FxVD.js";import"./Table-CntDsDRk.js";import"./index-BFBpHzmv.js";import"./Dialog-Dgd8ztuF.js";import"./cross-SZYnhdqh.js";import"./svgIconContainer-8scThZ5S.js";import"./useBaseUiId-C1YfiI_O.js";import"./InternalBackdrop-DXBWgB6P.js";import"./composite-ByIGP6v1.js";import"./index-CyRUVzxf.js";import"./index-8qyP2Pih.js";import"./index-6hqAlpZu.js";import"./useEventCallback-BAIllV_R.js";import"./SkeletonBar-BlqAJr93.js";import"./LoadingCell-BEct-0kK.js";import"./ColumnConfigDialog-EF_ikodc.js";import"./DraggableList-B75g6wQ8.js";import"./search-B4UxFsnj.js";import"./Input-D5Owm4cS.js";import"./useControlled-kzcpSzwV.js";import"./Button-c1CthLqB.js";import"./small-cross-BSqUQSnp.js";import"./ActionButton-BXGwgDtg.js";import"./Checkbox-ZFYZdGE6.js";import"./useValueChanged-Bc2VNrg5.js";import"./CollapsiblePanel-BcUy2Ne8.js";import"./MultiColumnSortDialog-BgZ7UXse.js";import"./MenuTrigger-BfxMhCU3.js";import"./CompositeItem-BA4-v1aY.js";import"./ToolbarRootContext-BCpC9w2q.js";import"./getDisabledMountTransitionStyles-BC7pIBNq.js";import"./getPseudoElementBounds-BzW4F44J.js";import"./chevron-down-CPH5FDFQ.js";import"./index-B3TGx6rz.js";import"./error-3LJUbIdl.js";import"./BaseCbacBanner-BynMbQO8.js";import"./makeExternalStore-Ill0Kq_R.js";import"./Tooltip-fxzvXvP9.js";import"./isObject-CZa9j52y.js";import"./debounce-BZIGTgj-.js";import"./useOsdkClient-LHIhBz2N.js";import"./tick-BBITmVPh.js";import"./DropdownField-Bri-IXaO.js";import"./isEqual-fqlKF2yu.js";import"./_baseIsEqual-DiyQ7VZY.js";import"./withOsdkMetrics-pz-JOP6f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
