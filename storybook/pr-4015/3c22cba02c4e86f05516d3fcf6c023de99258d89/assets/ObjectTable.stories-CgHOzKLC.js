import{j as i}from"./iframe-ME9jEV4B.js";import{O as p}from"./object-table-DZvMa9AR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZWWH8kO.js";import"./preload-helper-CAlbxuMw.js";import"./Table-DarKb3zl.js";import"./index-BwQPjFr5.js";import"./Dialog-CohVxkkM.js";import"./cross-BDVa-Vs8.js";import"./svgIconContainer-C0iDRr5R.js";import"./useBaseUiId-BRBkTzbz.js";import"./InternalBackdrop-w_eWpjif.js";import"./composite-DGm-qDkX.js";import"./index-BfDcgSaT.js";import"./index-By_4WpJv.js";import"./index-D8F1bo2b.js";import"./useEventCallback-DhdZk0w1.js";import"./SkeletonBar-M59GNBZ4.js";import"./LoadingCell-BoyYep22.js";import"./ColumnConfigDialog-ClXNNF41.js";import"./DraggableList-Dr5DtKR-.js";import"./search-Dg6pBwm_.js";import"./Input-CE0w_ENc.js";import"./useControlled-BiaTOKvQ.js";import"./Button-Da4t_kgJ.js";import"./small-cross-D6DBal5p.js";import"./ActionButton-CEmm2wPj.js";import"./Checkbox-D8y-Sj5L.js";import"./useValueChanged-hB8TkC-G.js";import"./CollapsiblePanel-DquoQgDU.js";import"./MultiColumnSortDialog-s4qegvXX.js";import"./MenuTrigger-BG3JFXMo.js";import"./CompositeItem-CxooWEv2.js";import"./ToolbarRootContext-DM1MG67c.js";import"./getDisabledMountTransitionStyles-CzotrHFI.js";import"./getPseudoElementBounds-DGRmUR-d.js";import"./chevron-down-6_LddkfR.js";import"./index-D7oNMiqq.js";import"./error-Y3Mhwjiz.js";import"./BaseCbacBanner-Lj1wfOnk.js";import"./makeExternalStore-DFLhgaAs.js";import"./Tooltip-BEcZHd4g.js";import"./PopoverPopup-DfqLPctH.js";import"./debounce-BRk1tey9.js";import"./useOsdkClient-Dx8qUr5J.js";import"./tick-BEcsmCA5.js";import"./DropdownField-CaUmxcLV.js";import"./isEqual-js4cgbNJ.js";import"./withOsdkMetrics-DcyxtP_A.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
