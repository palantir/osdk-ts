import{j as i}from"./iframe-BRIJTziU.js";import{O as p}from"./object-table-BnpwgFJ4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DiJmx3Yp.js";import"./preload-helper-C7wNDItT.js";import"./Table-BMKrg_bY.js";import"./index-A6JnTqM7.js";import"./Dialog-CB9ow6MV.js";import"./cross-DvI1_HyP.js";import"./svgIconContainer-CIdhA9rp.js";import"./useBaseUiId-BsprSJc0.js";import"./InternalBackdrop-ZzoKlD0h.js";import"./composite-C9avNQ9h.js";import"./index-D9UptnGB.js";import"./index-B8iBQzP0.js";import"./index-CvbNR6cC.js";import"./useEventCallback-DeOB15hi.js";import"./SkeletonBar-BP_l8aax.js";import"./LoadingCell-CZnPc23n.js";import"./ColumnConfigDialog-Be3M2Fo7.js";import"./DraggableList-BuQkq18_.js";import"./search-BB6i5fl7.js";import"./Input-Boj06qte.js";import"./useControlled-C4JFDSuR.js";import"./Button-Dh4qqTQa.js";import"./small-cross-CsMKepR3.js";import"./ActionButton-BicTWFSp.js";import"./Checkbox-BNKjZK3u.js";import"./useValueChanged-CtSiK7PN.js";import"./CollapsiblePanel-D_KuOsno.js";import"./MultiColumnSortDialog-DueHaRDC.js";import"./MenuTrigger-Cbm7cQAI.js";import"./CompositeItem-CJpL3T-F.js";import"./ToolbarRootContext-BQGWwMmx.js";import"./getDisabledMountTransitionStyles-D5TfhzFv.js";import"./getPseudoElementBounds-DSda8EI-.js";import"./chevron-down-DQOobcC7.js";import"./index-D3hbdvY7.js";import"./error-D4dPzE3W.js";import"./BaseCbacBanner-DxgoC11R.js";import"./makeExternalStore-TKjWQKGl.js";import"./Tooltip-CVqCP8mT.js";import"./PopoverPopup-DDFXARkA.js";import"./debounce-C4CbbiU1.js";import"./useOsdkClient-Cymu9CBz.js";import"./tick-B-d2xjTM.js";import"./DropdownField-CzDLyAqa.js";import"./isEqual-Q3A5K1_W.js";import"./withOsdkMetrics-CS23iZYx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
