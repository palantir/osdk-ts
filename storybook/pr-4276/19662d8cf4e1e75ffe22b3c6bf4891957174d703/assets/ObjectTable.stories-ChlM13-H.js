import{j as i}from"./iframe-CStnt8bf.js";import{O as p}from"./object-table-DFsXId9i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtyzdY5X.js";import"./preload-helper-BHFu-ydw.js";import"./Table-DBS6XJdH.js";import"./index-bIM1mjE2.js";import"./Dialog-CkqR53d9.js";import"./cross-CzL3ilF7.js";import"./svgIconContainer-CBrsISO6.js";import"./useBaseUiId-D9TkSWZv.js";import"./InternalBackdrop-dpQuuCiD.js";import"./composite-DIpMeE4S.js";import"./index-Dubonfnq.js";import"./index-VT6Dn2OL.js";import"./index-DyrSN_o7.js";import"./useEventCallback-Ds_cQgpI.js";import"./SkeletonBar-6Pwtzhfc.js";import"./LoadingCell-DbhG2pOg.js";import"./ColumnConfigDialog-Cx-LiGAh.js";import"./DraggableList-DHNVyXK9.js";import"./search-BrGXguj5.js";import"./Input-BxZoPAuB.js";import"./useControlled-B4F-euPl.js";import"./Button-BTOFQ1SZ.js";import"./small-cross-DKMVFFWv.js";import"./ActionButton-DOBKUozS.js";import"./Checkbox-Dx3AAe_X.js";import"./useValueChanged-DwaCIejN.js";import"./CollapsiblePanel-BDHPVZWV.js";import"./MultiColumnSortDialog-D2eHp6DO.js";import"./MenuTrigger-NDl8CeUW.js";import"./CompositeItem-BdSAWgXI.js";import"./ToolbarRootContext-Dy3DBHgn.js";import"./getDisabledMountTransitionStyles-9rWadWne.js";import"./getPseudoElementBounds-BjFdhu5l.js";import"./chevron-down-DP-5q6nZ.js";import"./index-BZfBBfBl.js";import"./error-CM07sBvh.js";import"./BaseCbacBanner-D4DXqewK.js";import"./makeExternalStore-Cv8ow0-9.js";import"./Tooltip-BV608A00.js";import"./isObject-DTA28_gJ.js";import"./debounce-CBH2mxRm.js";import"./useOsdkClient-Jni9x8Xr.js";import"./tick-B9r2rV47.js";import"./DropdownField-eRFOlzDf.js";import"./isEqual-DcoImb_5.js";import"./_baseIsEqual-CQQa-Rsq.js";import"./withOsdkMetrics-8Qsa17lA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
