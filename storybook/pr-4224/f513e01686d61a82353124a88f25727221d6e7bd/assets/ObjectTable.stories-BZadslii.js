import{j as i}from"./iframe-niEbczVm.js";import{O as p}from"./object-table-BZaEWIQh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CMItKokC.js";import"./preload-helper-CUjUb6yR.js";import"./Table-L3UWLg70.js";import"./index-BEFpPyEu.js";import"./Dialog-BidNBHDm.js";import"./cross-Bcr8pGuL.js";import"./svgIconContainer-9VsGkNZz.js";import"./useBaseUiId-CH7YIJgS.js";import"./InternalBackdrop-v7weAe9K.js";import"./composite-DGaJRBaQ.js";import"./index-BbiwM5Qu.js";import"./index-elRiCFtu.js";import"./index-BqQiJ2_G.js";import"./useEventCallback-BgYsgH1g.js";import"./SkeletonBar-CkUb_6G3.js";import"./LoadingCell-CykSoP0X.js";import"./ColumnConfigDialog-BzWOjFro.js";import"./DraggableList-BNKFwiq9.js";import"./search-ChyEY49Q.js";import"./Input-B4FHDv-3.js";import"./useControlled-CUyHc-Js.js";import"./Button-CFI_-pRJ.js";import"./small-cross-CjBKsPzJ.js";import"./ActionButton-B8kWvQVe.js";import"./Checkbox-Dx9SDg3Y.js";import"./useValueChanged-DPnKyoXq.js";import"./CollapsiblePanel-DDu9LnWB.js";import"./MultiColumnSortDialog-y51Oiaxo.js";import"./MenuTrigger-C9EVVsoN.js";import"./CompositeItem-CsOBUX0g.js";import"./ToolbarRootContext-BRylS6Aj.js";import"./getDisabledMountTransitionStyles-BJk4B9MV.js";import"./getPseudoElementBounds-KgJkaKhr.js";import"./chevron-down-BBE32uOg.js";import"./index-C_O3jDKw.js";import"./error-mxcJOglh.js";import"./BaseCbacBanner-BDA92KNd.js";import"./makeExternalStore-CCkssviL.js";import"./Tooltip-CcPCpeng.js";import"./PopoverPopup-Dc4OKlIj.js";import"./debounce-BEX_S5I4.js";import"./useOsdkClient-BrHXTXJ2.js";import"./tick-CiAF04hP.js";import"./DropdownField-BnoXJlhp.js";import"./isEqual-BciiG4z6.js";import"./withOsdkMetrics-DWUucJCc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
