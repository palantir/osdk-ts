import{j as i}from"./iframe-DWUqeI24.js";import{O as p}from"./object-table-BBQC_911.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BwZUVxd9.js";import"./preload-helper-CmhaJZKB.js";import"./Table-DJ-8h0Ue.js";import"./index-BTzXT2fz.js";import"./Dialog-DUPFYJmG.js";import"./cross-BB5wWstC.js";import"./svgIconContainer-CMAH9PXj.js";import"./useBaseUiId-doo5xxPr.js";import"./InternalBackdrop-CaSxUhcq.js";import"./composite-ZAPDDfKz.js";import"./index-Dx1vPjnd.js";import"./index-DMdejw5x.js";import"./index-DbIaKji_.js";import"./useEventCallback-D0l5hp3N.js";import"./SkeletonBar-qhYaU4np.js";import"./LoadingCell-CfUNbjuO.js";import"./ColumnConfigDialog-CRIZxLkc.js";import"./DraggableList-CZXLwsne.js";import"./search-D4gR5Cv7.js";import"./Input-Bgk_NfQE.js";import"./useControlled-DQPmnWCX.js";import"./Button-2G_MsyZd.js";import"./small-cross-BukaMN3V.js";import"./ActionButton-CJrSAwg7.js";import"./Checkbox-CiRepsyd.js";import"./useValueChanged-DZKLN3ln.js";import"./CollapsiblePanel-Bovk3gQ8.js";import"./MultiColumnSortDialog-DlEeC5so.js";import"./MenuTrigger-Cjqb2Zcx.js";import"./CompositeItem-Dli-qKbZ.js";import"./ToolbarRootContext-CY7Utxgx.js";import"./getDisabledMountTransitionStyles-CS1MQ6DV.js";import"./getPseudoElementBounds-CMWVvTL2.js";import"./chevron-down-B3eOykDC.js";import"./index-yBL9LV9H.js";import"./error-Zui98JXp.js";import"./BaseCbacBanner-Dc9_JOJQ.js";import"./makeExternalStore-rBHUiwcS.js";import"./Tooltip-CreZ18hV.js";import"./PopoverPopup-6iL55eGG.js";import"./debounce-D8IMDa7u.js";import"./useOsdkClient-CwrvHIMC.js";import"./tick-kx78m2XG.js";import"./DropdownField-BdJgqSaf.js";import"./isEqual-CPmXXs5q.js";import"./withOsdkMetrics-cXHP5nhH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
