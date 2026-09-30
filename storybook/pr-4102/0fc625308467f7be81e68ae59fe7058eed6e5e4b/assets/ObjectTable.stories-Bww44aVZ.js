import{j as i}from"./iframe-DfWRDQYW.js";import{O as p}from"./object-table-0ELPGqBW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CHSVN8Ib.js";import"./preload-helper-DztOS3mh.js";import"./Table-1X9IgMXG.js";import"./index-V0duYaOI.js";import"./Dialog-C4bIPlLo.js";import"./cross-MjnJnae7.js";import"./svgIconContainer-Djmd0i7i.js";import"./useBaseUiId-CnljwGyr.js";import"./InternalBackdrop-DoRzr-yp.js";import"./composite-BvmRb9Ju.js";import"./index-BhBX8uvN.js";import"./index-DMKrGJHK.js";import"./index-DYScCha7.js";import"./useEventCallback-CYayy9CC.js";import"./SkeletonBar-CySSdz1h.js";import"./LoadingCell-DAkz6DbJ.js";import"./ColumnConfigDialog-U4Rq4-2Y.js";import"./DraggableList-RGn9snj7.js";import"./search-Dxbg6ZmT.js";import"./Input-DIDbgdBf.js";import"./useControlled-DFU1H8fZ.js";import"./Button-OSZ8RwgD.js";import"./small-cross-njJyO2z5.js";import"./ActionButton-B83nj9fh.js";import"./Checkbox-YVP5nlwK.js";import"./useValueChanged-BHeWLU1X.js";import"./CollapsiblePanel-BDCG0rsw.js";import"./MultiColumnSortDialog-Bc2CB9nf.js";import"./MenuTrigger-Do_XoF9D.js";import"./CompositeItem-Bp9WguhV.js";import"./ToolbarRootContext-DK75y1Fb.js";import"./getDisabledMountTransitionStyles-C83yZKEJ.js";import"./getPseudoElementBounds-C114fu7w.js";import"./chevron-down-DTtuRFlq.js";import"./index-BPZ3Sv03.js";import"./error-D9hH3fxG.js";import"./BaseCbacBanner-BUUHlDXj.js";import"./makeExternalStore-CSrQpL3l.js";import"./Tooltip-DfRWn6Xg.js";import"./PopoverPopup-DdFaHp8R.js";import"./debounce-Ci0e7f6p.js";import"./useOsdkClient-ClcuriQB.js";import"./tick-BjABB7E4.js";import"./DropdownField-BWEIQf9x.js";import"./isEqual-C6a_kdYK.js";import"./withOsdkMetrics-BqT8ORay.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
