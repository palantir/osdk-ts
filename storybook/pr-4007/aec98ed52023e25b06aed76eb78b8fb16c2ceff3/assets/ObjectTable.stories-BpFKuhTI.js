import{j as i}from"./iframe-B-AKwe0U.js";import{O as p}from"./object-table-BNOEdiM_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--EPrDE0T.js";import"./preload-helper-f3uNRD8c.js";import"./Table-CO94dN8E.js";import"./index-BTKqd_0M.js";import"./Dialog-ibdXxOvJ.js";import"./cross-DA2KL76X.js";import"./svgIconContainer-sFjpt_d1.js";import"./useBaseUiId-BzL2rBHV.js";import"./InternalBackdrop-D0ckCYHs.js";import"./composite-C2ZOTtj7.js";import"./index-DbIw_M6r.js";import"./index-DK2QIJxh.js";import"./index-D6DA4SgY.js";import"./useEventCallback-qJT1RIau.js";import"./SkeletonBar-B_0fbXLl.js";import"./LoadingCell-BuvDz8J8.js";import"./ColumnConfigDialog-DmCUXP7L.js";import"./DraggableList-DDl0_2vl.js";import"./search-BeqvshXG.js";import"./Input-C_it6lB9.js";import"./useControlled-DAZJskjr.js";import"./Button-DSXsoF7A.js";import"./small-cross-Cnf0y2Tr.js";import"./ActionButton-3WTL5l5D.js";import"./Checkbox-DR5PD6Rb.js";import"./useValueChanged-CwePdTgQ.js";import"./CollapsiblePanel-T50sNV5u.js";import"./MultiColumnSortDialog-BHvWd_sC.js";import"./MenuTrigger-CTvmiXZ1.js";import"./CompositeItem-BmFykBzh.js";import"./ToolbarRootContext-CAFwtwDJ.js";import"./getDisabledMountTransitionStyles-CziK-4zN.js";import"./getPseudoElementBounds-Byk01WJS.js";import"./chevron-down-CI9pzF65.js";import"./index-ZM1N2Vft.js";import"./error-C0T-x3vg.js";import"./BaseCbacBanner-BEkgwvfz.js";import"./makeExternalStore-CwQpDBtV.js";import"./Tooltip-BUiog_49.js";import"./PopoverPopup-CXdC5QUX.js";import"./debounce-CTxyeqac.js";import"./useOsdkClient-DOwl5ySm.js";import"./tick-BFHv-Vnu.js";import"./DropdownField-YeSQmSBB.js";import"./isEqual-B1KV-EfI.js";import"./withOsdkMetrics-DWcYXPst.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
