import{j as i}from"./iframe-B34J-v6h.js";import{O as p}from"./object-table-DTjiON6u.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-k-IrQx3y.js";import"./preload-helper-DktNXW3g.js";import"./Table-Dfg77Bxb.js";import"./index-BszbKXdM.js";import"./Dialog-DqrZKH8L.js";import"./cross-pUUxARqk.js";import"./svgIconContainer-DmCHV_gw.js";import"./useBaseUiId-Do4jndxX.js";import"./InternalBackdrop-BhgSPtRS.js";import"./composite-DxIIqapU.js";import"./index-DAodypt3.js";import"./index-BqaRlPNX.js";import"./index-ClzzyEIK.js";import"./useEventCallback-DYWArs4W.js";import"./SkeletonBar-DgZTpj9n.js";import"./LoadingCell-KPodI4gW.js";import"./ColumnConfigDialog-B7uGR623.js";import"./DraggableList-DiF1ea2S.js";import"./search-CeKblNnA.js";import"./Input-C4Ex_DFO.js";import"./useControlled-Bg6sLlzu.js";import"./isEqual-Cx-kf-1u.js";import"./isObject-CnhZ3r5T.js";import"./Button-D_70nOKH.js";import"./ActionButton-DmUBsAeq.js";import"./Checkbox-VXc1ULhl.js";import"./useValueChanged-Dlm4ppkt.js";import"./CollapsiblePanel-nRmpIuct.js";import"./MultiColumnSortDialog-bwM4Ndeq.js";import"./MenuTrigger-CE0WI67H.js";import"./CompositeItem-ILlt-DFI.js";import"./ToolbarRootContext-CsJNA5yH.js";import"./getDisabledMountTransitionStyles-V0s781CD.js";import"./getPseudoElementBounds-CPaE4zmA.js";import"./chevron-down-ChHe2eij.js";import"./index-DFEBs7x6.js";import"./error-DhuwnDiJ.js";import"./BaseCbacBanner-ptnosBco.js";import"./makeExternalStore-DU96TFYm.js";import"./Tooltip-kFbAJLNY.js";import"./PopoverPopup-DlqTesz8.js";import"./toNumber-QrsZyUgq.js";import"./useOsdkClient-BWaZJhGH.js";import"./tick-CqgAuDLT.js";import"./DropdownField-BTqSbvCg.js";import"./withOsdkMetrics-CIjnlwhJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
