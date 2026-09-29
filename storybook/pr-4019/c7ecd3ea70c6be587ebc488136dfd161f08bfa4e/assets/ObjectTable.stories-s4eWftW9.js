import{j as i}from"./iframe-1Dw8hxFb.js";import{O as p}from"./object-table-BQSrfIgk.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cm9CZicX.js";import"./preload-helper-CV62D7uV.js";import"./Table-cECXhRXy.js";import"./index-BA__U3Gv.js";import"./Dialog-B_I-e6H5.js";import"./cross-D8760vWj.js";import"./svgIconContainer-D7jaIK1U.js";import"./useBaseUiId-D9Uc1gUI.js";import"./InternalBackdrop-DfOcQBOz.js";import"./composite-DMMpwO4Y.js";import"./index-Bk6hiZ0z.js";import"./index-FZsLUXa_.js";import"./index-CZwrVmPB.js";import"./useEventCallback-Ba_Pm_qQ.js";import"./SkeletonBar-JCt3RZbD.js";import"./LoadingCell-Ch8y5zgH.js";import"./ColumnConfigDialog-BCWRXHCN.js";import"./DraggableList-CqD_Wsql.js";import"./search-D_WMSsbB.js";import"./Input-DAIYzExG.js";import"./useControlled-BPQdQUzw.js";import"./Button-Dz_i3O8s.js";import"./small-cross-BTH7BlRY.js";import"./ActionButton-JzwOBgff.js";import"./Checkbox-DIYjSDeg.js";import"./useValueChanged-CY-MG59r.js";import"./CollapsiblePanel-BdgCVUfb.js";import"./MultiColumnSortDialog-DC_lUuFq.js";import"./MenuTrigger-CSrRdHFi.js";import"./CompositeItem-wJjKayF5.js";import"./ToolbarRootContext-DY2ntbcg.js";import"./getDisabledMountTransitionStyles-LDeu4Eg7.js";import"./getPseudoElementBounds-BR8haHch.js";import"./chevron-down-CctmHm9l.js";import"./index-C6j9YUgP.js";import"./error-CQRvTwte.js";import"./BaseCbacBanner-D1C4qKBB.js";import"./makeExternalStore-BxvWPf6c.js";import"./Tooltip-Cuzk6KX0.js";import"./PopoverPopup-UQJaLJOh.js";import"./debounce-aPhAAe4A.js";import"./useOsdkClient-B0vBm4Kq.js";import"./tick-DkycAfLr.js";import"./DropdownField-BQ7eO3O0.js";import"./isEqual-Cpx1W7t4.js";import"./withOsdkMetrics-DttttaWM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
