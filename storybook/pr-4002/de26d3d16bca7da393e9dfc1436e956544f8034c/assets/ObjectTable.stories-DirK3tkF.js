import{j as i}from"./iframe-CDKj6riZ.js";import{O as p}from"./object-table-BkPo0DHn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DvyrUvDT.js";import"./preload-helper-2bCQFHut.js";import"./Table-D4FUUOFM.js";import"./index-DetP7shj.js";import"./Dialog-L7gFa3sH.js";import"./cross-BYAFUA7Y.js";import"./svgIconContainer-CbX48z79.js";import"./useBaseUiId-_WJi2oWJ.js";import"./InternalBackdrop-gfABYBaE.js";import"./composite-CqNHIi7L.js";import"./index-B2o7iGnK.js";import"./index-CjcUdmkL.js";import"./index-Crh_ASHH.js";import"./useEventCallback-CDEXMXWY.js";import"./SkeletonBar-Cssm9L3x.js";import"./LoadingCell-jX58PZqe.js";import"./ColumnConfigDialog-uoblqHBh.js";import"./DraggableList-DrMmkPtb.js";import"./search-DvJSVec5.js";import"./Input-BFZp6n3R.js";import"./useControlled-XE9pZf79.js";import"./Button-CG5FCWgZ.js";import"./small-cross-5rAHwMU9.js";import"./ActionButton-BkP-JJoD.js";import"./Checkbox-BKKr9Rzl.js";import"./useValueChanged-Coru2arj.js";import"./CollapsiblePanel-zQS1BJ72.js";import"./MultiColumnSortDialog-CPVFcEnW.js";import"./MenuTrigger-Dp2k6FuQ.js";import"./CompositeItem-B3wPzhHU.js";import"./ToolbarRootContext-BCzvZYHk.js";import"./getDisabledMountTransitionStyles-RTgAaaG2.js";import"./getPseudoElementBounds-DABSHmAT.js";import"./chevron-down-BsLIY-zC.js";import"./index-CMQpOErY.js";import"./error-RLt_WdpY.js";import"./BaseCbacBanner-DZgs1u-I.js";import"./makeExternalStore-jqVUK_Pp.js";import"./Tooltip-CWLV-0q5.js";import"./PopoverPopup-Cd1GWSO-.js";import"./debounce-BwcIUiDW.js";import"./useOsdkClient-DGLHrUME.js";import"./tick-DFRTfwJn.js";import"./DropdownField-CvpHFiWC.js";import"./isEqual-Du5KZsM4.js";import"./withOsdkMetrics-RKhA3pS2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
