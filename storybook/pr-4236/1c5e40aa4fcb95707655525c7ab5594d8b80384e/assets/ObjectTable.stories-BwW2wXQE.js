import{j as i}from"./iframe-CzZ1CUeI.js";import{O as p}from"./object-table-B7jt0dkH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CXmyBsJr.js";import"./preload-helper-CKiwuCze.js";import"./Table-B71BQU90.js";import"./index-CgrT0C-o.js";import"./Dialog-1tbqzT_U.js";import"./cross-D3n1K_EZ.js";import"./svgIconContainer-tM4UWMZ6.js";import"./useBaseUiId-BDfaFxEX.js";import"./InternalBackdrop-BatwaIGG.js";import"./composite-BtIW984D.js";import"./index-BbscB5rP.js";import"./index-D9Klgxm6.js";import"./index-DMR6Xy8f.js";import"./useEventCallback-Dfxeqi-H.js";import"./SkeletonBar-CBl1emhO.js";import"./LoadingCell-4YL5Iew1.js";import"./ColumnConfigDialog-BmIin1xN.js";import"./DraggableList-DA8N3_vy.js";import"./search-CsQMUjFR.js";import"./Input-D_HiSYHG.js";import"./useControlled-DsQHF60n.js";import"./Button-Dq-U227i.js";import"./small-cross-BcmNd0Cm.js";import"./ActionButton-HRlRekEI.js";import"./Checkbox-BOzhDleH.js";import"./useValueChanged-B2lTvP69.js";import"./CollapsiblePanel-BHrgatVN.js";import"./MultiColumnSortDialog-8Cvl-6Zn.js";import"./MenuTrigger-B2HR8Z6j.js";import"./CompositeItem-CIKEUP56.js";import"./ToolbarRootContext-CutVy21d.js";import"./getDisabledMountTransitionStyles-COt5-b0f.js";import"./getPseudoElementBounds-BJ47Mn2_.js";import"./chevron-down-C3ryHGnx.js";import"./index-C1_2t6dA.js";import"./error-BfspTM5I.js";import"./BaseCbacBanner-CDyk4UfJ.js";import"./makeExternalStore-ES2aAlwo.js";import"./Tooltip-BYmhB2Sw.js";import"./PopoverPopup-D7czmZgM.js";import"./debounce-dY7CApU9.js";import"./useOsdkClient-CsHMxRDn.js";import"./tick-Dh_h7TuN.js";import"./DropdownField-NTQXYuP9.js";import"./isEqual-B_wo3wHf.js";import"./withOsdkMetrics-CRmsMiCZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
