import{j as i}from"./iframe-BJco-VOi.js";import{O as p}from"./object-table-CZdQQxaf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-YGPFmlsB.js";import"./preload-helper-CC7TVMhJ.js";import"./Table-24cFDvFl.js";import"./index-BYEPosP_.js";import"./Dialog-B0y-HYJx.js";import"./cross-BlvAMq1L.js";import"./svgIconContainer-C_CZzMkw.js";import"./useBaseUiId-BzzLXW_j.js";import"./InternalBackdrop-CsTSVhzv.js";import"./composite-CqNHvWIl.js";import"./index-BplUxlkc.js";import"./index-DDr5B_4i.js";import"./index-DfO8rP6J.js";import"./useEventCallback-ClpNn0Bu.js";import"./SkeletonBar-B56cMCHb.js";import"./LoadingCell-Bv54e49y.js";import"./ColumnConfigDialog-0a64JMFA.js";import"./DraggableList-B4JbVwWc.js";import"./search-DqesndjO.js";import"./Input-DwjxDHpS.js";import"./useControlled-DiTzu7_L.js";import"./Button-DEa2BSVh.js";import"./small-cross-CW2LRHDt.js";import"./ActionButton-DlRmUvNc.js";import"./Checkbox-J8z3vrVX.js";import"./useValueChanged-T1ieS56z.js";import"./CollapsiblePanel-DaNke5cg.js";import"./MultiColumnSortDialog-CVChGFU2.js";import"./MenuTrigger-BF2QncqJ.js";import"./CompositeItem-BmVC2FiX.js";import"./ToolbarRootContext-DIdO-EJM.js";import"./getDisabledMountTransitionStyles-BKDkD37w.js";import"./getPseudoElementBounds-DbEZqPx5.js";import"./chevron-down-CRLaJKXa.js";import"./index-W1FoFTA-.js";import"./error-C3c_rdRU.js";import"./BaseCbacBanner-DdPl_p__.js";import"./makeExternalStore-BcSmY_xV.js";import"./Tooltip-DaE6jUox.js";import"./PopoverPopup-Dgyvxoba.js";import"./toNumber-GPiy_R35.js";import"./useOsdkClient-Du5k__eT.js";import"./tick-LW5ev3iF.js";import"./DropdownField-DmZcznzU.js";import"./withOsdkMetrics-BU9iFrAf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
