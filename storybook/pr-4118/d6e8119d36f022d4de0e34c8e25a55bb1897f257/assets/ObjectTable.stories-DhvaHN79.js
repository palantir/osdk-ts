import{j as i}from"./iframe-B_S0EqMa.js";import{O as p}from"./object-table-C9dlJDzg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CrHASHBV.js";import"./preload-helper-VT4tRblm.js";import"./Table-DPMLCe5N.js";import"./index-omwonnY8.js";import"./Dialog-D5MK1Ho4.js";import"./cross-CQGje-Eb.js";import"./svgIconContainer-D37wr4aE.js";import"./useBaseUiId-BlWO7UtN.js";import"./InternalBackdrop-B96Tkp15.js";import"./composite-PIV4lDcc.js";import"./index-DIzgx3sP.js";import"./index-b4QG9WWh.js";import"./index-5NQkvcqq.js";import"./useEventCallback-Bt8CFa_6.js";import"./SkeletonBar-DgL1EZY6.js";import"./LoadingCell-B7fZsn46.js";import"./ColumnConfigDialog-e_fW-uVL.js";import"./DraggableList-5Wocb-cP.js";import"./search-B1fKCW94.js";import"./Input-Dc-QK3C6.js";import"./useControlled-HSy2N_AY.js";import"./Button-Bt2kiQIM.js";import"./small-cross-4s57bvQI.js";import"./ActionButton-BC0COhhV.js";import"./Checkbox-BNRveCfd.js";import"./useValueChanged-BNRB7Ano.js";import"./CollapsiblePanel-BTNt_fsv.js";import"./MultiColumnSortDialog-DiSyxs0d.js";import"./MenuTrigger-Zl1JMXTK.js";import"./CompositeItem-C2Mv02sz.js";import"./ToolbarRootContext-zpUnsunT.js";import"./getDisabledMountTransitionStyles-C4jU6be9.js";import"./getPseudoElementBounds-Cf8_zdKL.js";import"./chevron-down-kik4znnV.js";import"./index-Eadm7kDD.js";import"./error-BnUCzbEn.js";import"./BaseCbacBanner-CLZXYniH.js";import"./makeExternalStore-CvSwbGtd.js";import"./Tooltip-wkX9ODyR.js";import"./PopoverPopup-DvC1XwGt.js";import"./debounce-DkO2AOLz.js";import"./useOsdkClient-BgQED0Kw.js";import"./tick-cfCmRgVv.js";import"./DropdownField-BqwO7jwV.js";import"./isEqual-DJaloL8r.js";import"./withOsdkMetrics-CXFFSRl8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
