import{j as i}from"./iframe-2fyz7Bbq.js";import{O as p}from"./object-table-DTsycy5s.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DMRJmadl.js";import"./preload-helper-FOou-mrh.js";import"./Table-gi5CAIvR.js";import"./index-w9tQLZ4b.js";import"./Dialog-B6oPQQYk.js";import"./cross-FzaN-G0q.js";import"./svgIconContainer-CyZL2Xnt.js";import"./useBaseUiId-Dhg2ncZ0.js";import"./InternalBackdrop-BtkGVef4.js";import"./composite-B2qtiWqW.js";import"./index-2dmmxfKi.js";import"./index-BVjs4Tt3.js";import"./index-D6LVVKRT.js";import"./useEventCallback-UvUwHhfn.js";import"./SkeletonBar-C3vpEq_4.js";import"./LoadingCell-BVnG1Q6E.js";import"./ColumnConfigDialog-Z6LmvzGj.js";import"./DraggableList-B9RB01Oo.js";import"./search-Cte9a7SC.js";import"./Input-BME0--u-.js";import"./useControlled-DBeA7CGw.js";import"./Button-CEYlZhfx.js";import"./small-cross-BrCxHajj.js";import"./ActionButton-DopClacG.js";import"./Checkbox-Ym-MOukq.js";import"./useValueChanged-DqgUGOFJ.js";import"./CollapsiblePanel-BaQP6E3J.js";import"./MultiColumnSortDialog-CBbZFdhX.js";import"./MenuTrigger-CpWAGEsx.js";import"./CompositeItem-DxQDXycs.js";import"./ToolbarRootContext-D0NvUOkn.js";import"./getDisabledMountTransitionStyles-DUL0cjvK.js";import"./getPseudoElementBounds-nIhWr_xb.js";import"./chevron-down-IEWgGiNw.js";import"./index-CV5ZhaCs.js";import"./error-DQou1LSG.js";import"./BaseCbacBanner-BNLddCcH.js";import"./makeExternalStore-wF1R62-h.js";import"./Tooltip-BzXO1CqE.js";import"./PopoverPopup-Djz7xAaZ.js";import"./debounce-BsOS8FIl.js";import"./useOsdkClient-CFdcyAcU.js";import"./tick-DxXdptn1.js";import"./DropdownField-D9o_O7ux.js";import"./isEqual-DRIBlFhv.js";import"./withOsdkMetrics-BgEBqHFS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
