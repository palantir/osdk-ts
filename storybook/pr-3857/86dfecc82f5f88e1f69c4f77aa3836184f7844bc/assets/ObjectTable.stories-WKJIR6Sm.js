import{j as i}from"./iframe-DY1GCbMw.js";import{O as p}from"./object-table-CciFgaiP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BBPEMZR-.js";import"./preload-helper-CBmLF2uv.js";import"./Table-Dow3q7z3.js";import"./index-D14LjQ6n.js";import"./Dialog-2wYgJqJO.js";import"./cross-CmkMCGAt.js";import"./svgIconContainer-BFVaOhpV.js";import"./useBaseUiId-DuGGt2wk.js";import"./InternalBackdrop-JB_AdRkb.js";import"./composite-BpnSt9TV.js";import"./index-w54taWD8.js";import"./index-DRgBoERL.js";import"./index-4S2sOMY0.js";import"./useEventCallback-qdgPO1dc.js";import"./SkeletonBar-BfAdSFd-.js";import"./LoadingCell-CsMIdMuG.js";import"./ColumnConfigDialog-CaoxwqHB.js";import"./DraggableList-CbiS0L-q.js";import"./search-DozuAt7g.js";import"./Input-BHRf24lx.js";import"./useControlled-DgmoUEMa.js";import"./Button-lZzhyPA5.js";import"./small-cross-B-E1H7Wk.js";import"./ActionButton-BgIpSx8W.js";import"./Checkbox-DO-ve-ai.js";import"./useValueChanged-ibk3K4Gh.js";import"./CollapsiblePanel-sgSmAf5J.js";import"./MultiColumnSortDialog-2d02ICXE.js";import"./MenuTrigger-B0Nk20ol.js";import"./CompositeItem-CyVQmu_E.js";import"./ToolbarRootContext-CKGq1FSG.js";import"./getDisabledMountTransitionStyles-CMWWTT10.js";import"./getPseudoElementBounds-PSTXVLkP.js";import"./chevron-down-DwvhxFZN.js";import"./index-Cw53nmwf.js";import"./error-B-msJLHi.js";import"./BaseCbacBanner-BflXDhPC.js";import"./makeExternalStore-CPaZopZ5.js";import"./Tooltip-DfeHQo_2.js";import"./PopoverPopup-KCoGRqZ6.js";import"./toNumber-DUjm83bJ.js";import"./useOsdkClient-BiAMLbqw.js";import"./tick-b9WUc7Jb.js";import"./DropdownField-r9c9LU4A.js";import"./withOsdkMetrics-C-yRlBMm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
