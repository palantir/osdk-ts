import{j as i}from"./iframe-n8xc1zmR.js";import{O as p}from"./object-table-CiBALKRZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-sp0n53u5.js";import"./preload-helper-Bmsyery-.js";import"./Table-B4GdGFKt.js";import"./index-BAcQGlbN.js";import"./Dialog-DMtSaZZF.js";import"./cross-CxpUurAd.js";import"./svgIconContainer-Cfmf2PdM.js";import"./useBaseUiId-eETnIy-K.js";import"./InternalBackdrop-CCcuqGEC.js";import"./composite-DIEyOfVG.js";import"./index-MqtyKuec.js";import"./index-DV7yKC3H.js";import"./index-Cv8iH0sa.js";import"./useEventCallback-kGheuRwD.js";import"./SkeletonBar-D74l1Ztx.js";import"./LoadingCell-CMixqtDR.js";import"./ColumnConfigDialog-2BkdEepz.js";import"./DraggableList-C8LN0UDD.js";import"./search-CHlDi3Oa.js";import"./Input-BlStQB_U.js";import"./useControlled-D5Gxa7cz.js";import"./Button-xMD57DxE.js";import"./small-cross-BNKugY-f.js";import"./ActionButton-CSMbtnor.js";import"./Checkbox-DD1ns08A.js";import"./useValueChanged-BZIGOI0A.js";import"./CollapsiblePanel-BpdatoOf.js";import"./MultiColumnSortDialog-Gt0xpNTA.js";import"./MenuTrigger-DdA8vxhc.js";import"./CompositeItem-Bg5j4iyb.js";import"./ToolbarRootContext-BJkBQG1i.js";import"./getDisabledMountTransitionStyles-BNw6DyHr.js";import"./getPseudoElementBounds-CLnV32FM.js";import"./chevron-down-ut1JXVy2.js";import"./index-_yWg9Pvu.js";import"./error-B1cmPXwp.js";import"./BaseCbacBanner-Cw7Gzt9H.js";import"./makeExternalStore-DsKbnpVD.js";import"./Tooltip-C0vBpqP0.js";import"./PopoverPopup-CnDxdF7U.js";import"./debounce-DHLI8XQh.js";import"./useOsdkClient-CCi5QoY_.js";import"./tick-Cgr5wt1D.js";import"./DropdownField-CS8LcZCX.js";import"./isEqual-vs4Fv33M.js";import"./withOsdkMetrics-BgaQEVHI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
