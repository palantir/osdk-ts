import{j as i}from"./iframe-DLqxDfy6.js";import{O as p}from"./object-table-DCiMN1GF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Q1-4NJEE.js";import"./preload-helper-CR03nPFs.js";import"./Table-Blng5lgm.js";import"./index-DvJ5FsVz.js";import"./Dialog-DLaQBa3e.js";import"./cross-_XB01iuh.js";import"./svgIconContainer-siAEGujy.js";import"./useBaseUiId-FG2DzWS6.js";import"./InternalBackdrop-BdVK5n-m.js";import"./composite-Bp3q5gsu.js";import"./index-DDPWTNxY.js";import"./index-CN3BhaNE.js";import"./index-B5UrRZWQ.js";import"./useEventCallback-CkXPCxJ3.js";import"./SkeletonBar-BDVOGHkd.js";import"./LoadingCell-BxA-A9Y0.js";import"./ColumnConfigDialog-BTMHdW5b.js";import"./DraggableList-BMCBjTOK.js";import"./search-GkSvXq-b.js";import"./Input-CWq-CC7y.js";import"./useControlled-DTSmocRM.js";import"./Button-X3mSZ2fF.js";import"./small-cross-RqoJ2JIq.js";import"./ActionButton-DBD5MXXU.js";import"./Checkbox-DTAknTmW.js";import"./useValueChanged-Dtu8G-Bz.js";import"./CollapsiblePanel-DqOXsBJw.js";import"./MultiColumnSortDialog-DAA0NyF0.js";import"./MenuTrigger-m8V75G0u.js";import"./CompositeItem-B4qptw8k.js";import"./ToolbarRootContext-DcKYwC3S.js";import"./getDisabledMountTransitionStyles-DNfc66vB.js";import"./getPseudoElementBounds-DQ39nn50.js";import"./chevron-down-D8Abc2XY.js";import"./index-Bx9TpkCr.js";import"./error-D8ORw_lv.js";import"./BaseCbacBanner-CJQgdRO8.js";import"./makeExternalStore-B-39pyxw.js";import"./Tooltip-DQ-6PpWV.js";import"./PopoverPopup-DxKG4t8k.js";import"./debounce-Dr-1fVLW.js";import"./useOsdkClient-BijjMken.js";import"./tick-CV4p6HDo.js";import"./DropdownField-B5dfcEAD.js";import"./isEqual-CZWeAwCV.js";import"./withOsdkMetrics-DR4XRGWA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
