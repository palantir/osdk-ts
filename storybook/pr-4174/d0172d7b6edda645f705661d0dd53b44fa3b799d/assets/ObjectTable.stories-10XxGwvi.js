import{j as i}from"./iframe-DFY8VJiA.js";import{O as p}from"./object-table-DekiBxP9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BuBAzWrU.js";import"./preload-helper-DYQPoB0a.js";import"./Table-DTiKugCT.js";import"./index-Cyh0BAGo.js";import"./Dialog-C6OT_PSR.js";import"./cross-DhwePusw.js";import"./svgIconContainer-BC0JvcAN.js";import"./useBaseUiId-munBw4hb.js";import"./InternalBackdrop-CDbJypH3.js";import"./composite-DERqHqf8.js";import"./index-CFOVWCD1.js";import"./index-DkOv0cie.js";import"./index-1rFIUwlz.js";import"./useEventCallback-rvfsLwbm.js";import"./SkeletonBar-S-OgC9v2.js";import"./LoadingCell-CuGBYebr.js";import"./ColumnConfigDialog-CAp0azVM.js";import"./DraggableList-ZJaTW-ku.js";import"./search-DmLazW2P.js";import"./Input-ZKaLnGto.js";import"./useControlled-DlDk3rjW.js";import"./Button-Dd-6Wm_t.js";import"./small-cross-9So2KQCe.js";import"./ActionButton-CIEBqQXT.js";import"./Checkbox-CyjU-GZo.js";import"./useValueChanged-BzxLxRS9.js";import"./CollapsiblePanel-DTjhJsLZ.js";import"./MultiColumnSortDialog-0VWQENmH.js";import"./MenuTrigger-Cp__wkNW.js";import"./CompositeItem-DHHY_NUU.js";import"./ToolbarRootContext-C-PsSYTx.js";import"./getDisabledMountTransitionStyles-DDDCI_7I.js";import"./getPseudoElementBounds-jNlhs2VS.js";import"./chevron-down-C0e9hGKt.js";import"./index-CO5nCbUA.js";import"./error-RuEwtCs3.js";import"./BaseCbacBanner-Dfw7Ww54.js";import"./makeExternalStore-Beeee7G7.js";import"./Tooltip-CDkwFccO.js";import"./PopoverPopup-CR5gUu4I.js";import"./debounce-UmgWFeKf.js";import"./useOsdkClient-BM_GsjtL.js";import"./tick-CbAy2oWE.js";import"./DropdownField-C-2cnHee.js";import"./isEqual-DjzJwDRd.js";import"./withOsdkMetrics-US1iMNLV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
