import{j as i}from"./iframe-cQ3f48MB.js";import{O as p}from"./object-table-CycBgw2h.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D2l2nDGP.js";import"./preload-helper-D6QOSXh4.js";import"./Table-DEKDqocf.js";import"./index-D1RuRedd.js";import"./Dialog-2_OY6EqA.js";import"./cross-DauAavmu.js";import"./svgIconContainer-CgizML4Q.js";import"./useBaseUiId-CMNXwzlb.js";import"./InternalBackdrop-DuDjQ0BZ.js";import"./composite-B6VOm6ZQ.js";import"./index-MlmEIZWp.js";import"./index-C8RTiPbx.js";import"./index-Bs-Z1Jgq.js";import"./useEventCallback-Y2QBMo-H.js";import"./SkeletonBar-D4mUM1vS.js";import"./LoadingCell-DNvez4my.js";import"./ColumnConfigDialog-BUoGlIi-.js";import"./DraggableList-DjVBxeH3.js";import"./search-iHipGmJb.js";import"./Input-BuFeTP1U.js";import"./useControlled-ByZlI-u7.js";import"./Button-DZgLeZFj.js";import"./small-cross-BObFe73S.js";import"./ActionButton-k9CcFnZX.js";import"./Checkbox-CpTiMr31.js";import"./useValueChanged-BQFlsv8-.js";import"./CollapsiblePanel-BS0BxhJu.js";import"./MultiColumnSortDialog-JnW_yKzW.js";import"./MenuTrigger-BzoDHwuv.js";import"./CompositeItem-684cCOtj.js";import"./ToolbarRootContext-DNEaNwHU.js";import"./getDisabledMountTransitionStyles-Bg1kr4yU.js";import"./getPseudoElementBounds-DKU8Ia-1.js";import"./chevron-down-CIrisS0y.js";import"./index-C-MPwgvx.js";import"./error-CsayxGJU.js";import"./BaseCbacBanner-Cfhd9GNF.js";import"./makeExternalStore-DtAasX45.js";import"./Tooltip-DsHuisIK.js";import"./isObject-saTum3J5.js";import"./debounce-Dl9ssa6I.js";import"./useOsdkClient-CamUyQ2y.js";import"./tick-nlg_x8OU.js";import"./DropdownField-CLQWIPME.js";import"./isEqual-C7bvgrWO.js";import"./_baseIsEqual-BGW9PiVU.js";import"./withOsdkMetrics-D1uLGy1n.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
