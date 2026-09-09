import{j as i}from"./iframe-CxIn-rG9.js";import{O as p}from"./object-table-BfEJJ2X7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DoqEz9tK.js";import"./preload-helper-X6xNaBfi.js";import"./Table-CJ2ctgD3.js";import"./index-DFQNuVuF.js";import"./Dialog-UFtp53bO.js";import"./cross-TMn9ETj9.js";import"./svgIconContainer-c9igszEF.js";import"./useBaseUiId-B2Xt2brM.js";import"./InternalBackdrop-Du9CNWbl.js";import"./composite-BqqFykrE.js";import"./index-DDGK9wch.js";import"./index-CC8ad_XL.js";import"./index-Dk7lf_Pd.js";import"./useEventCallback-B1iES3kj.js";import"./SkeletonBar-BBK8X7z7.js";import"./LoadingCell-B3Ij3jGR.js";import"./ColumnConfigDialog-vcj3cdm_.js";import"./DraggableList-Bol2-xJB.js";import"./search-jqi3oncJ.js";import"./Input-DMEekJro.js";import"./useControlled-DojYWrxF.js";import"./Button-B9HFamKv.js";import"./small-cross-BY7zwxBs.js";import"./ActionButton-qIvloGNZ.js";import"./Checkbox-LMTBOVPC.js";import"./useValueChanged-Cykl9Has.js";import"./CollapsiblePanel-LVh3LC_t.js";import"./MultiColumnSortDialog-DEaQClJA.js";import"./MenuTrigger-CfZj9Quh.js";import"./CompositeItem-AwSF7S2C.js";import"./ToolbarRootContext-O9MvMR3V.js";import"./getDisabledMountTransitionStyles-DlmAc0el.js";import"./getPseudoElementBounds-8yyQ5dXu.js";import"./chevron-down-kODRI2uy.js";import"./index-K4d5SQDR.js";import"./error-LS_wz8gU.js";import"./BaseCbacBanner-Bo1wfMOY.js";import"./makeExternalStore-CFux59qT.js";import"./Tooltip-BY1oJx1C.js";import"./PopoverPopup-BndJ4L0f.js";import"./debounce-DN6pYKk6.js";import"./useOsdkClient-BIrOkiuO.js";import"./tick-DnpOCE6f.js";import"./DropdownField-e5290CV8.js";import"./isEqual-CGMN573Q.js";import"./withOsdkMetrics-Ci9E-Vmh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
