import{j as i}from"./iframe-B7GNjqYa.js";import{O as p}from"./object-table-BgWTv_dN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ds1LIs2q.js";import"./preload-helper-BAlwY9vI.js";import"./Table-BRmPVvi-.js";import"./index-BS_kYp2J.js";import"./Dialog-BzmIbEh6.js";import"./cross-BiueRdx7.js";import"./svgIconContainer-DoNcIMx3.js";import"./useBaseUiId-CFM8-ppd.js";import"./InternalBackdrop-bYiUgvs9.js";import"./composite-C3LspNj0.js";import"./index-fPGG7RjX.js";import"./index-BCluv78G.js";import"./index-DYS5ByOf.js";import"./useEventCallback-BpccMG2J.js";import"./SkeletonBar-hQaFCQal.js";import"./LoadingCell-DuTsM7kN.js";import"./ColumnConfigDialog-CH6XY5bo.js";import"./DraggableList-1vXWe-Jq.js";import"./search-BPhnv7M1.js";import"./Input-COrKdsAC.js";import"./useControlled-qLlPw49u.js";import"./Button-CuSrXijd.js";import"./small-cross-oDjSfOr6.js";import"./ActionButton-B5nt0qaz.js";import"./Checkbox-BG4Ywwfd.js";import"./useValueChanged-DzwuESFx.js";import"./CollapsiblePanel-B68_k9PR.js";import"./MultiColumnSortDialog-CMbfZFGV.js";import"./MenuTrigger-Cp8wIw32.js";import"./CompositeItem-Bd_Q9u8B.js";import"./ToolbarRootContext-m_MjqPd8.js";import"./getDisabledMountTransitionStyles-DONXlArz.js";import"./getPseudoElementBounds-BHnWaw3k.js";import"./chevron-down-DB4mVzp_.js";import"./index-DsFN0VWM.js";import"./error-zFyncHCE.js";import"./BaseCbacBanner-6hnJ0PhS.js";import"./makeExternalStore-BhSOqX6p.js";import"./Tooltip-CjWFJAs6.js";import"./PopoverPopup-Knmtng0E.js";import"./debounce-CoJau0dS.js";import"./useOsdkClient-B28z3bbk.js";import"./tick-Chptb_Eu.js";import"./DropdownField-GQBEnXYB.js";import"./isEqual-BfM7cD2s.js";import"./withOsdkMetrics-DYcwkBzp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
