import{j as i}from"./iframe-q4S2v8GD.js";import{O as p}from"./object-table-BvRSzjb-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BU4c0POY.js";import"./preload-helper-Dpp2lQ4d.js";import"./Table-Drtwulh9.js";import"./index-BRFgZsWh.js";import"./Dialog-DL6vx7cQ.js";import"./cross-CN4Kceog.js";import"./svgIconContainer-DFZA-Fi_.js";import"./useBaseUiId-D3OPJG_I.js";import"./InternalBackdrop-Bld_ME41.js";import"./composite-DOJ73mma.js";import"./index-BWxwkoVm.js";import"./index-B40hmhNC.js";import"./index-Bk_rrwjS.js";import"./useEventCallback-De6jZjPl.js";import"./SkeletonBar-Byu2pDu2.js";import"./LoadingCell-CKL4pqco.js";import"./ColumnConfigDialog-CblCdaMB.js";import"./DraggableList-BTGvR-Bu.js";import"./search-YAd7k3do.js";import"./Input-DwFaTt_h.js";import"./useControlled-D8LdPNhB.js";import"./isEqual-DGTzVpqZ.js";import"./isObject-CgjyPitK.js";import"./Button-Cxxa8caB.js";import"./ActionButton-BiXIiqha.js";import"./Checkbox-CUw5mc94.js";import"./useValueChanged-BuKbmg_i.js";import"./CollapsiblePanel-DcijGtz2.js";import"./MultiColumnSortDialog-9_tVI5Wa.js";import"./MenuTrigger-BZarWjlz.js";import"./CompositeItem-D_tBcLdd.js";import"./ToolbarRootContext-DRR8g4NM.js";import"./getDisabledMountTransitionStyles-BeQTEcPy.js";import"./getPseudoElementBounds-CRkiwrFu.js";import"./chevron-down-DRJe7j9S.js";import"./index-BAqD6s8z.js";import"./error-BqxlTXt7.js";import"./BaseCbacBanner-BF-mF9lT.js";import"./makeExternalStore-B1AqrHO7.js";import"./Tooltip-DROwBxlR.js";import"./PopoverPopup-ChsXcYzN.js";import"./toNumber-CdKQpFiI.js";import"./useOsdkClient-f_xWKxSr.js";import"./tick-BdVu04v7.js";import"./DropdownField-DjGfuLt1.js";import"./withOsdkMetrics-DyNmWK8l.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
