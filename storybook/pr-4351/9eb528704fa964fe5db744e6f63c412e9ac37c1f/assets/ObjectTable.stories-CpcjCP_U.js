import{j as i}from"./iframe-CCpQdKcM.js";import{O as p}from"./object-table-DR1wy5nV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4IOkmfy8.js";import"./preload-helper-BcC5NClT.js";import"./Table-DNG7-1A6.js";import"./index-D5kRSGTL.js";import"./Dialog-bwrhhn8j.js";import"./cross-BC47wddT.js";import"./svgIconContainer-D0YWtwPv.js";import"./useBaseUiId-wkrh1dan.js";import"./InternalBackdrop-0tCSKsfM.js";import"./composite-BPsF8oXT.js";import"./index-vQ0gYfTZ.js";import"./index-Da9G4TOJ.js";import"./index-BmXZZFpC.js";import"./useEventCallback-CsPxOccP.js";import"./SkeletonBar-BkJLIidD.js";import"./LoadingCell-CC1cY9v2.js";import"./ColumnConfigDialog-Bb79T2dQ.js";import"./DraggableList-CjjMI6hn.js";import"./search-Bo8XWJqp.js";import"./Input-DqLoo56V.js";import"./useControlled-D4_I-zYv.js";import"./Button-B4X_MUbo.js";import"./small-cross-CAUesoy1.js";import"./ActionButton-CHEJ8NBC.js";import"./Checkbox-7x6DDuqf.js";import"./useValueChanged-DJDOwxxY.js";import"./CollapsiblePanel-wkRu-vQO.js";import"./MultiColumnSortDialog-DNHdb5ol.js";import"./MenuTrigger-BOkD9n0V.js";import"./CompositeItem-BtN-TT4o.js";import"./ToolbarRootContext-Dxu4wH7j.js";import"./getDisabledMountTransitionStyles-DBiOGOcl.js";import"./getPseudoElementBounds-BEDo5e11.js";import"./chevron-down-DF5kUyWB.js";import"./index-BLKb_bgJ.js";import"./error-CnylztP4.js";import"./BaseCbacBanner-BR709oO7.js";import"./makeExternalStore-CdAfQAQ3.js";import"./Tooltip-VwjYwtbN.js";import"./PopoverPopup-CVqq9jQl.js";import"./debounce-Dbh2BnKn.js";import"./useOsdkClient-DPTADJgv.js";import"./tick-D7yVxnRA.js";import"./DropdownField-BU_Oq5Hk.js";import"./isEqual-3yoq74id.js";import"./withOsdkMetrics-Kob29Pb2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
