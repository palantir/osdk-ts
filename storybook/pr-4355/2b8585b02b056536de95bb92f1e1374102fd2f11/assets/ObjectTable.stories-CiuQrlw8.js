import{j as i}from"./iframe-BEK1shVf.js";import{O as p}from"./object-table-DwHvn_qH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BVKV1qn5.js";import"./preload-helper-BuTZfPnC.js";import"./Table-DcNIkTh8.js";import"./index-BqkMqHUK.js";import"./Dialog-Dq_d4Qtr.js";import"./cross-eaaked_u.js";import"./svgIconContainer-B5e6FaMs.js";import"./useBaseUiId-Bbs9yJ0n.js";import"./InternalBackdrop-Cyl8hjr5.js";import"./composite-_69CGg7n.js";import"./index-ZWNosLBb.js";import"./index-Bb4KPyDR.js";import"./index-X00-2pcl.js";import"./useEventCallback-D28FIM1T.js";import"./SkeletonBar-CHkjVGry.js";import"./LoadingCell-evw95-eh.js";import"./ColumnConfigDialog-AGFxXMn5.js";import"./DraggableList-CbW3a6g-.js";import"./search-BfhK71_u.js";import"./Input-p3RqWT-8.js";import"./useControlled-BrC9O3tj.js";import"./Button-BBBCKJre.js";import"./small-cross-BhzWxaHt.js";import"./ActionButton-CHEQyLj1.js";import"./Checkbox-DyoJb9ro.js";import"./useValueChanged-BMvgoEYe.js";import"./CollapsiblePanel-GTDy2Nz0.js";import"./MultiColumnSortDialog-BtXwT3vH.js";import"./MenuTrigger-BpOvNlAT.js";import"./CompositeItem-Zu9n7Vbm.js";import"./ToolbarRootContext-BqUxfNXS.js";import"./getDisabledMountTransitionStyles-DhYgXSRI.js";import"./getPseudoElementBounds-COWWUprC.js";import"./chevron-down-DvnARLJ3.js";import"./index-CzyW3VIg.js";import"./error-BmGg8gRf.js";import"./BaseCbacBanner-C0RjraHn.js";import"./makeExternalStore-BMPgGjGI.js";import"./Tooltip-D9vmNOqa.js";import"./PopoverPopup-Ct5pPHVu.js";import"./debounce-DTuDZiq3.js";import"./useOsdkClient-CEA25Zmd.js";import"./tick-DpOTzWq3.js";import"./DropdownField-C02A1fDn.js";import"./isEqual-D1kWq22X.js";import"./withOsdkMetrics-Ckzv-T2_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
