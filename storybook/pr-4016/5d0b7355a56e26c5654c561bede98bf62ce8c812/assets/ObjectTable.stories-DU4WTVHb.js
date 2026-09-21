import{j as i}from"./iframe-8LpzfSDn.js";import{O as p}from"./object-table--A9nr_D6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BNQdAvO5.js";import"./preload-helper-DtRM003F.js";import"./Table-CoO7Txsa.js";import"./index-BUf0-n6f.js";import"./Dialog-DOQ8osnu.js";import"./cross-CCb0fI9c.js";import"./svgIconContainer-BKZgIvjb.js";import"./useBaseUiId-4wN8rdaw.js";import"./InternalBackdrop-S-BNADSf.js";import"./composite-2A5pk4b0.js";import"./index-RVyoUJfW.js";import"./index-BjrAvEhr.js";import"./index-CCORHeEv.js";import"./useEventCallback-D7bgDq2J.js";import"./SkeletonBar-C1CeiyuW.js";import"./LoadingCell-BHuaTwQ0.js";import"./ColumnConfigDialog-DqOLvEq8.js";import"./DraggableList-C9tzjVp6.js";import"./search-zhneh-KF.js";import"./Input-Dv-by0TU.js";import"./useControlled-CoRLjGHB.js";import"./Button-BApq-zP_.js";import"./small-cross-Cd-SXCdz.js";import"./ActionButton-Bxy-NTOO.js";import"./Checkbox-D-mCQp5x.js";import"./useValueChanged-BozjWAfd.js";import"./CollapsiblePanel-DTSInNYa.js";import"./MultiColumnSortDialog-DI3n5Vct.js";import"./MenuTrigger-PruXJXos.js";import"./CompositeItem-CnGxkne-.js";import"./ToolbarRootContext-40dyuA6p.js";import"./getDisabledMountTransitionStyles-Mf_ToGG9.js";import"./getPseudoElementBounds-DU8qDaFN.js";import"./chevron-down-DsREyE6f.js";import"./index-BPBF2E68.js";import"./error-B-6NO-zU.js";import"./BaseCbacBanner-_Gsb0Wun.js";import"./makeExternalStore-DEN8pBF9.js";import"./Tooltip-hbbCevp2.js";import"./PopoverPopup-2AhTF_FP.js";import"./debounce-IDNd93md.js";import"./useOsdkClient-CNaHcQUk.js";import"./tick-C-vIWgEC.js";import"./DropdownField-64H1OXM1.js";import"./isEqual-B3eItCfo.js";import"./withOsdkMetrics-eiA9ax16.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
