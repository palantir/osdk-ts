import{j as i}from"./iframe-BgIqeTr7.js";import{O as p}from"./object-table-BgPRUOdG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CaTYG_UF.js";import"./preload-helper-BbBE06U6.js";import"./Table-DRFmM6r6.js";import"./index-OeIAiwUu.js";import"./Dialog-BBAVymUP.js";import"./cross-Wbc8t1qS.js";import"./svgIconContainer-BtrJOEHF.js";import"./useBaseUiId-CgOsBxCj.js";import"./InternalBackdrop-DMG6Kgao.js";import"./composite-BF8O5dbv.js";import"./index-D9MNyfPv.js";import"./index-ef3bSd-w.js";import"./index-Zndx6d0R.js";import"./useEventCallback-NCRuje_c.js";import"./SkeletonBar-C2xca__T.js";import"./LoadingCell-Czld3W6q.js";import"./ColumnConfigDialog-juQqa1AG.js";import"./DraggableList-69AwVVwc.js";import"./search-BF7QrwO6.js";import"./Input-Ccm-R2od.js";import"./useControlled-DoFIiJ6c.js";import"./Button-WSqWRGZH.js";import"./small-cross-CIyGzgJb.js";import"./ActionButton-CAHKDpnU.js";import"./Checkbox-kISLw2AE.js";import"./useValueChanged-DLQjxulr.js";import"./CollapsiblePanel-CAigpV3T.js";import"./MultiColumnSortDialog-B4RUkkWy.js";import"./MenuTrigger-B4L1Oaqi.js";import"./CompositeItem-D2E5MTZ0.js";import"./ToolbarRootContext-XHaZZ7gx.js";import"./getDisabledMountTransitionStyles-DcXdOVhf.js";import"./getPseudoElementBounds-CACZ6uIC.js";import"./chevron-down-CZAmY7BW.js";import"./index-DA3CS0qW.js";import"./error-DvPLPT6J.js";import"./BaseCbacBanner-D_K-65aL.js";import"./makeExternalStore-_B_am4pH.js";import"./Tooltip-B4cDBo-J.js";import"./PopoverPopup-DNjj31SM.js";import"./debounce-l2WN3UdY.js";import"./useOsdkClient-DqUO6npy.js";import"./tick-BuwupeKW.js";import"./DropdownField-q8PA-aTt.js";import"./isEqual-XkXlL3kg.js";import"./withOsdkMetrics-D9CYPZjX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
