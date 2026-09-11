import{j as i}from"./iframe-BOlAF3V1.js";import{O as p}from"./object-table-OpNOO8Zz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BB-pxdVX.js";import"./preload-helper-B8-M1e1R.js";import"./Table-Cq0xrIAG.js";import"./index-DHGHpbde.js";import"./Dialog-_6UFmCIU.js";import"./cross-4uTXI33L.js";import"./svgIconContainer-BI7oIE-s.js";import"./useBaseUiId-DKEtUdQs.js";import"./InternalBackdrop-jjkmgKoA.js";import"./composite-uQCx7Ami.js";import"./index-D0SLMQsQ.js";import"./index-Ckc7ROJV.js";import"./index-VFcxoHMB.js";import"./useEventCallback-CMYz6_v4.js";import"./SkeletonBar-5GsvCwd_.js";import"./LoadingCell-D8PuOjAg.js";import"./ColumnConfigDialog-DzS6ikRu.js";import"./DraggableList-BxtxFZr4.js";import"./search-dtRuG4ZW.js";import"./Input-DPiHLqc9.js";import"./useControlled-XB4dOcfe.js";import"./Button-C_Kq6X6A.js";import"./small-cross-DwQ2wey-.js";import"./ActionButton-D_sarqsj.js";import"./Checkbox-BEdNjDpm.js";import"./useValueChanged-DlyBj6rd.js";import"./CollapsiblePanel-CvEpNxRR.js";import"./MultiColumnSortDialog-BNhhRyLH.js";import"./MenuTrigger-C7Yb8CE4.js";import"./CompositeItem-DUqi3n0Z.js";import"./ToolbarRootContext-CrA83z4-.js";import"./getDisabledMountTransitionStyles-BU9dKP1z.js";import"./getPseudoElementBounds-Bzk92_UN.js";import"./chevron-down-1Vj4zZ-s.js";import"./index-8QnQJeqI.js";import"./error-mE4pvPha.js";import"./BaseCbacBanner-D8MjQjhc.js";import"./makeExternalStore-WrNjm8L9.js";import"./Tooltip-ncr-ughp.js";import"./PopoverPopup-ISkaWBxN.js";import"./debounce-CFrhvngH.js";import"./useOsdkClient-BgqOjygd.js";import"./tick-BB9vOuei.js";import"./DropdownField-DLvbQCQI.js";import"./isEqual-CzFD6Eij.js";import"./withOsdkMetrics-BCE-Yi3C.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
