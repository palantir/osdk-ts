import{j as i}from"./iframe-DUDgTVFJ.js";import{O as p}from"./object-table-DyoOaMNB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CngdX85z.js";import"./preload-helper-BVnI7eCi.js";import"./Table-DJgEpKA7.js";import"./index-BmzW3lpk.js";import"./Dialog-NEcdClbd.js";import"./cross-BTajFNgg.js";import"./svgIconContainer-ZlCTpn06.js";import"./useBaseUiId-HT4h8TUv.js";import"./InternalBackdrop-orJ-1rnF.js";import"./composite-CECNeh7S.js";import"./index-BvrArIP3.js";import"./index-CRuY3Py7.js";import"./index-5E34Oclp.js";import"./useEventCallback-RvE4_tE9.js";import"./SkeletonBar-BmHP5YBu.js";import"./LoadingCell-BDDtdYeF.js";import"./ColumnConfigDialog-ChYt04UQ.js";import"./DraggableList-C1sNICyS.js";import"./search-Bwn6tzKV.js";import"./Input-BDNTdkOr.js";import"./useControlled-CmefEzCZ.js";import"./Button-CYnqWeJV.js";import"./small-cross-C1-JOpz-.js";import"./ActionButton-Cm6sCZem.js";import"./Checkbox-B3XNkDYw.js";import"./useValueChanged-0LeWa10K.js";import"./CollapsiblePanel-U3s49rkR.js";import"./MultiColumnSortDialog-DZ3aR6O1.js";import"./MenuTrigger-CP-hOUMN.js";import"./CompositeItem-DvLeoEHv.js";import"./ToolbarRootContext-DjTtqRzV.js";import"./getDisabledMountTransitionStyles-PDb0y-1q.js";import"./getPseudoElementBounds-BcqNmoHZ.js";import"./chevron-down-uyo8SlXE.js";import"./index-C5bsaNnW.js";import"./error-BKqtxFEE.js";import"./BaseCbacBanner-ukxOelGX.js";import"./makeExternalStore-Dj0x5GDa.js";import"./Tooltip-DHx44fzb.js";import"./PopoverPopup-DYDRvlYs.js";import"./debounce-BtF1TExq.js";import"./useOsdkClient-CjQ9m3w5.js";import"./tick-DynTPC9F.js";import"./DropdownField-C0q1F6hz.js";import"./isEqual-Bq2QWyT2.js";import"./withOsdkMetrics-BxFc9ce-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
