import{j as i}from"./iframe-JML89ya1.js";import{O as p}from"./object-table-CB8maTQ9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CExWxZwJ.js";import"./preload-helper-CM_flLUX.js";import"./Table-qeTnIn3M.js";import"./index-Dc7pQO3f.js";import"./Dialog-Dv4Dy1qa.js";import"./cross-CdcqVyzX.js";import"./svgIconContainer-Cy1tbGmj.js";import"./useBaseUiId-ClxBcpvR.js";import"./InternalBackdrop-21DC1z9N.js";import"./composite-lR6NpWTP.js";import"./index-DlPnlhaK.js";import"./index-BPJRAXu1.js";import"./index-BslB55NL.js";import"./useEventCallback-3tK8gcTN.js";import"./SkeletonBar-DaW4uBaB.js";import"./LoadingCell-sPjm8bHN.js";import"./ColumnConfigDialog-C-mfnaNB.js";import"./DraggableList-quiv3NLh.js";import"./search-BoZa_HcP.js";import"./Input-BPVftMna.js";import"./useControlled-Dmeb-XiS.js";import"./Button-B2QAh7AV.js";import"./small-cross-CmBmU6Im.js";import"./ActionButton-nJprY3R-.js";import"./Checkbox-B7RLfOUI.js";import"./useValueChanged--jLvROzt.js";import"./CollapsiblePanel-Dd_2bttq.js";import"./MultiColumnSortDialog-BC0gIDZO.js";import"./MenuTrigger-CeIqBMEF.js";import"./CompositeItem-DNfCdbW9.js";import"./ToolbarRootContext-CcT7wUi-.js";import"./getDisabledMountTransitionStyles-BiUI-Q9G.js";import"./getPseudoElementBounds-Idti6r53.js";import"./chevron-down-CvzFuZ8A.js";import"./index-liHaAzJ1.js";import"./error-yEc2n_E2.js";import"./BaseCbacBanner-CjRDdOMd.js";import"./makeExternalStore-C3BRy9aQ.js";import"./Tooltip-DuubpmlS.js";import"./PopoverPopup-DmwxW2Ka.js";import"./debounce-BR8LXPlV.js";import"./useOsdkClient-_gvl4Rg0.js";import"./tick-KkkII5Mi.js";import"./DropdownField-C9yxcGzD.js";import"./isEqual-Sm80VB3L.js";import"./withOsdkMetrics-DBKIKizN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
