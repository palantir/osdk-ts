import{j as i}from"./iframe-CK-e_P5n.js";import{O as p}from"./object-table-DhEk3d9R.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrbYl4GC.js";import"./preload-helper-CdfmlsWT.js";import"./Table-BsqGsGlo.js";import"./index-D1NbsZsT.js";import"./Dialog-DGPTJcg5.js";import"./cross-DdB0B2DT.js";import"./svgIconContainer-CUe9azR3.js";import"./useBaseUiId-B6Thtd3O.js";import"./InternalBackdrop--jYqCsuV.js";import"./composite-CF-uZGHD.js";import"./index-BmOKXyuk.js";import"./index-BAl9UwQ_.js";import"./index-BI0nF061.js";import"./useEventCallback-DLi0pkHc.js";import"./SkeletonBar-CJ14_0Ym.js";import"./LoadingCell-C3R3Sh3u.js";import"./ColumnConfigDialog-CPUbQB7h.js";import"./DraggableList-CD7OhgBJ.js";import"./search-D8NL3mRl.js";import"./Input-DGmd96_F.js";import"./useControlled-flZbgJml.js";import"./Button-DnxkikPI.js";import"./small-cross-D6eJtQvT.js";import"./ActionButton-2BJhUFRZ.js";import"./Checkbox-CIXQ1R8k.js";import"./useValueChanged-DBUoKfVc.js";import"./CollapsiblePanel-Be9_urdY.js";import"./MultiColumnSortDialog-B4hxLfgp.js";import"./MenuTrigger-D5vobJQ0.js";import"./CompositeItem-BRNQwarA.js";import"./ToolbarRootContext-BzLZyYhL.js";import"./getDisabledMountTransitionStyles-GfO_uBTj.js";import"./getPseudoElementBounds-9YvIcjPC.js";import"./chevron-down-D3RJwgIP.js";import"./index--at66w-A.js";import"./error-BFAdc9Td.js";import"./BaseCbacBanner-D-KqGODx.js";import"./makeExternalStore-Bf6pa7D3.js";import"./Tooltip-RRrzeJA8.js";import"./PopoverPopup-DXgU2mtn.js";import"./debounce-CnX0V1iA.js";import"./useOsdkClient-TQnWVOaJ.js";import"./tick-BVNELgej.js";import"./DropdownField-BncLboR3.js";import"./isEqual-CZA0FnVD.js";import"./withOsdkMetrics-DFjAQMzo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
