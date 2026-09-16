import{j as i}from"./iframe-C_0-Ny_N.js";import{O as p}from"./object-table-DGQgtl_w.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-COrehyTj.js";import"./preload-helper-Cs_UzwR6.js";import"./Table-Dgvo0A5I.js";import"./index-BCapEaKB.js";import"./Dialog-BbxXOlT6.js";import"./cross-Dhbxwhb2.js";import"./svgIconContainer-DAGFJod5.js";import"./useBaseUiId-B7Keq3x8.js";import"./InternalBackdrop-DSC0itKR.js";import"./composite-BKxtxXCT.js";import"./index-Bewi1ToU.js";import"./index-D3nPMosa.js";import"./index-DCJ2O27O.js";import"./useEventCallback-CHNZdE5h.js";import"./SkeletonBar-CoeG_Gyn.js";import"./LoadingCell-DR0WPrbM.js";import"./ColumnConfigDialog-CkHl9bEd.js";import"./DraggableList-Do4A-fJS.js";import"./search-BKcV1gVw.js";import"./Input-BF9DmCeg.js";import"./useControlled-DmQkJsyf.js";import"./Button-g8Y5a3bQ.js";import"./small-cross-CFI7QvS0.js";import"./ActionButton-D9LJ1Y0h.js";import"./Checkbox-CDawQgr1.js";import"./useValueChanged-CdL69oAW.js";import"./CollapsiblePanel-CL0PnPaH.js";import"./MultiColumnSortDialog-C19wCna8.js";import"./MenuTrigger-NDFVm2E2.js";import"./CompositeItem-BeOy_iQJ.js";import"./ToolbarRootContext-DkY9S2-W.js";import"./getDisabledMountTransitionStyles-CpRzurrr.js";import"./getPseudoElementBounds-NZN6UuUV.js";import"./chevron-down-C0ibfMMv.js";import"./index-CrSkVWMy.js";import"./error-DAsTyxDt.js";import"./BaseCbacBanner-CdzWkyww.js";import"./makeExternalStore-CXzzR7o8.js";import"./Tooltip-CSoPyId7.js";import"./PopoverPopup-CA1dNHn3.js";import"./debounce-CsMAmyDS.js";import"./useOsdkClient-qcjIUx1B.js";import"./tick-CZldnOuP.js";import"./DropdownField-DvVkFAtM.js";import"./isEqual-dkeqRnY_.js";import"./withOsdkMetrics-rrME1YBQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
