import{j as i}from"./iframe-C1PJ2Ip3.js";import{O as p}from"./object-table-DrEfBfWz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3MHnkG5c.js";import"./preload-helper-K62Nqc8W.js";import"./Table-bDGEE5Ye.js";import"./index-Bl_td8xL.js";import"./Dialog-D2A7rpXk.js";import"./cross-BL08wg1G.js";import"./svgIconContainer-CS1Om_Hp.js";import"./useBaseUiId-DyrsDa4O.js";import"./InternalBackdrop-18_u3Bxf.js";import"./composite-SuHb1-n8.js";import"./index-CQ1-7fux.js";import"./index-BwWp-Y48.js";import"./index-DbG8xmuF.js";import"./useEventCallback-CA44GkQU.js";import"./SkeletonBar-XjfXRsEZ.js";import"./LoadingCell-CraGbydn.js";import"./ColumnConfigDialog-wDx_lzxG.js";import"./DraggableList-Bm_-reKI.js";import"./search-664FgG4e.js";import"./Input-C990PYdc.js";import"./useControlled-DAF9cP4u.js";import"./Button-D_-j7_TT.js";import"./small-cross-BzOk2_U5.js";import"./ActionButton-CBvWgBp4.js";import"./Checkbox-B0HEuMZr.js";import"./useValueChanged-KUt7bhos.js";import"./CollapsiblePanel-DvU2YKX7.js";import"./MultiColumnSortDialog-BRtSFgNV.js";import"./MenuTrigger-PenfRPuT.js";import"./CompositeItem-Y5w5FHLX.js";import"./ToolbarRootContext-DK1JTwfB.js";import"./getDisabledMountTransitionStyles-CIuJRipc.js";import"./getPseudoElementBounds-UxfqvlrI.js";import"./chevron-down-DsYD0DIc.js";import"./index-DD9JVuxo.js";import"./error-4m8JSMdV.js";import"./BaseCbacBanner-Cu_HhiTv.js";import"./makeExternalStore-CZuSCPax.js";import"./Tooltip-a9XQHJAr.js";import"./PopoverPopup-BV20P4zG.js";import"./debounce-CzwkNGld.js";import"./useOsdkClient-BMcHutRF.js";import"./tick-CZuw3C8k.js";import"./DropdownField-DbjsbhxR.js";import"./isEqual-BESLgLUF.js";import"./withOsdkMetrics-CdeGhgQc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
