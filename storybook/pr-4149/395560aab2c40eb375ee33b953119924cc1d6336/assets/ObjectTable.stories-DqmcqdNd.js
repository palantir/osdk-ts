import{j as i}from"./iframe-BOTLlUE6.js";import{O as p}from"./object-table-DkfNUSuH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CA_ag1q-.js";import"./preload-helper-DEIZygRs.js";import"./Table-LQrxACXN.js";import"./index-Cs-O_idR.js";import"./Dialog-CHvRVjiq.js";import"./cross-Cy8vOx7n.js";import"./svgIconContainer-Prc3KqJd.js";import"./useBaseUiId-Dd9KpxnA.js";import"./InternalBackdrop-IIlmsF_v.js";import"./composite-DGujq1fd.js";import"./index-CWHl0m7K.js";import"./index-CcyNoJe8.js";import"./index-C-efyImj.js";import"./useEventCallback-BajVHdte.js";import"./SkeletonBar-BYB-xe6O.js";import"./LoadingCell-BKuoj7-L.js";import"./ColumnConfigDialog-hjejOSHa.js";import"./DraggableList-BdR82jqh.js";import"./search-DlkeJy6k.js";import"./Input-D_iusRO5.js";import"./useControlled-2lHvWmOj.js";import"./Button-Dvgi56Dm.js";import"./small-cross-BXzGBX0-.js";import"./ActionButton-C-8n6E4h.js";import"./Checkbox-D2agivE0.js";import"./useValueChanged-BZ2Rr6kL.js";import"./CollapsiblePanel-D8vxxxpH.js";import"./MultiColumnSortDialog-BW406hS2.js";import"./MenuTrigger-52dLLXZL.js";import"./CompositeItem-CDnQJecr.js";import"./ToolbarRootContext-DuzuLF_7.js";import"./getDisabledMountTransitionStyles-L5goK-63.js";import"./getPseudoElementBounds-Cf68WDMb.js";import"./chevron-down-QX4KjP4d.js";import"./index-CI0V04Qg.js";import"./error-DjHdCw0S.js";import"./BaseCbacBanner-BNrGG6OT.js";import"./makeExternalStore-5sXqlo0x.js";import"./Tooltip-Dis53iex.js";import"./PopoverPopup-C5BaOSgy.js";import"./debounce-DYIbFqjP.js";import"./useOsdkClient-CPWrwkuC.js";import"./tick-HKjZmk2p.js";import"./DropdownField-CLSkteEy.js";import"./isEqual-CZgWSPLt.js";import"./withOsdkMetrics-VFTM94rP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
