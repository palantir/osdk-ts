import{j as i}from"./iframe-BoqxVsev.js";import{O as p}from"./object-table-CyoB5dNz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DsCZgacg.js";import"./preload-helper-Aq8qnvWR.js";import"./Table-BokLmYX5.js";import"./index-hQXIiWom.js";import"./Dialog-C4tVVEXX.js";import"./cross-DvCT72yg.js";import"./svgIconContainer-CJ6zO_Yl.js";import"./useBaseUiId-yvSaUVvb.js";import"./InternalBackdrop-BNQvTeZL.js";import"./composite-BXQWKcxK.js";import"./index-DdyFNYe7.js";import"./index-BB1uKxMJ.js";import"./index-0PmjgZdw.js";import"./useEventCallback-_ANXD1nQ.js";import"./SkeletonBar-D0cKiQMm.js";import"./LoadingCell-C_8XhGmZ.js";import"./ColumnConfigDialog-BOMMTaXm.js";import"./DraggableList-D9_O0MtJ.js";import"./search-DFnmSjiz.js";import"./Input-DVgEeo3Y.js";import"./useControlled-ZG4JZg3B.js";import"./Button-D1EPyyjE.js";import"./small-cross-C8qCf42P.js";import"./ActionButton-DBEpcyJi.js";import"./Checkbox-DA73le-m.js";import"./useValueChanged-nzkPrcRN.js";import"./CollapsiblePanel-DSO7j4jK.js";import"./MultiColumnSortDialog-DSRugA-p.js";import"./MenuTrigger-BGLurAAz.js";import"./CompositeItem-BJ5PlAn8.js";import"./ToolbarRootContext-CoT6phAF.js";import"./getDisabledMountTransitionStyles-DVKQbCZp.js";import"./getPseudoElementBounds-ey_ll9I6.js";import"./chevron-down-BBGQdN8O.js";import"./index-DVhCuea2.js";import"./error-yoGLU_F1.js";import"./BaseCbacBanner-CTDZt5tg.js";import"./makeExternalStore-DUwv-hHr.js";import"./Tooltip-Sz9-sl-s.js";import"./PopoverPopup-BH7V2Ggx.js";import"./debounce-D-AvrQTr.js";import"./useOsdkClient-DUkaUEnF.js";import"./tick-8BKAFT85.js";import"./DropdownField-B_HGlYb7.js";import"./isEqual-DHwOBte8.js";import"./withOsdkMetrics-D2tjX_Ah.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
