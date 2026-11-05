import{j as i}from"./iframe-CSMdLy_I.js";import{O as p}from"./object-table-DpGPH4ge.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-By4inABE.js";import"./preload-helper-BCwYmOqM.js";import"./Table-DfBtddzc.js";import"./index-DGS2fgyr.js";import"./Dialog-i8zsa85E.js";import"./cross-rRwDjGT0.js";import"./svgIconContainer-CrtGHbrd.js";import"./useBaseUiId-DtXDl3EO.js";import"./InternalBackdrop-BfeMZC_0.js";import"./composite-Cr1W43yt.js";import"./index-BhZRCTRM.js";import"./index-DLB3_ur9.js";import"./index-QJiueyA8.js";import"./useEventCallback-W8UKu-Ag.js";import"./SkeletonBar-C4tzn2dO.js";import"./LoadingCell-BJmc-ZNS.js";import"./ColumnConfigDialog-C2NzCes3.js";import"./DraggableList-CGE8lq2b.js";import"./search-WBNkBZFc.js";import"./Input-4tMRpSwt.js";import"./useControlled-gwPjRggQ.js";import"./Button-BsIC8U9B.js";import"./small-cross-BwgGFbKS.js";import"./ActionButton-CeW5NSaB.js";import"./Checkbox-CRfBxcXo.js";import"./useValueChanged-C8niT4lC.js";import"./CollapsiblePanel-rhXz0ewg.js";import"./MultiColumnSortDialog-BcEiz3VR.js";import"./MenuTrigger-jClvhzvb.js";import"./CompositeItem-CQ_4wlFD.js";import"./ToolbarRootContext-2k2UafpN.js";import"./getDisabledMountTransitionStyles-D6grOVXg.js";import"./getPseudoElementBounds-C6u0lb-d.js";import"./chevron-down-Cct1BoUi.js";import"./index-CWmnhREc.js";import"./error-Duh78PLb.js";import"./BaseCbacBanner-BkUrSOHZ.js";import"./makeExternalStore-ToHZ88Vl.js";import"./Tooltip-ccVO4Ah8.js";import"./isObject-C3_fL553.js";import"./debounce-Bv9TTPnt.js";import"./useOsdkClient-DQvQ58tC.js";import"./tick-DhgTEvaD.js";import"./DropdownField-DIrWqSq3.js";import"./isEqual-Bn8jYnsm.js";import"./_baseIsEqual-DB2r6boN.js";import"./withOsdkMetrics-DOaLQ3Zd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
