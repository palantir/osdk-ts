import{j as i}from"./iframe-5Yblr-NW.js";import{O as p}from"./object-table-c1GWaMPj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXTMYhDS.js";import"./preload-helper-Btewyy37.js";import"./Table-BGKldzvB.js";import"./index-DhSuFMxY.js";import"./Dialog-yZxDZi1G.js";import"./cross-AcYogNoU.js";import"./svgIconContainer-C-JdNNRF.js";import"./useBaseUiId-CAIjkwyZ.js";import"./InternalBackdrop-CN9NhUNj.js";import"./composite-koNAMkMV.js";import"./index-CCrwpy9x.js";import"./index-Dy445fm6.js";import"./index-DhxqCc18.js";import"./useEventCallback-CxKTPJzO.js";import"./SkeletonBar-DiM1XXxY.js";import"./LoadingCell-BEZh4DfC.js";import"./ColumnConfigDialog-BJcXMY0A.js";import"./DraggableList-BzD4-3db.js";import"./search-D1uGJSkA.js";import"./Input-BOhHHxG9.js";import"./useControlled-CA2G7MeH.js";import"./Button-MK9UA-SJ.js";import"./small-cross-BffCLWOx.js";import"./ActionButton-d6xzy603.js";import"./Checkbox-Cc-NsMO8.js";import"./useValueChanged-m37Rn1H6.js";import"./CollapsiblePanel-BBxBNB35.js";import"./MultiColumnSortDialog-DuiPARGk.js";import"./MenuTrigger-C2DN0Qlf.js";import"./CompositeItem-DP9Ij0vi.js";import"./ToolbarRootContext-Cm13ddJg.js";import"./getDisabledMountTransitionStyles-7aMNvG5X.js";import"./getPseudoElementBounds-BQ6Zc3zn.js";import"./chevron-down-CwlGMO0g.js";import"./index-D3dVTsWE.js";import"./error-CKIF3yHX.js";import"./BaseCbacBanner-MGoalnpS.js";import"./makeExternalStore-CdX6NCF6.js";import"./Tooltip-0zkur8B8.js";import"./PopoverPopup-CendakA5.js";import"./debounce-ZeZufrM2.js";import"./useOsdkClient-CmlS7muK.js";import"./tick-Bb3E6T37.js";import"./DropdownField-DD-cuKca.js";import"./isEqual-Wc-dAf2j.js";import"./withOsdkMetrics-QG2B1sMI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
