import{j as i}from"./iframe-DuWBrnX6.js";import{O as p}from"./object-table-NFC3Qe8f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CWLhWVCh.js";import"./preload-helper-DrgdFKpA.js";import"./Table-DvrpjmJ8.js";import"./index-OYdh6lUD.js";import"./Dialog-Cjzk_wQc.js";import"./cross-C8yX_l8v.js";import"./svgIconContainer-DbzEfa2V.js";import"./useBaseUiId-CdjTAmdC.js";import"./InternalBackdrop-qsctjG9Y.js";import"./composite-CJJfU9AF.js";import"./index-BL6aYYYG.js";import"./index-CVjf0aQc.js";import"./index-D_3yv_eh.js";import"./useEventCallback-myN755vz.js";import"./SkeletonBar-D0aUZjHc.js";import"./LoadingCell-CNxlL_rY.js";import"./ColumnConfigDialog-B-yyMbtv.js";import"./DraggableList-BGGltwRT.js";import"./search-D_dtCoIW.js";import"./Input-BkO3X1te.js";import"./useControlled-CfhHYIWN.js";import"./Button-_WXHae0p.js";import"./small-cross-CA-Fa8Tl.js";import"./ActionButton-BA89Y5HO.js";import"./Checkbox-KYSPHyUo.js";import"./useValueChanged-z4RYagBJ.js";import"./CollapsiblePanel-nkH1KYbY.js";import"./MultiColumnSortDialog-D1o5ebId.js";import"./MenuTrigger-CsX-_ldT.js";import"./CompositeItem-BMOplAgs.js";import"./ToolbarRootContext-rla5WBjp.js";import"./getDisabledMountTransitionStyles-Di8yZzl5.js";import"./getPseudoElementBounds-BpxRKDt_.js";import"./chevron-down-C1ZcStCW.js";import"./index-BrPlemdb.js";import"./error-Ch_37QlI.js";import"./BaseCbacBanner-DAytYK1q.js";import"./makeExternalStore-CjwtTBHZ.js";import"./Tooltip-QYTL3AIS.js";import"./PopoverPopup-xFmMVW0q.js";import"./debounce-Jnl0OpEZ.js";import"./useOsdkClient-DJmRQ5Mp.js";import"./tick-BLa43JG6.js";import"./DropdownField-BG1ZRgQZ.js";import"./isEqual-Eg2TaXkJ.js";import"./withOsdkMetrics-DGxRrW5c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
