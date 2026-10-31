import{j as i}from"./iframe-B-Vichjj.js";import{O as p}from"./object-table-BCdIBFyN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dp2FtGEe.js";import"./preload-helper-Cti1Qb3M.js";import"./Table-C9Muizw-.js";import"./index-BrQCMcFI.js";import"./Dialog-CxYJpKtD.js";import"./cross-DLbo6j99.js";import"./svgIconContainer-DKifyIgl.js";import"./useBaseUiId-BbqzJTxC.js";import"./InternalBackdrop-Chx6xO5M.js";import"./composite-Disga3Gv.js";import"./index-CXmDZCit.js";import"./index-roXzNt2R.js";import"./index-Dv4MxiBX.js";import"./useEventCallback-kNLNld48.js";import"./SkeletonBar-UxXYq5NI.js";import"./LoadingCell-B8BUYPrh.js";import"./ColumnConfigDialog-BC47B45I.js";import"./DraggableList-BDgiyc03.js";import"./search-DODYwrTJ.js";import"./Input-Dd8GNXSA.js";import"./useControlled-CyehoLEN.js";import"./Button-DhB4QIGX.js";import"./small-cross-CDE3T1VP.js";import"./ActionButton-3O7yiqt6.js";import"./Checkbox-Cx27mLUB.js";import"./useValueChanged-CWg72ruL.js";import"./CollapsiblePanel-CW4q5lnM.js";import"./MultiColumnSortDialog-B3iIgZb6.js";import"./MenuTrigger-DhKPEuWO.js";import"./CompositeItem-nXpoZPrc.js";import"./ToolbarRootContext-Gi45tW71.js";import"./getDisabledMountTransitionStyles-DwdzBcwv.js";import"./getPseudoElementBounds-D1q0SwFG.js";import"./chevron-down-BnTGK2z6.js";import"./index-p0g_0z-Q.js";import"./error-F0thqKPJ.js";import"./BaseCbacBanner-CIt6zgs7.js";import"./makeExternalStore-CZ3SFYVb.js";import"./Tooltip-BiLClmh0.js";import"./PopoverPopup-DfSgOxBk.js";import"./debounce-D27NbIqD.js";import"./useOsdkClient-DfCPaPDl.js";import"./tick-fjoIKIQ8.js";import"./DropdownField-DR1IrwcL.js";import"./isEqual-CkE0HBCa.js";import"./withOsdkMetrics-CNKwevxI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
