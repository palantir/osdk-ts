import{j as i}from"./iframe-CNG5tC4E.js";import{O as p}from"./object-table-BOd4bNEI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DM5hQLGc.js";import"./preload-helper-BwzygQFT.js";import"./Table-D74BbjII.js";import"./index-CSa6QMaP.js";import"./Dialog-T-sepZ_N.js";import"./cross-BUDfzWsm.js";import"./svgIconContainer-fYOu3R0h.js";import"./useBaseUiId-UgguMUEz.js";import"./InternalBackdrop-BMt6raWI.js";import"./composite-dppvJbki.js";import"./index-D7WVWh6p.js";import"./index-CdYyMgNT.js";import"./index-Bytqi1Vm.js";import"./useEventCallback-Br9KnRIl.js";import"./SkeletonBar-BY6fJEjv.js";import"./LoadingCell-BTx5sKo1.js";import"./ColumnConfigDialog-Beno6DGI.js";import"./DraggableList-MozURoG1.js";import"./search-B5Nc1pS1.js";import"./Input-60lh5u04.js";import"./useControlled-BH2W_bUS.js";import"./Button-DGS3jG4k.js";import"./small-cross-CIhqDCWy.js";import"./ActionButton-DVkCa7v6.js";import"./Checkbox-DCN4bfky.js";import"./useValueChanged-FvlQ6ZaE.js";import"./CollapsiblePanel-CU8OOO_g.js";import"./MultiColumnSortDialog-tn20GzQf.js";import"./MenuTrigger-LPCA29_L.js";import"./CompositeItem-xBsV_YGf.js";import"./ToolbarRootContext-DSeyjEFW.js";import"./getDisabledMountTransitionStyles-B54BYyIC.js";import"./getPseudoElementBounds-SWuPJwgN.js";import"./chevron-down-C5OyQZRE.js";import"./index-D0ktSt50.js";import"./error-CwmCTB3X.js";import"./BaseCbacBanner-CSBao_aF.js";import"./makeExternalStore-BmYZSn43.js";import"./Tooltip-5ba-iiu0.js";import"./PopoverPopup-D4G6ixdl.js";import"./debounce-BIRiwTpe.js";import"./useOsdkClient-OgKnvKuq.js";import"./tick-Cp6vA-dB.js";import"./DropdownField-CnbohUMi.js";import"./isEqual-DRoNdyQB.js";import"./withOsdkMetrics-DclC6FPN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
