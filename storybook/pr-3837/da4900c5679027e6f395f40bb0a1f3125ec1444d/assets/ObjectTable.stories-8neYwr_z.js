import{j as i}from"./iframe-waVwnd8z.js";import{O as p}from"./object-table-B37noZz5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B5dVjcMH.js";import"./preload-helper-_DI9v3Ms.js";import"./Table-CDSk3qZZ.js";import"./index-BtVM0B8b.js";import"./Dialog-DZKuwoTT.js";import"./cross--4_91Uz1.js";import"./svgIconContainer-DBjtKq0D.js";import"./useBaseUiId-ngJP8Egc.js";import"./InternalBackdrop-DOwTGEnQ.js";import"./composite-BKQDvwIx.js";import"./index-DlxZMsTY.js";import"./index-DTckBnCv.js";import"./index-DNMK3Dlm.js";import"./useEventCallback-C8zoK5yu.js";import"./SkeletonBar-AtcBFmYO.js";import"./LoadingCell-JchLfttt.js";import"./ColumnConfigDialog-DuT4g_JM.js";import"./DraggableList-FHTXDZWd.js";import"./search-gNfwsCxG.js";import"./Input-D9kz7Dq-.js";import"./useControlled-DTkfeOVI.js";import"./isEqual-ChETJcVC.js";import"./isObject-DuQN6dR2.js";import"./Button-D0ROykH0.js";import"./ActionButton-CjDV9J7b.js";import"./Checkbox-DoRZtO1O.js";import"./useValueChanged-BaU65kcb.js";import"./CollapsiblePanel-C2wk_l-C.js";import"./MultiColumnSortDialog-DaTetqcY.js";import"./MenuTrigger-CSIvfVEf.js";import"./CompositeItem-EoJb-xq2.js";import"./ToolbarRootContext-D1H6jriz.js";import"./getDisabledMountTransitionStyles-D34L6rsT.js";import"./getPseudoElementBounds-FnIT-7_p.js";import"./chevron-down-y5ucr_FJ.js";import"./index-BznGz8cd.js";import"./error-BD6fdJql.js";import"./BaseCbacBanner-D9Sq2YFk.js";import"./makeExternalStore-Bu7BQiVo.js";import"./Tooltip-CtxoOBmL.js";import"./PopoverPopup-B4gBojUt.js";import"./toNumber-DrXt2dy_.js";import"./useOsdkClient-XcxJ5BHl.js";import"./tick-CUiRHY_y.js";import"./DropdownField-DctZTxob.js";import"./withOsdkMetrics-Cy2NuPJb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
