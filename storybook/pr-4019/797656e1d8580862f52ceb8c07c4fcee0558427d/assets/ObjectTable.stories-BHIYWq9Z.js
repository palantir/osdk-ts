import{j as i}from"./iframe-CI-n1SDT.js";import{O as p}from"./object-table-DRpU5_9A.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CxwTxAf0.js";import"./preload-helper-Mdgc8Ktj.js";import"./Table-Cvtx98HI.js";import"./index-DS4RSAQC.js";import"./Dialog-CpGVPRTu.js";import"./cross-CG9JNs7m.js";import"./svgIconContainer-C5J3XXoW.js";import"./useBaseUiId-D17iYZZP.js";import"./InternalBackdrop-CwiCBdb3.js";import"./composite-BKY77e-J.js";import"./index-BCo1buGM.js";import"./index-CgpiMQTM.js";import"./index-ap0UOzMs.js";import"./useEventCallback-DRfi-_TS.js";import"./SkeletonBar-ClCYHDwh.js";import"./LoadingCell-CZ1WtYGd.js";import"./ColumnConfigDialog-ChDOmYKl.js";import"./DraggableList-Dsm2hTH5.js";import"./search-BJLPlObb.js";import"./Input-CU7LnIit.js";import"./useControlled-DqjHOya_.js";import"./Button-BU0hCYOg.js";import"./small-cross-DHjfMPnD.js";import"./ActionButton-CEbPtw0Y.js";import"./Checkbox-B_-OJpAe.js";import"./useValueChanged-C_2Ifi7m.js";import"./CollapsiblePanel-ChN3dRbg.js";import"./MultiColumnSortDialog-Cbm_p0DI.js";import"./MenuTrigger-D4mel33g.js";import"./CompositeItem-OcKtL5Oh.js";import"./ToolbarRootContext-3jcFlcdQ.js";import"./getDisabledMountTransitionStyles-smLfI-jR.js";import"./getPseudoElementBounds-CG3xD5lD.js";import"./chevron-down-BMoNsHmj.js";import"./index-Bh2eKMSj.js";import"./error-BExaNGVy.js";import"./BaseCbacBanner-qIi9rFzM.js";import"./makeExternalStore-Dfr5mI6y.js";import"./Tooltip-c4HEDOZ7.js";import"./PopoverPopup-CVmvu6W-.js";import"./debounce-C6Db4ohX.js";import"./useOsdkClient-Cy_JiOUl.js";import"./tick-DU5k7Rwc.js";import"./DropdownField-CUeqsysl.js";import"./isEqual-DwJvLym-.js";import"./withOsdkMetrics-aN9WoVVm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
