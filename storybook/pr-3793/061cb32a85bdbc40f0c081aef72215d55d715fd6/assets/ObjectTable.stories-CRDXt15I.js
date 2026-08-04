import{j as i}from"./iframe-BNkEWG9a.js";import{O as p}from"./object-table-Qs3gwRh7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BhpLQ7--.js";import"./preload-helper-COpsNFvL.js";import"./Table-BRo60hrW.js";import"./index-72yVnFn9.js";import"./Dialog-CEGWLd6J.js";import"./cross-DtXpSNop.js";import"./svgIconContainer-CP_7SCsh.js";import"./useBaseUiId-C2SIyrP4.js";import"./InternalBackdrop-DL1FTzrx.js";import"./composite-av1GhyDs.js";import"./index-Cggvd78O.js";import"./index-DEfY7O8R.js";import"./index-CEgJZuuG.js";import"./useEventCallback-D1Rxj0yz.js";import"./SkeletonBar-D-eSS5Nh.js";import"./LoadingCell-DQeoykhl.js";import"./ColumnConfigDialog-BWqRTolx.js";import"./DraggableList-xtF1Hp-l.js";import"./search-C5-ZQPA-.js";import"./Input-DWIMVPa2.js";import"./useControlled-DvYSYpF5.js";import"./isEqual-DrE4eLTE.js";import"./isObject-BwMKN0BU.js";import"./Button-DgpDNDJ9.js";import"./ActionButton-DIAFsp8c.js";import"./Checkbox-CWbEwXRu.js";import"./useValueChanged-NeM28dcY.js";import"./CollapsiblePanel-B0ffwjNO.js";import"./MultiColumnSortDialog-CqnbLiDB.js";import"./MenuTrigger-BhbSLNHY.js";import"./CompositeItem-DeRlHXsU.js";import"./ToolbarRootContext-BBdWlzqo.js";import"./getDisabledMountTransitionStyles-DN_b7Zsd.js";import"./getPseudoElementBounds-BMm8O3oC.js";import"./chevron-down-7Toxqoqn.js";import"./index-wuM_JjP7.js";import"./error-DiVMU7Ev.js";import"./BaseCbacBanner-z6rnorq_.js";import"./makeExternalStore-ByHargtT.js";import"./Tooltip-DYtmttXC.js";import"./PopoverPopup-qYbyIH6Y.js";import"./toNumber-ClNDy-wj.js";import"./useOsdkClient-BRiSPEVp.js";import"./tick-BoaWBw1L.js";import"./DropdownField-iGQ191qz.js";import"./withOsdkMetrics-CR8laU5K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
