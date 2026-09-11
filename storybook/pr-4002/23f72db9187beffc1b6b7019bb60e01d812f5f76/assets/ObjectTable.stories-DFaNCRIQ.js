import{j as i}from"./iframe-BDntCMEH.js";import{O as p}from"./object-table-DkahZF98.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLwYgm-O.js";import"./preload-helper-B50VuOmN.js";import"./Table-I_BYhXVu.js";import"./index-B0z8RHyd.js";import"./Dialog-DkKixsHY.js";import"./cross-BH8OF0Bn.js";import"./svgIconContainer-B6ralbiB.js";import"./useBaseUiId-BTqLhW0i.js";import"./InternalBackdrop-3bsfmQ8K.js";import"./composite-BQ7qlaUQ.js";import"./index-CX_hrFB8.js";import"./index-BOofLcNJ.js";import"./index-BBkRPYMA.js";import"./useEventCallback-CJ1ECKuN.js";import"./SkeletonBar-DhuVeAjE.js";import"./LoadingCell-B4T88guZ.js";import"./ColumnConfigDialog-BBIUIVmY.js";import"./DraggableList-CIf_sqx2.js";import"./search-CYEButG9.js";import"./Input-CXpC2-sJ.js";import"./useControlled-B173rJPI.js";import"./Button-Bpn7C7dn.js";import"./small-cross-Ctkk7cRd.js";import"./ActionButton-t5HQKASd.js";import"./Checkbox-BAC3zYHO.js";import"./useValueChanged-DfkXLlVn.js";import"./CollapsiblePanel-DwIUcnuv.js";import"./MultiColumnSortDialog-F9a2YiSr.js";import"./MenuTrigger-4e4OHRuu.js";import"./CompositeItem-BTJTpSwe.js";import"./ToolbarRootContext-C8N9jA7J.js";import"./getDisabledMountTransitionStyles-karZ8d_E.js";import"./getPseudoElementBounds-C0nyJPqP.js";import"./chevron-down-BxBh9Dqz.js";import"./index-BQKiMfv1.js";import"./error-CAncZcqv.js";import"./BaseCbacBanner-CrHhWkuw.js";import"./makeExternalStore-j3YsZMxz.js";import"./Tooltip-zHG5lzOj.js";import"./PopoverPopup-C4ooFr_6.js";import"./debounce-CkhlBaHF.js";import"./useOsdkClient-R1XeaFqw.js";import"./tick-Dc8_NDDZ.js";import"./DropdownField-B9EyhDn4.js";import"./isEqual-Yrh3LO4w.js";import"./withOsdkMetrics-DaoCVVMK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
