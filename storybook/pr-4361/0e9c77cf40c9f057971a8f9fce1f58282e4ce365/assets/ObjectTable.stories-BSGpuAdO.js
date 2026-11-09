import{j as i}from"./iframe-Bz_J2W1Z.js";import{O as p}from"./object-table-Deb5sG0c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BbpNp6Kf.js";import"./preload-helper-ok-MzX3c.js";import"./Table-zqizdMF7.js";import"./index-FW_HsjU0.js";import"./Dialog-CAs4KzzH.js";import"./cross-DddIN5az.js";import"./svgIconContainer-CIyUQzFt.js";import"./useBaseUiId-BhmZfUtN.js";import"./InternalBackdrop-CF2prM0v.js";import"./composite-DlQjNEH4.js";import"./index-Vqi0hlz6.js";import"./index--E2gQV8-.js";import"./index-Bb43CzD2.js";import"./useEventCallback-DE3O12F-.js";import"./SkeletonBar-DPT4T968.js";import"./LoadingCell-D8jDqrcB.js";import"./ColumnConfigDialog-B_1Wp2XF.js";import"./DraggableList-B5aByQ2k.js";import"./search-LR9m9GUO.js";import"./Input-Bb2RIbvF.js";import"./useControlled-BuUO4LJj.js";import"./Button-DvYR9GFC.js";import"./small-cross-ZW30Jg6L.js";import"./ActionButton-ChwYro4H.js";import"./Checkbox-D3_MAEWy.js";import"./useValueChanged-DKxvjgDx.js";import"./CollapsiblePanel-BDI3hYad.js";import"./MultiColumnSortDialog-ZpntWuD0.js";import"./MenuTrigger-kPQxIawG.js";import"./CompositeItem-BJ3s4VzC.js";import"./ToolbarRootContext-D7Swefso.js";import"./getDisabledMountTransitionStyles-Bi_e2akv.js";import"./getPseudoElementBounds-DL548pPm.js";import"./chevron-down-Cd0pn5Sr.js";import"./index-DLug1g0P.js";import"./error-Cf_kxNf8.js";import"./BaseCbacBanner-BQ1zd7K_.js";import"./makeExternalStore-BAdkPAIU.js";import"./Tooltip-BHCbPk7Z.js";import"./isObject-MrG-9k2y.js";import"./debounce--inhDJEJ.js";import"./useOsdkClient-DzVQoRZo.js";import"./tick-CbkclHuX.js";import"./DropdownField-ZxzfXiCm.js";import"./isEqual-BNrGU-44.js";import"./_baseIsEqual-DNK0k7BI.js";import"./withOsdkMetrics-wwBOvirA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
