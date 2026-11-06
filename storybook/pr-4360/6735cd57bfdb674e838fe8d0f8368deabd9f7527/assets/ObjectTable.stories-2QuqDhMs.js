import{j as i}from"./iframe-D0hYQ0ZS.js";import{O as p}from"./object-table-DLX2MzIu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CUqSSouM.js";import"./preload-helper-CA2FQp3d.js";import"./Table-DMz3Y6NY.js";import"./index-DmARC5st.js";import"./Dialog-Bl5C-BqW.js";import"./cross-DGfZ9I8q.js";import"./svgIconContainer-Bnj1Dnpn.js";import"./useBaseUiId-XRgD1fAc.js";import"./InternalBackdrop-SIBrBcO2.js";import"./composite-DkKFn4B2.js";import"./index-dclRq-mv.js";import"./index-DET9q48x.js";import"./index-BbLGiomW.js";import"./useEventCallback-QgwS4DGJ.js";import"./SkeletonBar-C6N4_KPV.js";import"./LoadingCell-Cy3ZG3Ul.js";import"./ColumnConfigDialog-Rnk5vxEV.js";import"./DraggableList-TmF7-AcL.js";import"./search-DXnEIY7b.js";import"./Input-DppPciYW.js";import"./useControlled-DFsigNjS.js";import"./Button-BBjgpomd.js";import"./small-cross-BxDAgcxl.js";import"./ActionButton-DpwsppbT.js";import"./Checkbox-DHbPmO1b.js";import"./useValueChanged-C5EsCsdO.js";import"./CollapsiblePanel-BJaUHEEv.js";import"./MultiColumnSortDialog-Cl36xL0F.js";import"./MenuTrigger-bO1EcLGj.js";import"./CompositeItem-BfeA3NJO.js";import"./ToolbarRootContext-B3P_Il02.js";import"./getDisabledMountTransitionStyles-CI56VyjH.js";import"./getPseudoElementBounds-DLUmkYq-.js";import"./chevron-down-DpAIzyvb.js";import"./index-CwuOLTmH.js";import"./error-DZHrzjAe.js";import"./BaseCbacBanner-Cu3SBgXf.js";import"./makeExternalStore-BcCQ6g4O.js";import"./Tooltip-CRcQ9riQ.js";import"./isObject-BfICCCNa.js";import"./debounce-Dai0imdk.js";import"./useOsdkClient-Dhz58JN-.js";import"./tick-CAmkKM-G.js";import"./DropdownField-DDHVxYRR.js";import"./isEqual-ouCKJr-f.js";import"./_baseIsEqual-B00E2ztM.js";import"./withOsdkMetrics-Dqap3OIg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
