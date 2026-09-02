import{j as i}from"./iframe-LK7OOuZ_.js";import{O as p}from"./object-table-D9ETwD5j.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cy3-mOpa.js";import"./preload-helper-Day3KTOO.js";import"./Table-B1UTJePN.js";import"./index-CwVQ5Krz.js";import"./Dialog-DeA5iwJU.js";import"./cross-BIG9tMZn.js";import"./svgIconContainer-Bm4iT3eI.js";import"./useBaseUiId-B6K6_xMQ.js";import"./InternalBackdrop-DXj_l9qd.js";import"./composite-lCB-i_uM.js";import"./index-BxZZb_0K.js";import"./index-CNFZjGa7.js";import"./index-97qOkHLc.js";import"./useEventCallback-GF5A1PPP.js";import"./SkeletonBar-C2-u18kR.js";import"./LoadingCell-CptE6iqP.js";import"./ColumnConfigDialog-BExXTM8H.js";import"./DraggableList-CiyBThjP.js";import"./search-DoOWQiUr.js";import"./Input-zz_AAM2k.js";import"./useControlled-D18eST4p.js";import"./Button-DOOnpy1b.js";import"./small-cross-Cj_cWLGh.js";import"./ActionButton-Bp5ltgtK.js";import"./Checkbox-CNeKPyQB.js";import"./useValueChanged-BS5zssgA.js";import"./CollapsiblePanel-DFaCEzJh.js";import"./MultiColumnSortDialog-CQjbZz0O.js";import"./MenuTrigger-DwbW3AdY.js";import"./CompositeItem-Dzq7tRMR.js";import"./ToolbarRootContext-DqesGwMA.js";import"./getDisabledMountTransitionStyles-591mdyd3.js";import"./getPseudoElementBounds-CQJtfdLJ.js";import"./chevron-down-Dq5oFVl8.js";import"./index-XVTMlPM4.js";import"./error-BqhqjqOC.js";import"./BaseCbacBanner-JPw4QD5g.js";import"./makeExternalStore-BVPBtEqc.js";import"./Tooltip-CWdCJPSO.js";import"./PopoverPopup-Va_O6hKU.js";import"./debounce-BSTGe6_B.js";import"./useOsdkClient-BTkGaJ3_.js";import"./tick-BVd9NWyG.js";import"./DropdownField-C9okc_y1.js";import"./isEqual-Dn55Gl5y.js";import"./withOsdkMetrics-BMjEIbaa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
