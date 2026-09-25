import{j as i}from"./iframe-DD6NR-qI.js";import{O as p}from"./object-table-DznG4301.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-EgzMzp4P.js";import"./preload-helper-BhGDsbwZ.js";import"./Table-D-1i9MSI.js";import"./index-BtwIbT4Z.js";import"./Dialog-DisWgziA.js";import"./cross-CLF7AClR.js";import"./svgIconContainer-DsJ3_wfj.js";import"./useBaseUiId-CEPmW6Nu.js";import"./InternalBackdrop-BIHQ6bnZ.js";import"./composite-DjgEQHpT.js";import"./index--itJRcDL.js";import"./index-Bmje4swP.js";import"./index-Dl1GTjEV.js";import"./useEventCallback-DyKovpbC.js";import"./SkeletonBar-BEg-pQ3F.js";import"./LoadingCell-BAH65k4-.js";import"./ColumnConfigDialog-DWu_2tEl.js";import"./DraggableList-B_KSOXJ-.js";import"./search-DLBTsCln.js";import"./Input-B4mWWySb.js";import"./useControlled-DC0uCH14.js";import"./Button-C_-ilsri.js";import"./small-cross-BvQxV8Bl.js";import"./ActionButton-BYk1HVK3.js";import"./Checkbox-BkOv0Hz_.js";import"./useValueChanged-CeUE21rU.js";import"./CollapsiblePanel-BVS5L9rq.js";import"./MultiColumnSortDialog-BH4prHwb.js";import"./MenuTrigger-Bxh4-y44.js";import"./CompositeItem-CNTLKPeP.js";import"./ToolbarRootContext-BShu1aKH.js";import"./getDisabledMountTransitionStyles-CnHaSZHM.js";import"./getPseudoElementBounds-DWTs3Yu-.js";import"./chevron-down-IfIl88XA.js";import"./index-BXR8oj5v.js";import"./error-DRCC_cDq.js";import"./BaseCbacBanner-CjP1Gp2R.js";import"./makeExternalStore-opb-uo7f.js";import"./Tooltip-BCP2fXUZ.js";import"./PopoverPopup-BSa4WLOz.js";import"./debounce-BJkEGDvv.js";import"./useOsdkClient-1ZwklRfn.js";import"./tick-C4mma9FJ.js";import"./DropdownField-B7GAXqTH.js";import"./isEqual-CoS-PPQL.js";import"./withOsdkMetrics-C5Oq6SEB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
