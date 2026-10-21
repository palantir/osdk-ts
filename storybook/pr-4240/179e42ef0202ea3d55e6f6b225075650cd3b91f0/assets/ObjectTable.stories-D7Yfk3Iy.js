import{j as i}from"./iframe-BN5ehZsU.js";import{O as p}from"./object-table-BiY9bRY-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--k83RTm8.js";import"./preload-helper-DiI2ZQ3N.js";import"./Table-DkXsCYJE.js";import"./index-CUoza1kZ.js";import"./Dialog-DetNl7lg.js";import"./cross-CTzlKmgX.js";import"./svgIconContainer-3_nrEXxJ.js";import"./useBaseUiId-BEp1f_TL.js";import"./InternalBackdrop-Cd1W5N03.js";import"./composite-Dz6G3wtQ.js";import"./index-CNUSOrN9.js";import"./index-BMD_ABKq.js";import"./index-cT-qCssu.js";import"./useEventCallback-CfoOVKbg.js";import"./SkeletonBar-CzWtUtS0.js";import"./LoadingCell-Dm1PRD3p.js";import"./ColumnConfigDialog-BMx-cACT.js";import"./DraggableList-Df0gkaKK.js";import"./search-B5pZpNhj.js";import"./Input-Byq2KsKZ.js";import"./useControlled-Dn-0uibR.js";import"./Button-Ca_A2rxi.js";import"./small-cross-BhsmHd15.js";import"./ActionButton-in3xyPdG.js";import"./Checkbox-Uoa-vC10.js";import"./useValueChanged-ByN6FCGV.js";import"./CollapsiblePanel-e8TDfTp5.js";import"./MultiColumnSortDialog-Dy6VCNrc.js";import"./MenuTrigger-5qlhqjab.js";import"./CompositeItem-CfdU5eWF.js";import"./ToolbarRootContext-C4vwBpF_.js";import"./getDisabledMountTransitionStyles-CbLH7J6E.js";import"./getPseudoElementBounds-B23cJjwW.js";import"./chevron-down-DSRGL9k7.js";import"./index-CfzvYg2Q.js";import"./error-BrwUp-mO.js";import"./BaseCbacBanner-DP2nV8rQ.js";import"./makeExternalStore-9ZiGbHue.js";import"./Tooltip-B7KHYj-o.js";import"./PopoverPopup-CDJ9nvZU.js";import"./debounce-DDVGe1yo.js";import"./useOsdkClient-D_Tzde9i.js";import"./tick-CWonoO7R.js";import"./DropdownField-CPsZXnb7.js";import"./isEqual-sFEmQ9k3.js";import"./withOsdkMetrics-XTiZGcd-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
