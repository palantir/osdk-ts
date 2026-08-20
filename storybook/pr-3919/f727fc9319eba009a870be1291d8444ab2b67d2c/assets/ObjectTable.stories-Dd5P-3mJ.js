import{j as i}from"./iframe-h16HHsM3.js";import{O as p}from"./object-table-xqURJh5c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6WG-mc8.js";import"./preload-helper-DaEiocuo.js";import"./Table-DfRyO5iW.js";import"./index-CrB-SZ6W.js";import"./Dialog-Cn9Xude-.js";import"./cross-C6l_8oJj.js";import"./svgIconContainer-2LoSh7EW.js";import"./useBaseUiId-DtIpLIKv.js";import"./InternalBackdrop-CZNkgGhI.js";import"./composite-BwI4rJIn.js";import"./index-CipRFOUY.js";import"./index-nhGpddHL.js";import"./index-tn1N1V8Y.js";import"./useEventCallback-BaRk7d5C.js";import"./SkeletonBar-CfkyuI7W.js";import"./LoadingCell-BjpZOFne.js";import"./ColumnConfigDialog-DKcGC0Ez.js";import"./DraggableList-C4-NVipL.js";import"./search-CZeSsUn4.js";import"./Input-ChQNdq7z.js";import"./useControlled-D3_Mgr2o.js";import"./Button-CjFV-Dce.js";import"./small-cross-BxYzY9qu.js";import"./ActionButton-DXWSGFwc.js";import"./Checkbox-D_ZBnArb.js";import"./useValueChanged-Cb7pRHYy.js";import"./CollapsiblePanel-NLrvE2ll.js";import"./MultiColumnSortDialog-CuZO7D6b.js";import"./MenuTrigger-Bo1EWOk3.js";import"./CompositeItem-CVw8v154.js";import"./ToolbarRootContext-C6_QoO8-.js";import"./getDisabledMountTransitionStyles-BKP-kwJh.js";import"./getPseudoElementBounds-BzrJDmxL.js";import"./chevron-down-DBNf4w5W.js";import"./index-B6f5OL8k.js";import"./error-BNk7qWdS.js";import"./BaseCbacBanner-C3VxDk8H.js";import"./makeExternalStore-CTbMnN4W.js";import"./Tooltip-81xTGUJp.js";import"./PopoverPopup-lU-t8jRv.js";import"./debounce-DC5xO3vV.js";import"./useOsdkClient-XH_I9KtB.js";import"./tick-DTeb65_f.js";import"./DropdownField-yuiTwcT9.js";import"./isEqual-D_gZtz0S.js";import"./withOsdkMetrics-CxgNfRWd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
