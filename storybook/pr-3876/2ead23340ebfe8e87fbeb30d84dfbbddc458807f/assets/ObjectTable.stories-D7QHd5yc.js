import{j as i}from"./iframe-d99A6dy_.js";import{O as p}from"./object-table-C7TY-3bM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CB-ChmVM.js";import"./preload-helper-BXXDbSLQ.js";import"./Table-CeT-_8Ox.js";import"./index-BvI0aYJU.js";import"./Dialog-C6_bQNum.js";import"./cross-dpi7xDM4.js";import"./svgIconContainer-CQFp9MIY.js";import"./useBaseUiId-DayFylep.js";import"./InternalBackdrop-CxjRJGo6.js";import"./composite-C_nWduZ1.js";import"./index-BipUzWZ7.js";import"./index-DpKUv_nP.js";import"./index-BFHEfbX0.js";import"./useEventCallback-BZIld91o.js";import"./SkeletonBar-DvniVmoI.js";import"./LoadingCell-BYLKl2re.js";import"./ColumnConfigDialog-DmLzPquA.js";import"./DraggableList-CvSkJVI6.js";import"./search-xcjteEAF.js";import"./Input-CwRTaEny.js";import"./useControlled-Res_vZF_.js";import"./Button-Bf5OJd4p.js";import"./small-cross-tWK-qLVG.js";import"./ActionButton-Dve-I_eb.js";import"./Checkbox-CIfmLG1g.js";import"./useValueChanged-EljjLCKw.js";import"./CollapsiblePanel-CahgaKO0.js";import"./MultiColumnSortDialog-CiLqOVe8.js";import"./MenuTrigger-DlcywJGy.js";import"./CompositeItem-CY0DaOXF.js";import"./ToolbarRootContext-BBcTGc1X.js";import"./getDisabledMountTransitionStyles-HxJED5q5.js";import"./getPseudoElementBounds-DVouIeC5.js";import"./chevron-down-CUgj8iAn.js";import"./index-B0OryjOF.js";import"./error-CXkBkCdL.js";import"./BaseCbacBanner-CgJ8nVGX.js";import"./makeExternalStore-CUVJJI81.js";import"./Tooltip-C86asDC4.js";import"./PopoverPopup-FEDh9MTo.js";import"./debounce-BT80FcB7.js";import"./useOsdkClient-BnBrjcrv.js";import"./tick-Cyn0w1xj.js";import"./DropdownField-D4Vkiu6d.js";import"./isEqual-DtfrX9Au.js";import"./withOsdkMetrics-k5Ap-NK7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
