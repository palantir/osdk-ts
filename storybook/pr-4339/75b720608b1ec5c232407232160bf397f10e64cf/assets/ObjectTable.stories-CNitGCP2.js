import{j as i}from"./iframe-DMbRIuDb.js";import{O as p}from"./object-table-B0Csi-L9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXy1dSz0.js";import"./preload-helper-sYBSF0kM.js";import"./Table-JZQclb11.js";import"./index-Bu-1yS3f.js";import"./Dialog-ofYSW6ZV.js";import"./cross-D-Gd3Z1L.js";import"./svgIconContainer-DRmK9U-I.js";import"./useBaseUiId-Ud_ZuwhE.js";import"./InternalBackdrop-D0_D0B89.js";import"./composite-BbcTHbJw.js";import"./index-BqPJnSgL.js";import"./index-DYfyQJ7D.js";import"./index-Bw2xP442.js";import"./useEventCallback-B5DihS4I.js";import"./SkeletonBar-CSxcwHsY.js";import"./LoadingCell-CSgKfeTm.js";import"./ColumnConfigDialog-C6UvhfFS.js";import"./DraggableList-gU76DxBG.js";import"./search-0CHVsg6w.js";import"./Input-D-dAAgmX.js";import"./useControlled-CIwMJypC.js";import"./Button-CD6kVtUc.js";import"./small-cross-Bl_8sGCy.js";import"./ActionButton-BuZQ80QL.js";import"./Checkbox-BiDq78AM.js";import"./useValueChanged-6Z_1Wu5g.js";import"./CollapsiblePanel-BRC6_1mg.js";import"./MultiColumnSortDialog-C31dFqGE.js";import"./MenuTrigger-D71lz07f.js";import"./CompositeItem-C_Zv4JbC.js";import"./ToolbarRootContext-CnFMRhrV.js";import"./getDisabledMountTransitionStyles-XoIoWCwu.js";import"./getPseudoElementBounds-DP-4v2Ps.js";import"./chevron-down-_C5sbwkb.js";import"./index-dCYLjsWC.js";import"./error-D_c53g1g.js";import"./BaseCbacBanner-CZaw_ege.js";import"./makeExternalStore-H1BAkO0H.js";import"./Tooltip-BwMVZzeJ.js";import"./PopoverPopup-LtTxVH8V.js";import"./debounce-IZu9ANTR.js";import"./useOsdkClient-CfV6cdO_.js";import"./tick-D2Wm6MFc.js";import"./DropdownField-Dmp4Hyee.js";import"./isEqual-Dl3fPPvK.js";import"./withOsdkMetrics-CiT1Znwa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
