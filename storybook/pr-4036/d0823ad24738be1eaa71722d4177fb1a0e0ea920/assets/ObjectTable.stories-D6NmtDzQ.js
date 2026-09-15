import{j as i}from"./iframe-yBf-ojhu.js";import{O as p}from"./object-table-BOMqJs_O.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8u3hddq.js";import"./preload-helper-CGYiisRB.js";import"./Table-wxABhy6h.js";import"./index-CdRKjNXW.js";import"./Dialog-fHOO5fq8.js";import"./cross-CpqgxsIm.js";import"./svgIconContainer-DzKsK3pp.js";import"./useBaseUiId-CZtNEuC3.js";import"./InternalBackdrop-CSsFLgHu.js";import"./composite-BhJud1YY.js";import"./index-BHACjACD.js";import"./index-CsTimawz.js";import"./index-Dzg0FXju.js";import"./useEventCallback-BnKVbXQ1.js";import"./SkeletonBar-CgzkWc0c.js";import"./LoadingCell-Dql00YBl.js";import"./ColumnConfigDialog-qA8wMTWY.js";import"./DraggableList-DK0Kd-EX.js";import"./search-BZ0OOikS.js";import"./Input-IJnkzHlh.js";import"./useControlled-DEWrsH1j.js";import"./Button-CqafgKxL.js";import"./small-cross-Kn8vx_NT.js";import"./ActionButton-C7HMH6t8.js";import"./Checkbox-CaAT9v9q.js";import"./useValueChanged-gQZ0oDOl.js";import"./CollapsiblePanel-Dv1dlGER.js";import"./MultiColumnSortDialog-CjusWDNY.js";import"./MenuTrigger-DORfdr2z.js";import"./CompositeItem-BMY8zStj.js";import"./ToolbarRootContext-CnGnSWc3.js";import"./getDisabledMountTransitionStyles-CSwVJeOc.js";import"./getPseudoElementBounds-D2L7paF4.js";import"./chevron-down-C0-Ffhm_.js";import"./index-DXSY2W-l.js";import"./error-C4tONck9.js";import"./BaseCbacBanner-BrmvnQoe.js";import"./makeExternalStore-BJgD01DS.js";import"./Tooltip-Clch_Qe4.js";import"./PopoverPopup-wI-K4VZI.js";import"./debounce-B2jafETK.js";import"./useOsdkClient-Bw9VJD_N.js";import"./tick-BXpIlGo8.js";import"./DropdownField-CBnk-NYj.js";import"./isEqual-Bj0FLhJj.js";import"./withOsdkMetrics-CxM1E0kE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
