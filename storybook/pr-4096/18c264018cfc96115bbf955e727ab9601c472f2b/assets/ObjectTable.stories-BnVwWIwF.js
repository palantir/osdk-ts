import{j as i}from"./iframe-Dtb1PIwC.js";import{O as p}from"./object-table-Br6Q4v9E.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BGSTyM0e.js";import"./preload-helper-CrZ439aZ.js";import"./Table-CZR12SqA.js";import"./index-CLrFOtS8.js";import"./Dialog-qmfyp1_P.js";import"./cross-CVJIQSJP.js";import"./svgIconContainer-DpSb0Wlf.js";import"./useBaseUiId-COzzw9eg.js";import"./InternalBackdrop-B9T7uYNU.js";import"./composite-BY6IafNz.js";import"./index-v7pWAnnW.js";import"./index-0o9LwOHv.js";import"./index-Kclo__p-.js";import"./useEventCallback-r4_5tZHq.js";import"./SkeletonBar-LfD4cjLN.js";import"./LoadingCell-YAFXgfIN.js";import"./ColumnConfigDialog-DuogBYgf.js";import"./DraggableList-BkSx7UZi.js";import"./search-BvnVhgRx.js";import"./Input-77thj6XN.js";import"./useControlled-C9h-MgnN.js";import"./Button-CLxSMUqH.js";import"./small-cross-BU1CI3Ri.js";import"./ActionButton-BVFIiiEV.js";import"./Checkbox-CUJBJRlP.js";import"./useValueChanged-BlnwCZsu.js";import"./CollapsiblePanel-C6l7NaqJ.js";import"./MultiColumnSortDialog-CZ7uSgVr.js";import"./MenuTrigger-Ms8jt9xm.js";import"./CompositeItem-DJjbAwA2.js";import"./ToolbarRootContext-CVyIw6JT.js";import"./getDisabledMountTransitionStyles-Bo5uM1fX.js";import"./getPseudoElementBounds-C6ruZhMa.js";import"./chevron-down-CjmVxAZS.js";import"./index-BYzRMw1m.js";import"./error-BTkWOlta.js";import"./BaseCbacBanner-FkN-Yjr_.js";import"./makeExternalStore-DJHAEnib.js";import"./Tooltip-JVmLA6-U.js";import"./PopoverPopup-BxsY-gjv.js";import"./debounce-Da9L3ttw.js";import"./useOsdkClient-too7NMkO.js";import"./tick-sHGnIXkS.js";import"./DropdownField-BmlojZ_x.js";import"./isEqual-Cwb8oMGa.js";import"./withOsdkMetrics-B_mXWVb4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
