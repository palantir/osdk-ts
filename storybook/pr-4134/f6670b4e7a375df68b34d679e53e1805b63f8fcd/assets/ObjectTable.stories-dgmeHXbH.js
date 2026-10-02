import{j as i}from"./iframe-Bjs833GT.js";import{O as p}from"./object-table-C3IgKZNw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BImyd_2R.js";import"./preload-helper-BlVzQ63h.js";import"./Table-mE-X7H78.js";import"./index-ouW-uxFy.js";import"./Dialog-CeGZ1o7-.js";import"./cross-odZi7HLt.js";import"./svgIconContainer-B50GNB1l.js";import"./useBaseUiId-azhLq6E8.js";import"./InternalBackdrop-CSh59UaV.js";import"./composite-DAp8GgCU.js";import"./index-Cd4CH7YJ.js";import"./index-BIIN4O4s.js";import"./index-gqB7KI61.js";import"./useEventCallback-DAOuva_s.js";import"./SkeletonBar-COXh_K_A.js";import"./LoadingCell-CL6pGTYf.js";import"./ColumnConfigDialog-RzjwFmne.js";import"./DraggableList-Cb1vAsrp.js";import"./search-Bz3i30zB.js";import"./Input-jDIiSSPg.js";import"./useControlled-T6eskrKs.js";import"./Button-Bi0CmGS9.js";import"./small-cross-4PvqsLte.js";import"./ActionButton-BV_FUyjV.js";import"./Checkbox-h8zMlZRj.js";import"./useValueChanged-BcoiLIU-.js";import"./CollapsiblePanel-CEYd-Yeh.js";import"./MultiColumnSortDialog-B-Q3xx7z.js";import"./MenuTrigger-B6rWoPMu.js";import"./CompositeItem-BOsNn8o6.js";import"./ToolbarRootContext-Gv05lgLU.js";import"./getDisabledMountTransitionStyles-DbnX7M-z.js";import"./getPseudoElementBounds-BYukSd76.js";import"./chevron-down-DSKsXuZi.js";import"./index-Ci1PABP6.js";import"./error-D5mhWRkN.js";import"./BaseCbacBanner-BtOiRQiw.js";import"./makeExternalStore-DPdJKiEp.js";import"./Tooltip-Bjp4iv0K.js";import"./PopoverPopup-D62GG8Vu.js";import"./debounce-BQr-vi9c.js";import"./useOsdkClient-Bk2k7B_F.js";import"./tick-ujL-DBFL.js";import"./DropdownField-CCWswJAt.js";import"./isEqual-BarWzeE3.js";import"./withOsdkMetrics-CZSiJ0-9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
