import{j as i}from"./iframe-BPsV-cND.js";import{O as p}from"./object-table-Bd84NMYm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-vbf2SBmE.js";import"./preload-helper-B1nX7WCL.js";import"./Table-CRdgNMKl.js";import"./index-npdz9ccL.js";import"./Dialog-CSELK3mA.js";import"./cross-e0Z9OM7S.js";import"./svgIconContainer-CZZJ1Sam.js";import"./useBaseUiId-CFNxIaBI.js";import"./InternalBackdrop-BYQB8CTu.js";import"./composite-Cd7xAWbk.js";import"./index-g7oHnE4A.js";import"./index-DLTSwoUf.js";import"./index-Qjyvj9j-.js";import"./useEventCallback-CQwery97.js";import"./SkeletonBar-Hu0BRFFS.js";import"./LoadingCell-D8F06a6N.js";import"./ColumnConfigDialog-iYnSyDeg.js";import"./DraggableList-CsuTCxVA.js";import"./search-hkaYb7x5.js";import"./Input-BkWiOI8x.js";import"./useControlled-DoUE8kJv.js";import"./Button-DLrft56q.js";import"./small-cross-DPwXBijp.js";import"./ActionButton-DM5XNJmd.js";import"./Checkbox-C7UDq2FQ.js";import"./useValueChanged-DyOnhIxB.js";import"./CollapsiblePanel-CYve3QRN.js";import"./MultiColumnSortDialog-D3tMXdvS.js";import"./MenuTrigger-BUk58eZp.js";import"./CompositeItem-HwzticEg.js";import"./ToolbarRootContext-B-c1meOe.js";import"./getDisabledMountTransitionStyles-CBO3vWZa.js";import"./getPseudoElementBounds-BtlBYKnw.js";import"./chevron-down-C-mS6li4.js";import"./index-arYZ6QX0.js";import"./error-Cql48BE9.js";import"./BaseCbacBanner-2tiUvTZ2.js";import"./makeExternalStore-CCTjlDRd.js";import"./Tooltip-D6UWtj7x.js";import"./isObject-CcXWBQ_P.js";import"./debounce-DEe1oMkc.js";import"./useOsdkClient-CEOi39dU.js";import"./tick-RH3_NPL7.js";import"./DropdownField-DFiIaddS.js";import"./isEqual-CBxAtas3.js";import"./_baseIsEqual-BK77yKGx.js";import"./withOsdkMetrics-DzJKMlE9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
