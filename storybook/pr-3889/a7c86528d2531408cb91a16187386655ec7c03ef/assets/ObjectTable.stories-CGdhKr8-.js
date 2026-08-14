import{j as i}from"./iframe-Cpw76Sdc.js";import{O as p}from"./object-table-BRLY5aCa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-GootCwZc.js";import"./preload-helper-8AbM0gOB.js";import"./Table-2dgTr2pA.js";import"./index-zPQhZCVL.js";import"./Dialog-BSbzRySi.js";import"./cross-CHILGXBp.js";import"./svgIconContainer-BD5xY0XD.js";import"./useBaseUiId-iIyXPd8a.js";import"./InternalBackdrop-CrzPvv-e.js";import"./composite-BiHZiM_o.js";import"./index-DyQIyZ_o.js";import"./index-CCh0UBc-.js";import"./index-mvHbpu9m.js";import"./useEventCallback-DwTyub1b.js";import"./SkeletonBar-BN28IWus.js";import"./LoadingCell-BAqjE1Zt.js";import"./ColumnConfigDialog-d5-jecqO.js";import"./DraggableList-xj-JSUxt.js";import"./search-C6EHfnm3.js";import"./Input-CtOgxGdW.js";import"./useControlled-JdKni9kg.js";import"./Button-CKa97gQA.js";import"./small-cross-CvcLh5v8.js";import"./ActionButton-DSv4OBq1.js";import"./Checkbox-B0Igi9Ut.js";import"./useValueChanged-CYl-xbrr.js";import"./CollapsiblePanel-kMyKToA5.js";import"./MultiColumnSortDialog-BfsEwFQ5.js";import"./MenuTrigger-B1YYjSiM.js";import"./CompositeItem-CvHmtrv6.js";import"./ToolbarRootContext-BkMaLa5M.js";import"./getDisabledMountTransitionStyles-mn_22XPf.js";import"./getPseudoElementBounds-C6mykXXF.js";import"./chevron-down-CZx_QJYn.js";import"./index-CDcUaHOJ.js";import"./error-Cf9QFWnN.js";import"./BaseCbacBanner-5_yWfNz5.js";import"./makeExternalStore-BBzTQwwa.js";import"./Tooltip-BpKwVBux.js";import"./PopoverPopup-CexomEcT.js";import"./debounce-B--H28BV.js";import"./useOsdkClient-CPHnoq0t.js";import"./tick-DGRCvyHI.js";import"./DropdownField-cOQ5lTMI.js";import"./isEqual-DDjWjXdA.js";import"./withOsdkMetrics-DWbYyS_O.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
