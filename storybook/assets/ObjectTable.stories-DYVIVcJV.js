import{j as i}from"./iframe-_9YlafCr.js";import{O as p}from"./object-table-DUelh5-U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PsDf6IfW.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DW3vsqL2.js";import"./index-BfZ7BIaf.js";import"./Dialog-BrV6o91O.js";import"./cross-B125yZV8.js";import"./svgIconContainer--y7ZeGKv.js";import"./useBaseUiId-D-8XVTg2.js";import"./InternalBackdrop-CsGmrjwG.js";import"./composite-B3EEdu-D.js";import"./index-DIog01LX.js";import"./index-DNJvNqQL.js";import"./index-BakLKG99.js";import"./useEventCallback-DJBlLW-f.js";import"./SkeletonBar-CUvmqA7b.js";import"./LoadingCell-DoXNawwV.js";import"./ColumnConfigDialog-B6_4becb.js";import"./DraggableList-EY3fB7NM.js";import"./search-0XIiHjxa.js";import"./Input-B_fnG3Vc.js";import"./useControlled-BdcuaOkM.js";import"./Button-C98CyIMt.js";import"./small-cross-OYYk08nU.js";import"./ActionButton-CUGmDrNW.js";import"./Checkbox-B-HW6x-Y.js";import"./useValueChanged-CBaTlyFq.js";import"./CollapsiblePanel-B3fgQFhP.js";import"./MultiColumnSortDialog-CZ0LbiOr.js";import"./MenuTrigger-BXTZW7uz.js";import"./CompositeItem-DW1q3vob.js";import"./ToolbarRootContext-BvwX_Pt8.js";import"./getDisabledMountTransitionStyles-DZwz930I.js";import"./getPseudoElementBounds-CjjwHwg5.js";import"./chevron-down-DxrxOWhu.js";import"./index-Cj93zZaN.js";import"./error-DDBbGTuS.js";import"./BaseCbacBanner-C9BvCD8Z.js";import"./makeExternalStore-CDyMTORk.js";import"./Tooltip-DinPo1CO.js";import"./isObject-SrfzQbVs.js";import"./debounce-BfdW6jiz.js";import"./useOsdkClient-DugCV1Jh.js";import"./tick-CFfbGJF6.js";import"./DropdownField-ACTuDJFj.js";import"./isEqual-C1L_1N_i.js";import"./_baseIsEqual-BOWedRvE.js";import"./withOsdkMetrics-ASK7qsZD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
