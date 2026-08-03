import{j as i}from"./iframe-m5MS_AOj.js";import{O as p}from"./object-table-BC9fkns5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aYhUXMaN.js";import"./preload-helper-Cwc8v1fY.js";import"./Table-CIjlWIk4.js";import"./index-DLmK-3wj.js";import"./Dialog-70BG_zV_.js";import"./cross-CnvlWWQf.js";import"./svgIconContainer-CN2kOMHj.js";import"./useBaseUiId-Qy_uNuRZ.js";import"./InternalBackdrop-DkxaVrHk.js";import"./composite-URT0CF0y.js";import"./index-fzOrEoIw.js";import"./index-oqW8MMnv.js";import"./index-DJe0xhy4.js";import"./useEventCallback-DOc1-vE_.js";import"./SkeletonBar-iBmjJTol.js";import"./LoadingCell-CHS72waR.js";import"./ColumnConfigDialog-BmKaIgQQ.js";import"./DraggableList-BcK0Le42.js";import"./search-CcRTPglH.js";import"./Input-o1S0gnyB.js";import"./useControlled-22a6dTFJ.js";import"./isEqual-CfIEN4pK.js";import"./isObject-CsjcMZtm.js";import"./Button-DMilPMm4.js";import"./ActionButton-DLuP9c_H.js";import"./Checkbox-_jhKYKoR.js";import"./useValueChanged-BKB40wxe.js";import"./CollapsiblePanel-B98BpceP.js";import"./MultiColumnSortDialog-XlWsTK6k.js";import"./MenuTrigger-Bi21pepp.js";import"./CompositeItem-W4eWSFb6.js";import"./ToolbarRootContext-Nqff0oCy.js";import"./getDisabledMountTransitionStyles-LU9Dun1Q.js";import"./getPseudoElementBounds-DvApA5Pd.js";import"./chevron-down-CGfzs9sc.js";import"./index-BRTVPirF.js";import"./error-Cg5wTyY6.js";import"./BaseCbacBanner-B5_ySqf0.js";import"./makeExternalStore-BIok_NyR.js";import"./Tooltip-D8W5By2S.js";import"./PopoverPopup-B4LNmDrb.js";import"./toNumber-BCgQEwY4.js";import"./useOsdkClient-Czt1KuT1.js";import"./tick-bUBGlmQ7.js";import"./DropdownField-B72e_7Tx.js";import"./withOsdkMetrics-C6tQjPwh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
