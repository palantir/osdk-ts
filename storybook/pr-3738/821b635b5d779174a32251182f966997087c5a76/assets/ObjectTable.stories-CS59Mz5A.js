import{j as i}from"./iframe-CL4UessJ.js";import{O as p}from"./object-table-CJwFPYLh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-7C1WVB.js";import"./preload-helper-X9tQ-Ro6.js";import"./Table-DO5t5QF4.js";import"./index-CuQscTLS.js";import"./Dialog-DVpuAAE2.js";import"./cross-BrJ6ooB2.js";import"./svgIconContainer-CMOMNq3G.js";import"./useBaseUiId-C0g9vfON.js";import"./InternalBackdrop-00goDF2v.js";import"./composite-C9gZWjPR.js";import"./index-CZ6Gtb-I.js";import"./index-D5nMUh2o.js";import"./index-kfQfKf2J.js";import"./useEventCallback-CA3T4Nsf.js";import"./SkeletonBar-DSJ7-8PM.js";import"./LoadingCell-BgKbszPV.js";import"./ColumnConfigDialog-nG9nW_3F.js";import"./DraggableList-C5JmjFNf.js";import"./search-CFrkmuc2.js";import"./Input-CbgCfohB.js";import"./useControlled-C4g4Ro2e.js";import"./isEqual-hG_4ZrXX.js";import"./isObject-B6GdqpCO.js";import"./Button-DCwXYkIS.js";import"./ActionButton-Bu1kVHNE.js";import"./Checkbox-BqP3g_e1.js";import"./useValueChanged-Ch0VU4Mt.js";import"./CollapsiblePanel-BuDLVEY8.js";import"./MultiColumnSortDialog-DyGiUi9Z.js";import"./MenuTrigger-D3QIkUB3.js";import"./CompositeItem-BJ8h2cBk.js";import"./ToolbarRootContext-YHEW-YfH.js";import"./getDisabledMountTransitionStyles-DzgvcXWi.js";import"./getPseudoElementBounds-BiPncuNY.js";import"./chevron-down-CzML4mqe.js";import"./index-Cy3rUIcf.js";import"./error-DLILtTPf.js";import"./BaseCbacBanner-Caz8BT1D.js";import"./makeExternalStore-Bhe8UyWJ.js";import"./Tooltip-DD4f5V0W.js";import"./PopoverPopup-DUxb0nTQ.js";import"./toNumber-DdBj21PM.js";import"./useOsdkClient-DwhWuET8.js";import"./tick-jILTcEB0.js";import"./DropdownField-C1hWyFZ3.js";import"./withOsdkMetrics-B0fTd-84.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
