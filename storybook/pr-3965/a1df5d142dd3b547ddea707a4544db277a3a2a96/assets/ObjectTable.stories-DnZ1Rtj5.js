import{j as i}from"./iframe-czm1xubf.js";import{O as p}from"./object-table-DNMgRG-f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3ha3eo-x.js";import"./preload-helper-BGUEigPd.js";import"./Table-B6qewDiI.js";import"./index-_fZ9c0fg.js";import"./Dialog-DHxpHxHZ.js";import"./cross-BQAzUdVL.js";import"./svgIconContainer-E3yOYGsj.js";import"./useBaseUiId-BS68w5je.js";import"./InternalBackdrop-B9KVxE9X.js";import"./composite-B592Vhi6.js";import"./index-DfcivzEs.js";import"./index-yWvVzDbE.js";import"./index-DTt1rg3M.js";import"./useEventCallback-B22Ha2u5.js";import"./SkeletonBar-CdEM0QXh.js";import"./LoadingCell-BVI3jUQO.js";import"./ColumnConfigDialog-Cm2lbAkX.js";import"./DraggableList-DMQ-nVz6.js";import"./search-UypY9bAA.js";import"./Input-DgUpGPn-.js";import"./useControlled-C5Jpqy1f.js";import"./Button-BRqFWopk.js";import"./small-cross-FhsGrgpu.js";import"./ActionButton-BZ-JCoJ_.js";import"./Checkbox-CsxsWFlF.js";import"./useValueChanged-C6JEBq-B.js";import"./CollapsiblePanel-BZqHTtX0.js";import"./MultiColumnSortDialog-BiIQwfLv.js";import"./MenuTrigger-BLnLbRO0.js";import"./CompositeItem-BpDVMI5W.js";import"./ToolbarRootContext-DUZDki5d.js";import"./getDisabledMountTransitionStyles-CpcSQr6S.js";import"./getPseudoElementBounds-pSys7i-_.js";import"./chevron-down-WwCXMtNu.js";import"./index-BSuxyzBF.js";import"./error-DWSVNtwO.js";import"./BaseCbacBanner-CINRFj0R.js";import"./makeExternalStore-BA14Lxn7.js";import"./Tooltip-DhInjGrA.js";import"./PopoverPopup-CShNizHP.js";import"./debounce-DV3wU0MB.js";import"./useOsdkClient-CqNVWEmJ.js";import"./tick-ClPbeRGi.js";import"./DropdownField-D-57vV6-.js";import"./isEqual-W8BNuaGE.js";import"./withOsdkMetrics-C-yijIYr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
