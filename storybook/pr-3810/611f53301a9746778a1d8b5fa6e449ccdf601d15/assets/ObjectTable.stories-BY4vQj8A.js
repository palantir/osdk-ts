import{j as i}from"./iframe-BfpGyLEa.js";import{O as p}from"./object-table-CReHjQqT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DeDGxROB.js";import"./preload-helper-B3VqCvDk.js";import"./Table-DBzqhcXp.js";import"./index-HQRwX0sG.js";import"./Dialog-BfwGzw59.js";import"./cross-On_Sn6mV.js";import"./svgIconContainer-DjfkGdUu.js";import"./useBaseUiId-ByeyJXQZ.js";import"./InternalBackdrop-DRhc4Tux.js";import"./composite-BgeLt9pq.js";import"./index-CnwcoLiT.js";import"./index-C1hBHqbI.js";import"./index-DI4kr843.js";import"./useEventCallback-CLrYJF5s.js";import"./SkeletonBar-CVXLUSoX.js";import"./LoadingCell-CjGrgX8S.js";import"./ColumnConfigDialog-B22PE52R.js";import"./DraggableList-BYAI8JzX.js";import"./search-PEXLOihg.js";import"./Input-CzADAXYu.js";import"./useControlled-BVUZlzvp.js";import"./isEqual-Dgi0ZaAt.js";import"./isObject-DDhARXOo.js";import"./Button-DxBNRoWp.js";import"./ActionButton-CxBd5f-7.js";import"./Checkbox-ChqM5Q0I.js";import"./useValueChanged-Br-kPmpL.js";import"./CollapsiblePanel-Xt2EWbql.js";import"./MultiColumnSortDialog-9V2M6VCH.js";import"./MenuTrigger-DMQaU_hF.js";import"./CompositeItem-D07VWMUd.js";import"./ToolbarRootContext-DSTawcBa.js";import"./getDisabledMountTransitionStyles-B03uOhek.js";import"./getPseudoElementBounds-BkubrDWa.js";import"./chevron-down-D80S2cyc.js";import"./index-BOHHG715.js";import"./error-_erutXgY.js";import"./BaseCbacBanner-1vi7wFhA.js";import"./makeExternalStore-p4wOuTs-.js";import"./Tooltip-D8X_gFsZ.js";import"./PopoverPopup-CSvozSxL.js";import"./toNumber-B-CjzLUf.js";import"./useOsdkClient-wg32HbIo.js";import"./tick-CS4u37BA.js";import"./DropdownField-ClrrHaef.js";import"./withOsdkMetrics-C1uTzjR-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
