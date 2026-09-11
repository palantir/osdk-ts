import{j as i}from"./iframe-BAOOmxmu.js";import{O as p}from"./object-table-lyOdhbIm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ViMfXKqD.js";import"./preload-helper-BIm_Fr-4.js";import"./Table-oXFWfW38.js";import"./index-QY-KQRXF.js";import"./Dialog-D-qSwK9V.js";import"./cross-h2O47eJg.js";import"./svgIconContainer-Bp5LkjRC.js";import"./useBaseUiId-B4ZR21gm.js";import"./InternalBackdrop-CM1IsXud.js";import"./composite-DMwFPLnT.js";import"./index-DDBX-eT9.js";import"./index-20cLn6S1.js";import"./index-BoMMojJ9.js";import"./useEventCallback-DWFrmsqt.js";import"./SkeletonBar-CC4f_ujB.js";import"./LoadingCell-PBZuzgBJ.js";import"./ColumnConfigDialog-BYk1h3uX.js";import"./DraggableList-BKwbFcH0.js";import"./search-D68AVNns.js";import"./Input-d_-ySvYA.js";import"./useControlled-CuqfVZxX.js";import"./Button-btye1J53.js";import"./small-cross-DGk8qS5c.js";import"./ActionButton-Cfr9kbRA.js";import"./Checkbox-De9kV-mT.js";import"./useValueChanged-BSyPbCHB.js";import"./CollapsiblePanel-BN5oNg3z.js";import"./MultiColumnSortDialog-BdHUNwu9.js";import"./MenuTrigger-Di4mAf04.js";import"./CompositeItem-BPZd139z.js";import"./ToolbarRootContext-C5dbAl4m.js";import"./getDisabledMountTransitionStyles-raUh3s1U.js";import"./getPseudoElementBounds-CUG0gOL4.js";import"./chevron-down-Dwrs1hNu.js";import"./index-DyTfUGkB.js";import"./error-BswP0WVl.js";import"./BaseCbacBanner-B-I3Tp0k.js";import"./makeExternalStore-DNiKFXrW.js";import"./Tooltip-BkO9PIng.js";import"./PopoverPopup-CJ9iUHSY.js";import"./debounce-YjlmO8bW.js";import"./useOsdkClient-Cb63-21m.js";import"./tick-BQoQRlmD.js";import"./DropdownField-C3tYCGBa.js";import"./isEqual-C_qKHYvW.js";import"./withOsdkMetrics-C7ktc4nn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
