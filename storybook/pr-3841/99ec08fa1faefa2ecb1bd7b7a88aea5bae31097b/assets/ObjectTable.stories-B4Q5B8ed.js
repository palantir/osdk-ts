import{j as i}from"./iframe-B9azDZlz.js";import{O as p}from"./object-table-QQXxCQbo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-sqeqaI0u.js";import"./preload-helper-Bm0hX83b.js";import"./Table-BcdhfCUI.js";import"./index-Gnn4IAPK.js";import"./Dialog-BL5Xt88J.js";import"./cross-DH7Phj5l.js";import"./svgIconContainer-BSqh8zzQ.js";import"./useBaseUiId-B5AQ3HFN.js";import"./InternalBackdrop-CVYwGey5.js";import"./composite-DG0rNHFY.js";import"./index-DG7p6B41.js";import"./index-D0fYYncd.js";import"./index-0NY8KgBX.js";import"./useEventCallback-CKNYTi7U.js";import"./SkeletonBar-QxJNYOQi.js";import"./LoadingCell-CkafHKo1.js";import"./ColumnConfigDialog-CmRx7Ibx.js";import"./DraggableList-Oqv7j_Rf.js";import"./search-D-Pd3u3n.js";import"./Input-6Xi2oRl5.js";import"./useControlled-CIIQ6AdN.js";import"./Button-ByY1VR_F.js";import"./small-cross-BErTRTeO.js";import"./ActionButton-CtxrjN50.js";import"./Checkbox-COQa-sEG.js";import"./useValueChanged-YxrolQP8.js";import"./CollapsiblePanel-BWH5sgwq.js";import"./MultiColumnSortDialog-d0_k3Eoy.js";import"./MenuTrigger-BAknza5f.js";import"./CompositeItem-23Xg-PrO.js";import"./ToolbarRootContext-H0Ylxwtf.js";import"./getDisabledMountTransitionStyles-D26pQLY4.js";import"./getPseudoElementBounds-DOsvVJTW.js";import"./chevron-down-CDhI7Cg9.js";import"./index-BqVQ5c0B.js";import"./error-B89KPxvz.js";import"./BaseCbacBanner-C61KBizI.js";import"./makeExternalStore-Sb074CVY.js";import"./Tooltip-BiRF5TgT.js";import"./PopoverPopup-BoIWrT_I.js";import"./debounce-B2RJoylZ.js";import"./useOsdkClient-DfxUO55U.js";import"./tick-BDEOlM-s.js";import"./DropdownField-B0WGKaAs.js";import"./isEqual-CcChNOPP.js";import"./withOsdkMetrics-BCygmhUI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
