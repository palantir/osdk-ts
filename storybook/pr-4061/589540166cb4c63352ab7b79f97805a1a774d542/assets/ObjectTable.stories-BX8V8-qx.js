import{j as i}from"./iframe-BDa8Fqup.js";import{O as p}from"./object-table-Duo4lg5d.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CkXTINsL.js";import"./preload-helper-C9_zurnG.js";import"./Table-CYQF5AUo.js";import"./index-pjqeNj_i.js";import"./Dialog-Cg2CTckf.js";import"./cross-CptJAf1F.js";import"./svgIconContainer-DdVraw0H.js";import"./useBaseUiId-XTCdzLB-.js";import"./InternalBackdrop-DZXQO9MH.js";import"./composite-DOKDZZ1y.js";import"./index-DR8p4qUn.js";import"./index-DCtmNJWH.js";import"./index-eQmTP4uG.js";import"./useEventCallback-DxebTLhO.js";import"./SkeletonBar-B9ofcDWv.js";import"./LoadingCell-mSFIIUsp.js";import"./ColumnConfigDialog-5KpxiMi7.js";import"./DraggableList-Dc_2VXM_.js";import"./search-DMOASIyP.js";import"./Input-mz3axp_m.js";import"./useControlled-C8kqLhB2.js";import"./Button-By4eZEsF.js";import"./small-cross-nilyHMIW.js";import"./ActionButton-D3yPDPia.js";import"./Checkbox-ufrAG11y.js";import"./useValueChanged-CtmzMV14.js";import"./CollapsiblePanel-IYSRIgVb.js";import"./MultiColumnSortDialog-BkbEvvPV.js";import"./MenuTrigger-CNymGcQW.js";import"./CompositeItem-CxqNqspP.js";import"./ToolbarRootContext-bJCZq9fk.js";import"./getDisabledMountTransitionStyles-DcsKWw9B.js";import"./getPseudoElementBounds-B0Ifv5Xb.js";import"./chevron-down-XbIjVc8V.js";import"./index-CO6Kit7T.js";import"./error-DaHq0ZVm.js";import"./BaseCbacBanner-DHOrp7Nv.js";import"./makeExternalStore-CrFgIlYD.js";import"./Tooltip-BM2piRgB.js";import"./PopoverPopup-DGGaNiSQ.js";import"./debounce-OmcTsIux.js";import"./useOsdkClient-CB0wGX_k.js";import"./tick-SdtlPGo8.js";import"./DropdownField-SuU-thQx.js";import"./isEqual-DQMBMUOS.js";import"./withOsdkMetrics-VckxLh6W.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
