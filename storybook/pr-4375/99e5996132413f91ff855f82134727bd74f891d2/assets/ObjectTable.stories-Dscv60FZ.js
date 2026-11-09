import{j as i}from"./iframe-kyVM35Yw.js";import{O as p}from"./object-table-D8OhNeI7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DbRtOTGw.js";import"./preload-helper-BwEFl8vP.js";import"./Table-BnWzUCOy.js";import"./index-C0Dea0yk.js";import"./Dialog-BcXX0CrW.js";import"./cross-C0YFkToE.js";import"./svgIconContainer-CLz_w4rV.js";import"./useBaseUiId-DRkyghGt.js";import"./InternalBackdrop-Dx6yt2XY.js";import"./composite-uhZO0Uyq.js";import"./index-B5tuGXqc.js";import"./index-Cq4C7hwK.js";import"./index-DxlcEZaF.js";import"./useEventCallback-CIPRgi3m.js";import"./SkeletonBar-BjqkVB1N.js";import"./LoadingCell-BJW-sMyd.js";import"./ColumnConfigDialog-DRBrnmt-.js";import"./DraggableList-BhTnGkHR.js";import"./search-BZ_r27kW.js";import"./Input-DdIUmJav.js";import"./useControlled-Dv9OfWlo.js";import"./Button-t3LDiAFT.js";import"./small-cross-DNKmjcOe.js";import"./ActionButton-B593_ubA.js";import"./Checkbox-DVqeNtQS.js";import"./useValueChanged-CAuHoBW5.js";import"./CollapsiblePanel-D0Ogg_Z1.js";import"./MultiColumnSortDialog-BHLFsck8.js";import"./MenuTrigger-DsnX6w12.js";import"./CompositeItem-CcZT4jH0.js";import"./ToolbarRootContext-hOfYlQDN.js";import"./getDisabledMountTransitionStyles-2PFrzZkZ.js";import"./getPseudoElementBounds-BcX2UMFr.js";import"./chevron-down-CnIiSLCf.js";import"./index-C5nN5HSw.js";import"./error-C0jSc5Zw.js";import"./BaseCbacBanner-CsPxqNag.js";import"./makeExternalStore-DOr5nas7.js";import"./Tooltip-Dvd9Tqx6.js";import"./isObject-DXUV5EWh.js";import"./debounce-DEN9d_8f.js";import"./useOsdkClient-DYm6JtiE.js";import"./tick-ZlXNtKJQ.js";import"./DropdownField-CiuWLNC-.js";import"./isEqual-Bi9yJZpm.js";import"./_baseIsEqual-DdLFoz5X.js";import"./withOsdkMetrics-B7MvmXC4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
