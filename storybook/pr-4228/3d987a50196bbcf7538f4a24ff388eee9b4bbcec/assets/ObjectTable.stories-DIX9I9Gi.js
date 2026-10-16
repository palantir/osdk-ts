import{j as i}from"./iframe-D48Q2Ih8.js";import{O as p}from"./object-table-DATd4Pz4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-fQ5lKLRx.js";import"./preload-helper-CL77aTRo.js";import"./Table-CWfEJx7M.js";import"./index-BAc81QxV.js";import"./Dialog-CEjVroA8.js";import"./cross-7sczFfzI.js";import"./svgIconContainer-C8Iv3sR3.js";import"./useBaseUiId-DGTp0U_O.js";import"./InternalBackdrop-C1aj-xTs.js";import"./composite-AHBdhfMT.js";import"./index-DKv9tcd8.js";import"./index-CMlea4RE.js";import"./index-BHqJ1oa6.js";import"./useEventCallback-aEIzFPGy.js";import"./SkeletonBar-B5oNwZvF.js";import"./LoadingCell-7-2_99YR.js";import"./ColumnConfigDialog-uxjXxGDp.js";import"./DraggableList-CcqPBCqI.js";import"./search-C9PzHLND.js";import"./Input-BYdVsABv.js";import"./useControlled-CFgtbz8z.js";import"./Button-CRna_EZj.js";import"./small-cross-DjM-LCX5.js";import"./ActionButton-DXiBkKho.js";import"./Checkbox-DUUA5pAi.js";import"./useValueChanged-_pNhoUMT.js";import"./CollapsiblePanel-otyxGyv7.js";import"./MultiColumnSortDialog-B5o9fJfs.js";import"./MenuTrigger-DLjn-TCi.js";import"./CompositeItem-CIsGCI0M.js";import"./ToolbarRootContext-RyVic0HL.js";import"./getDisabledMountTransitionStyles-CW-RwN9m.js";import"./getPseudoElementBounds-9xeptCZR.js";import"./chevron-down-BKXBxbNC.js";import"./index-BSoRDxwG.js";import"./error-CmBzdsaE.js";import"./BaseCbacBanner-DsV8cD14.js";import"./makeExternalStore-CP04809A.js";import"./Tooltip-UTWEnQHo.js";import"./PopoverPopup-CTXF1CIh.js";import"./debounce-B6B9DlWV.js";import"./useOsdkClient-BH3gu2IN.js";import"./tick-Clvl1m1w.js";import"./DropdownField-BzDGU56S.js";import"./isEqual-B4HfJ3SA.js";import"./withOsdkMetrics-D4HQPyjO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
