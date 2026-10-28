import{j as i}from"./iframe-Dd3-Yl6N.js";import{O as p}from"./object-table-DpU8rOP1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-i0OD-YHY.js";import"./preload-helper-C9sTmRJF.js";import"./Table-CJkFrbE4.js";import"./index-BiUH_hpy.js";import"./Dialog-DXHTFgGh.js";import"./cross-Eqzrh4V_.js";import"./svgIconContainer-B7D9nEeV.js";import"./useBaseUiId-CtlPAw8O.js";import"./InternalBackdrop-CmK4_yD0.js";import"./composite-B7_CRtOh.js";import"./index-Dk7mnZge.js";import"./index-CbNEs7cg.js";import"./index-lGfMNjwG.js";import"./useEventCallback-USAjYtY7.js";import"./SkeletonBar-C8vnuUpQ.js";import"./LoadingCell-cNBqiPSl.js";import"./ColumnConfigDialog-DNtdz8t8.js";import"./DraggableList-D0jY9WXX.js";import"./search-uFxQauC9.js";import"./Input-BFjIxR6L.js";import"./useControlled-tZuoOrAX.js";import"./Button-DgI_B-BT.js";import"./small-cross-CrGAYCsL.js";import"./ActionButton-4WW_Bvqo.js";import"./Checkbox-SDQwho6i.js";import"./useValueChanged-XCnKvKXZ.js";import"./CollapsiblePanel-BOoyEJPY.js";import"./MultiColumnSortDialog-BDhw5L_6.js";import"./MenuTrigger-BzJv6k6o.js";import"./CompositeItem-BLXgiCJ0.js";import"./ToolbarRootContext-YQCd6tra.js";import"./getDisabledMountTransitionStyles-BXNmj0yT.js";import"./getPseudoElementBounds-DmW7W9n1.js";import"./chevron-down-COpzwsCU.js";import"./index-D_tBmJ25.js";import"./error-OA8M66y2.js";import"./BaseCbacBanner-CQiUk9d3.js";import"./makeExternalStore-C5CgSHDu.js";import"./Tooltip-B41k5vGI.js";import"./isObject-kZj6fUWz.js";import"./debounce-DKDpCZ3V.js";import"./useOsdkClient-DZ1zIMqw.js";import"./tick-CH9Wrri9.js";import"./DropdownField-Dt4JM_pr.js";import"./isEqual-W7tw2uNy.js";import"./_baseIsEqual-CkzZKYO0.js";import"./withOsdkMetrics-CIN8qa0j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
