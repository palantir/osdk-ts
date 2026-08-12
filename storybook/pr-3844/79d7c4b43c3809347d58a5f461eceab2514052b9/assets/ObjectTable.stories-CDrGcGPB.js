import{j as i}from"./iframe-BBL_-HCt.js";import{O as p}from"./object-table-BmKlloX9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-vLTBq_Dp.js";import"./preload-helper-gXeNWTZD.js";import"./Table-cJaqAje1.js";import"./index-D4yzeBJ6.js";import"./Dialog-YuX7ZT5R.js";import"./cross-BTBqqo2m.js";import"./svgIconContainer-C5h8dyp4.js";import"./useBaseUiId-IvbF4hDj.js";import"./InternalBackdrop-DTy2ZHe8.js";import"./composite-B4fmYlB2.js";import"./index-DkKFi5X-.js";import"./index-OLnc9ViJ.js";import"./index-Bx4Gz6DB.js";import"./useEventCallback-CocVgKNZ.js";import"./SkeletonBar-I3AIrJSM.js";import"./LoadingCell-Qti4cjBX.js";import"./ColumnConfigDialog-CPKYJxyh.js";import"./DraggableList-B0AxtbTM.js";import"./search-BqwbKAei.js";import"./Input-C1KaTSDP.js";import"./useControlled-DMuu4KBX.js";import"./isEqual-CZkBWFXq.js";import"./isObject-CFBQ1AJA.js";import"./Button-SEe7AN0N.js";import"./ActionButton-ClXsh96F.js";import"./Checkbox-g6M20mN7.js";import"./useValueChanged-CUC42A35.js";import"./CollapsiblePanel-BgjBiotn.js";import"./MultiColumnSortDialog-D5o4hdua.js";import"./MenuTrigger-BGcEy2Om.js";import"./CompositeItem-CT2M5Fdg.js";import"./ToolbarRootContext-BVwYgSHG.js";import"./getDisabledMountTransitionStyles-NF2f_rkY.js";import"./getPseudoElementBounds-DSxCnEgg.js";import"./chevron-down-Bg0k9Oko.js";import"./index-CeI-2DnP.js";import"./error-BeEhm9we.js";import"./BaseCbacBanner-nrt-v66T.js";import"./makeExternalStore-DqPT6bfI.js";import"./Tooltip-DrP5_NWc.js";import"./PopoverPopup-DH9A1tKJ.js";import"./toNumber-DNWrL45z.js";import"./useOsdkClient-BvBcPbsV.js";import"./tick-Coq7YcBM.js";import"./DropdownField-DKNinG1T.js";import"./withOsdkMetrics-DYro2wY1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
