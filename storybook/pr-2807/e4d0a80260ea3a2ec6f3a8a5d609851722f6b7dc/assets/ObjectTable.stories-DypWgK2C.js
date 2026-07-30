import{j as i}from"./iframe-BGXQayXc.js";import{O as p}from"./object-table-MIGxjgCf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DIPrroBC.js";import"./preload-helper-NRrpjeI0.js";import"./Table-DwbecF3W.js";import"./index-BbGsyqOi.js";import"./Dialog-CQtQnZ5i.js";import"./cross-DC2Z1Ioq.js";import"./svgIconContainer-GwtppRLN.js";import"./useBaseUiId-CiIILwi-.js";import"./InternalBackdrop-DVb-kA91.js";import"./composite-CxwljJm3.js";import"./index-DVnvFKQ9.js";import"./index-Q_IDGxPs.js";import"./index-C2No9_3o.js";import"./useEventCallback-Doyq9xlP.js";import"./SkeletonBar-D4xRB_P4.js";import"./LoadingCell-1IfXOjrD.js";import"./ColumnConfigDialog-CfUI_nrj.js";import"./DraggableList-CwYE2BCE.js";import"./search-CG2X3jdC.js";import"./Input-CJ9L1nB_.js";import"./useControlled-Cx0doQf6.js";import"./isEqual-_QppRuU1.js";import"./isObject-CpNOWNAL.js";import"./Button-0zluTTNn.js";import"./ActionButton-PBftEzPB.js";import"./Checkbox-BjZ835Ix.js";import"./useValueChanged-C-BLIIiy.js";import"./CollapsiblePanel-drMODSok.js";import"./MultiColumnSortDialog-BNVz4UQF.js";import"./MenuTrigger-EnMUIWlN.js";import"./CompositeItem-8ppYONab.js";import"./ToolbarRootContext-CVRCxt6k.js";import"./getDisabledMountTransitionStyles-Bs7aafzi.js";import"./getPseudoElementBounds-CUu6YACx.js";import"./chevron-down-BkFumYFe.js";import"./index-62-q8zEu.js";import"./error-D2AB_uHu.js";import"./BaseCbacBanner-DcTfUuEG.js";import"./makeExternalStore-bGGx7Jm8.js";import"./Tooltip-BqBaS9NB.js";import"./PopoverPopup-CiQN9YtB.js";import"./toNumber-CQsrp6Vk.js";import"./useOsdkClient-DbTuMB4g.js";import"./tick-BNqLTRdd.js";import"./DropdownField-CLIuwmMt.js";import"./withOsdkMetrics-DBduly0k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
