import{j as i}from"./iframe-Cl70dWji.js";import{O as p}from"./object-table-DSKBKJEJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CleIlg4l.js";import"./preload-helper-QiZ_zLcF.js";import"./Table-CT32E32c.js";import"./index-Ds00pONi.js";import"./Dialog-BQOFHT2N.js";import"./cross-BB7Pc46-.js";import"./svgIconContainer-BTNEBHys.js";import"./useBaseUiId-DOyYal5B.js";import"./InternalBackdrop-DrCY85f_.js";import"./composite-C748PZ0N.js";import"./index-C3QZTmM_.js";import"./index-CafCqYhX.js";import"./index-BNc2rzrN.js";import"./useEventCallback-CuVM_nnh.js";import"./SkeletonBar-ZZ-gHcd3.js";import"./LoadingCell-C4fmmZXT.js";import"./ColumnConfigDialog-D1JnnrAy.js";import"./DraggableList-Cy_C57Fv.js";import"./search-DF6sLdtJ.js";import"./Input-BXSbXZmI.js";import"./useControlled-Q9tFcpq6.js";import"./isEqual-C6EEvx8A.js";import"./isObject-DQR0yTql.js";import"./Button-D15y4J1a.js";import"./ActionButton-DewavcTR.js";import"./Checkbox-CMJRhaQz.js";import"./useValueChanged-BOJK3Ya0.js";import"./CollapsiblePanel-5JgopO6I.js";import"./MultiColumnSortDialog-D6_YMFCs.js";import"./MenuTrigger-BqxlSmck.js";import"./CompositeItem-BomeUMbI.js";import"./ToolbarRootContext-DqYG79A3.js";import"./getDisabledMountTransitionStyles-C6EScx01.js";import"./getPseudoElementBounds-DMThbFPG.js";import"./chevron-down-CVLu7rIR.js";import"./index-CoYvOkpA.js";import"./error-BlBC8OXl.js";import"./BaseCbacBanner-l6rCUghX.js";import"./makeExternalStore-BMmPmQBR.js";import"./Tooltip-CXyot0O5.js";import"./PopoverPopup-CoC_t-0L.js";import"./toNumber-BLVbDFpr.js";import"./useOsdkClient-DnZ3twwm.js";import"./tick-DgbGHwXk.js";import"./DropdownField-Bav9j6aq.js";import"./withOsdkMetrics-DW3ouCxC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
