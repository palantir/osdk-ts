import{j as i}from"./iframe-DX49BiZ-.js";import{O as p}from"./object-table-DrKTDrO6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmE1jAmn.js";import"./preload-helper-9LHBCYVI.js";import"./Table-CZuWcrXt.js";import"./index-DxuHGCjB.js";import"./Dialog-C-cL_0Cq.js";import"./cross-CauetHLv.js";import"./svgIconContainer-B548BSI_.js";import"./useBaseUiId-DI7HJ1sZ.js";import"./InternalBackdrop-arkfzs0p.js";import"./composite-BTvCmLum.js";import"./index-Ygr_7AWn.js";import"./index-C4WszJy1.js";import"./index-Bdq2wKWL.js";import"./useEventCallback-GV-Pgizz.js";import"./SkeletonBar-MYvuqKYn.js";import"./LoadingCell-BYFPeWHn.js";import"./ColumnConfigDialog-DUpqOCt6.js";import"./DraggableList-CW6BC225.js";import"./search-D15_q6tD.js";import"./Input-BQDPJQM6.js";import"./useControlled-C31TKFPE.js";import"./Button-RYY6ZBF7.js";import"./small-cross-DOgxSwsw.js";import"./ActionButton-fCGjoV2h.js";import"./Checkbox-C5arZxQh.js";import"./useValueChanged-oS_NGm3B.js";import"./CollapsiblePanel-CofaTKq1.js";import"./MultiColumnSortDialog-CiE6ARBo.js";import"./MenuTrigger-slTfosOo.js";import"./CompositeItem-1DFf-U3D.js";import"./ToolbarRootContext-BkXM-WhV.js";import"./getDisabledMountTransitionStyles-DM4O4Z57.js";import"./getPseudoElementBounds-Dk11viJV.js";import"./chevron-down-CPeorV8q.js";import"./index-DxqztkoM.js";import"./error-DKDHu63B.js";import"./BaseCbacBanner-D1_WKzx0.js";import"./makeExternalStore-Ckt0eied.js";import"./Tooltip-CokKdHnx.js";import"./PopoverPopup-CcyqtV2P.js";import"./debounce-Bmue7bGU.js";import"./useOsdkClient-DE7ajC3A.js";import"./tick-kBh_PFVS.js";import"./DropdownField-iEi1_u7m.js";import"./isEqual-DQRNTvNf.js";import"./withOsdkMetrics-DxWj1HC0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
