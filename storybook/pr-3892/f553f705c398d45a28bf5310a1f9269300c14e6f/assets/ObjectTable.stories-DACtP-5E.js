import{j as i}from"./iframe-Cib7M-Xy.js";import{O as p}from"./object-table-XSqCSPBV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DneDaYAx.js";import"./preload-helper-CRDWPiYa.js";import"./Table-CO4Oj3mc.js";import"./index-CBv-FCGp.js";import"./Dialog-Ci-SyB0e.js";import"./cross-C2V_DgUT.js";import"./svgIconContainer-D1xpzhCr.js";import"./useBaseUiId-M5BZcaZy.js";import"./InternalBackdrop-CkBFRqEF.js";import"./composite-kqFH7m6U.js";import"./index-BuKksupP.js";import"./index-BCtR_sML.js";import"./index-Cu_DMDN1.js";import"./useEventCallback-CEygIpmo.js";import"./SkeletonBar-CU1Q8u7m.js";import"./LoadingCell-Cz-TT2Ke.js";import"./ColumnConfigDialog-B_Y_oS9Z.js";import"./DraggableList-BAP1XhTX.js";import"./search-DCZZXW6e.js";import"./Input-DoKdALsn.js";import"./useControlled-C0WjWXAL.js";import"./Button-D17R42M5.js";import"./small-cross-Bn1T9AEL.js";import"./ActionButton-DUlbhD91.js";import"./Checkbox-YNwcH3UC.js";import"./useValueChanged-Dexwdau7.js";import"./CollapsiblePanel-Ye8-BhZS.js";import"./MultiColumnSortDialog-BJv_YNOo.js";import"./MenuTrigger-DF5spK6e.js";import"./CompositeItem-BwGgrVOO.js";import"./ToolbarRootContext-BNUf7EA-.js";import"./getDisabledMountTransitionStyles-CZ8a_1s5.js";import"./getPseudoElementBounds-DdA2WBP8.js";import"./chevron-down-CDgi7Jby.js";import"./index-Dg5LeqIW.js";import"./error-CzUPZAgK.js";import"./BaseCbacBanner-BLmPuVm9.js";import"./makeExternalStore-C8s6weLu.js";import"./Tooltip-svlpOFoz.js";import"./PopoverPopup-BzGKBTcL.js";import"./debounce-Cc5fWdjK.js";import"./useOsdkClient-C2kX0mp7.js";import"./tick-fYEum7o-.js";import"./DropdownField-Cl95NLNY.js";import"./isEqual-CZvHmsOE.js";import"./withOsdkMetrics-B-KTU3vQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
