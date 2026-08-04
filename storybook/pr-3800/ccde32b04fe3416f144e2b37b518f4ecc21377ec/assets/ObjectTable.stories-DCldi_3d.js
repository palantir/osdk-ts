import{j as i}from"./iframe-C-MKJZyK.js";import{O as p}from"./object-table-DrMkrKLc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BuhsMp6V.js";import"./preload-helper-CU_HtoHz.js";import"./Table-BQy4tVWI.js";import"./index-CPYi5p-M.js";import"./Dialog-DJMsLC6L.js";import"./cross-DNu1Vd5q.js";import"./svgIconContainer-FX4i3D7t.js";import"./useBaseUiId-CgtQyAp-.js";import"./InternalBackdrop-BTkXGX7m.js";import"./composite-2YGSxd1T.js";import"./index-sYzrVFPx.js";import"./index-wyiBeFpI.js";import"./index-DNZsHthF.js";import"./useEventCallback-CJrcjSKs.js";import"./SkeletonBar-DpIoDv_h.js";import"./LoadingCell-DJ2Ze2g2.js";import"./ColumnConfigDialog-Bh63K-cl.js";import"./DraggableList-BGYaEGvL.js";import"./search-UvEU4G0v.js";import"./Input-CLo1MrIB.js";import"./useControlled-NSu5zz5s.js";import"./isEqual-mBn6qCrn.js";import"./isObject-DT-aOAxT.js";import"./Button-CKxl37fU.js";import"./ActionButton-oNGywivn.js";import"./Checkbox-WG_nfQTt.js";import"./useValueChanged-mZNolY1C.js";import"./CollapsiblePanel-4q0oe3Zb.js";import"./MultiColumnSortDialog-Dlu_R13e.js";import"./MenuTrigger-BFE-_QDU.js";import"./CompositeItem-tHPXjfot.js";import"./ToolbarRootContext-D9y6oWor.js";import"./getDisabledMountTransitionStyles-DKxxzprT.js";import"./getPseudoElementBounds-ZljCXn7t.js";import"./chevron-down-71ryCxKg.js";import"./index-DQWYziCS.js";import"./error-CYtlGVxq.js";import"./BaseCbacBanner-CjxggRhb.js";import"./makeExternalStore-DiOUMjBT.js";import"./Tooltip-BD5qq4Vm.js";import"./PopoverPopup-J7D5jMka.js";import"./toNumber-BoP5826v.js";import"./useOsdkClient-ByMbO7oV.js";import"./tick-BuCzEOZ7.js";import"./DropdownField-hKngkWwm.js";import"./withOsdkMetrics-BixqoA9K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
