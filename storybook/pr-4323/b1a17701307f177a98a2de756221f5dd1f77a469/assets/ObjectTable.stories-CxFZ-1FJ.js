import{j as i}from"./iframe--rHM778H.js";import{O as p}from"./object-table-DEvcxJSc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DXMpL-nk.js";import"./preload-helper-DpVBsV2L.js";import"./Table-BbpbHFt5.js";import"./index-BElFIwyB.js";import"./Dialog-7ZP0B0yF.js";import"./cross-CHXgNJax.js";import"./svgIconContainer-CjX9_w9R.js";import"./useBaseUiId-BT7Lgjzv.js";import"./InternalBackdrop-DHyESATu.js";import"./composite-CaRBo0mp.js";import"./index-B1NiRkYf.js";import"./index-D6fdAiU5.js";import"./index-CtcclfAS.js";import"./useEventCallback-CtvvOJjW.js";import"./SkeletonBar-CS_pei9f.js";import"./LoadingCell-D_OgPP-l.js";import"./ColumnConfigDialog-DR2lvB79.js";import"./DraggableList-Ck4YH1Wg.js";import"./search-ZsY-Nyc_.js";import"./Input-DqZJVW1Y.js";import"./useControlled-BERkl8jy.js";import"./Button-BOD28ASd.js";import"./small-cross-C70aYTmZ.js";import"./ActionButton-DK8p2X8j.js";import"./Checkbox-D5krlzgT.js";import"./useValueChanged-DvGNLe7a.js";import"./CollapsiblePanel-BPc-B49G.js";import"./MultiColumnSortDialog-odHCG5KR.js";import"./MenuTrigger-DyAGSfdx.js";import"./CompositeItem-5osJRFVq.js";import"./ToolbarRootContext-DNOQmnhU.js";import"./getDisabledMountTransitionStyles-DLn2tUEn.js";import"./getPseudoElementBounds-e0hNXxT9.js";import"./chevron-down-BlvURY3l.js";import"./index-CmizMsna.js";import"./error-CPHhJfnm.js";import"./BaseCbacBanner-B7-jqhl-.js";import"./makeExternalStore-CUNRgSrC.js";import"./Tooltip-DkjIu7bG.js";import"./PopoverPopup-DL06cZLQ.js";import"./debounce-CUpiJ6Vz.js";import"./useOsdkClient-CuCdO7SN.js";import"./tick-Bcv5PjwQ.js";import"./DropdownField-2stvnYri.js";import"./isEqual-BRXdJPDE.js";import"./withOsdkMetrics-DWwTgGIe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
