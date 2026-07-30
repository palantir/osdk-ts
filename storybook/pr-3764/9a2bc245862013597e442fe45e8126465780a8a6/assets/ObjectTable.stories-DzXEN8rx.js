import{j as i}from"./iframe-BKvHrTnY.js";import{O as p}from"./object-table-dfdTUyiR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DxjXGOBp.js";import"./preload-helper-CoRksuzd.js";import"./Table-B29hTlS5.js";import"./index-rUQDaSAn.js";import"./Dialog-DaOGCD4R.js";import"./cross-DA7ChnMu.js";import"./svgIconContainer-PUQwmYf6.js";import"./useBaseUiId-CGTe-Nun.js";import"./InternalBackdrop-BLVhnK9n.js";import"./composite-BbDh-O6T.js";import"./index-BpNIUQVs.js";import"./index-CLKVOUxl.js";import"./index-CsvxdTi2.js";import"./useEventCallback-CbBJop34.js";import"./SkeletonBar-DQP9L77w.js";import"./LoadingCell-DVEVD3_d.js";import"./ColumnConfigDialog-Ci6pu3Ub.js";import"./DraggableList-R5VUcA9e.js";import"./search-Dbb6-sbu.js";import"./Input-C4eLCz5A.js";import"./useControlled-DhbqroXM.js";import"./isEqual-CVAQsW_R.js";import"./isObject-C_dCxk37.js";import"./Button-DuFY6WZV.js";import"./ActionButton-82aC6zfA.js";import"./Checkbox-DbvC00Sj.js";import"./useValueChanged-D4XpUpxP.js";import"./CollapsiblePanel-CILetta1.js";import"./MultiColumnSortDialog-lF0MJJLu.js";import"./MenuTrigger-D49rl2_N.js";import"./CompositeItem-Duo2TAMh.js";import"./ToolbarRootContext-xvHuYAEc.js";import"./getDisabledMountTransitionStyles-DRF5LK-l.js";import"./getPseudoElementBounds-C1BxtwWY.js";import"./chevron-down-DabCumzI.js";import"./index-X0S4TuAp.js";import"./error-DTZ2scD_.js";import"./BaseCbacBanner-toUcHF7o.js";import"./makeExternalStore-Da6NdYn7.js";import"./Tooltip-yA1aXIF8.js";import"./PopoverPopup-CohrSeYM.js";import"./toNumber-Cpsxj1fj.js";import"./useOsdkClient-BChUCHjG.js";import"./tick-BPLLt8Qy.js";import"./DropdownField-BHO8l0-r.js";import"./withOsdkMetrics-4uldwMwY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
