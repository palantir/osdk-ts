import{j as i}from"./iframe-DDJWwqBY.js";import{O as p}from"./object-table-CstPEMta.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCFTb8t9.js";import"./preload-helper-DOjHdaCa.js";import"./Table-D9glMgcM.js";import"./index-C1ZTpjxr.js";import"./Dialog-CFWw6Poa.js";import"./cross-B0JuOba7.js";import"./svgIconContainer-CFPdoyWo.js";import"./useBaseUiId-cxXVDzQK.js";import"./InternalBackdrop-C9Vpy4n2.js";import"./composite-CGLo9xHo.js";import"./index-DpGvPpxf.js";import"./index-NkIdY7dG.js";import"./index-D9JRRyZT.js";import"./useEventCallback-OeLjI0ls.js";import"./SkeletonBar-DOvjgVAK.js";import"./LoadingCell-BsV81X3O.js";import"./ColumnConfigDialog-doAkcj1i.js";import"./DraggableList-D71tE-YU.js";import"./search-d3_uaTlG.js";import"./Input-DxhVC9Qb.js";import"./useControlled-CWWChH0p.js";import"./Button-HOAjx8sN.js";import"./small-cross-DfHs2ftm.js";import"./ActionButton-Dt65wsJu.js";import"./Checkbox-D-TsrAgK.js";import"./useValueChanged-IbZDGfz8.js";import"./CollapsiblePanel-DQh2Sft9.js";import"./MultiColumnSortDialog-BbQkGEFb.js";import"./MenuTrigger-D8R4-oXl.js";import"./CompositeItem-BdeXH3Aq.js";import"./ToolbarRootContext-CwaM14ur.js";import"./getDisabledMountTransitionStyles-CzkaxE6g.js";import"./getPseudoElementBounds-CUXD3vIq.js";import"./chevron-down-CEmh4RKU.js";import"./index-CSTQbqzf.js";import"./error-DWlGgPFi.js";import"./BaseCbacBanner-C9REPQ56.js";import"./makeExternalStore-D6MI5hxD.js";import"./Tooltip-DaL85JuH.js";import"./PopoverPopup-9EDLzBq6.js";import"./debounce-B-ViHwUG.js";import"./useOsdkClient-BQG1YgSO.js";import"./tick-nUpkpaC6.js";import"./DropdownField-6XnrFdNT.js";import"./isEqual-BzZF3ZaT.js";import"./withOsdkMetrics-BCd9Mm8M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
