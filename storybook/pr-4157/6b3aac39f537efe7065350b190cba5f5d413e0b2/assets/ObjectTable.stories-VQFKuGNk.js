import{j as i}from"./iframe-DfwKiHjh.js";import{O as p}from"./object-table-D4wAsZ7q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-20qFmIWF.js";import"./preload-helper-5NrpNAmT.js";import"./Table-B7MNUim9.js";import"./index-DQCbDJi8.js";import"./Dialog-DXLxDtSn.js";import"./cross-BXl7NczM.js";import"./svgIconContainer-BCMIhWa6.js";import"./useBaseUiId-SmhboENz.js";import"./InternalBackdrop-BDXq5BSA.js";import"./composite-mjsmoQDf.js";import"./index-aXU9JM6g.js";import"./index-COIAanZc.js";import"./index-UDlVD7eQ.js";import"./useEventCallback-hQRC-YiH.js";import"./SkeletonBar-CpKRXo_I.js";import"./LoadingCell-C4Pk54Me.js";import"./ColumnConfigDialog-BaucgyCS.js";import"./DraggableList-Bbxn-D33.js";import"./search-Df49v7_E.js";import"./Input-CijjM8i3.js";import"./useControlled-BVcUwOCR.js";import"./Button-4g201-R3.js";import"./small-cross-e1k1o1SZ.js";import"./ActionButton-Du85Cev6.js";import"./Checkbox-CDdUZXw-.js";import"./useValueChanged-DsumsiTQ.js";import"./CollapsiblePanel-CHALF4sW.js";import"./MultiColumnSortDialog-BtsOJ0RZ.js";import"./MenuTrigger-CcZ6zKIy.js";import"./CompositeItem-BRErCda5.js";import"./ToolbarRootContext-ywVZD9re.js";import"./getDisabledMountTransitionStyles-BcpIOTg3.js";import"./getPseudoElementBounds-Qvyi7lGR.js";import"./chevron-down-DeRPcryF.js";import"./index-BvJwPorm.js";import"./error-GYK-h93n.js";import"./BaseCbacBanner-DpSPxnKD.js";import"./makeExternalStore-DBs5yW9O.js";import"./Tooltip-DCCHCGDN.js";import"./PopoverPopup-D8jrxLG3.js";import"./debounce-Db1JwLM-.js";import"./useOsdkClient-DSSfPHx3.js";import"./tick-Cg1u7UqH.js";import"./DropdownField-BUzOTkFF.js";import"./isEqual-Des70IXo.js";import"./withOsdkMetrics-x9zZJEiy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
