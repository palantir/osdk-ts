import{j as i}from"./iframe-Cu9w7jcH.js";import{O as p}from"./object-table-Bn0AzQbY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BrqxZqfg.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CWqMgw5D.js";import"./index-CISo5zfR.js";import"./Dialog-DdDrC9tX.js";import"./cross-B8KHmrzZ.js";import"./svgIconContainer-Dw0CoQx7.js";import"./useBaseUiId-BjT3tUdU.js";import"./InternalBackdrop-DDT8m1IB.js";import"./composite-CQfO24RT.js";import"./index-D8iZ8WU_.js";import"./index-DiQpPnIR.js";import"./index-DqpMoyiI.js";import"./useEventCallback-BWcmln1Y.js";import"./SkeletonBar-DdY3k6U9.js";import"./LoadingCell-COlUHupL.js";import"./ColumnConfigDialog-03GqgHqt.js";import"./DraggableList-DYftbGXA.js";import"./search-BN3GL8EC.js";import"./Input-B4v38P0N.js";import"./useControlled-8gLzMwC4.js";import"./Button-D273o8ES.js";import"./small-cross-D6DQ7NJv.js";import"./ActionButton-CjgGx4Lw.js";import"./Checkbox-Ii7m0dCL.js";import"./useValueChanged-Be9YjO8J.js";import"./CollapsiblePanel-BGK9MEKX.js";import"./MultiColumnSortDialog-DaU2lZLl.js";import"./MenuTrigger-DYsls7wD.js";import"./CompositeItem-kmbcRbAD.js";import"./ToolbarRootContext-TnMpdXUN.js";import"./getDisabledMountTransitionStyles-BqP1cavL.js";import"./getPseudoElementBounds-BT81kHqt.js";import"./chevron-down-C5muOK6K.js";import"./index-DkVw3DhA.js";import"./error-DCGe0X_V.js";import"./BaseCbacBanner-CITuvEvV.js";import"./makeExternalStore-ChDoBLQb.js";import"./Tooltip-B-4lupYo.js";import"./PopoverPopup-BD-mSjSu.js";import"./debounce-Bt8yXtd0.js";import"./useOsdkClient-DUbXAUGd.js";import"./tick-Blb6T-l7.js";import"./DropdownField-CxinIrMS.js";import"./isEqual-CvVjxDCI.js";import"./withOsdkMetrics-DguEd9bl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
