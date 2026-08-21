import{j as i}from"./iframe-DitR3wrF.js";import{O as p}from"./object-table-CID5KzVr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjvLHmuR.js";import"./preload-helper-CNXpGYTW.js";import"./Table-DK5kkM-B.js";import"./index-BxGfYTdz.js";import"./Dialog-C34PcR-Z.js";import"./cross-Bk9CQZhu.js";import"./svgIconContainer-iiqqYfd1.js";import"./useBaseUiId-nvgLYlZj.js";import"./InternalBackdrop-rs5ZBr6w.js";import"./composite-C4jZt334.js";import"./index-mmwfIz2r.js";import"./index-B_n8V48u.js";import"./index-2m8BG5Sh.js";import"./useEventCallback-Dxp2t-VD.js";import"./SkeletonBar-HS9u5urc.js";import"./LoadingCell-DGAsi_Nc.js";import"./ColumnConfigDialog-D081vs0D.js";import"./DraggableList-CA3S4epP.js";import"./search-Bwe7rzXS.js";import"./Input-CYzB12qm.js";import"./useControlled-Bo2-iR5e.js";import"./Button-Bo3FBeXJ.js";import"./small-cross-COwDX3bd.js";import"./ActionButton-CIH2u_HO.js";import"./Checkbox-Do08-zmE.js";import"./useValueChanged-DJv87t3q.js";import"./CollapsiblePanel-DZ_aEzco.js";import"./MultiColumnSortDialog-7TPUamn-.js";import"./MenuTrigger-CMH3InYX.js";import"./CompositeItem-Drvp4rJR.js";import"./ToolbarRootContext-u_lF0Sl2.js";import"./getDisabledMountTransitionStyles-D4khNU9j.js";import"./getPseudoElementBounds-BvsDV4fR.js";import"./chevron-down-BsVtNM2T.js";import"./index-BPs86j1H.js";import"./error-C_6ZHNzG.js";import"./BaseCbacBanner-ChWdoKWk.js";import"./makeExternalStore-C2AhoyWG.js";import"./Tooltip-CdNUR4xK.js";import"./PopoverPopup-xyjhkdhH.js";import"./debounce-CuZ-w5Ov.js";import"./useOsdkClient-DsFPAnnx.js";import"./tick-C5e_5hJt.js";import"./DropdownField-CRY2WFNT.js";import"./isEqual-D8ZyDvjn.js";import"./withOsdkMetrics-wlTLtuGf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
