import{j as i}from"./iframe-DqgxXeY0.js";import{O as p}from"./object-table-BHsz3jip.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BMMoeNJa.js";import"./preload-helper-swuqDPIZ.js";import"./Table-m-MxvkKL.js";import"./index-Fs4ToPVt.js";import"./Dialog-C78ZhMnJ.js";import"./cross-B3HJExXl.js";import"./svgIconContainer-DJKRTo9s.js";import"./useBaseUiId-BHCjvXGp.js";import"./InternalBackdrop-ilFJBb7D.js";import"./composite-CgO0yOYX.js";import"./index-Bz8pQAXU.js";import"./index-Ber0h4Jn.js";import"./index-DvJQf8Bx.js";import"./useEventCallback-Cl40EsWw.js";import"./SkeletonBar-dk6L44dy.js";import"./LoadingCell-C7i2-eJ3.js";import"./ColumnConfigDialog-CKDDhK2e.js";import"./DraggableList-BajbNLhq.js";import"./search-Xkmq_vNk.js";import"./Input-hYuVgO52.js";import"./useControlled-CXVHehbk.js";import"./Button-D3n3BMyb.js";import"./small-cross-D9cFuYQm.js";import"./ActionButton-Dx0u_s-J.js";import"./Checkbox-BVtxtd_T.js";import"./useValueChanged-CWSAXj-_.js";import"./CollapsiblePanel-yGA5DenS.js";import"./MultiColumnSortDialog-GOKqrKQb.js";import"./MenuTrigger-BnVfq4xJ.js";import"./CompositeItem-Bs3OF5D8.js";import"./ToolbarRootContext-CCZNhx4y.js";import"./getDisabledMountTransitionStyles-L5cNDrBv.js";import"./getPseudoElementBounds-B1lSVoga.js";import"./chevron-down-CeLBV2f1.js";import"./index-LCxHta6h.js";import"./error-CoHaOVWU.js";import"./BaseCbacBanner-jP_LHP__.js";import"./makeExternalStore-iwrJkOaf.js";import"./Tooltip-B7aaw0SK.js";import"./PopoverPopup-C6-qD3UD.js";import"./debounce-15J3RxBk.js";import"./useOsdkClient-CqjG4PWJ.js";import"./tick-O_u0mHop.js";import"./DropdownField-BwOzQWj7.js";import"./isEqual-BckK8J1Q.js";import"./withOsdkMetrics-Bsc7ScXm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
