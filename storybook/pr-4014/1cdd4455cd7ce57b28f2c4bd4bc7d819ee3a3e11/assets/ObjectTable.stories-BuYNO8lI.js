import{j as i}from"./iframe-uT48rLM_.js";import{O as p}from"./object-table-CpKuor12.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nWVIbdXn.js";import"./preload-helper-yoQuylqU.js";import"./Table-Br0TYzk7.js";import"./index-CSvzskdp.js";import"./Dialog-DHFdNQrv.js";import"./cross-Bjaf7ehU.js";import"./svgIconContainer-p9hJC-XV.js";import"./useBaseUiId-9T64UX1j.js";import"./InternalBackdrop-B72hZeRt.js";import"./composite-DezEwUvA.js";import"./index-5wHFC5Fm.js";import"./index-BEQpnWE2.js";import"./index-B1GAZ9iL.js";import"./useEventCallback-Df-FKJT2.js";import"./SkeletonBar-oqZO1ZHs.js";import"./LoadingCell-C5KPxmDc.js";import"./ColumnConfigDialog-DgKPZlhI.js";import"./DraggableList-Bnzwsr1Q.js";import"./search-DQlds2Tm.js";import"./Input-CQKdcBRU.js";import"./useControlled-DuOdWxX8.js";import"./Button-C6gEU1e5.js";import"./small-cross-CisrNWlM.js";import"./ActionButton-7h418o9p.js";import"./Checkbox-SFA35Btf.js";import"./useValueChanged-znQA4Tbz.js";import"./CollapsiblePanel-CF6AHuns.js";import"./MultiColumnSortDialog-niDuA6Gj.js";import"./MenuTrigger-9TSMCP-s.js";import"./CompositeItem-BxuJPWc4.js";import"./ToolbarRootContext-DjYPc8nU.js";import"./getDisabledMountTransitionStyles-CluzbFfS.js";import"./getPseudoElementBounds-C4USjkgg.js";import"./chevron-down-DEgdTzUt.js";import"./index-BSbxg0rW.js";import"./error-BQiQ2GDM.js";import"./BaseCbacBanner-biYADY_e.js";import"./makeExternalStore-DTuIZdzn.js";import"./Tooltip-DQOQ2Q12.js";import"./PopoverPopup-_zY_9-mc.js";import"./debounce-BNAPXfSi.js";import"./useOsdkClient-DFYM3hyp.js";import"./tick-CU7R8lm8.js";import"./DropdownField-BTmtksts.js";import"./isEqual-BdznznjE.js";import"./withOsdkMetrics-zU8fQ91E.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
