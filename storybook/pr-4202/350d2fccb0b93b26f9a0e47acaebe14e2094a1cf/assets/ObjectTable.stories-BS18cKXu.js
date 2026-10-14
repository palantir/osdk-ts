import{j as i}from"./iframe-CXk0WqhB.js";import{O as p}from"./object-table-BwIitlZ-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DzzpbHnu.js";import"./preload-helper-ChjBfvhG.js";import"./Table-hlhNPiA-.js";import"./index-ML5mwP3e.js";import"./Dialog-D175c70A.js";import"./cross-BmemhmuM.js";import"./svgIconContainer-Dcyi3Q_X.js";import"./useBaseUiId-DHjZ3Omh.js";import"./InternalBackdrop-BrAyLlt0.js";import"./composite-ytyU9AJN.js";import"./index-CjxpfJC5.js";import"./index-BT6_XaBS.js";import"./index-Cl3j5frJ.js";import"./useEventCallback-CR9JbWGL.js";import"./SkeletonBar-BtOJaU67.js";import"./LoadingCell-CtVp_NO9.js";import"./ColumnConfigDialog-Cx47VDpv.js";import"./DraggableList-CRlURm1D.js";import"./search-BLVXHNks.js";import"./Input-D9BOnKAN.js";import"./useControlled-Bl28iO0R.js";import"./Button-Dic26hGY.js";import"./small-cross-DrkIqI6L.js";import"./ActionButton-B4JsRdej.js";import"./Checkbox-WVJiQYod.js";import"./useValueChanged-DVvNfwNT.js";import"./CollapsiblePanel-DanBkqbp.js";import"./MultiColumnSortDialog-CSetl6zk.js";import"./MenuTrigger-BtSPx0Au.js";import"./CompositeItem-04P4zIgd.js";import"./ToolbarRootContext-DTmHJOM7.js";import"./getDisabledMountTransitionStyles-DiTcMvjB.js";import"./getPseudoElementBounds-DF3ARm9q.js";import"./chevron-down-DQ2eC5iE.js";import"./index-_eczYP6a.js";import"./error-BWxZwg9W.js";import"./BaseCbacBanner-Bcvicwmd.js";import"./makeExternalStore-Ck8wEGfj.js";import"./Tooltip-CKZmJ4aV.js";import"./PopoverPopup-Cw8ntXH6.js";import"./debounce-B5lQDrQ7.js";import"./useOsdkClient-uAkJXHAY.js";import"./tick-CZjZA-Lg.js";import"./DropdownField-9i-_p9Wp.js";import"./isEqual-_eK1XH0Y.js";import"./withOsdkMetrics-ChxJang_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
