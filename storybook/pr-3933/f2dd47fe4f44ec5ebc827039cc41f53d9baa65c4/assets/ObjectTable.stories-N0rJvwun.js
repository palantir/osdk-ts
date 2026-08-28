import{j as i}from"./iframe-DL4FbcwS.js";import{O as p}from"./object-table-DhigSl7G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B1PohDLd.js";import"./preload-helper-D-Y5E90C.js";import"./Table-Cs_iWV8n.js";import"./index-Br0G3foT.js";import"./Dialog-BFHfmQPP.js";import"./cross-BgWeKxEC.js";import"./svgIconContainer-CE-AmYzF.js";import"./useBaseUiId-CP7gZe2z.js";import"./InternalBackdrop-CN-xTacf.js";import"./composite-WIX2LHhX.js";import"./index-CDxRvv5g.js";import"./index-XqdSQUcL.js";import"./index-DLGuQieX.js";import"./useEventCallback-BEeBAO93.js";import"./SkeletonBar-CQVaDy0B.js";import"./LoadingCell-BlAiaYMr.js";import"./ColumnConfigDialog-C6cZo_LK.js";import"./DraggableList-CiiAn0FN.js";import"./search-DR1h9EWJ.js";import"./Input-CoqvOIT8.js";import"./useControlled-QO3Raoq-.js";import"./Button-B99bddLT.js";import"./small-cross-CUfUs31H.js";import"./ActionButton-CBHhv2Lw.js";import"./Checkbox-DExDIyfW.js";import"./useValueChanged-CXZmRiDQ.js";import"./CollapsiblePanel-Cm-pYAoG.js";import"./MultiColumnSortDialog-BkIL3f4O.js";import"./MenuTrigger-7-9CY8yx.js";import"./CompositeItem-BT24yxUg.js";import"./ToolbarRootContext-Dvyrl1Ns.js";import"./getDisabledMountTransitionStyles-BZoy_dEn.js";import"./getPseudoElementBounds-DbDICFV0.js";import"./chevron-down-CJf371D2.js";import"./index-1dYW8fLm.js";import"./error-CQAN26ZF.js";import"./BaseCbacBanner-DPX4y917.js";import"./makeExternalStore-CfOH3M3i.js";import"./Tooltip-BZG5pa3L.js";import"./PopoverPopup-go6UfqHP.js";import"./debounce-Ta3u6n_O.js";import"./useOsdkClient-C5Zu7SVp.js";import"./tick-Cy5aEDFq.js";import"./DropdownField-CxOSqgDd.js";import"./isEqual-B7FydaS0.js";import"./withOsdkMetrics-tOkw8TA4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
