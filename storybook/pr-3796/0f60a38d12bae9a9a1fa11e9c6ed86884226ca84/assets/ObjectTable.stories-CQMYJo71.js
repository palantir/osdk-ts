import{j as i}from"./iframe-1PpanLKH.js";import{O as p}from"./object-table-DKLmPO6t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DnK8hVcN.js";import"./preload-helper-KbEEj-xI.js";import"./Table-CNbx3zhx.js";import"./index-DutAlB9I.js";import"./Dialog-BtbAVd1C.js";import"./cross-B81yz6Sm.js";import"./svgIconContainer-BTfz0b1A.js";import"./useBaseUiId-BGjDyvEb.js";import"./InternalBackdrop-DCSqCRIy.js";import"./composite-mNL3yU55.js";import"./index-CZZk-Abr.js";import"./index-Cl3lKny9.js";import"./index-CjyX8nll.js";import"./useEventCallback-DGpaXIwz.js";import"./SkeletonBar-CScL0kpZ.js";import"./LoadingCell-CZD1du6C.js";import"./ColumnConfigDialog-BWKbz7wm.js";import"./DraggableList-BJCgs_DS.js";import"./search-BQm_FR5T.js";import"./Input-BTGhw7E0.js";import"./useControlled-CZ2Sf3a4.js";import"./isEqual-MQGefaUb.js";import"./isObject-Cphu3l9r.js";import"./Button-ClnJ7iaU.js";import"./ActionButton-aEm9ZF7b.js";import"./Checkbox-HsVbNP3G.js";import"./useValueChanged-CSWge7ov.js";import"./CollapsiblePanel-D64JSrE9.js";import"./MultiColumnSortDialog-Y8vhGMI3.js";import"./MenuTrigger-DvTL38-U.js";import"./CompositeItem-C1t_VxXC.js";import"./ToolbarRootContext-BraDwkQj.js";import"./getDisabledMountTransitionStyles-m9FIhcWY.js";import"./getPseudoElementBounds-CgCq7XrE.js";import"./chevron-down-D52zl500.js";import"./index-C5a1k7X-.js";import"./error-Dg_355wt.js";import"./BaseCbacBanner-DV8glVk7.js";import"./makeExternalStore-DGwHvp7m.js";import"./Tooltip-BG6es-kZ.js";import"./PopoverPopup-B5dFMJZn.js";import"./toNumber-1xMJb8Nd.js";import"./useOsdkClient-DGV6rCBM.js";import"./tick-Cl67SPEm.js";import"./DropdownField-RPOil0nl.js";import"./withOsdkMetrics-D0Tce0be.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
