import{j as i}from"./iframe-DNerilao.js";import{O as p}from"./object-table-Ddu8P3lV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8a-HVqV.js";import"./preload-helper-WYz0P8cg.js";import"./Table-B6btHYvr.js";import"./index-UbhKAx_n.js";import"./Dialog-B3nn5uUX.js";import"./cross-CVNZ4V9L.js";import"./svgIconContainer-3RPFCLDD.js";import"./useBaseUiId-C28jYwd5.js";import"./InternalBackdrop-Cus3nU-E.js";import"./composite-DxCnjG5P.js";import"./index-BEpimtGK.js";import"./index-DW0TONpD.js";import"./index-Dm3y5sdg.js";import"./useEventCallback-DPU3s-wr.js";import"./SkeletonBar-DDQ6_G8g.js";import"./LoadingCell-egB3v6uB.js";import"./ColumnConfigDialog-1cW1mEGU.js";import"./DraggableList-DwxlEsps.js";import"./search-Cct-baVl.js";import"./Input-Dmwb3bCD.js";import"./useControlled-BeDJM6mu.js";import"./isEqual-CQxno1d7.js";import"./isObject-DUGnZj1p.js";import"./Button-C82OcTXa.js";import"./ActionButton-CnUu2kxN.js";import"./Checkbox-BpdbYrjg.js";import"./useValueChanged-D49W-h_t.js";import"./CollapsiblePanel-EFO2eQBO.js";import"./MultiColumnSortDialog-vg5TyA02.js";import"./MenuTrigger-B0wYFE8g.js";import"./CompositeItem-Br2r_HtI.js";import"./ToolbarRootContext-E7gsUtdU.js";import"./getDisabledMountTransitionStyles-DLlmypTn.js";import"./getPseudoElementBounds-tOVfKU3-.js";import"./chevron-down-BkPpJX9T.js";import"./index-BB87TWEZ.js";import"./error-D1U1Mhs7.js";import"./BaseCbacBanner-CMoWbRAT.js";import"./makeExternalStore-B9VO-zPd.js";import"./Tooltip-DRpNHLk-.js";import"./PopoverPopup-CcFSqCWf.js";import"./toNumber-DrXZ7Hge.js";import"./useOsdkClient-DYiYcc_i.js";import"./tick-CNb3mBg-.js";import"./DropdownField-B1G0Thjb.js";import"./withOsdkMetrics-iOKaPPya.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
