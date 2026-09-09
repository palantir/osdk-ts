import{j as i}from"./iframe-CSNnL1Y0.js";import{O as p}from"./object-table-DrZtU1b5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DvdwvuHR.js";import"./preload-helper-PMc3ZHFF.js";import"./Table-B-CWlgGW.js";import"./index-DNTkQvxm.js";import"./Dialog-VL2ZkQk7.js";import"./cross-Bg_IlbQu.js";import"./svgIconContainer-CM8I1f8r.js";import"./useBaseUiId-pX-EM4Dz.js";import"./InternalBackdrop-B8dtNrQn.js";import"./composite-BlH-_uKm.js";import"./index-BzmaCTEY.js";import"./index-CIw5v7jp.js";import"./index-sKOwD7Lf.js";import"./useEventCallback-D15AXOzW.js";import"./SkeletonBar-CzJzlOLW.js";import"./LoadingCell-ByXqEWok.js";import"./ColumnConfigDialog-YcnoWLiU.js";import"./DraggableList-C268AYO6.js";import"./search-BPPJCzpv.js";import"./Input-bh0XwuT_.js";import"./useControlled-CLpZ-2U1.js";import"./Button-B6Txaqgo.js";import"./small-cross-D9O7TL9e.js";import"./ActionButton-B5fjrdh8.js";import"./Checkbox-8nyxSN9Y.js";import"./useValueChanged-DcOG8dba.js";import"./CollapsiblePanel-QQw2ylt-.js";import"./MultiColumnSortDialog-BXJtnpCu.js";import"./MenuTrigger-CjuSuj7u.js";import"./CompositeItem-DxYljjwU.js";import"./ToolbarRootContext-DVTpeAWc.js";import"./getDisabledMountTransitionStyles-CxBhjcps.js";import"./getPseudoElementBounds-DvtLYcgZ.js";import"./chevron-down-BBAfQF9b.js";import"./index-CP8GV_wH.js";import"./error-BFicHv-u.js";import"./BaseCbacBanner-B9xwQlPo.js";import"./makeExternalStore-19MZWFoq.js";import"./Tooltip-59zWJjq9.js";import"./PopoverPopup-DtGqPexC.js";import"./debounce-BzipLUSU.js";import"./useOsdkClient-CLYLA36V.js";import"./tick-Cl0RaH8k.js";import"./DropdownField-QGFslIVN.js";import"./isEqual-DQCqzWyC.js";import"./withOsdkMetrics-DmF4idxC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
