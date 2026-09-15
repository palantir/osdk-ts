import{j as i}from"./iframe-BrWV3VGg.js";import{O as p}from"./object-table-CrendqfR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DzIMCNhG.js";import"./preload-helper-D6ZQDyfK.js";import"./Table-DYCqxzSX.js";import"./index-DYvdPCiw.js";import"./Dialog-DvKX2myG.js";import"./cross-BVo6wQKR.js";import"./svgIconContainer-BUmNfWM-.js";import"./useBaseUiId-C6P9jJC8.js";import"./InternalBackdrop-D1UeMOCj.js";import"./composite-CPJHb2Y2.js";import"./index-D9RcQQYw.js";import"./index-BNPYibjQ.js";import"./index-C83r31cI.js";import"./useEventCallback-S146GLX7.js";import"./SkeletonBar-rvURuLEV.js";import"./LoadingCell-BxwZLFGg.js";import"./ColumnConfigDialog-WuaK5VlN.js";import"./DraggableList-CSZ48Bvc.js";import"./search-Bx9ioHBB.js";import"./Input-CDM3tu-K.js";import"./useControlled-DP9gX7Yn.js";import"./Button-DQPjTYox.js";import"./small-cross-CSnrRgMJ.js";import"./ActionButton-BL72bfc_.js";import"./Checkbox-BvA02otE.js";import"./useValueChanged-BenORVWn.js";import"./CollapsiblePanel-CaX-I3uU.js";import"./MultiColumnSortDialog-DHvIDNS9.js";import"./MenuTrigger-BlICw_Sh.js";import"./CompositeItem-gO6CPQln.js";import"./ToolbarRootContext-C9pKuHkV.js";import"./getDisabledMountTransitionStyles-n4up3zHU.js";import"./getPseudoElementBounds-Dt0T_qF0.js";import"./chevron-down-hd2kSFPo.js";import"./index-BT_S32QN.js";import"./error-DAF972ng.js";import"./BaseCbacBanner-B8_ZpeGS.js";import"./makeExternalStore-mRetLKqP.js";import"./Tooltip-DI2aqz32.js";import"./PopoverPopup-CrFMP63L.js";import"./debounce-CK3d8RX5.js";import"./useOsdkClient-BN__21fG.js";import"./tick-CFOMyABR.js";import"./DropdownField-srPoQHQr.js";import"./isEqual-D6AHDfRS.js";import"./withOsdkMetrics-CQ4mIL1e.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
