import{j as i}from"./iframe-C_ysWNhq.js";import{O as p}from"./object-table-Onb8y1Nl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ex02x3Ua.js";import"./preload-helper-B0JwDfT_.js";import"./Table-BeiJE8WB.js";import"./index-D8k-dqCc.js";import"./Dialog-DAZHzVkY.js";import"./cross-Cks-uTaq.js";import"./svgIconContainer-DPwpyqoW.js";import"./useBaseUiId-B8q5gmFn.js";import"./InternalBackdrop-DqvtyXTc.js";import"./composite-PAhMiX3w.js";import"./index-BT7QjpST.js";import"./index-1cFlDnPE.js";import"./index-1eqntDw1.js";import"./useEventCallback-DPd3byDr.js";import"./SkeletonBar-BFhlXhJF.js";import"./LoadingCell-2MeogVKx.js";import"./ColumnConfigDialog-S153LwhW.js";import"./DraggableList-CfIzFJ4k.js";import"./search-xeTrpNpN.js";import"./Input-BrUW9GIt.js";import"./useControlled-B4G6FObT.js";import"./Button-BKcb8JBm.js";import"./small-cross-Dk7JcshC.js";import"./ActionButton-B5_maKSp.js";import"./Checkbox-CBOMkCDn.js";import"./useValueChanged-piBol0Lc.js";import"./CollapsiblePanel-B8zrkzOu.js";import"./MultiColumnSortDialog-C4lE6AcH.js";import"./MenuTrigger-88GoxliD.js";import"./CompositeItem-DiTioOKz.js";import"./ToolbarRootContext-DfBDsER3.js";import"./getDisabledMountTransitionStyles-Dc1W8hh3.js";import"./getPseudoElementBounds-BMpXcTKf.js";import"./chevron-down-Cj8R-hIH.js";import"./index-Ck0sGKHu.js";import"./error-DcGiqau0.js";import"./BaseCbacBanner-OU5akw7o.js";import"./makeExternalStore-B5fwAHq7.js";import"./Tooltip-BehVKe_w.js";import"./PopoverPopup-CcARrEno.js";import"./debounce-CIEAz8C3.js";import"./useOsdkClient-BbU_1F98.js";import"./tick-CPHUZoWi.js";import"./DropdownField-DNkGYaLi.js";import"./isEqual-dzPNJu1I.js";import"./withOsdkMetrics-FlvAdwaB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
