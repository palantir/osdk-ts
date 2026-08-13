import{j as i}from"./iframe-DCe6Mdm_.js";import{O as p}from"./object-table-CPHzaYxP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CK2ZPicq.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BOJ4PoOi.js";import"./index-DEsJaMx2.js";import"./Dialog-DGwfutm-.js";import"./cross-CJsNmyRf.js";import"./svgIconContainer-DCGhfyJV.js";import"./useBaseUiId-BBf2jJQX.js";import"./InternalBackdrop-mRLBU6i0.js";import"./composite-D278LNPr.js";import"./index-w4e4JQ9Y.js";import"./index-DfEtL9_w.js";import"./index-D7eNBVK-.js";import"./useEventCallback-60DtBFBu.js";import"./SkeletonBar-lewdr35b.js";import"./LoadingCell-C7C7yuXh.js";import"./ColumnConfigDialog-ClE2fiGp.js";import"./DraggableList-DyLRFxn4.js";import"./search-i3wN8XPz.js";import"./Input-CexuDk3x.js";import"./useControlled-J08ycTXS.js";import"./Button-CMj35CzN.js";import"./small-cross-CKR9nVmW.js";import"./ActionButton-CxPFrJen.js";import"./Checkbox-CFvHGocX.js";import"./useValueChanged-CKSZHwBz.js";import"./CollapsiblePanel-wkW42G3A.js";import"./MultiColumnSortDialog-C8R_Sag-.js";import"./MenuTrigger-3KeKY9rT.js";import"./CompositeItem-QuRNq9IV.js";import"./ToolbarRootContext-Dg7t3l2c.js";import"./getDisabledMountTransitionStyles-90RwPzEQ.js";import"./getPseudoElementBounds-DUbM5yff.js";import"./chevron-down-1f-nO09j.js";import"./index-C2gC57rZ.js";import"./error-DDf8VeOI.js";import"./BaseCbacBanner-BsymODXL.js";import"./makeExternalStore-Z40vhwY9.js";import"./Tooltip-DL0JIbop.js";import"./PopoverPopup-453DLuVc.js";import"./toNumber-CNeIRQiS.js";import"./useOsdkClient-Ce4ACsVh.js";import"./tick-CmBo1oMB.js";import"./DropdownField-G_wbGU9M.js";import"./withOsdkMetrics-DaHbZvPF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
