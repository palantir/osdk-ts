import{j as i}from"./iframe-BzHLIdAf.js";import{O as p}from"./object-table-DM37Km92.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D0rw0p7t.js";import"./preload-helper-C5EK4nFx.js";import"./Table-Bx5wVz4e.js";import"./index-tkfEcbGy.js";import"./Dialog-CDFlmzSQ.js";import"./cross-DFzeXQKN.js";import"./svgIconContainer-yN9N03QS.js";import"./useBaseUiId-DulnEBx2.js";import"./InternalBackdrop-BJGg8Bd5.js";import"./composite-C-vnMrHU.js";import"./index-BTFfBOqo.js";import"./index-B3AMqERT.js";import"./index-CZRv-oVY.js";import"./useEventCallback-D-Rcflfy.js";import"./SkeletonBar-NMHUoGf4.js";import"./LoadingCell-IPG9IyHM.js";import"./ColumnConfigDialog-DjP6HMk4.js";import"./DraggableList-Bcq6r3-A.js";import"./search-BBdM6dRe.js";import"./Input-DD8tFxDd.js";import"./useControlled-BUD4_K19.js";import"./Button-oOxpuNBl.js";import"./small-cross-BOLwRIx5.js";import"./ActionButton-CMQ5G7Nn.js";import"./Checkbox-C-2irHoe.js";import"./useValueChanged-BsO1IbSa.js";import"./CollapsiblePanel-D5VJxf2v.js";import"./MultiColumnSortDialog-D8F2KFw1.js";import"./MenuTrigger-SEsNi6ut.js";import"./CompositeItem-DoI0Nlr7.js";import"./ToolbarRootContext-DfZ85ISE.js";import"./getDisabledMountTransitionStyles-BMhngEHI.js";import"./getPseudoElementBounds-DzacU-6p.js";import"./chevron-down-C3-VW8uJ.js";import"./index-CNDpcyk6.js";import"./error-DnjCL8vD.js";import"./BaseCbacBanner-rRooezu9.js";import"./makeExternalStore-CzyuozHX.js";import"./Tooltip-D66jiuuz.js";import"./PopoverPopup-DottMH45.js";import"./debounce-B7Bw7NEb.js";import"./useOsdkClient-Dieuw0cs.js";import"./tick-qy3966gs.js";import"./DropdownField-DXwIrhJq.js";import"./isEqual-CyjIJqdd.js";import"./withOsdkMetrics-C6AsUlOu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
