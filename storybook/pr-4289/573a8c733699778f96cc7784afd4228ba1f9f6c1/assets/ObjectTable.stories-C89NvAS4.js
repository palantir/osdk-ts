import{j as i}from"./iframe-DrkKxiw5.js";import{O as p}from"./object-table-bi6_WaNf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BALOYJZu.js";import"./preload-helper-CoexQg1D.js";import"./Table-Cd3VvXH2.js";import"./index-9bu5FaWD.js";import"./Dialog-CLjuVpcT.js";import"./cross-CNIYbi9C.js";import"./svgIconContainer-BwjWYJj_.js";import"./useBaseUiId-NPWMEoN9.js";import"./InternalBackdrop-BHnmo_mI.js";import"./composite-BHNDyYYF.js";import"./index-BR2AMsRx.js";import"./index-YiUJ_53T.js";import"./index-B1tVzWT5.js";import"./useEventCallback-d78tTu5e.js";import"./SkeletonBar-DxwKfUAL.js";import"./LoadingCell-CLJBA_Lo.js";import"./ColumnConfigDialog-BU50e-BB.js";import"./DraggableList-CqrYiCET.js";import"./search-D4-R-e8V.js";import"./Input-DOgtVus-.js";import"./useControlled-BCrFB87J.js";import"./Button-CF-FMXcU.js";import"./small-cross-DmpTk7iL.js";import"./ActionButton-87-LtZRT.js";import"./Checkbox-BvfE16Cx.js";import"./useValueChanged-oqHjTNH5.js";import"./CollapsiblePanel-QmgD0n_V.js";import"./MultiColumnSortDialog-8pTNJexI.js";import"./MenuTrigger-kT5ygFWd.js";import"./CompositeItem-C5ekTE5F.js";import"./ToolbarRootContext-C8q64USb.js";import"./getDisabledMountTransitionStyles-C3Z8Tksw.js";import"./getPseudoElementBounds-BZjeQhGg.js";import"./chevron-down-DsVdM_C_.js";import"./index-0ErCHoJl.js";import"./error-C2HVZj6I.js";import"./BaseCbacBanner-DF6mIH5M.js";import"./makeExternalStore-D4NtYiCX.js";import"./Tooltip-DL2AUsJC.js";import"./PopoverPopup-6cHsVbHZ.js";import"./debounce-tRqZT1XJ.js";import"./useOsdkClient-2K-Ebyul.js";import"./tick-DLXEDZLW.js";import"./DropdownField-BgPaKr2p.js";import"./isEqual-1IpeczsO.js";import"./withOsdkMetrics-LuraraC5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
