import{j as i}from"./iframe-C-TWQ9Dj.js";import{O as p}from"./object-table-DHcCBiR1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BqmMVQ_0.js";import"./preload-helper-SRiQ6y29.js";import"./Table-CS33TpiL.js";import"./index-PmPY8NSw.js";import"./Dialog-CfxjvUNn.js";import"./cross-BVZ0tu48.js";import"./svgIconContainer-lMlNb8_m.js";import"./useBaseUiId-C7aOOgXJ.js";import"./InternalBackdrop-C7xc3x3s.js";import"./composite-D--SIj9q.js";import"./index--LBhfvhY.js";import"./index-Dii1cflf.js";import"./index-D6WX8M0U.js";import"./useEventCallback-WJc4Eyq9.js";import"./SkeletonBar-Dw_l2Y16.js";import"./LoadingCell-SYLzuCyf.js";import"./ColumnConfigDialog-3RjsD2ye.js";import"./DraggableList-FsNhbosm.js";import"./search-CPuRKLWN.js";import"./Input-C724ccD9.js";import"./useControlled-CySHXj1X.js";import"./Button-CBan_F_X.js";import"./small-cross-Djhljs2G.js";import"./ActionButton-LwJEJXUG.js";import"./Checkbox-CUQfcYoc.js";import"./useValueChanged-BgM1xj6e.js";import"./CollapsiblePanel-UW9yX8mw.js";import"./MultiColumnSortDialog-BmuAXou2.js";import"./MenuTrigger-DjOjw-Xw.js";import"./CompositeItem-Dko6wR9I.js";import"./ToolbarRootContext-C8QhLNp3.js";import"./getDisabledMountTransitionStyles-CEUeKr3J.js";import"./getPseudoElementBounds-qfUTeo2P.js";import"./chevron-down-gXZSSvnY.js";import"./index-CEKrq0xG.js";import"./error-C4q3M3Sg.js";import"./BaseCbacBanner-BFXtCQzL.js";import"./makeExternalStore-Lt703n6D.js";import"./Tooltip-BcTTfVEh.js";import"./PopoverPopup-BFE0pvVh.js";import"./debounce-CYsfIW2P.js";import"./useOsdkClient-WmdAhq3S.js";import"./tick-C4vQIE4T.js";import"./DropdownField-HMVghVOX.js";import"./isEqual-C34Y0m9V.js";import"./withOsdkMetrics-DIyUXY1U.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
