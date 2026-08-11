import{j as i}from"./iframe-CdVdrk-Z.js";import{O as p}from"./object-table-62AaPZcn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BGTm94Vo.js";import"./preload-helper-D3Uuy_qs.js";import"./Table-B763dVys.js";import"./index-DZVQNLYI.js";import"./Dialog-D5KNMyc3.js";import"./cross-CuXvHsqi.js";import"./svgIconContainer-DLJMdQAX.js";import"./useBaseUiId-BoQp8WF9.js";import"./InternalBackdrop-CCZ79l3M.js";import"./composite-MFKJqOry.js";import"./index-CbzjtGzh.js";import"./index-CfFbwio0.js";import"./index-XbpL-eEk.js";import"./useEventCallback-DZCCTk0w.js";import"./SkeletonBar-CvkPOQgp.js";import"./LoadingCell-Cue4PlOj.js";import"./ColumnConfigDialog-BrENVGwW.js";import"./DraggableList-D9bTfslw.js";import"./search-D2WuN_XZ.js";import"./Input-DfDhmSz8.js";import"./useControlled-pK0m6WTM.js";import"./isEqual-ayoADmPC.js";import"./isObject-Bpzg0px7.js";import"./Button-BHlEgtys.js";import"./ActionButton-sj37GpRw.js";import"./Checkbox-DwE_sQz2.js";import"./useValueChanged-ycOGR68M.js";import"./CollapsiblePanel-B_B20JEh.js";import"./MultiColumnSortDialog-Blb_XgO0.js";import"./MenuTrigger-clvgYZgu.js";import"./CompositeItem-DmMvdKXl.js";import"./ToolbarRootContext-MShXegNP.js";import"./getDisabledMountTransitionStyles-4bCs2qZ_.js";import"./getPseudoElementBounds-B3F-tw-8.js";import"./chevron-down-D-32cGr0.js";import"./index-Bw3b3OYv.js";import"./error-BYGeo1CS.js";import"./BaseCbacBanner-DAUIKKXt.js";import"./makeExternalStore-BwijJ5Bd.js";import"./Tooltip-DTMBJpz3.js";import"./PopoverPopup-CqcM-FgR.js";import"./toNumber-DzlYxzjS.js";import"./useOsdkClient-DqoFUQAl.js";import"./tick-Dege0wf4.js";import"./DropdownField-BTfoIE4K.js";import"./withOsdkMetrics-CiTByfY3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
