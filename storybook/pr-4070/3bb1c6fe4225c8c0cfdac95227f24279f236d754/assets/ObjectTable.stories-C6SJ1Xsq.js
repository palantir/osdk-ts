import{j as i}from"./iframe-NgqvngwL.js";import{O as p}from"./object-table-zSHAdfRU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_Kb4l48.js";import"./preload-helper-C7qDpPhw.js";import"./Table-C9WrHZ03.js";import"./index-qNBEcOe2.js";import"./Dialog-BZx82TGU.js";import"./cross-B13Y_yM6.js";import"./svgIconContainer-Dg9noX_E.js";import"./useBaseUiId-usyGi_EF.js";import"./InternalBackdrop-irI5Oo7V.js";import"./composite-D8ywKD-R.js";import"./index-PMXb-wuA.js";import"./index-DpzlvyBx.js";import"./index-DUSkmaua.js";import"./useEventCallback-DrH7Jh0v.js";import"./SkeletonBar-BEIw4nVm.js";import"./LoadingCell-T6PSs_OS.js";import"./ColumnConfigDialog-pT1NqsXO.js";import"./DraggableList-5foGUvEP.js";import"./search-Dwv2h1CQ.js";import"./Input-CVgaaiBC.js";import"./useControlled-eXO0aHwT.js";import"./Button-oU3-hekz.js";import"./small-cross-DVdjFEnO.js";import"./ActionButton-B466E0uY.js";import"./Checkbox-BylebwwO.js";import"./useValueChanged-DiEkonDj.js";import"./CollapsiblePanel-BGz8oV02.js";import"./MultiColumnSortDialog-CFcjieBc.js";import"./MenuTrigger-DReTHaj0.js";import"./CompositeItem-C3cyTcS-.js";import"./ToolbarRootContext-CPIM7tk6.js";import"./getDisabledMountTransitionStyles-Dx4TXj1A.js";import"./getPseudoElementBounds-D1HMYsHr.js";import"./chevron-down-Bn4ZfVbM.js";import"./index-DktHhzQs.js";import"./error-BXs3tL6Z.js";import"./BaseCbacBanner-DnEMMlwl.js";import"./makeExternalStore-BhuLMaNX.js";import"./Tooltip-C4PI_X-z.js";import"./PopoverPopup-U9kUO_es.js";import"./debounce-CuGvF61s.js";import"./useOsdkClient-CbLO7ws_.js";import"./tick-BX_Ynmx5.js";import"./DropdownField-fe_Mf-M6.js";import"./isEqual-CoLabZFb.js";import"./withOsdkMetrics-pTfsj7aC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
