import{j as i}from"./iframe-YaS06hyW.js";import{O as p}from"./object-table-NgK91Za2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CbFj4eCr.js";import"./preload-helper-CHXu7ylM.js";import"./Table-D0b8j1nn.js";import"./index-B-cO8d-Q.js";import"./Dialog-Dcm8USw5.js";import"./cross-AobcYagI.js";import"./svgIconContainer-DLa4OU0n.js";import"./useBaseUiId-CjvUa8cY.js";import"./InternalBackdrop-BO6eEqaF.js";import"./composite-BkFZzr2I.js";import"./index-DbqTfLlX.js";import"./index-DXr_DK2g.js";import"./index-De5BIU9t.js";import"./useEventCallback-Ddj36AAG.js";import"./SkeletonBar-DHk9E0H4.js";import"./LoadingCell-BoH9snOA.js";import"./ColumnConfigDialog-BZWPvfbS.js";import"./DraggableList-C8mYRZZv.js";import"./search-DaYARQRb.js";import"./Input-Dql0qM-e.js";import"./useControlled-Bm5M3oKq.js";import"./Button-BEru0DpJ.js";import"./small-cross-sr4-rTD5.js";import"./ActionButton-BLeOA9QJ.js";import"./Checkbox-D4nrSXTe.js";import"./useValueChanged-2sKWWR-R.js";import"./CollapsiblePanel-DoSREVMI.js";import"./MultiColumnSortDialog-BJjtuXpU.js";import"./MenuTrigger-DR1I2fHJ.js";import"./CompositeItem-ClG1U4EV.js";import"./ToolbarRootContext-D-k46Imi.js";import"./getDisabledMountTransitionStyles-DDMdB6wz.js";import"./getPseudoElementBounds-CWoE1MIM.js";import"./chevron-down-CxKB5IcW.js";import"./index-D6PE6Ffo.js";import"./error-irND_epE.js";import"./BaseCbacBanner-CBshacCO.js";import"./makeExternalStore-Cqyecvoe.js";import"./Tooltip-Dp5Fjj_b.js";import"./PopoverPopup-BOYvum7T.js";import"./debounce-B7ZPV7rx.js";import"./useOsdkClient-BQhZ6hRm.js";import"./tick-BJJckPUf.js";import"./DropdownField-Do5PO4eK.js";import"./isEqual-CRxLbnY5.js";import"./withOsdkMetrics-8M4HiVCC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
