import{j as i}from"./iframe-DzKgN3qu.js";import{O as p}from"./object-table-CtK_8iNA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BhvahzRH.js";import"./preload-helper-Bq44pRuA.js";import"./Table-Dq_QyDjJ.js";import"./index-BdOs7mw_.js";import"./Dialog-BhJBc9hc.js";import"./cross-qDkjCQ52.js";import"./svgIconContainer-XLXcJGX1.js";import"./useBaseUiId-Dv29B-pr.js";import"./InternalBackdrop-DTv9GrXy.js";import"./composite-CC7knVWa.js";import"./index-Gldmiip-.js";import"./index-C67GGcUR.js";import"./index-D_SumSez.js";import"./useEventCallback-99uro0ic.js";import"./SkeletonBar-Dfz2-rCc.js";import"./LoadingCell-DeR0iF42.js";import"./ColumnConfigDialog-DEMeT5_5.js";import"./DraggableList-jDIz54JI.js";import"./search-C4jktGRC.js";import"./Input-CzkZobpW.js";import"./useControlled-DrMtPDwW.js";import"./Button-M7h6gJdh.js";import"./small-cross-Bmj1XADt.js";import"./ActionButton-CBtqi0Iz.js";import"./Checkbox-CH2QnWUk.js";import"./useValueChanged-D1zVaC1g.js";import"./CollapsiblePanel-kVIjS7dE.js";import"./MultiColumnSortDialog-Ca2fIzUt.js";import"./MenuTrigger-CwWJZA0k.js";import"./CompositeItem-yqIim0nf.js";import"./ToolbarRootContext-CCsiwlz9.js";import"./getDisabledMountTransitionStyles-D5tdzTrF.js";import"./getPseudoElementBounds-C962SI_-.js";import"./chevron-down-vPjMV4aO.js";import"./index-DZ2KvGi_.js";import"./error-T16LD8HE.js";import"./BaseCbacBanner-zK1R8vcJ.js";import"./makeExternalStore-DmfOAvnN.js";import"./Tooltip-CA-Q7zym.js";import"./PopoverPopup-DvBaLRqn.js";import"./debounce-CygZGtiO.js";import"./useOsdkClient-DtuTQNsD.js";import"./tick-BFOPMsDc.js";import"./DropdownField-Dgeq7PS2.js";import"./isEqual-CVocfjt0.js";import"./withOsdkMetrics-CgGyBohZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
