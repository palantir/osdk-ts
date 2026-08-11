import{j as i}from"./iframe-BYn0Dbkf.js";import{O as p}from"./object-table-B0lAPirf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bbrqd3jL.js";import"./preload-helper-Bs3XUXmU.js";import"./Table-9ofcA_L-.js";import"./index-DAPmu22T.js";import"./Dialog-a20WTzra.js";import"./cross-BXV7hkb7.js";import"./svgIconContainer-BVGjJ7Ho.js";import"./useBaseUiId-BF9dGCHt.js";import"./InternalBackdrop-C6QQSOU_.js";import"./composite-DJ1g0dtg.js";import"./index-XbPpfGjN.js";import"./index-3eUfjQeA.js";import"./index-k0LAveS5.js";import"./useEventCallback-C2Vv72P0.js";import"./SkeletonBar-B8UnVDE_.js";import"./LoadingCell-CXCaMwdV.js";import"./ColumnConfigDialog-Crc9dj67.js";import"./DraggableList-DX3N03Ic.js";import"./search-BHLX4gDD.js";import"./Input-JHNZlMmd.js";import"./useControlled-BjeGab0J.js";import"./isEqual-C6o1lCTI.js";import"./isObject-D59ADqrH.js";import"./Button-SDlJ1SYG.js";import"./ActionButton-3OKX3KKo.js";import"./Checkbox-Cw8U-R78.js";import"./useValueChanged-lInqvc-E.js";import"./CollapsiblePanel-CS8vV5wB.js";import"./MultiColumnSortDialog-DxC7E4Cw.js";import"./MenuTrigger-B6ffxhp1.js";import"./CompositeItem-D_irOX6v.js";import"./ToolbarRootContext-CIeppiht.js";import"./getDisabledMountTransitionStyles-BFmswiN_.js";import"./getPseudoElementBounds-DddCY1gg.js";import"./chevron-down-CkcBV-EM.js";import"./index-BcYpOZ5o.js";import"./error-Ca0TYJkV.js";import"./BaseCbacBanner-CbvQ2cnZ.js";import"./makeExternalStore-yw69iLs7.js";import"./Tooltip--_7id-zF.js";import"./PopoverPopup-BtDf8BBC.js";import"./toNumber-BIk96f3L.js";import"./useOsdkClient-DwNUV0Zv.js";import"./tick-CGOrJa2L.js";import"./DropdownField-DYO0cR2M.js";import"./withOsdkMetrics-C6gKOAoe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
