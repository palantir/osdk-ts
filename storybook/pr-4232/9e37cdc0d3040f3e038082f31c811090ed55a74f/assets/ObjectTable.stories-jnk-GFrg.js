import{j as i}from"./iframe-p2YICxUI.js";import{O as p}from"./object-table-DXwVoDL-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1AkfA3h.js";import"./preload-helper-C_d8LugS.js";import"./Table-DoflLJiY.js";import"./index-CsAVedHf.js";import"./Dialog-BpqAGMf3.js";import"./cross-DphGr94_.js";import"./svgIconContainer-ByMgsc6W.js";import"./useBaseUiId-CsBNKmu8.js";import"./InternalBackdrop-Bl4pAqkn.js";import"./composite-BPYrj6eG.js";import"./index-4ZagnSn6.js";import"./index-XAimxDaP.js";import"./index-BvbPlynd.js";import"./useEventCallback-DNjRXV4C.js";import"./SkeletonBar-Da2Aho7B.js";import"./LoadingCell-ChvYeOgu.js";import"./ColumnConfigDialog-Cd2T6Buy.js";import"./DraggableList-DYrbEckZ.js";import"./search-h5TogDUF.js";import"./Input-se4kwers.js";import"./useControlled-DfYpZvNd.js";import"./Button-ByiY3lLu.js";import"./small-cross-CsgJpP59.js";import"./ActionButton-BQ6YslU0.js";import"./Checkbox-DkAhCGWt.js";import"./useValueChanged-Oji2CKci.js";import"./CollapsiblePanel-J0gq_9ov.js";import"./MultiColumnSortDialog-CJeF3pL7.js";import"./MenuTrigger-CThGnNMB.js";import"./CompositeItem-BejJ0cXB.js";import"./ToolbarRootContext-DOpGxQlA.js";import"./getDisabledMountTransitionStyles-B3K2sZ2M.js";import"./getPseudoElementBounds-DoNDWMZt.js";import"./chevron-down-CvKzqnOZ.js";import"./index-BO7UbGKj.js";import"./error-LbvP5jG0.js";import"./BaseCbacBanner-CemxdjR3.js";import"./makeExternalStore-DCD_3Y1Y.js";import"./Tooltip-CaUh6MSb.js";import"./PopoverPopup-BLF-1tn1.js";import"./debounce-fGYFEdED.js";import"./useOsdkClient-i5Bf0XJq.js";import"./tick-Bp4sawQk.js";import"./DropdownField-BezvDOf1.js";import"./isEqual-B-KMF0Li.js";import"./withOsdkMetrics-DKcHZ6W6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
