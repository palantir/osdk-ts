import{j as i}from"./iframe-DRt3Isqi.js";import{O as p}from"./object-table-W0q1sdDx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_j9_Fhb.js";import"./preload-helper-P_ieVj0_.js";import"./Table-B_a1aUTP.js";import"./index-VZHhRlUf.js";import"./Dialog-BsDbymC6.js";import"./cross-DLSleMt0.js";import"./svgIconContainer-BmwptnE7.js";import"./useBaseUiId-CztA3AVu.js";import"./InternalBackdrop-EjSNiGN3.js";import"./composite-D3E114vb.js";import"./index-BQPVtwuZ.js";import"./index-CrOP_FhY.js";import"./index-VXwizB6q.js";import"./useEventCallback-BHN3JDT4.js";import"./SkeletonBar-BSkDtycC.js";import"./LoadingCell-DazkA7t9.js";import"./ColumnConfigDialog-TSrFnXld.js";import"./DraggableList-Bhy4xN1M.js";import"./search-CWVCG-ID.js";import"./Input-_E04yI64.js";import"./useControlled-DZ1rHDeJ.js";import"./Button-K9hISpnC.js";import"./small-cross-COsO8y4M.js";import"./ActionButton-BmJ2vYOO.js";import"./Checkbox-CWz6jXA7.js";import"./useValueChanged-BriOV7QZ.js";import"./CollapsiblePanel-CXb3tt2d.js";import"./MultiColumnSortDialog-CWaWKl8p.js";import"./MenuTrigger-CjGuIo7E.js";import"./CompositeItem-1obZGpSi.js";import"./ToolbarRootContext-ChcKGMcF.js";import"./getDisabledMountTransitionStyles-B9hx_YPP.js";import"./getPseudoElementBounds-Dk-P-RRg.js";import"./chevron-down-BpTeELc3.js";import"./index-BfZquH4_.js";import"./error-WyHMdGFH.js";import"./BaseCbacBanner-CW08FqFB.js";import"./makeExternalStore-IMLrRmfN.js";import"./Tooltip-B5fG8wMR.js";import"./isObject-DRxxfzO8.js";import"./debounce-D5V8bM6L.js";import"./useOsdkClient-B72RjCJ-.js";import"./tick-C84Ma0-E.js";import"./DropdownField-DukSAwck.js";import"./isEqual-CANLVVFg.js";import"./_baseIsEqual-BwQ5mLM5.js";import"./withOsdkMetrics-Drl0wAn6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
