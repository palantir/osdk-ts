import{j as i}from"./iframe-5sgXXUq2.js";import{O as p}from"./object-table-aOrhl4B7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dnq1Bpma.js";import"./preload-helper-Cbn9zcHA.js";import"./Table-BgEDWebR.js";import"./index-CzwNxfu7.js";import"./Dialog-CaIF2dWF.js";import"./cross-Dl1YYoqq.js";import"./svgIconContainer-6O_QyJta.js";import"./useBaseUiId-DG_QbP_U.js";import"./InternalBackdrop-CjtV5ZAW.js";import"./composite-Ine8e3tf.js";import"./index-C3HPrqRk.js";import"./index-Dnj1V73h.js";import"./index-BBV34otm.js";import"./useEventCallback-BdN49Cxy.js";import"./SkeletonBar-BEL6Gir4.js";import"./LoadingCell-C1_I6sfl.js";import"./ColumnConfigDialog-BcHlPWgE.js";import"./DraggableList-D4fBscVn.js";import"./search-BYA2jSn3.js";import"./Input-CwUkFVhs.js";import"./useControlled-siu4g8xe.js";import"./Button-71PqqjpD.js";import"./small-cross-B4u9H8ya.js";import"./ActionButton-BO7jWeao.js";import"./Checkbox-DGdxwXIf.js";import"./useValueChanged-C7csg4cA.js";import"./CollapsiblePanel-Dcs-Jidu.js";import"./MultiColumnSortDialog-DGOxrWta.js";import"./MenuTrigger-BGZdYvp4.js";import"./CompositeItem-CIAR7LV4.js";import"./ToolbarRootContext-HX5a3LbS.js";import"./getDisabledMountTransitionStyles-CuDkESvM.js";import"./getPseudoElementBounds-DuTJjluI.js";import"./chevron-down-B4APaT5X.js";import"./index-BUovi2pL.js";import"./error-CIAmmsFo.js";import"./BaseCbacBanner-CHao_-T2.js";import"./makeExternalStore-D7x2N1Sq.js";import"./Tooltip-Bz_qehDJ.js";import"./PopoverPopup-BjatbugG.js";import"./debounce-D_ZNVjIE.js";import"./useOsdkClient-CvRRMyub.js";import"./tick-BcyhdjRi.js";import"./DropdownField-DDOypfNs.js";import"./isEqual-BD5xaPW8.js";import"./withOsdkMetrics-Dp93P8HI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
