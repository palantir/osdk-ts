import{j as i}from"./iframe-D8GtPwc8.js";import{O as p}from"./object-table-CudRMjsB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BizpUJiW.js";import"./preload-helper-DM7AYsRe.js";import"./Table-Dnd_Z03K.js";import"./index-BHvqAHvK.js";import"./Dialog-BQAfoqXB.js";import"./cross-DB6ZQcJi.js";import"./svgIconContainer-DlryWN-T.js";import"./useBaseUiId-cPjFtQbW.js";import"./InternalBackdrop-BnVhbZ_p.js";import"./composite-C3gA3n5a.js";import"./index-BFpMtvXB.js";import"./index-hBVFoSAx.js";import"./index--mveQ4GA.js";import"./useEventCallback-JoMVAP4J.js";import"./SkeletonBar-DhDYamN9.js";import"./LoadingCell-CpxY2g9E.js";import"./ColumnConfigDialog-CgqnQaBc.js";import"./DraggableList-H11g_daa.js";import"./search-1VHOmlrx.js";import"./Input-BQZ4zqRI.js";import"./useControlled-BGR8D7jw.js";import"./Button-BY4p0q88.js";import"./small-cross-AU0AwZv4.js";import"./ActionButton-COwhhG-g.js";import"./Checkbox-CYnr5sf0.js";import"./useValueChanged-Bvcq1JkK.js";import"./CollapsiblePanel-DRmMBXX1.js";import"./MultiColumnSortDialog-w5gbJQoX.js";import"./MenuTrigger-CQvmaUV7.js";import"./CompositeItem-DiLTW9IV.js";import"./ToolbarRootContext-BqDTk1g9.js";import"./getDisabledMountTransitionStyles-OSessTJH.js";import"./getPseudoElementBounds-DAdIAfjY.js";import"./chevron-down-7LsT1DrB.js";import"./index-BZjshZ5O.js";import"./error-DXFVtY0P.js";import"./BaseCbacBanner-DJmT2hTZ.js";import"./makeExternalStore-ByNN_qQg.js";import"./Tooltip-CWkY425s.js";import"./PopoverPopup-DnmZzlUY.js";import"./debounce-4ipI9nx9.js";import"./useOsdkClient-D4kcyEkr.js";import"./tick-DbzPDmMF.js";import"./DropdownField-DIakJXQh.js";import"./isEqual-DcZVMsbL.js";import"./withOsdkMetrics-BajG3tch.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
