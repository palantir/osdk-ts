import{j as i}from"./iframe-DO7dF-ar.js";import{O as p}from"./object-table-CBri6z-y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8QmaAoC.js";import"./preload-helper-BW5WH-mc.js";import"./Table-CPm1d6ia.js";import"./index-kenPv2GE.js";import"./Dialog-BNgsKcmK.js";import"./cross-C1UL2-2h.js";import"./svgIconContainer-DjMCTipa.js";import"./useBaseUiId-Bt-nl6bS.js";import"./InternalBackdrop-BOw_21MB.js";import"./composite-DP63OVsA.js";import"./index-ChtT1bsq.js";import"./index-DTtqbecA.js";import"./index-V_wqwxtw.js";import"./useEventCallback-C0Kp26Ia.js";import"./SkeletonBar-BKAHRTQk.js";import"./LoadingCell-CkHXNABS.js";import"./ColumnConfigDialog-BgMx8cqd.js";import"./DraggableList-C3ZFIjxr.js";import"./search-BLUkB-J4.js";import"./Input-CK_329wL.js";import"./useControlled-6UP7zcXc.js";import"./Button-CizE_ePi.js";import"./small-cross-J_4yazEf.js";import"./ActionButton-BAj8Q7M-.js";import"./Checkbox-DqkoI7lc.js";import"./useValueChanged-BuoGHQuA.js";import"./CollapsiblePanel-B9T_imQv.js";import"./MultiColumnSortDialog-CyNSB3ae.js";import"./MenuTrigger-CiYAlrY8.js";import"./CompositeItem-BwVsaSQK.js";import"./ToolbarRootContext-CZAMPnmu.js";import"./getDisabledMountTransitionStyles-Br24ubGK.js";import"./getPseudoElementBounds-CJowpxqF.js";import"./chevron-down-C1ai5XRC.js";import"./index-CoQO0q6S.js";import"./error-D0RjPgCd.js";import"./BaseCbacBanner-BcR5Y1EU.js";import"./makeExternalStore-Am-Ru7Ep.js";import"./Tooltip-D0Q-VN51.js";import"./PopoverPopup-joRMvQbq.js";import"./debounce-DmQhFwOT.js";import"./useOsdkClient-CyRh6KvI.js";import"./tick-B49pnBc3.js";import"./DropdownField-DysS70c1.js";import"./isEqual-kyliCkp6.js";import"./withOsdkMetrics-Btt-8vLh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
