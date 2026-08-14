import{j as i}from"./iframe-BceyKPSs.js";import{O as p}from"./object-table-DwP0jjRX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BQrWZ-q5.js";import"./preload-helper-yl7T0Sh3.js";import"./Table-CaxlUyV_.js";import"./index-CWhFTZFr.js";import"./Dialog-BgVnsqSX.js";import"./cross-hF_e54Dm.js";import"./svgIconContainer-DHBvckaf.js";import"./useBaseUiId-DuopilVp.js";import"./InternalBackdrop-ByNuEfNh.js";import"./composite-G6x_R6vo.js";import"./index-BWoCeqh_.js";import"./index-DKSJHSMW.js";import"./index-DDe6bujp.js";import"./useEventCallback-CRSexT8I.js";import"./SkeletonBar--BrMhexG.js";import"./LoadingCell-BlOfqsm4.js";import"./ColumnConfigDialog-DTC6gr-T.js";import"./DraggableList-liBL9omR.js";import"./search-DxqUxhlP.js";import"./Input-qZlbTLRL.js";import"./useControlled-B18pPgNn.js";import"./Button-mBgKjA3l.js";import"./small-cross-8sK4dG9o.js";import"./ActionButton-BjqsUD18.js";import"./Checkbox-B6a4UAcv.js";import"./useValueChanged-C4QJqrzM.js";import"./CollapsiblePanel-CSXtlR60.js";import"./MultiColumnSortDialog-yqCZ1Co2.js";import"./MenuTrigger-18tbTMz8.js";import"./CompositeItem-Birb3K4T.js";import"./ToolbarRootContext-C0EbIhmv.js";import"./getDisabledMountTransitionStyles-MmSx2tzL.js";import"./getPseudoElementBounds-WloO4hnG.js";import"./chevron-down-DvCtF5Hi.js";import"./index-CkN3vfzY.js";import"./error-86GovzKd.js";import"./BaseCbacBanner-C0a3vjbd.js";import"./makeExternalStore-DbwWgrB9.js";import"./Tooltip-LBFkq7-6.js";import"./PopoverPopup-cfS-G607.js";import"./debounce-DvZQ3nsC.js";import"./useOsdkClient-MTCW5dT-.js";import"./tick-8XyD1qba.js";import"./DropdownField-GN9Pyic1.js";import"./isEqual-koITs_Dm.js";import"./withOsdkMetrics-DHwnoxLF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
