import{j as i}from"./iframe-vYDcoh77.js";import{O as p}from"./object-table-C88r-WHY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DYpeukaM.js";import"./preload-helper-DSINEazd.js";import"./Table-DssIb2XA.js";import"./index-Dvlndinu.js";import"./Dialog-Di5B1QLo.js";import"./cross-Bh3JhpLG.js";import"./svgIconContainer-DRRBBWTo.js";import"./useBaseUiId-D0wGlEuT.js";import"./InternalBackdrop-Bmbg-Qqi.js";import"./composite-CbGeFR41.js";import"./index-CnEHE-8v.js";import"./index-k5xDOMrk.js";import"./index-SN9c52dU.js";import"./useEventCallback-HvgQ2Jp9.js";import"./SkeletonBar-DDd9jroq.js";import"./LoadingCell-BOe9IZBL.js";import"./ColumnConfigDialog-8IXi2hA2.js";import"./DraggableList-S-kgc1zg.js";import"./search-BbY6TLBc.js";import"./Input-D4hoKYSh.js";import"./useControlled-9JxLuZTe.js";import"./Button-C4utuT7d.js";import"./small-cross-DXqEeC7m.js";import"./ActionButton-CEGBUekT.js";import"./Checkbox-CSVANSDS.js";import"./useValueChanged-DvGgnr1I.js";import"./CollapsiblePanel-ClbxZsmn.js";import"./MultiColumnSortDialog-CFwnfwMI.js";import"./MenuTrigger-Bkb6t9HP.js";import"./CompositeItem-tKjm3ITX.js";import"./ToolbarRootContext-DC4Rn718.js";import"./getDisabledMountTransitionStyles-CPDXZ_d3.js";import"./getPseudoElementBounds-D-Q4b5_k.js";import"./chevron-down-DE4Yil-_.js";import"./index-C4jC_mo-.js";import"./error-BQSdaUYK.js";import"./BaseCbacBanner-B-S-FPnG.js";import"./makeExternalStore-C5vRMRFb.js";import"./Tooltip-7NXZ14u1.js";import"./PopoverPopup-Cgz3LCEw.js";import"./debounce-DUf2Feva.js";import"./useOsdkClient-Bc2tSKuP.js";import"./tick-CryZzvkg.js";import"./DropdownField-CfMw9HLs.js";import"./isEqual-B7tlXMU_.js";import"./withOsdkMetrics-o2mYvA2y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
