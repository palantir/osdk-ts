import{j as i}from"./iframe-DcYOqu2U.js";import{O as p}from"./object-table-BUJ0UBkR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B1NzyFTH.js";import"./preload-helper-S82--H9u.js";import"./Table-CdVuFRqi.js";import"./index-DiVuESi1.js";import"./Dialog-dtOt9m2Z.js";import"./cross-CDM50iQ0.js";import"./svgIconContainer-yWnKapjH.js";import"./useBaseUiId-BCzIH_us.js";import"./InternalBackdrop-CeJDAv-U.js";import"./composite-z-1xLKDd.js";import"./index-EYomkAWT.js";import"./index-0CesUQZv.js";import"./index-CknGzI9c.js";import"./useEventCallback-CcAOlUNX.js";import"./SkeletonBar-FDu5_K5F.js";import"./LoadingCell-DJEPgpK8.js";import"./ColumnConfigDialog-D87oUpOB.js";import"./DraggableList-BbaAj1ue.js";import"./search-DkFuHynJ.js";import"./Input-BDRGIKaZ.js";import"./useControlled-BUaPb3-r.js";import"./Button-_cT9fEiv.js";import"./small-cross-BTclTiS1.js";import"./ActionButton-CVvGpKcN.js";import"./Checkbox-Dc7MwXnE.js";import"./useValueChanged-CZEDJKXE.js";import"./CollapsiblePanel-DdleFq3w.js";import"./MultiColumnSortDialog-SDf46NGq.js";import"./MenuTrigger-B5vFtVv3.js";import"./CompositeItem-DDIaKXMB.js";import"./ToolbarRootContext-_iXFA-YU.js";import"./getDisabledMountTransitionStyles-csMlkapf.js";import"./getPseudoElementBounds-B3R2Xnt1.js";import"./chevron-down-CJhuOc7o.js";import"./index-DC8s7Au8.js";import"./error-CugXhAIj.js";import"./BaseCbacBanner-DvXGe8XZ.js";import"./makeExternalStore-DkFMYs8N.js";import"./Tooltip-CZmshqBI.js";import"./PopoverPopup-VAITxfkO.js";import"./debounce-B7Bz9Zmz.js";import"./useOsdkClient-DO7IEPKY.js";import"./tick-9LlYbapO.js";import"./DropdownField-DfYmYHBy.js";import"./isEqual-BBhQjzID.js";import"./withOsdkMetrics-D3ra-NNv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
