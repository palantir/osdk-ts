import{j as i}from"./iframe-Cvj3FNL2.js";import{O as p}from"./object-table-C2x3aq5k.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BKLFG7Z1.js";import"./preload-helper-CetzPUwQ.js";import"./Table-CZPtcDN5.js";import"./index-DH-N1YV0.js";import"./Dialog-B5VMx6ZD.js";import"./cross-BgxfwZhF.js";import"./svgIconContainer-2e47raBd.js";import"./useBaseUiId-D4o_acv_.js";import"./InternalBackdrop-CATBYZKD.js";import"./composite-BeeOPu6q.js";import"./index-B2hgVlCo.js";import"./index-DV2RJSrY.js";import"./index-uxZgvSM2.js";import"./useEventCallback-Cqy7o6tW.js";import"./SkeletonBar-262DGPMI.js";import"./LoadingCell-lShAyMqT.js";import"./ColumnConfigDialog-k9C8QYRP.js";import"./DraggableList-Dwjgc3m4.js";import"./search-DUdBrB5_.js";import"./Input-RAe99RCN.js";import"./useControlled-0y2fy9QQ.js";import"./Button-BZDb9IOS.js";import"./small-cross-Cn1GfmeS.js";import"./ActionButton-CFdQScEP.js";import"./Checkbox-BhWtUvjh.js";import"./useValueChanged-D7CgbNdw.js";import"./CollapsiblePanel-BiKanzHS.js";import"./MultiColumnSortDialog-C_dEh5p8.js";import"./MenuTrigger-D8SwBsvq.js";import"./CompositeItem-BgbI3PXY.js";import"./ToolbarRootContext-C86500_m.js";import"./getDisabledMountTransitionStyles-8IEwLVYU.js";import"./getPseudoElementBounds-ebP8vgdz.js";import"./chevron-down-BLip4j8E.js";import"./index-BMbRZnNU.js";import"./error-QqbcWqTY.js";import"./BaseCbacBanner-B5JeFXpe.js";import"./makeExternalStore-Crm20JST.js";import"./Tooltip-wW5BdC1A.js";import"./isObject-FFGALRWz.js";import"./debounce-Yet_dmWM.js";import"./useOsdkClient-BassWPUJ.js";import"./tick-D3nHgBg9.js";import"./DropdownField-_3D3jspy.js";import"./isEqual-uly-B5jb.js";import"./_baseIsEqual-uaL5sXdC.js";import"./withOsdkMetrics-ChCG3pJN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
