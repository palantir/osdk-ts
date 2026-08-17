import{j as i}from"./iframe-BqP11lAl.js";import{O as p}from"./object-table-BSX4imw4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Co7ziwZJ.js";import"./preload-helper-CC6pDEnd.js";import"./Table-CLZH9aTN.js";import"./index-C64P8eBz.js";import"./Dialog-kfk8DkZ5.js";import"./cross-HwIuLDzz.js";import"./svgIconContainer-oPNNgG6X.js";import"./useBaseUiId-Djy5KSNq.js";import"./InternalBackdrop-CBRTTdO3.js";import"./composite-kMucuKDb.js";import"./index-BB8CgDAM.js";import"./index-CGSFhzHU.js";import"./index-DGkDRhxB.js";import"./useEventCallback-Z2-FvKEF.js";import"./SkeletonBar-DMpt_Xnd.js";import"./LoadingCell-SkI0LHW0.js";import"./ColumnConfigDialog-kq1NxhtA.js";import"./DraggableList-qWvzM3F0.js";import"./search-BJsW39qj.js";import"./Input-B380zOW0.js";import"./useControlled-C68p10XH.js";import"./isEqual-HWPPZe8e.js";import"./isObject-EDcxoV9U.js";import"./Button-CeOJx0M4.js";import"./ActionButton-CSPytVBD.js";import"./Checkbox-Dc98QANj.js";import"./useValueChanged-C3lz4-Lx.js";import"./CollapsiblePanel-Dd-c_wm9.js";import"./MultiColumnSortDialog-C5lYkLdg.js";import"./MenuTrigger-C1W8SDZ-.js";import"./CompositeItem-BmMUGQ2w.js";import"./ToolbarRootContext-ClCfVHHi.js";import"./getDisabledMountTransitionStyles-DPQMYvAe.js";import"./getPseudoElementBounds-DG5NkHrs.js";import"./chevron-down-DCtv2YH3.js";import"./index-Bc_u8_gZ.js";import"./error-BNv6Et6s.js";import"./BaseCbacBanner-Cl9CYcki.js";import"./makeExternalStore-BC_XfyUC.js";import"./Tooltip-B7QrohEN.js";import"./PopoverPopup-Rq34_u9B.js";import"./toNumber-B1Hjpnf0.js";import"./useOsdkClient-BIJtNhWb.js";import"./tick-tcNcz_VP.js";import"./DropdownField-z5Tej7ll.js";import"./withOsdkMetrics-CWSxEVx_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
