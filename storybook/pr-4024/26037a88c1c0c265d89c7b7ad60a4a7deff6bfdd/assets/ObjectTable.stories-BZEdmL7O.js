import{j as i}from"./iframe-aV2EncWj.js";import{O as p}from"./object-table-C7sU_pMg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjJtADO9.js";import"./preload-helper-BEXd_GfO.js";import"./Table-CQynln8M.js";import"./index-DAg7UqCb.js";import"./Dialog-DlVOlxsL.js";import"./cross-dxy14_5g.js";import"./svgIconContainer-BCVXBQ-1.js";import"./useBaseUiId-C7CCsH5x.js";import"./InternalBackdrop-kh4mgNPa.js";import"./composite-Dq2CI2j-.js";import"./index-hA2PEeQp.js";import"./index-BfjZxAF2.js";import"./index-DFQXRJJ6.js";import"./useEventCallback-D6xgPZYQ.js";import"./SkeletonBar-jVQq-MBX.js";import"./LoadingCell-_OHgwT2O.js";import"./ColumnConfigDialog-BEWGhcWr.js";import"./DraggableList-Bu6HBV3-.js";import"./search-eiqCYccO.js";import"./Input-DvwYRcaH.js";import"./useControlled-hdV7mmig.js";import"./Button-D_vltk0m.js";import"./small-cross-DA-oeMpB.js";import"./ActionButton-B1GQvJHP.js";import"./Checkbox-Dk_n3UR_.js";import"./useValueChanged-DvDRB8wM.js";import"./CollapsiblePanel-k7ZGWOLV.js";import"./MultiColumnSortDialog-CeHy5r4C.js";import"./MenuTrigger-CXD8O-es.js";import"./CompositeItem-DvEec9Z1.js";import"./ToolbarRootContext-C9SuiabC.js";import"./getDisabledMountTransitionStyles-bBx198Lm.js";import"./getPseudoElementBounds-DNc-4NGF.js";import"./chevron-down-ZHnmZ23u.js";import"./index-C659o23F.js";import"./error-Bsy631Mv.js";import"./BaseCbacBanner-DKBdpqXI.js";import"./makeExternalStore-DG-eMtQv.js";import"./Tooltip-DgN0O71v.js";import"./PopoverPopup-frampLhw.js";import"./debounce-NzCavBVE.js";import"./useOsdkClient-D27FNOXw.js";import"./tick-3h3QxDrA.js";import"./DropdownField-Colx8jAu.js";import"./isEqual-WzC3eRgn.js";import"./withOsdkMetrics-DJdEIIDz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
