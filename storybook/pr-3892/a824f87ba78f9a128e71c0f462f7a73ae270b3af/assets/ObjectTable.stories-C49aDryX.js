import{j as i}from"./iframe-CjrvQ8Eq.js";import{O as p}from"./object-table-D_9iwXl4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DI24Zq18.js";import"./preload-helper-BPg6l9d3.js";import"./Table-CmY1XOIx.js";import"./index-DB-uoMhr.js";import"./Dialog-DBs5NoZ0.js";import"./cross-CZEvBoD0.js";import"./svgIconContainer-CnoHMalv.js";import"./useBaseUiId-BUaVaBCu.js";import"./InternalBackdrop-Kq278Mqp.js";import"./composite-BdOz1pLd.js";import"./index-BMCwP6lU.js";import"./index-AcJBEuLY.js";import"./index-CFwdS4V_.js";import"./useEventCallback-ClvtAijH.js";import"./SkeletonBar-AiGWLobO.js";import"./LoadingCell-B03LsPyo.js";import"./ColumnConfigDialog-PWQsRQoY.js";import"./DraggableList-ByPe5g9-.js";import"./search-DnFytF8-.js";import"./Input-Pixh_UaU.js";import"./useControlled-nb9nN5WZ.js";import"./Button-BZpeRQKg.js";import"./small-cross-DEflC2UP.js";import"./ActionButton-zDJ9Z3uf.js";import"./Checkbox-D5b8v0Kz.js";import"./useValueChanged-CNswg7ar.js";import"./CollapsiblePanel-Dus4Tcn8.js";import"./MultiColumnSortDialog-BnixZ0ma.js";import"./MenuTrigger-BbIO4AR0.js";import"./CompositeItem-B9gYo-S0.js";import"./ToolbarRootContext-DcQsKFzE.js";import"./getDisabledMountTransitionStyles-zHfXsdqn.js";import"./getPseudoElementBounds-Ba141Nqq.js";import"./chevron-down-CKpFjGQX.js";import"./index-BcucvAIU.js";import"./error-tjFs6guL.js";import"./BaseCbacBanner-D8ERIvGi.js";import"./makeExternalStore-DfWi3bI5.js";import"./Tooltip-Ca7wRcoH.js";import"./PopoverPopup-CGi8wjo9.js";import"./debounce-B7Y7XFK0.js";import"./useOsdkClient-fvP73z5H.js";import"./tick-CSctEYB7.js";import"./DropdownField-C9RkTgUh.js";import"./isEqual-BDvX4IKC.js";import"./withOsdkMetrics-DofP_XMa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
