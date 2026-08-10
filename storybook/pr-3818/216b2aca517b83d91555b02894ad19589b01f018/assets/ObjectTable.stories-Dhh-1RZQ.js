import{j as i}from"./iframe-DLfRO3Lg.js";import{O as p}from"./object-table-CQFOzclR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BveMDxya.js";import"./preload-helper-Bdf9-Z3s.js";import"./Table-cPS1r1XX.js";import"./index-BqYFiItS.js";import"./Dialog-DoC0h8Nu.js";import"./cross-CwX8lo9D.js";import"./svgIconContainer-D-_aLtNj.js";import"./useBaseUiId-Pd_dUfv7.js";import"./InternalBackdrop-M65KPPc8.js";import"./composite-DjVE7iON.js";import"./index-BxNcLRzx.js";import"./index-CZtPOQqE.js";import"./index-V92L6jqn.js";import"./useEventCallback-BgjDHyqs.js";import"./SkeletonBar-Bgte_PC1.js";import"./LoadingCell-DnEJk0Y4.js";import"./ColumnConfigDialog-BvyUY4WH.js";import"./DraggableList-BT6aMXQZ.js";import"./search-B8OuVE4x.js";import"./Input-CHaXSXBK.js";import"./useControlled-D944oDES.js";import"./isEqual-55QXIRK5.js";import"./isObject-D2BEkhGb.js";import"./Button-DIC9pYqS.js";import"./ActionButton-CpLSqin4.js";import"./Checkbox-DV1LOGil.js";import"./useValueChanged-CLYrEhb1.js";import"./CollapsiblePanel-Bzz-IIYb.js";import"./MultiColumnSortDialog-CGRFT1qc.js";import"./MenuTrigger-Dp_AIT2-.js";import"./CompositeItem-BB7BEcYe.js";import"./ToolbarRootContext-BUhsl4O4.js";import"./getDisabledMountTransitionStyles-C6nqMOWm.js";import"./getPseudoElementBounds-nprKqVc_.js";import"./chevron-down-Ca7o4DzB.js";import"./index-BT-0esWW.js";import"./error-2D9zNcfs.js";import"./BaseCbacBanner-DO_LeAD3.js";import"./makeExternalStore-BRKvb-bN.js";import"./Tooltip-BwJ5zswW.js";import"./PopoverPopup-Biygt9Xg.js";import"./toNumber-AisZokn0.js";import"./useOsdkClient-BvQbHpa2.js";import"./tick-jOYZxFh9.js";import"./DropdownField-f5HIQCcv.js";import"./withOsdkMetrics-3Zji6GBR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
