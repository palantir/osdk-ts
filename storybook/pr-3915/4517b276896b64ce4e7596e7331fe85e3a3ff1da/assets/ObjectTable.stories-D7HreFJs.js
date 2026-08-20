import{j as i}from"./iframe-_XWcEwHk.js";import{O as p}from"./object-table-CVzaJWld.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CnsLIl_l.js";import"./preload-helper-CNNwgNsL.js";import"./Table-L_2QILeW.js";import"./index-DEyLol8C.js";import"./Dialog-ClKZsdx7.js";import"./cross-Cvllyul3.js";import"./svgIconContainer-s76caIVw.js";import"./useBaseUiId-Cp55Lgic.js";import"./InternalBackdrop-DCGEqfhx.js";import"./composite-BYE5Dlef.js";import"./index-BDsQj8Rb.js";import"./index-B_nZUuF2.js";import"./index-BKSgEz3r.js";import"./useEventCallback-BunrxwXX.js";import"./SkeletonBar-DXX-HuIg.js";import"./LoadingCell-CGD-qaQB.js";import"./ColumnConfigDialog-CtlqL0Bv.js";import"./DraggableList-BAWMbUl8.js";import"./search-Dcf_xsL6.js";import"./Input-B7mKteg-.js";import"./useControlled-DwjvLtqF.js";import"./Button-Bc6gggWi.js";import"./small-cross-p6Bd-K6R.js";import"./ActionButton-m7HyQ9l6.js";import"./Checkbox-DR6VLMJK.js";import"./useValueChanged-B98vVKh1.js";import"./CollapsiblePanel-DmOt9kop.js";import"./MultiColumnSortDialog-ZWcUMId3.js";import"./MenuTrigger-D3WH6QS3.js";import"./CompositeItem-B8eozN0-.js";import"./ToolbarRootContext-MmipuJm0.js";import"./getDisabledMountTransitionStyles-2YxdhAX_.js";import"./getPseudoElementBounds-B67hfNdQ.js";import"./chevron-down-aMIB5bAJ.js";import"./index-DQrLQlQ5.js";import"./error-CGLwBB-Q.js";import"./BaseCbacBanner-D7ltILps.js";import"./makeExternalStore-CYii8DZX.js";import"./Tooltip-Dtv4GMM3.js";import"./PopoverPopup-CPoevyOu.js";import"./debounce-BspAFodp.js";import"./useOsdkClient-CIw_1c3a.js";import"./tick-DPIO5Uoy.js";import"./DropdownField-BuDv2_Ap.js";import"./isEqual-CPMubuye.js";import"./withOsdkMetrics-DqQ9hGu9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
