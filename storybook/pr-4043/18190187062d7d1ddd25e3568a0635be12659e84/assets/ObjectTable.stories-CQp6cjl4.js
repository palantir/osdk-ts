import{j as i}from"./iframe-B7clUVHt.js";import{O as p}from"./object-table-B0OtmNEY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CsD55Z6l.js";import"./preload-helper-CUPfdM8_.js";import"./Table-C0j8mc77.js";import"./index-BJuITS90.js";import"./Dialog-BIO7p1cc.js";import"./cross-CmeT_My2.js";import"./svgIconContainer-BJLnErPQ.js";import"./useBaseUiId-DVrDHycI.js";import"./InternalBackdrop-BrQ7JKiG.js";import"./composite-DyK7yBlQ.js";import"./index-aq1Wm6Yn.js";import"./index-DD_iU2uX.js";import"./index-BsCvtptR.js";import"./useEventCallback-F6nzKXN_.js";import"./SkeletonBar-BLBNPoWa.js";import"./LoadingCell-vkjPFnAM.js";import"./ColumnConfigDialog-_2TwZLuM.js";import"./DraggableList-z0kMSsrK.js";import"./search-D5J8qnAm.js";import"./Input-CT_I8RKH.js";import"./useControlled-ccc4EKlt.js";import"./Button-BsEC03FF.js";import"./small-cross-BzBsHkLR.js";import"./ActionButton-CExZP-4d.js";import"./Checkbox-DctbVVEh.js";import"./useValueChanged-AsMuu_TV.js";import"./CollapsiblePanel-DR3Y8xjv.js";import"./MultiColumnSortDialog-C-vqjMra.js";import"./MenuTrigger-DnWS9EPS.js";import"./CompositeItem-DVh6-70_.js";import"./ToolbarRootContext-CjbBLH2h.js";import"./getDisabledMountTransitionStyles-2ly5ruH9.js";import"./getPseudoElementBounds-DC3vRuQo.js";import"./chevron-down-M1DCZVuw.js";import"./index-CjqIP0d4.js";import"./error-gkpqEfzK.js";import"./BaseCbacBanner-xMQZC0n7.js";import"./makeExternalStore-B3i8xKry.js";import"./Tooltip-CVdygfxv.js";import"./PopoverPopup-f3NfI19W.js";import"./debounce-B63E3hZn.js";import"./useOsdkClient-DBK_pZWR.js";import"./tick-CUlYlvRp.js";import"./DropdownField-B6cnd6bN.js";import"./isEqual-Dzm4OVig.js";import"./withOsdkMetrics-Tq1KK3ST.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
