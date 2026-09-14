import{j as i}from"./iframe-C3h4Q1BU.js";import{O as p}from"./object-table-DOUB00xj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrrzBGMU.js";import"./preload-helper-CA8PdwhG.js";import"./Table-Dg5mPtzj.js";import"./index-CuMmyLu1.js";import"./Dialog-D6nxx4go.js";import"./cross-B1EMHtko.js";import"./svgIconContainer-DnZbbW9L.js";import"./useBaseUiId-CW_7Ddvm.js";import"./InternalBackdrop-Ba1aCLvg.js";import"./composite-CYiVeAjT.js";import"./index-CLYARYT8.js";import"./index-Xgl-RbZw.js";import"./index-P859LBRx.js";import"./useEventCallback-BLQ3vTi3.js";import"./SkeletonBar-DbGt7hsh.js";import"./LoadingCell-RQH4-_mP.js";import"./ColumnConfigDialog-rPSTeBCf.js";import"./DraggableList-Ds5SHM9Y.js";import"./search-BrzFjKOS.js";import"./Input-LpvjeHcx.js";import"./useControlled-CJNnVZBn.js";import"./Button-CgHUffbd.js";import"./small-cross-hDACPWQm.js";import"./ActionButton-DJigEBZw.js";import"./Checkbox-Civ60MA5.js";import"./useValueChanged-CkdtL1Gi.js";import"./CollapsiblePanel-BsLzX-dh.js";import"./MultiColumnSortDialog-Dvh_FUCg.js";import"./MenuTrigger-Cr6wd-UG.js";import"./CompositeItem-DI8BefCP.js";import"./ToolbarRootContext-AG_e6eyt.js";import"./getDisabledMountTransitionStyles-CAVDLyg8.js";import"./getPseudoElementBounds-Dbgyc2RJ.js";import"./chevron-down-BDOZijvO.js";import"./index-DeSqFGSS.js";import"./error-MSHCVYku.js";import"./BaseCbacBanner-BF4oAh-4.js";import"./makeExternalStore-Bit4WYt1.js";import"./Tooltip-QCUHwQU8.js";import"./PopoverPopup-CiqE5a5D.js";import"./debounce-CUSOW8NM.js";import"./useOsdkClient-BK_OZ78C.js";import"./tick-C54w7HIP.js";import"./DropdownField-TRgvUDZn.js";import"./isEqual-CAOlDPIr.js";import"./withOsdkMetrics-Bf4iaqB8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
