import{j as i}from"./iframe-D4P7etlB.js";import{O as p}from"./object-table-CmDASLiD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-QdKU90JP.js";import"./preload-helper-C2lPWNQK.js";import"./Table-pBQAdc4d.js";import"./index--jClFyuO.js";import"./Dialog-KLia9iKn.js";import"./cross-2BDiF0Hd.js";import"./svgIconContainer-U5WzETGn.js";import"./useBaseUiId-DvebyHll.js";import"./InternalBackdrop-DGlO_IGy.js";import"./composite-EmCbbtLr.js";import"./index-CryUHWua.js";import"./index-CwQjgJZY.js";import"./index-_8-zIP07.js";import"./useEventCallback-DkNCpCyH.js";import"./SkeletonBar-BO8Ocj6J.js";import"./LoadingCell-Do7dTGvR.js";import"./ColumnConfigDialog-CohusCj_.js";import"./DraggableList-BqyQGRR3.js";import"./search-BeidNAh3.js";import"./Input-qm2XT5j9.js";import"./useControlled-Bt7GOIrD.js";import"./Button-DSmwZlqW.js";import"./small-cross-DTEPBgMK.js";import"./ActionButton-DK6o_d0J.js";import"./Checkbox-DyvnuZ96.js";import"./useValueChanged-cSUG-TZB.js";import"./CollapsiblePanel-rtSyYl_a.js";import"./MultiColumnSortDialog-q1L_KY4V.js";import"./MenuTrigger-DR872eUl.js";import"./CompositeItem-Ca01-11J.js";import"./ToolbarRootContext-BJaSUWck.js";import"./getDisabledMountTransitionStyles-CX4qj900.js";import"./getPseudoElementBounds-hPghm1P1.js";import"./chevron-down-6L8qWnzl.js";import"./index-C2PCEa1N.js";import"./error-BEbiBzi3.js";import"./BaseCbacBanner-O1ctCsiT.js";import"./makeExternalStore-B40swsdd.js";import"./Tooltip-rdRqYy6n.js";import"./isObject-XT_Sb81H.js";import"./debounce-BMR9Ivsx.js";import"./useOsdkClient-CeUx27Wr.js";import"./tick-BK6XBZsH.js";import"./DropdownField-CWcrlvwC.js";import"./isEqual-CO15cxJ9.js";import"./_baseIsEqual-CsrvH1cu.js";import"./withOsdkMetrics-DllWQK_5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
