import{j as i}from"./iframe-Y7AblKoo.js";import{O as p}from"./object-table-BTivezdX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BSLGKJyw.js";import"./preload-helper-CK7oVkVW.js";import"./Table-B6ebySOQ.js";import"./index-D2h1-o7T.js";import"./Dialog-B4i6LldK.js";import"./cross-EOw4MIdf.js";import"./svgIconContainer-DrxH4qgx.js";import"./useBaseUiId-BuabQztq.js";import"./InternalBackdrop-H9HqFIS2.js";import"./composite-DhLfKT7-.js";import"./index-BVzBDJE3.js";import"./index-CAOvocee.js";import"./index-BH7XzZTW.js";import"./useEventCallback-DWticQIx.js";import"./SkeletonBar-RBq0mpfB.js";import"./LoadingCell-DgRp_Wka.js";import"./ColumnConfigDialog-C6nAn6NS.js";import"./DraggableList-CoNVEYuB.js";import"./search-DtmxDMt7.js";import"./Input-CJLZHe4E.js";import"./useControlled-kT-I11in.js";import"./Button-DCccMYap.js";import"./small-cross-tPJDy73P.js";import"./ActionButton-Bt0BBh48.js";import"./Checkbox-CdP8MlRw.js";import"./useValueChanged-DqMWnrli.js";import"./CollapsiblePanel-DN3ZprZ0.js";import"./MultiColumnSortDialog-C5wBEcVl.js";import"./MenuTrigger-DY79qoZy.js";import"./CompositeItem-DBKT_2ic.js";import"./ToolbarRootContext-Dcch5f3c.js";import"./getDisabledMountTransitionStyles-DHnmC01T.js";import"./getPseudoElementBounds-7Teyr0Nw.js";import"./chevron-down-CwpvKa_6.js";import"./index-buXngsZU.js";import"./error-G0IfSF5E.js";import"./BaseCbacBanner-CPCPnZC6.js";import"./makeExternalStore-CPSblPES.js";import"./Tooltip-DcDIeYDv.js";import"./isObject-DheuFrAG.js";import"./debounce-Isp2HaEB.js";import"./useOsdkClient-Dq_ItsJG.js";import"./tick-HfDmvRCv.js";import"./DropdownField-BMfgbVSv.js";import"./isEqual-Cooqb3we.js";import"./_baseIsEqual-8yhurgMZ.js";import"./withOsdkMetrics-DpuFL858.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
