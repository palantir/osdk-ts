import{j as i}from"./iframe-DJaET-4W.js";import{O as p}from"./object-table-CuSa47sm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-qMio7iTb.js";import"./preload-helper-BLsfXLTb.js";import"./Table-JrxAFI5T.js";import"./index-CXAjf3Lj.js";import"./Dialog-Dwent98Z.js";import"./cross-DREoRCVi.js";import"./svgIconContainer-ZOxHgtx1.js";import"./useBaseUiId-C64d8rt1.js";import"./InternalBackdrop-BLBvj5zY.js";import"./composite-DJhk57sk.js";import"./index-DBzGUm2T.js";import"./index-BtLQLn9f.js";import"./index-w7P2l7vQ.js";import"./useEventCallback-CXs_hqhL.js";import"./SkeletonBar-Bcjdnsfw.js";import"./LoadingCell-e-bxlp72.js";import"./ColumnConfigDialog-J6w0_pmW.js";import"./DraggableList-XTrRxHlY.js";import"./search-DhdNxuaM.js";import"./Input-Ckb4ze0a.js";import"./useControlled-CUKxlT-G.js";import"./Button-BMrMSDOy.js";import"./small-cross-BsEXntmc.js";import"./ActionButton-BmGbsUdR.js";import"./Checkbox-Jt8RyrRN.js";import"./useValueChanged-Bp7ZN932.js";import"./CollapsiblePanel--Hfy1MmM.js";import"./MultiColumnSortDialog-yuAnYgW8.js";import"./MenuTrigger-t78-yvMd.js";import"./CompositeItem-DfP3tBe3.js";import"./ToolbarRootContext-geDYh26O.js";import"./getDisabledMountTransitionStyles-DhGiANWb.js";import"./getPseudoElementBounds-BuefBtP4.js";import"./chevron-down-LDtg690T.js";import"./index-Cy507Wuk.js";import"./error-BfaKs4G2.js";import"./BaseCbacBanner-u1noguyg.js";import"./makeExternalStore-Bp_quvMW.js";import"./Tooltip-CSQ5aHI4.js";import"./PopoverPopup-BCoOy9bx.js";import"./debounce-D8PkG1oB.js";import"./useOsdkClient-CVweCxJ6.js";import"./tick-DE6CHk5m.js";import"./DropdownField-Bf4KN3tx.js";import"./isEqual-C-56PDu6.js";import"./withOsdkMetrics-DfivTNsf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
