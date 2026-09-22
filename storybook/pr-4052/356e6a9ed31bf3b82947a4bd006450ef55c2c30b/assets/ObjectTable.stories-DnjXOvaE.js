import{j as i}from"./iframe-BJw8xZnq.js";import{O as p}from"./object-table-CV9CfMOU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6ui7vGU.js";import"./preload-helper-C2M64jAW.js";import"./Table--X2vlNvm.js";import"./index-OZdfTJJN.js";import"./Dialog-C6bZdgnl.js";import"./cross-ayN7c-y5.js";import"./svgIconContainer-BD36YhX4.js";import"./useBaseUiId-DWHIjuQg.js";import"./InternalBackdrop-7aYdMSzr.js";import"./composite-BmKPsG7H.js";import"./index-HEHrx6Vm.js";import"./index-CIQ7NXi0.js";import"./index-DwCLziCf.js";import"./useEventCallback-BUxi4iJJ.js";import"./SkeletonBar-C_Mx4TPl.js";import"./LoadingCell-Gi2iLYRu.js";import"./ColumnConfigDialog-B2iCppyX.js";import"./DraggableList-CmCo9PIT.js";import"./search-DuV2mZJ_.js";import"./Input-DNqdhRno.js";import"./useControlled-CmyWRfbd.js";import"./Button-DER1yH7e.js";import"./small-cross-BczxdS3W.js";import"./ActionButton-CPTKvkGq.js";import"./Checkbox-BTlV08fZ.js";import"./useValueChanged-XcNypFDC.js";import"./CollapsiblePanel-DCUNFkEE.js";import"./MultiColumnSortDialog-BnQFcJMo.js";import"./MenuTrigger-DBEWtO6_.js";import"./CompositeItem-DURcqFyw.js";import"./ToolbarRootContext-CQeuoYdu.js";import"./getDisabledMountTransitionStyles-CS4l_9WU.js";import"./getPseudoElementBounds-aUPqgKrY.js";import"./chevron-down-DDWnpoJ_.js";import"./index-nvfKD9w9.js";import"./error-DreCvNNp.js";import"./BaseCbacBanner-eIucyAuW.js";import"./makeExternalStore-BEcA8UuC.js";import"./Tooltip-Dm91FxLr.js";import"./PopoverPopup-DyJ-hgtR.js";import"./debounce-B2aA8tZ4.js";import"./useOsdkClient-5xfZ-Z4n.js";import"./tick-DNZxoz-8.js";import"./DropdownField-y9HzYpWx.js";import"./isEqual-CbDouTcU.js";import"./withOsdkMetrics-BnQETS83.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
