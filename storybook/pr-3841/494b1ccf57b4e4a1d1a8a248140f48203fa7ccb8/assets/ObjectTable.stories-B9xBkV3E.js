import{j as i}from"./iframe-hmluRZS5.js";import{O as p}from"./object-table-CONt86Aj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BGBno1DZ.js";import"./preload-helper-DlYZq8_X.js";import"./Table-BgJ9BZ78.js";import"./index-DlmwBpMI.js";import"./Dialog-Dv_N4vZX.js";import"./cross-CF7Ek918.js";import"./svgIconContainer-Cr9UBTnz.js";import"./useBaseUiId-Ce6hVQyf.js";import"./InternalBackdrop-Di9g7CqC.js";import"./composite-Cz3P8fmc.js";import"./index-eMB_Bo_f.js";import"./index-Bc2sNs6_.js";import"./index-BK3acCXu.js";import"./useEventCallback-BdILOtut.js";import"./SkeletonBar-BBfDZCsO.js";import"./LoadingCell-PyopswjO.js";import"./ColumnConfigDialog-Bp9aFBFm.js";import"./DraggableList-UHVJUl4j.js";import"./search-CyNzQTjU.js";import"./Input-uUNDzlAG.js";import"./useControlled-CWtQ2etk.js";import"./Button-UcoIXCLv.js";import"./small-cross-DpGTHJxS.js";import"./ActionButton-BKy_pzqj.js";import"./Checkbox-BySPL-Yn.js";import"./useValueChanged-CzefFM-U.js";import"./CollapsiblePanel-D12S4ZDi.js";import"./MultiColumnSortDialog-D-iCjK2K.js";import"./MenuTrigger-F11Vn7_-.js";import"./CompositeItem-Bger7i4K.js";import"./ToolbarRootContext-BviESwyl.js";import"./getDisabledMountTransitionStyles-DeVJ0eo9.js";import"./getPseudoElementBounds-DrhntXY7.js";import"./chevron-down-BV1ESAvw.js";import"./index-CYwmlkYY.js";import"./error-B495uG_z.js";import"./BaseCbacBanner-Zj8kZ8T9.js";import"./makeExternalStore-DOooQeVW.js";import"./Tooltip-CkY5JgKY.js";import"./PopoverPopup-CFU_wLXE.js";import"./debounce-DA5oIsgA.js";import"./useOsdkClient-CWJVsVp6.js";import"./tick-QOD6m0sZ.js";import"./DropdownField-D2ft0pJb.js";import"./isEqual-DaXwjBhd.js";import"./withOsdkMetrics-BsviGqu5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
