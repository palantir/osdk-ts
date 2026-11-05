import{j as i}from"./iframe-BYejxj2b.js";import{O as p}from"./object-table-DeEAqfUC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DRl75OGu.js";import"./preload-helper-C0rDQy5D.js";import"./Table-Ck2donfE.js";import"./index-iipsf35Q.js";import"./Dialog-_5OGUo-t.js";import"./cross-C58IIDJt.js";import"./svgIconContainer-BpdSUco1.js";import"./useBaseUiId-C9Oeigog.js";import"./InternalBackdrop-CpB9FOQ-.js";import"./composite-E5tzecJv.js";import"./index-CXPcvEZE.js";import"./index-CPmCN5n5.js";import"./index-mOzIY_Cu.js";import"./useEventCallback-Bqw3GNAH.js";import"./SkeletonBar-Br2yrjJj.js";import"./LoadingCell-CI4BrKiD.js";import"./ColumnConfigDialog-CU3B-UjG.js";import"./DraggableList-B1HdKVrR.js";import"./search-DoJ4TrKJ.js";import"./Input-iw0NWTaR.js";import"./useControlled-C0V-KMju.js";import"./Button-CuqI5477.js";import"./small-cross-Cu684_cF.js";import"./ActionButton-oGSx-SKD.js";import"./Checkbox-yIlqtiqn.js";import"./useValueChanged-CzPX0usT.js";import"./CollapsiblePanel-CMFkfvwx.js";import"./MultiColumnSortDialog-BdsAjARw.js";import"./MenuTrigger-CP1yKMgK.js";import"./CompositeItem-Ze_igsRp.js";import"./ToolbarRootContext-BhZB42YH.js";import"./getDisabledMountTransitionStyles-CEv9PYlI.js";import"./getPseudoElementBounds-Ch3KvVo0.js";import"./chevron-down-CRHNnKNO.js";import"./index-CZoFsv0k.js";import"./error-D3cs_59E.js";import"./BaseCbacBanner-De0tLRQx.js";import"./makeExternalStore-BiJsDtWq.js";import"./Tooltip-Cz_WgPBn.js";import"./PopoverPopup-DPn5xYgL.js";import"./debounce-B4fjUaL7.js";import"./useOsdkClient-v91fIKBr.js";import"./tick-xiLoJvOV.js";import"./DropdownField-B9F8HYeP.js";import"./isEqual-B5NKSLiF.js";import"./withOsdkMetrics-BsRlr_Wc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
