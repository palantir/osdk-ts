import{j as i}from"./iframe-DOCnG8_R.js";import{O as p}from"./object-table-ByvdEx-N.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cm7MIk1L.js";import"./preload-helper-CHeAXlhd.js";import"./Table-dzQCxb3w.js";import"./index-B9FSm492.js";import"./Dialog-CMmoPV6w.js";import"./cross-DD4lLZUH.js";import"./svgIconContainer-C_xgL_so.js";import"./useBaseUiId-BIuK8Cls.js";import"./InternalBackdrop-IuYb9qMZ.js";import"./composite-1CbyJRr9.js";import"./index-BVlFCpMD.js";import"./index-BPb9hoVr.js";import"./index-DKtApVsH.js";import"./useEventCallback-BY0rvE7k.js";import"./SkeletonBar-yZks2ZUy.js";import"./LoadingCell-L92wNfok.js";import"./ColumnConfigDialog-CHO0Y_Pf.js";import"./DraggableList-gM4QkIXJ.js";import"./search-CAkVi9HF.js";import"./Input-mExbb7nh.js";import"./useControlled-XIrZJlZr.js";import"./isEqual-CFGyKprK.js";import"./isObject-B272SqN4.js";import"./Button-DdV0L53R.js";import"./ActionButton-CQIy90oM.js";import"./Checkbox-BTFZacPm.js";import"./useValueChanged-j0HODzj-.js";import"./CollapsiblePanel-ji2H9ijV.js";import"./MultiColumnSortDialog-CXfqsRGe.js";import"./MenuTrigger-FhiuXfp1.js";import"./CompositeItem-B1uodXbS.js";import"./ToolbarRootContext-CTPtaqaC.js";import"./getDisabledMountTransitionStyles-B1flPJOL.js";import"./getPseudoElementBounds-BAwwC9X0.js";import"./chevron-down-BZCx1w1J.js";import"./index-CTc_ufVR.js";import"./error-DySJTj9B.js";import"./BaseCbacBanner-U_RGl_3A.js";import"./makeExternalStore-DIwWA4d5.js";import"./Tooltip-DKuwdUQf.js";import"./PopoverPopup-o2vq8MRP.js";import"./toNumber-DQ2BqFwD.js";import"./useOsdkClient-CLF-MvJu.js";import"./tick-BNxVC9F3.js";import"./DropdownField-BB1G0i31.js";import"./withOsdkMetrics-D69gnpAo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
