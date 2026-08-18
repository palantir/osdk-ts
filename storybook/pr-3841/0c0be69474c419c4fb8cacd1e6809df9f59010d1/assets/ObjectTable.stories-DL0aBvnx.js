import{j as i}from"./iframe-p9M8Eb1o.js";import{O as p}from"./object-table-BVh7yVRM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DTwsJvWf.js";import"./preload-helper-BmPKtly3.js";import"./Table-C7Hnfk7g.js";import"./index-C7HqDw_m.js";import"./Dialog-DncBo-NF.js";import"./cross-DvJLudhK.js";import"./svgIconContainer-ORV28Ze3.js";import"./useBaseUiId-44IrCziu.js";import"./InternalBackdrop-BvVIg8pG.js";import"./composite-VcTvRuc6.js";import"./index-DErAUfdw.js";import"./index-KTI1yLVe.js";import"./index-_-VNpVA1.js";import"./useEventCallback-C6mJqMK5.js";import"./SkeletonBar-DTlAHnHY.js";import"./LoadingCell-Bxbo88PR.js";import"./ColumnConfigDialog-D_x-ANcD.js";import"./DraggableList-CTNqD4VN.js";import"./search-BgxntRlT.js";import"./Input-C1Qbw3qy.js";import"./useControlled-4rsFBSOI.js";import"./Button-C6WWR2wI.js";import"./small-cross-Bd_YaqEW.js";import"./ActionButton-Chkht-BK.js";import"./Checkbox-BRtk7UqB.js";import"./useValueChanged-CQ0CbEeS.js";import"./CollapsiblePanel-C57d84wj.js";import"./MultiColumnSortDialog-B4MIhkIZ.js";import"./MenuTrigger-Bh8Crdsb.js";import"./CompositeItem-ZctO4SwH.js";import"./ToolbarRootContext-tC1th2e9.js";import"./getDisabledMountTransitionStyles-CdOWit4h.js";import"./getPseudoElementBounds-D0nkbtwp.js";import"./chevron-down-SljOnwRS.js";import"./index-C8zfpOdA.js";import"./error-qZyqYi81.js";import"./BaseCbacBanner-E_n65XpB.js";import"./makeExternalStore-BEpV-olz.js";import"./Tooltip-Dj16PZ2B.js";import"./PopoverPopup-vzbW-VJo.js";import"./debounce-2Qm8GLyy.js";import"./useOsdkClient-D7_YHw9a.js";import"./tick-BWy-f_cg.js";import"./DropdownField-DdBLMtNy.js";import"./isEqual-Crow1MAv.js";import"./withOsdkMetrics-CirbbHCI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
