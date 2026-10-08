import{j as i}from"./iframe-COeKHpt9.js";import{O as p}from"./object-table-B7sLdCml.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CGJe4MxQ.js";import"./preload-helper-BpPSpj7h.js";import"./Table-CKDpWHE2.js";import"./index--VOZVAr7.js";import"./Dialog-ugSz7x-T.js";import"./cross-D5gXcdmB.js";import"./svgIconContainer-DtZ0wDAF.js";import"./useBaseUiId-AZYk0Vbu.js";import"./InternalBackdrop-QLXBjkD3.js";import"./composite-DvaIADEs.js";import"./index-vOPTDT5X.js";import"./index-Crl2o2c4.js";import"./index-Ds0VFbur.js";import"./useEventCallback-BWCgnPIj.js";import"./SkeletonBar-V0L810li.js";import"./LoadingCell-AkIQZmI8.js";import"./ColumnConfigDialog-OTyAWIPh.js";import"./DraggableList-p7orBze4.js";import"./search-CcRznbWc.js";import"./Input-BgvgMSkQ.js";import"./useControlled-Bj6n9A7a.js";import"./Button-BcUZxYUb.js";import"./small-cross-6sOeNBT7.js";import"./ActionButton-BZHW0fe2.js";import"./Checkbox-oh6Y4Pmu.js";import"./useValueChanged-D7ycyibz.js";import"./CollapsiblePanel-y0qJ1Rd6.js";import"./MultiColumnSortDialog-BpicA9j5.js";import"./MenuTrigger-xJcTAVaC.js";import"./CompositeItem-Dt_9zGFK.js";import"./ToolbarRootContext-DpPmKmnD.js";import"./getDisabledMountTransitionStyles-BWgLfYBf.js";import"./getPseudoElementBounds-CH-q1Mo7.js";import"./chevron-down-BCN0Zf9y.js";import"./index-ImvirjPY.js";import"./error-cky3iDMt.js";import"./BaseCbacBanner-DyCm4eZr.js";import"./makeExternalStore-BnwQyhvv.js";import"./Tooltip-JasgHE7P.js";import"./PopoverPopup-Bmo2uNMt.js";import"./debounce-DGv_zF9U.js";import"./useOsdkClient-0CShZdbB.js";import"./tick-C0ONndDH.js";import"./DropdownField-C5e04fQa.js";import"./isEqual-DF53lAS-.js";import"./withOsdkMetrics-b9tLwYR2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
