import{j as i}from"./iframe-HJ0Gtc-x.js";import{O as p}from"./object-table-BrtVywDY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--EpSRk8M.js";import"./preload-helper-BOUoT_Gy.js";import"./Table-DZYPZAtB.js";import"./index-211_BqLo.js";import"./Dialog-CPQRVis-.js";import"./cross-ChjkGLAA.js";import"./svgIconContainer-BOUC7MPM.js";import"./useBaseUiId-CeZXZ9Z0.js";import"./InternalBackdrop-Ds4oR6Ed.js";import"./composite-CuUXCjDd.js";import"./index-CAQybw0C.js";import"./index-BPe5620H.js";import"./index-BhSWDlLz.js";import"./useEventCallback-CBE-X_q_.js";import"./SkeletonBar-BJ8asOzR.js";import"./LoadingCell-DC5Q3UnN.js";import"./ColumnConfigDialog-DzvX6v-V.js";import"./DraggableList-B4Hv6fvF.js";import"./search-BjFqXd51.js";import"./Input-BRC4lGnf.js";import"./useControlled-C74o2pv-.js";import"./Button-Cg7ItP1u.js";import"./small-cross-Bhi2-tHH.js";import"./ActionButton-B88YLnLq.js";import"./Checkbox-YM35Zgrv.js";import"./useValueChanged-l1kass9c.js";import"./CollapsiblePanel-B3ADmTiC.js";import"./MultiColumnSortDialog-C9w02LjT.js";import"./MenuTrigger-4LBwiAxB.js";import"./CompositeItem-CHrD2JLR.js";import"./ToolbarRootContext-Cec3nuK8.js";import"./getDisabledMountTransitionStyles-BazR3s1k.js";import"./getPseudoElementBounds-Cf3JM-Dw.js";import"./chevron-down-Db91ZRmD.js";import"./index-BbA9vrwp.js";import"./error-BQ1AWTRy.js";import"./BaseCbacBanner-CUdfbKKq.js";import"./makeExternalStore-AnzMBZSn.js";import"./Tooltip-D9CYaD7B.js";import"./PopoverPopup-CCXUh3Ez.js";import"./debounce-B7uP-EKg.js";import"./useOsdkClient-CoXY6Vlt.js";import"./tick-CYuRXF5J.js";import"./DropdownField-hZtNo6MG.js";import"./isEqual-DSQoh2h8.js";import"./withOsdkMetrics-DmM4mVY6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
