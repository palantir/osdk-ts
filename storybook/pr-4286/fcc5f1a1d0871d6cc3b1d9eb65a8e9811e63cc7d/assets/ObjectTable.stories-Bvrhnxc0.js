import{j as i}from"./iframe-zGIsJMpT.js";import{O as p}from"./object-table-B1Dbw53n.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8vQ0HJU.js";import"./preload-helper-CC38SpOi.js";import"./Table-DMmh1PI5.js";import"./index-8YhFnXQQ.js";import"./Dialog-BtP0mUqh.js";import"./cross-DktHdIAg.js";import"./svgIconContainer-CP5MNfZh.js";import"./useBaseUiId-ci9SHEVb.js";import"./InternalBackdrop-CEY2WdL1.js";import"./composite-DMfXOji_.js";import"./index-B-FTFFET.js";import"./index-_YOXVANG.js";import"./index-bkG5Vg2p.js";import"./useEventCallback-BN5eCmSs.js";import"./SkeletonBar-DgAc_BEV.js";import"./LoadingCell-ByZjwpJ-.js";import"./ColumnConfigDialog-BEb8bZc1.js";import"./DraggableList-DcPGpTvx.js";import"./search-Dz1VIdGa.js";import"./Input-DUh3JuNM.js";import"./useControlled-BkrEcqk8.js";import"./Button-DgFOPBJa.js";import"./small-cross-BQATEOZM.js";import"./ActionButton-B5uCJtLq.js";import"./Checkbox-C6TjD974.js";import"./useValueChanged-B7A_hdZG.js";import"./CollapsiblePanel-haGA10pC.js";import"./MultiColumnSortDialog-B8zAHeEP.js";import"./MenuTrigger-BjbpFbGw.js";import"./CompositeItem-BoSufc_A.js";import"./ToolbarRootContext-Cb-1rKtx.js";import"./getDisabledMountTransitionStyles-BWzH01Nw.js";import"./getPseudoElementBounds-DuWCXYaK.js";import"./chevron-down-Du5I5wVW.js";import"./index-CF-IYV_p.js";import"./error-o2dkV_Rh.js";import"./BaseCbacBanner-CG6wm0ym.js";import"./makeExternalStore-BEcMJ506.js";import"./Tooltip-YhP-Fwkb.js";import"./PopoverPopup-CJZk_qZX.js";import"./debounce-CuU6v30l.js";import"./useOsdkClient-CBICPDeO.js";import"./tick-C2Jds8i8.js";import"./DropdownField-DuI_YZPs.js";import"./isEqual-BWBJWNbI.js";import"./withOsdkMetrics-CjW6J-ki.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
