import{j as i}from"./iframe-B5ExBQzJ.js";import{O as p}from"./object-table-B0k_xkOT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C881_qF5.js";import"./preload-helper-BKpiLxff.js";import"./Table-BWgsx_0G.js";import"./index-CitCcLFV.js";import"./Dialog-U68Mf7uS.js";import"./cross-DAA3CpVw.js";import"./svgIconContainer-BLHh5YtK.js";import"./useBaseUiId-DRK3uSj0.js";import"./InternalBackdrop-CXeFT0x7.js";import"./composite-DB1LtyAr.js";import"./index-BTZGq7CS.js";import"./index-Kx0JXijT.js";import"./index-BlZrfUUz.js";import"./useEventCallback-CC_Hvq0-.js";import"./SkeletonBar-lTk1X37B.js";import"./LoadingCell-D_kXDilO.js";import"./ColumnConfigDialog-DpeJ6_jU.js";import"./DraggableList-BeEiQJY7.js";import"./search-l8XKRmqF.js";import"./Input-CsmEMiLS.js";import"./useControlled-CcsA4hDD.js";import"./Button-Dzl2Qrvs.js";import"./small-cross-DS1fUEUb.js";import"./ActionButton-c7S57ORf.js";import"./Checkbox-DT0cSq--.js";import"./useValueChanged-DuMoPshe.js";import"./CollapsiblePanel-DJbTbmJG.js";import"./MultiColumnSortDialog-C0uzlXkV.js";import"./MenuTrigger-BmLiWDTm.js";import"./CompositeItem-BnzcVROn.js";import"./ToolbarRootContext-Cs8zUWV2.js";import"./getDisabledMountTransitionStyles-Cah6dQkJ.js";import"./getPseudoElementBounds-BKrQcy0D.js";import"./chevron-down-DY2jF6xe.js";import"./index-DaOoM8bo.js";import"./error-HO3Aksfc.js";import"./BaseCbacBanner-BCxrm39X.js";import"./makeExternalStore-B8gDjOBd.js";import"./Tooltip-C7hu51fY.js";import"./PopoverPopup-BAey6XRt.js";import"./debounce-nCAvZ_Bc.js";import"./useOsdkClient-B7gokOKi.js";import"./tick-Cr4ru6YE.js";import"./DropdownField-CuMiPFGz.js";import"./isEqual-CwzWnB9G.js";import"./withOsdkMetrics-CwxP9zXD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
