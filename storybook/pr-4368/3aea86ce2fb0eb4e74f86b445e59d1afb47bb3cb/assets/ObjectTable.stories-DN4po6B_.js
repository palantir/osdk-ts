import{j as i}from"./iframe-DTR6D-RF.js";import{O as p}from"./object-table-Bjfm0_ZT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZnVlEzC.js";import"./preload-helper-a_j-25GL.js";import"./Table-B0acF-0Q.js";import"./index-D7jWhYyZ.js";import"./Dialog-DqgJLJgO.js";import"./cross-DUXytXdv.js";import"./svgIconContainer-CTdZIA2H.js";import"./useBaseUiId-CSnUW2G1.js";import"./InternalBackdrop-CY4cyQPU.js";import"./composite-DubVH8wK.js";import"./index-CIoynBUP.js";import"./index-CeaWSZor.js";import"./index-DwZqbG9c.js";import"./useEventCallback-CPGNRTIC.js";import"./SkeletonBar-DG2N76Ak.js";import"./LoadingCell-Dk35W7vs.js";import"./ColumnConfigDialog-CF6C06HS.js";import"./DraggableList-CjhpS4Hz.js";import"./search-CA4ezTkI.js";import"./Input-BfVNpYWX.js";import"./useControlled-BQyYOX0S.js";import"./Button-B369yMXX.js";import"./small-cross-_n8UDI8I.js";import"./ActionButton-odMXA6JR.js";import"./Checkbox-C4M9YdoL.js";import"./useValueChanged-uq3nMm5M.js";import"./CollapsiblePanel-Cb8omPWi.js";import"./MultiColumnSortDialog-COoHnAmD.js";import"./MenuTrigger-BPyZedSc.js";import"./CompositeItem-DiX4k7Pe.js";import"./ToolbarRootContext-CUq0HOW2.js";import"./getDisabledMountTransitionStyles-sZ7HosF-.js";import"./getPseudoElementBounds-Bk-aKJSe.js";import"./chevron-down-D061nHxl.js";import"./index-DOZx46pQ.js";import"./error-ComocNo0.js";import"./BaseCbacBanner-CYKrO8dC.js";import"./makeExternalStore-HP359Ggt.js";import"./Tooltip-M1ezUcrB.js";import"./isObject-BdCdgIbL.js";import"./debounce-C9Yqr-CS.js";import"./useOsdkClient-s4ovKcdr.js";import"./tick-MViIMcR9.js";import"./DropdownField-pISV7PG6.js";import"./isEqual-CGllARYm.js";import"./_baseIsEqual-Ds4CNB4I.js";import"./withOsdkMetrics-BM7BKbHu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
