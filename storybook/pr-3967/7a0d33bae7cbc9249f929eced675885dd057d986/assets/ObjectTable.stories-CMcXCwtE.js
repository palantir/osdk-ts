import{j as i}from"./iframe-DIsuQOn3.js";import{O as p}from"./object-table-Cd6Ezhoj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-NRqUldNH.js";import"./preload-helper-B4-DY1XA.js";import"./Table-DNWr-Ufu.js";import"./index-DDUWefxd.js";import"./Dialog-DXYkahwp.js";import"./cross-tvYPvXsb.js";import"./svgIconContainer-Dc19E04o.js";import"./useBaseUiId-KXmclwOQ.js";import"./InternalBackdrop-Z3WNzKgy.js";import"./composite-Cieee4Ac.js";import"./index-yKKDsrZW.js";import"./index-CHAIk4qd.js";import"./index-4qujKuhJ.js";import"./useEventCallback-BReMLTyY.js";import"./SkeletonBar-CCfy-2Fl.js";import"./LoadingCell-DXc0SvPJ.js";import"./ColumnConfigDialog-CqUIXDcK.js";import"./DraggableList-BHLN-Zz7.js";import"./search-BXyxqXsb.js";import"./Input-ChZNHuDE.js";import"./useControlled-CNU4MnWQ.js";import"./Button-SgvkStmW.js";import"./small-cross-CTvIFdJF.js";import"./ActionButton-CEEeCIPZ.js";import"./Checkbox-B2-VCIqp.js";import"./useValueChanged--eVggWgx.js";import"./CollapsiblePanel-D1ePGiZR.js";import"./MultiColumnSortDialog-B-lrD4XC.js";import"./MenuTrigger-BNmYz1FI.js";import"./CompositeItem-Dk6CpBJD.js";import"./ToolbarRootContext-DPQZSAuV.js";import"./getDisabledMountTransitionStyles-Bveqp3mS.js";import"./getPseudoElementBounds-DTH4TDRK.js";import"./chevron-down-C_9riItt.js";import"./index-DkWi2KH1.js";import"./error-DpfjWw-I.js";import"./BaseCbacBanner-muCdKLCl.js";import"./makeExternalStore-2cK-X4a7.js";import"./Tooltip-B5gVs8IO.js";import"./PopoverPopup-drv0vkbG.js";import"./debounce--qe2URPh.js";import"./useOsdkClient-B5UtOc8b.js";import"./tick-CM6bqr7p.js";import"./DropdownField-CPMOgCNE.js";import"./isEqual-6EwGBAda.js";import"./withOsdkMetrics-DC7VgxYE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
