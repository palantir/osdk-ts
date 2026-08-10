import{j as i}from"./iframe-T1o6DwQn.js";import{O as p}from"./object-table-DZY8b-86.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bs2-TSVb.js";import"./preload-helper-CkSYKUqL.js";import"./Table-3iJd7gyC.js";import"./index-C-Yvvs3G.js";import"./Dialog-gA5oXLZl.js";import"./cross-DNFg9adP.js";import"./svgIconContainer-BEph9AST.js";import"./useBaseUiId-CQK9r6XJ.js";import"./InternalBackdrop-DwRohRWz.js";import"./composite-BUVy4G6Q.js";import"./index-Cj5oaWDZ.js";import"./index-DzvoDz4m.js";import"./index-B2yL0vo-.js";import"./useEventCallback-DCBJT6LD.js";import"./SkeletonBar-D77QBKOp.js";import"./LoadingCell-Idw7S2wY.js";import"./ColumnConfigDialog-vuVx74WT.js";import"./DraggableList-BY1xQfTl.js";import"./search-CLuqE52U.js";import"./Input-Dan1z7PJ.js";import"./useControlled-KFuOJB7y.js";import"./isEqual-DPxqtn2A.js";import"./isObject-BPUwpKdJ.js";import"./Button-B5AFRMRx.js";import"./ActionButton-DFoxUgo7.js";import"./Checkbox-CLP1JsNX.js";import"./useValueChanged-D-Nexx1O.js";import"./CollapsiblePanel-VveLCUij.js";import"./MultiColumnSortDialog-fd0ORnEb.js";import"./MenuTrigger-B-v3EPiU.js";import"./CompositeItem-Cwg9cZxl.js";import"./ToolbarRootContext-CmFCJCtX.js";import"./getDisabledMountTransitionStyles-BPa-nMbj.js";import"./getPseudoElementBounds-Hdyo3ffU.js";import"./chevron-down-DR4svmgW.js";import"./index-D1JQTjX2.js";import"./error-Cwg5VJo2.js";import"./BaseCbacBanner-Cz8vVRvX.js";import"./makeExternalStore-BlXYWwZo.js";import"./Tooltip-CZ9oTlF0.js";import"./PopoverPopup-GGnOhBXr.js";import"./toNumber-B0doV3z3.js";import"./useOsdkClient-30aL_up_.js";import"./tick-6XDwjxMK.js";import"./DropdownField-djZ4N90-.js";import"./withOsdkMetrics-B2606ITo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
