import{j as i}from"./iframe-BpkgzCfc.js";import{O as p}from"./object-table-C1Z-ccOu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DPJ312gm.js";import"./preload-helper-Cqm3GHv6.js";import"./Table-uaVa5FNn.js";import"./index-BaNgrIWR.js";import"./Dialog-C1Q-SUqo.js";import"./cross-DcAJ_UsT.js";import"./svgIconContainer-DCGfkszH.js";import"./useBaseUiId-Bel2T9sH.js";import"./InternalBackdrop-5O-6_QKc.js";import"./composite-BYRdjqNf.js";import"./index-DUW9BvxD.js";import"./index-DxpCt63I.js";import"./index-CHMS5mxm.js";import"./useEventCallback-LAyONCjg.js";import"./SkeletonBar-ChZNWN60.js";import"./LoadingCell-DKZgM3UF.js";import"./ColumnConfigDialog-BKpmwDX3.js";import"./DraggableList-D94KU6vz.js";import"./search-Ct51ibPI.js";import"./Input-CsKIZdEL.js";import"./useControlled-DcPMMtt3.js";import"./isEqual-DEYDtDi9.js";import"./isObject-ApKxbA4p.js";import"./Button-CySInDHm.js";import"./ActionButton-DIuZIz2Z.js";import"./Checkbox-CxaKCMbC.js";import"./useValueChanged-CBLiCNHQ.js";import"./CollapsiblePanel-DxiMb1vS.js";import"./MultiColumnSortDialog-N9biHPZ3.js";import"./MenuTrigger-CFAMwJll.js";import"./CompositeItem-BB4wd3KB.js";import"./ToolbarRootContext-D12ftYYQ.js";import"./getDisabledMountTransitionStyles-CPDNpMoC.js";import"./getPseudoElementBounds-UNyxasqn.js";import"./chevron-down-D90rIeDb.js";import"./index-9JJ3q_YT.js";import"./error-BPGwzs_y.js";import"./BaseCbacBanner-CvFgBp_O.js";import"./makeExternalStore-BY7Bi3ZC.js";import"./Tooltip-CU8rKKB6.js";import"./PopoverPopup-CbQUEnW-.js";import"./toNumber-DKwz7U4E.js";import"./useOsdkClient-vEvQVfhh.js";import"./tick-C9esIUOv.js";import"./DropdownField-UV9CnX2Y.js";import"./withOsdkMetrics-jMVnEM0t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
