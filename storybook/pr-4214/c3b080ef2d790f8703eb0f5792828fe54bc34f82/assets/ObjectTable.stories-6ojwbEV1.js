import{j as i}from"./iframe-5HuVSaDQ.js";import{O as p}from"./object-table-aRFFd-Hf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Z8kU74qw.js";import"./preload-helper-CfrIZ5Cf.js";import"./Table-CLEmuWD1.js";import"./index-DjoqjxLj.js";import"./Dialog-BLwSe6up.js";import"./cross-Fbd8rPWM.js";import"./svgIconContainer-CilU-cRt.js";import"./useBaseUiId-DUhNtAkB.js";import"./InternalBackdrop-qL7awpYB.js";import"./composite-BgONfLPA.js";import"./index-HPsAfhDB.js";import"./index--ZjbYOmd.js";import"./index-B1NpA2Ke.js";import"./useEventCallback-CcusE86W.js";import"./SkeletonBar-DKI9Ld3o.js";import"./LoadingCell-YFNbRY7v.js";import"./ColumnConfigDialog-CE9zLgfO.js";import"./DraggableList-ByUPeDhx.js";import"./search-Cj2_GDbi.js";import"./Input-LKVNjJW6.js";import"./useControlled-DSyajAtW.js";import"./Button-DOSN-M_K.js";import"./small-cross-Dmab4i0O.js";import"./ActionButton-CeiHGQTe.js";import"./Checkbox-BQqfj-a3.js";import"./useValueChanged-DFA8OMKn.js";import"./CollapsiblePanel-DRekZkpH.js";import"./MultiColumnSortDialog-Bxx_fdi8.js";import"./MenuTrigger-tdiXxLH2.js";import"./CompositeItem-zoxZc06w.js";import"./ToolbarRootContext-BJk-KcZN.js";import"./getDisabledMountTransitionStyles-Dh8ST-vn.js";import"./getPseudoElementBounds-DEmyDmHB.js";import"./chevron-down-DpQjt-J8.js";import"./index-vB4c4Qg2.js";import"./error-CMmWSsIq.js";import"./BaseCbacBanner-wU2zVb6a.js";import"./makeExternalStore-CgO7rqjT.js";import"./Tooltip-ClzZDh1Z.js";import"./PopoverPopup-DIoQ4is4.js";import"./debounce-Cfvf-nRd.js";import"./useOsdkClient-DRBxpjGK.js";import"./tick-CLH4usX-.js";import"./DropdownField-Ck4UJuFu.js";import"./isEqual-DxWPYGAf.js";import"./withOsdkMetrics-CADXJLOh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
