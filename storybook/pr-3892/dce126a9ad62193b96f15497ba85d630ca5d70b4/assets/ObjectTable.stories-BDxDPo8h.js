import{j as i}from"./iframe-Cjl6pIXM.js";import{O as p}from"./object-table-C5wUUf6H.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dw3r22pO.js";import"./preload-helper-ezBh--Yr.js";import"./Table-HtOX_Zds.js";import"./index-nWF7o5I3.js";import"./Dialog-vaNoy1Ni.js";import"./cross-C6Wnpl4f.js";import"./svgIconContainer-BIGcTem8.js";import"./useBaseUiId-CIUrQjM5.js";import"./InternalBackdrop-E6QkGXBh.js";import"./composite-CSFuaGEl.js";import"./index-CvQTdrcx.js";import"./index-wBonjv3U.js";import"./index-B8TidmZn.js";import"./useEventCallback-Be4lFJqY.js";import"./SkeletonBar-C6XzUOHz.js";import"./LoadingCell-B4cWFoWh.js";import"./ColumnConfigDialog-DMVfZVMY.js";import"./DraggableList-w1sfBb1U.js";import"./search-B0QVdf5C.js";import"./Input-By7ENoXN.js";import"./useControlled-CLbZj6xc.js";import"./Button-Dq2yQQ1D.js";import"./small-cross-DQntl9zq.js";import"./ActionButton-CVqXGMBk.js";import"./Checkbox-B09x16pJ.js";import"./useValueChanged-CWal0wZX.js";import"./CollapsiblePanel-D_NOfXCt.js";import"./MultiColumnSortDialog-KQSySUEb.js";import"./MenuTrigger-mVDB8gok.js";import"./CompositeItem-BdjQ3x20.js";import"./ToolbarRootContext-YT_m9B5L.js";import"./getDisabledMountTransitionStyles-DLd4dts7.js";import"./getPseudoElementBounds-2s7Inf1W.js";import"./chevron-down-z7gQuHi2.js";import"./index-DxUk46hk.js";import"./error-BeMd-CqJ.js";import"./BaseCbacBanner-DvKnURtP.js";import"./makeExternalStore--4ZQvYdt.js";import"./Tooltip-Dqwh4OEI.js";import"./PopoverPopup-B3bKQ-2O.js";import"./debounce-Co3YNhbE.js";import"./useOsdkClient-CO1OiFv7.js";import"./tick-DK_NXSKS.js";import"./DropdownField-BKwKAV3h.js";import"./isEqual-CnpYb7jD.js";import"./withOsdkMetrics-6LH9jlrw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
