import{j as i}from"./iframe-Dhbpz2gi.js";import{O as p}from"./object-table-Dpo2P-g6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CY1pWwG6.js";import"./preload-helper-pmClhyIA.js";import"./Table-J8K4yk_n.js";import"./index-DSV0RL80.js";import"./Dialog-BmWUCtql.js";import"./cross-CFyO1iLs.js";import"./svgIconContainer-D2dXNiPy.js";import"./useBaseUiId-CACE2Sja.js";import"./InternalBackdrop-CU5AdZzY.js";import"./composite-DOBXXfvc.js";import"./index-Ca39Bid0.js";import"./index-CnSMSR0R.js";import"./index-Dew5d4z1.js";import"./useEventCallback-CJaRWzg5.js";import"./SkeletonBar-ChcHrYnF.js";import"./LoadingCell-BoW2Y8wi.js";import"./ColumnConfigDialog-B2HY3zjN.js";import"./DraggableList-Be3kaJ6G.js";import"./search-u8YFrvlf.js";import"./Input-BnzP7kbL.js";import"./useControlled-VMxlV8-z.js";import"./Button-BBeJRgfu.js";import"./small-cross-B_L6MZIl.js";import"./ActionButton-ChCcvaQX.js";import"./Checkbox-DdSzOZ2q.js";import"./useValueChanged-BOsd1GIT.js";import"./CollapsiblePanel-nyUJPFc3.js";import"./MultiColumnSortDialog-BsSa66WB.js";import"./MenuTrigger-6Wgnx2Z6.js";import"./CompositeItem-lexcaFgm.js";import"./ToolbarRootContext-Bg810oqs.js";import"./getDisabledMountTransitionStyles-Bh-dMn6q.js";import"./getPseudoElementBounds-DAcEjJ_C.js";import"./chevron-down-CiaZa2yM.js";import"./index-DXREmQu7.js";import"./error-BXnEUtGZ.js";import"./BaseCbacBanner-Ij4tkuzU.js";import"./makeExternalStore-BBmrBF7y.js";import"./Tooltip-BEukUHQs.js";import"./PopoverPopup-Dd7ELU_i.js";import"./debounce-zud5xvpI.js";import"./useOsdkClient-SDPeNtQ5.js";import"./tick-CIrlrYqM.js";import"./DropdownField-Bykj9lDw.js";import"./isEqual-Cq-efSCm.js";import"./withOsdkMetrics-D8w7KGDl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
