import{j as i}from"./iframe-BUHzazL7.js";import{O as p}from"./object-table-XBMiTrRZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DIvaUA_n.js";import"./preload-helper-7pS0gMeE.js";import"./Table-DDeHODd6.js";import"./index-DAbvms11.js";import"./Dialog-C0B1XOhV.js";import"./cross-7sgOHlSE.js";import"./svgIconContainer-BXxi0rpR.js";import"./useBaseUiId-C-XGHDUu.js";import"./InternalBackdrop-DWQUsD_D.js";import"./composite-CJH_Fsm0.js";import"./index-DxPhhuRZ.js";import"./index-4VpR6oTN.js";import"./index-D9_tmeH_.js";import"./useEventCallback-DJI-8f_A.js";import"./SkeletonBar-0L9eM8bs.js";import"./LoadingCell-C4JquKRZ.js";import"./ColumnConfigDialog-1Eruji_6.js";import"./DraggableList-BDc-Fcs-.js";import"./search-DMRlY3rF.js";import"./Input-BfjcqwT4.js";import"./useControlled-Bi-hDwUg.js";import"./Button-DSLJNPkR.js";import"./small-cross-GD98Wxpt.js";import"./ActionButton-C74KTwzB.js";import"./Checkbox-BVuEO3Ob.js";import"./useValueChanged--IkhdHLc.js";import"./CollapsiblePanel-BSe5eWOg.js";import"./MultiColumnSortDialog-C0Vt9qBw.js";import"./MenuTrigger-CCRlm-zn.js";import"./CompositeItem-DKAPVnml.js";import"./ToolbarRootContext-CSl7A__z.js";import"./getDisabledMountTransitionStyles-Br83RBIR.js";import"./getPseudoElementBounds-DXs-chLM.js";import"./chevron-down-B-LRa2LO.js";import"./index-DO3hWjnR.js";import"./error-yaL4IHLV.js";import"./BaseCbacBanner-BdIaa-Er.js";import"./makeExternalStore-9kWZAU-l.js";import"./Tooltip-Ov0ymwIX.js";import"./isObject-DQHZLkoR.js";import"./debounce-BJH6rtO8.js";import"./useOsdkClient-Bpfa90-6.js";import"./tick-Cy-wk92W.js";import"./DropdownField-D0emNnpT.js";import"./isEqual-DysQUPNd.js";import"./_baseIsEqual-CMdutzPM.js";import"./withOsdkMetrics-BXf-ymjN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
