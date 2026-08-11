import{j as i}from"./iframe-BmMBMHjI.js";import{O as p}from"./object-table-CwFkNJIZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CmSd-kxH.js";import"./preload-helper-wzQkPQkq.js";import"./Table-C0pMP8sT.js";import"./index-B599Nl-W.js";import"./Dialog-BrDE5tk2.js";import"./cross-B9gM567t.js";import"./svgIconContainer-BQffYzRd.js";import"./useBaseUiId-BHpwAgpt.js";import"./InternalBackdrop-Rey_LVZ5.js";import"./composite-DSlcQFOp.js";import"./index-Ebkov8ab.js";import"./index-DG25GMXZ.js";import"./index-CZomj7go.js";import"./useEventCallback-sI5dVxlB.js";import"./SkeletonBar-LCe0Qgj0.js";import"./LoadingCell-BVWrLxF3.js";import"./ColumnConfigDialog-B35KuuxY.js";import"./DraggableList-5I1ixPpy.js";import"./search-D8XOPKVg.js";import"./Input-C23cy_6N.js";import"./useControlled-DfCV0PJg.js";import"./isEqual-3N5baw8B.js";import"./isObject-DbwYW1di.js";import"./Button-B9Rc1kKc.js";import"./ActionButton-Coa8HnK-.js";import"./Checkbox-snF-j8bO.js";import"./useValueChanged-CD5svSbs.js";import"./CollapsiblePanel-NYsMCJls.js";import"./MultiColumnSortDialog-mbkcwnyG.js";import"./MenuTrigger-Ba203MiR.js";import"./CompositeItem-DqqLZlu_.js";import"./ToolbarRootContext-DGVWKOqx.js";import"./getDisabledMountTransitionStyles-B5NkpSNb.js";import"./getPseudoElementBounds-WnDsJbwn.js";import"./chevron-down-D3dzWqXW.js";import"./index-C-Jg4LdO.js";import"./error-Dmt4lvM1.js";import"./BaseCbacBanner-Cpy5qmDf.js";import"./makeExternalStore-CAgM2Mvg.js";import"./Tooltip-Qnk5LM6P.js";import"./PopoverPopup-Biha7jk9.js";import"./toNumber-B6PNWjcS.js";import"./useOsdkClient-B74PkpGl.js";import"./tick-O0hT94BT.js";import"./DropdownField-GaW_KRF2.js";import"./withOsdkMetrics-CY55LUs5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
