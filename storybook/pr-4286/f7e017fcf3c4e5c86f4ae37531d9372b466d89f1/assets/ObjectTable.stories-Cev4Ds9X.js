import{j as i}from"./iframe-DZ1IfAc9.js";import{O as p}from"./object-table-n4fDDaZs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CHJ9bSu5.js";import"./preload-helper-FioNmaYc.js";import"./Table-DAy0iIvq.js";import"./index-DlgarWWe.js";import"./Dialog-D6NnjYzR.js";import"./cross-9jSrVJX7.js";import"./svgIconContainer-BMPgpSIt.js";import"./useBaseUiId-D5mFLOde.js";import"./InternalBackdrop-71qlqQsM.js";import"./composite-naZtYWyA.js";import"./index-BqCJp_mQ.js";import"./index-Dm0H4d0k.js";import"./index-D8BPITj7.js";import"./useEventCallback-CivKyEqa.js";import"./SkeletonBar-Poc6NUlG.js";import"./LoadingCell-C25Ly4Io.js";import"./ColumnConfigDialog-Bv-NYj8T.js";import"./DraggableList-DTTybYEG.js";import"./search-DX_EHnIw.js";import"./Input-BVSO0T6H.js";import"./useControlled-CK492yS4.js";import"./Button-CEdONvfh.js";import"./small-cross-k0iuPUUj.js";import"./ActionButton-C59C2SC2.js";import"./Checkbox-B4MDdy_R.js";import"./useValueChanged-DOaXJk-l.js";import"./CollapsiblePanel-DFS5HvYG.js";import"./MultiColumnSortDialog-D2Zs5eyA.js";import"./MenuTrigger-BMDKhIr4.js";import"./CompositeItem-BRIYvu0B.js";import"./ToolbarRootContext-ATEsw9kW.js";import"./getDisabledMountTransitionStyles-CbTtYX3G.js";import"./getPseudoElementBounds-oqBrWOWr.js";import"./chevron-down-ClTS_TF6.js";import"./index-DqffqbdW.js";import"./error-CK66UUTY.js";import"./BaseCbacBanner-MlktgPHb.js";import"./makeExternalStore-DT9sfKcd.js";import"./Tooltip-BVGKe7Gt.js";import"./isObject-BzWFEdJL.js";import"./debounce--VQS0Dqu.js";import"./useOsdkClient-G1l4twLo.js";import"./tick-DJ6zublk.js";import"./DropdownField-Co-1Lqep.js";import"./isEqual-DYFiJ8mG.js";import"./_baseIsEqual-CfKgNQ0W.js";import"./withOsdkMetrics-DkI7OiMa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
