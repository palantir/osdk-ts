import{j as i}from"./iframe-KFmuHpi6.js";import{O as p}from"./object-table-Ci6iHK5H.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Coo0DXde.js";import"./preload-helper-DA3sodJk.js";import"./Table-Ctn2BHK_.js";import"./index-CBTTDR05.js";import"./Dialog-DXD3Yb-U.js";import"./cross-BxqJFApi.js";import"./svgIconContainer-D_AfyEve.js";import"./useBaseUiId-CrXnmgW5.js";import"./InternalBackdrop-CHvDuBxy.js";import"./composite-Bv5M65D9.js";import"./index-BkMhET5E.js";import"./index-Di_4vTer.js";import"./index-D41spogg.js";import"./useEventCallback-CjOHxRvH.js";import"./SkeletonBar-BMkWU_25.js";import"./LoadingCell-DhiN6Nif.js";import"./ColumnConfigDialog-CEXFOadJ.js";import"./DraggableList-BzrmwoQC.js";import"./search-Bq4-27c_.js";import"./Input-B-ppJqtJ.js";import"./useControlled-D9mNQgHG.js";import"./Button-CS75p-oM.js";import"./small-cross-D9wsbyzz.js";import"./ActionButton-NpNjrugw.js";import"./Checkbox-BTxxH2kF.js";import"./useValueChanged-YKfipK9M.js";import"./CollapsiblePanel-TR3Y0YZC.js";import"./MultiColumnSortDialog-BE5wOz1H.js";import"./MenuTrigger-BdBfvPxr.js";import"./CompositeItem-BqmVxYgk.js";import"./ToolbarRootContext-DPZQ9O-r.js";import"./getDisabledMountTransitionStyles-v24lbGuZ.js";import"./getPseudoElementBounds-CCT63s9j.js";import"./chevron-down-BDNkXUjZ.js";import"./index-tH9oz2kR.js";import"./error-BbvMlxw1.js";import"./BaseCbacBanner-CwkjYwzX.js";import"./makeExternalStore-C27aCTGI.js";import"./Tooltip-CBzWZ40Q.js";import"./PopoverPopup-oWKBQoRn.js";import"./debounce-JwfeVHKk.js";import"./useOsdkClient-jK4jvHg5.js";import"./tick-yLHvFrbb.js";import"./DropdownField-CGz7tZKd.js";import"./isEqual-BObLPwl5.js";import"./withOsdkMetrics-BaXo7wYf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
