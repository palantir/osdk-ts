import{j as i}from"./iframe-BdttGBHS.js";import{O as p}from"./object-table-Y0-LmSTW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DJ0kPZGc.js";import"./preload-helper-D52nztRO.js";import"./Table-7aW1jsV9.js";import"./index-fJrMVTua.js";import"./Dialog-CmQpnMcQ.js";import"./cross-B_ladZW0.js";import"./svgIconContainer-d3TxlLsS.js";import"./useBaseUiId-TpOnm0ph.js";import"./InternalBackdrop-BKguS2Kk.js";import"./composite-D2FhvqPV.js";import"./index-DUfIyUAM.js";import"./index-CGhVKo7Q.js";import"./index-_owIjaTD.js";import"./useEventCallback-4P5Ay0yC.js";import"./SkeletonBar-qQ9RfzOd.js";import"./LoadingCell-B-qtd_Ox.js";import"./ColumnConfigDialog-L2W4GnW_.js";import"./DraggableList-D7JjGds3.js";import"./search-SHaXv7OY.js";import"./Input-DYv89jnk.js";import"./useControlled-BCWd1xNc.js";import"./Button-DZ1LePF0.js";import"./small-cross-BJGr41n-.js";import"./ActionButton-Dmk_UwrT.js";import"./Checkbox-mVv099PS.js";import"./useValueChanged-D80KuDSO.js";import"./CollapsiblePanel-C84l9NlQ.js";import"./MultiColumnSortDialog-CKEvegV7.js";import"./MenuTrigger-Dzy_UVZ4.js";import"./CompositeItem-BUi6sRIo.js";import"./ToolbarRootContext-CKT8QuMl.js";import"./getDisabledMountTransitionStyles-B8ZFHD1C.js";import"./getPseudoElementBounds-CrUTQ61q.js";import"./chevron-down-CX5I5Ird.js";import"./index-RDL0QRGf.js";import"./error-CHI3XqLV.js";import"./BaseCbacBanner-CVMZJw73.js";import"./makeExternalStore-Ds9BSHVT.js";import"./Tooltip-Ca055HLw.js";import"./PopoverPopup-DwBF8-Mm.js";import"./debounce-Qe34k2W1.js";import"./useOsdkClient-Bl7ygr-X.js";import"./tick-BLwK45wE.js";import"./DropdownField-C8hF0Jpu.js";import"./isEqual-DVqjVJt3.js";import"./withOsdkMetrics-BQHwLSj1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
