import{j as i}from"./iframe-DzT5j6tC.js";import{O as p}from"./object-table-BCMniGH5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B9sYusUH.js";import"./preload-helper-B-8AR-WS.js";import"./Table-BK9mPHED.js";import"./index-Du12mPUJ.js";import"./Dialog-Ddsywm3S.js";import"./cross-D85Hg8OP.js";import"./svgIconContainer-Bzq4qT7m.js";import"./useBaseUiId-CpQ8jfP-.js";import"./InternalBackdrop-BCahMtwn.js";import"./composite-BCA7ssjy.js";import"./index-DAVqPwR5.js";import"./index-CTNdmRCH.js";import"./index-C-UHVdd5.js";import"./useEventCallback-BqydB81L.js";import"./SkeletonBar-DNThCLH9.js";import"./LoadingCell-CpIup8j7.js";import"./ColumnConfigDialog-BLnr_Ssi.js";import"./DraggableList-Q1AkYwIE.js";import"./search-DpfM7OJ3.js";import"./Input-MtWlDuZi.js";import"./useControlled-dRwpZLWP.js";import"./Button-CbXsMpDo.js";import"./small-cross-BdXSABdt.js";import"./ActionButton-Bikf6G7r.js";import"./Checkbox-BK8rsuCR.js";import"./useValueChanged-D95RiMEI.js";import"./CollapsiblePanel-qsyp5uP7.js";import"./MultiColumnSortDialog-CrFxJwbI.js";import"./MenuTrigger-Cd_2Jq9c.js";import"./CompositeItem-BHaHERWU.js";import"./ToolbarRootContext-BTqh8qKL.js";import"./getDisabledMountTransitionStyles-q1RxA6aN.js";import"./getPseudoElementBounds-DUGfes6K.js";import"./chevron-down-DCGqt8p6.js";import"./index-DVvQaOMD.js";import"./error-DhCIc3En.js";import"./BaseCbacBanner-CSMzJcXJ.js";import"./makeExternalStore-B9-sDT_L.js";import"./Tooltip-DFuWFTMp.js";import"./PopoverPopup-DZI317gO.js";import"./debounce-Ble3VJ_v.js";import"./useOsdkClient-qXeZXSCS.js";import"./tick-Dk_XebTk.js";import"./DropdownField-CEnTX5QL.js";import"./isEqual-BHNs_CPb.js";import"./withOsdkMetrics-BwVYFtll.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
