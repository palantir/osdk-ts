import{j as i}from"./iframe-vvAR62dd.js";import{O as p}from"./object-table-CXopfYqE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_ss5gcZ.js";import"./preload-helper-CCln4nV6.js";import"./Table-BBK0GTET.js";import"./index-GmZDd95a.js";import"./Dialog-dFzbXwqF.js";import"./cross-CpEJT7cV.js";import"./svgIconContainer-Dzj9GXt6.js";import"./useBaseUiId-Z7KW9EIT.js";import"./InternalBackdrop-CoJutqVn.js";import"./composite-zVuCDcDS.js";import"./index-OCJal9Dk.js";import"./index-CV2OXpxY.js";import"./index-Bx2-AWTp.js";import"./useEventCallback-Ccpyp-m0.js";import"./SkeletonBar-BZQXUDqP.js";import"./LoadingCell-DPFh4pU5.js";import"./ColumnConfigDialog-Dprrjpsr.js";import"./DraggableList-B6yuk7TC.js";import"./search-nGnjAR9u.js";import"./Input-CMHuklSy.js";import"./useControlled-C-mBGUI2.js";import"./Button-DYluNYeK.js";import"./small-cross-BcEFUww0.js";import"./ActionButton-Bd_k4C4B.js";import"./Checkbox-BhUjCSkM.js";import"./useValueChanged-D84M7v5T.js";import"./CollapsiblePanel-DUeD2G1u.js";import"./MultiColumnSortDialog-Bf2J9Gib.js";import"./MenuTrigger-BtntZbVw.js";import"./CompositeItem-DcxtPwna.js";import"./ToolbarRootContext-rrmxt5FX.js";import"./getDisabledMountTransitionStyles-jloJ4yp1.js";import"./getPseudoElementBounds-DjD6SzS5.js";import"./chevron-down-Bekr5naF.js";import"./index-Se0bF5VG.js";import"./error-DlRppvjG.js";import"./BaseCbacBanner-C5FR1aR-.js";import"./makeExternalStore-5NWNtgTu.js";import"./Tooltip-Bu_ANg_v.js";import"./PopoverPopup-BxKEhfdz.js";import"./debounce-CyLBxhxo.js";import"./useOsdkClient-B1Xs9__W.js";import"./tick-BYwIl2x5.js";import"./DropdownField-DdI4C3BC.js";import"./isEqual-CgfAyVTP.js";import"./withOsdkMetrics-D2qelpzb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
