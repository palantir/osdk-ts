import{j as i}from"./iframe-BrG6cQfS.js";import{O as p}from"./object-table-ins_eC8g.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClnpXOHb.js";import"./preload-helper-Bixkw_YY.js";import"./Table-CgOUWwSB.js";import"./index-BEzPF5rE.js";import"./Dialog-DFhocNiZ.js";import"./cross-DGQ_41Ww.js";import"./svgIconContainer-c7VzC2a1.js";import"./useBaseUiId-DamEe__I.js";import"./InternalBackdrop-C3iNMrIw.js";import"./composite-DHs3_um3.js";import"./index-R1lV5gJE.js";import"./index-GtEOCerY.js";import"./index-CnlkPWeq.js";import"./useEventCallback-BDu00IHC.js";import"./SkeletonBar-Bi5v0pgW.js";import"./LoadingCell-D-HPaQza.js";import"./ColumnConfigDialog-DoZj9VAj.js";import"./DraggableList-BwndBBDN.js";import"./search-jgXrXlZs.js";import"./Input-Dpso9xg2.js";import"./useControlled-CblOQAp9.js";import"./Button-DICz1J-P.js";import"./small-cross-ZjdxMb2P.js";import"./ActionButton-BZZYP6V2.js";import"./Checkbox-DJZEHWvF.js";import"./useValueChanged-CwLQb5A1.js";import"./CollapsiblePanel-DjI8FHot.js";import"./MultiColumnSortDialog-wEtgATb9.js";import"./MenuTrigger-4nCp8LZS.js";import"./CompositeItem-Dezopk9M.js";import"./ToolbarRootContext-C-eO9sv2.js";import"./getDisabledMountTransitionStyles-Bw2gn-S1.js";import"./getPseudoElementBounds-DIijxXuL.js";import"./chevron-down-B0I-pL1F.js";import"./index-B-kArG0q.js";import"./error-DOpFGD8C.js";import"./BaseCbacBanner-XaY-ha82.js";import"./makeExternalStore-DqEFEqtD.js";import"./Tooltip-C_nWVRfI.js";import"./PopoverPopup-DnIX79DU.js";import"./debounce-CR0MYlUB.js";import"./useOsdkClient-CoqhAt_a.js";import"./tick-4TnK2SFg.js";import"./DropdownField-DjQ0AkRs.js";import"./isEqual-DjuLte7N.js";import"./withOsdkMetrics-Dsha6ge2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
