import{j as i}from"./iframe-CvtjOOTU.js";import{O as p}from"./object-table-UmQroVW1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BR1d7RBs.js";import"./preload-helper-YYdL2GVs.js";import"./Table-mcEGYA07.js";import"./index-CO5W4Pg7.js";import"./Dialog-BofS88Np.js";import"./cross-BpzF3zqH.js";import"./svgIconContainer-lpqUMm2E.js";import"./useBaseUiId-3JVt3VnJ.js";import"./InternalBackdrop-Be9B27zu.js";import"./composite-po6w4N65.js";import"./index-DzATK-9N.js";import"./index-B4MsJewH.js";import"./index-CKTvbjkc.js";import"./useEventCallback-D1uiA1rY.js";import"./SkeletonBar-CafwHPpr.js";import"./LoadingCell-BICRbQzu.js";import"./ColumnConfigDialog-BKG3t0Fj.js";import"./DraggableList-DmZ9RDUA.js";import"./search-B0EmnwB3.js";import"./Input-LvpeWry1.js";import"./useControlled-TIKyE_eU.js";import"./Button-CirHg6K_.js";import"./small-cross-CEHkrMeL.js";import"./ActionButton-DyVOLyNI.js";import"./Checkbox-YuFQnrBu.js";import"./useValueChanged-Dx7gNUOP.js";import"./CollapsiblePanel-BWOQg1wv.js";import"./MultiColumnSortDialog-B0IJsnrx.js";import"./MenuTrigger-Dku5_OQr.js";import"./CompositeItem-B90xhnGL.js";import"./ToolbarRootContext-XjPDKw4l.js";import"./getDisabledMountTransitionStyles-CKrI2rr8.js";import"./getPseudoElementBounds-BFiPvh4n.js";import"./chevron-down-DEPGbWzo.js";import"./index-CebCVI2l.js";import"./error-CdHEMgDN.js";import"./BaseCbacBanner-D7S9BlO8.js";import"./makeExternalStore-BmjUzr6O.js";import"./Tooltip-9ewxrDzq.js";import"./PopoverPopup-CgxcL0ZR.js";import"./debounce-DcZETNZe.js";import"./useOsdkClient-BXT2chcO.js";import"./tick-cNgeLKWA.js";import"./DropdownField-ClAk7Vc2.js";import"./isEqual-CKUGC3M-.js";import"./withOsdkMetrics-DL5qkExK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
