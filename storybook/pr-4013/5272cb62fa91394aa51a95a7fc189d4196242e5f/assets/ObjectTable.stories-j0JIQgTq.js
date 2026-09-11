import{j as i}from"./iframe-B4QogxC6.js";import{O as p}from"./object-table-BC8L594r.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDYGOlRg.js";import"./preload-helper-C_5k-fFt.js";import"./Table-Bi1HtYYp.js";import"./index-CQyvBzj_.js";import"./Dialog-Hnfyv8Xj.js";import"./cross-Dv490F0o.js";import"./svgIconContainer-DdyooWte.js";import"./useBaseUiId-DownjkF0.js";import"./InternalBackdrop-DL90UTgk.js";import"./composite-Dqc63iLy.js";import"./index-BKn8iF1n.js";import"./index-D0VjMeuF.js";import"./index-ByT4MXlR.js";import"./useEventCallback-bHimiWWk.js";import"./SkeletonBar-B3VZ6hlb.js";import"./LoadingCell-w9kd8MkW.js";import"./ColumnConfigDialog-Dtj9JJKP.js";import"./DraggableList-MX_3E-v0.js";import"./search-BgJqBCXd.js";import"./Input-DiRfBBOs.js";import"./useControlled-T3xesycb.js";import"./Button-CIw-2F8I.js";import"./small-cross-Cjfa7jit.js";import"./ActionButton-DzObz5rl.js";import"./Checkbox-YkxadoHh.js";import"./useValueChanged-FjHY1o4Y.js";import"./CollapsiblePanel-B5tdGMg0.js";import"./MultiColumnSortDialog-Br81g5wB.js";import"./MenuTrigger-Du6xUBZs.js";import"./CompositeItem-BoXFiz_E.js";import"./ToolbarRootContext-De8fRc6j.js";import"./getDisabledMountTransitionStyles-BtJrecyz.js";import"./getPseudoElementBounds-T2UYiBqB.js";import"./chevron-down-BlCKOTL8.js";import"./index-K9tFI_58.js";import"./error-rqdE4hRy.js";import"./BaseCbacBanner-BsmNmvyE.js";import"./makeExternalStore-BBdCQtVj.js";import"./Tooltip-D-SzDxed.js";import"./PopoverPopup-CWEZyT0m.js";import"./debounce-CeSijK1N.js";import"./useOsdkClient-Cl601DTN.js";import"./tick-9Irchz6P.js";import"./DropdownField-D9HTL46H.js";import"./isEqual-CprjN2vP.js";import"./withOsdkMetrics-DDrBn77T.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
