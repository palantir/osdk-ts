import{j as i}from"./iframe-DvwH42FA.js";import{O as p}from"./object-table-Jb6gGdnE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BV8A4oC-.js";import"./preload-helper-DEybsrDJ.js";import"./Table-DGDNG_pz.js";import"./index-J26QqFGl.js";import"./Dialog-DI_hpK08.js";import"./cross-BN0lcpY0.js";import"./svgIconContainer-BNUkj3Pd.js";import"./useBaseUiId-tOAOUQiJ.js";import"./InternalBackdrop-C9rZ6hh4.js";import"./composite-D2TyNObR.js";import"./index-BdNMK7Gf.js";import"./index-B7x2aIOS.js";import"./index-BMcLikr0.js";import"./useEventCallback-jKMhLcqs.js";import"./SkeletonBar-BmJJEjRs.js";import"./LoadingCell-Dy5tHWdn.js";import"./ColumnConfigDialog-Dwjj2Hie.js";import"./DraggableList-DOZz2szn.js";import"./search-Cl4hDVdp.js";import"./Input-CtJ7UKD6.js";import"./useControlled-BhMAv1ps.js";import"./Button-C8MB2pGs.js";import"./small-cross-DfjEbz9b.js";import"./ActionButton-BHPoqNul.js";import"./Checkbox-02j38gX7.js";import"./useValueChanged-BDGiJFuk.js";import"./CollapsiblePanel-gRNf6Seh.js";import"./MultiColumnSortDialog-BPtc_2lX.js";import"./MenuTrigger-D77A_xbF.js";import"./CompositeItem-DeFaZgPZ.js";import"./ToolbarRootContext-BV3Ciak4.js";import"./getDisabledMountTransitionStyles-QU60JeOn.js";import"./getPseudoElementBounds-Dr6gOvy1.js";import"./chevron-down-DclS5GqO.js";import"./index-BuEbl4ZZ.js";import"./error-yeSVRC55.js";import"./BaseCbacBanner-B_4eGMAs.js";import"./makeExternalStore-CKGyOq0N.js";import"./Tooltip-D2_zsHn4.js";import"./PopoverPopup-Dz8cYHRU.js";import"./debounce-Ca-_00LJ.js";import"./useOsdkClient-D8ctbvIl.js";import"./tick-BjZRSTbc.js";import"./DropdownField-B2W4HxFF.js";import"./isEqual-Dme2tnBF.js";import"./withOsdkMetrics-B8wi7VI0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
