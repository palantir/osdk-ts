import{j as i}from"./iframe-B_zRUDuE.js";import{O as p}from"./object-table-Bv64vFep.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dt4m0KHw.js";import"./preload-helper-CxVJftgz.js";import"./Table-crjZDJuE.js";import"./index-sn9mtHlU.js";import"./Dialog-YgM3zMLP.js";import"./cross-_ERVYG6L.js";import"./svgIconContainer-CxXL_oXh.js";import"./useBaseUiId-8u_jCgH6.js";import"./InternalBackdrop-D-Mc2aWz.js";import"./composite-CiMgDYUm.js";import"./index-o0vWfmid.js";import"./index-DT6FHhAE.js";import"./index-CFIH2_Ln.js";import"./useEventCallback-DXtMhdq9.js";import"./SkeletonBar-_7p8Ae6C.js";import"./LoadingCell-BBr8zF--.js";import"./ColumnConfigDialog-BJtuM6eb.js";import"./DraggableList-BNGFL0c8.js";import"./search-C1xWyvK0.js";import"./Input-Db4KedVJ.js";import"./useControlled-DlwI9PYM.js";import"./Button-CY0tELjq.js";import"./small-cross-CNevPnY1.js";import"./ActionButton-p5CBVKmi.js";import"./Checkbox-COebmtnq.js";import"./useValueChanged-Bj4HpRwM.js";import"./CollapsiblePanel-B55pzrP7.js";import"./MultiColumnSortDialog-DAX7LlwZ.js";import"./MenuTrigger-BYEGdV1Q.js";import"./CompositeItem-LThRFFEu.js";import"./ToolbarRootContext-Bj3x-8aq.js";import"./getDisabledMountTransitionStyles-CIBqTnBJ.js";import"./getPseudoElementBounds-REbqj2aK.js";import"./chevron-down-C87rVGKO.js";import"./index-Cq4s-83z.js";import"./error-Co0vxDqJ.js";import"./BaseCbacBanner-DFepNaLt.js";import"./makeExternalStore-DD9WI4JF.js";import"./Tooltip-D7_c9ORd.js";import"./isObject-BgbyztzY.js";import"./debounce-Bz563Y3c.js";import"./useOsdkClient-DO77RjGc.js";import"./tick-Cso2FHRc.js";import"./DropdownField-U6RE18pq.js";import"./isEqual-DJWYrLXk.js";import"./_baseIsEqual-Z_m_8oSa.js";import"./withOsdkMetrics-DrGnBbgp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
