import{j as i}from"./iframe-Dz-3bopY.js";import{O as p}from"./object-table-D8yR489M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tX5ZcVQD.js";import"./preload-helper-DyKBZj2x.js";import"./Table-CahUibj9.js";import"./index-DXk5AkRu.js";import"./Dialog-FsvgbUkz.js";import"./cross-BV1ilYHG.js";import"./svgIconContainer-VUnqKTqj.js";import"./useBaseUiId-DdDMVRT4.js";import"./InternalBackdrop-CMlwDkvu.js";import"./composite-CeOULy3_.js";import"./index-Cd6ys6N0.js";import"./index-CESOHnLX.js";import"./index-uA0pARUc.js";import"./useEventCallback-D89So7L3.js";import"./SkeletonBar-3PFmjfxg.js";import"./LoadingCell-BEG0NZPw.js";import"./ColumnConfigDialog-WoGX3hDh.js";import"./DraggableList-9Fc1iUbs.js";import"./search-C0Oo-5ck.js";import"./Input-BShSfu0I.js";import"./useControlled-BicNl6JT.js";import"./Button-CYhmyUyk.js";import"./small-cross-DvfWpNC5.js";import"./ActionButton-BK1pZ0GM.js";import"./Checkbox-CBxFYnqJ.js";import"./useValueChanged-3FeBMYAh.js";import"./CollapsiblePanel-xME6KYQT.js";import"./MultiColumnSortDialog-Bne2UKW9.js";import"./MenuTrigger-rIcJUvoe.js";import"./CompositeItem-DkOqAvvV.js";import"./ToolbarRootContext-Bdn-bZ42.js";import"./getDisabledMountTransitionStyles-DMtKFpJM.js";import"./getPseudoElementBounds-D-oSHvkB.js";import"./chevron-down-CtwdWDe5.js";import"./index-DDGzWdyM.js";import"./error-DDZrlFGO.js";import"./BaseCbacBanner-DD0s4oL-.js";import"./makeExternalStore-BqALFL7i.js";import"./Tooltip-Bx-YTezY.js";import"./PopoverPopup-B8lHwqHR.js";import"./debounce-D45X2sYK.js";import"./useOsdkClient-m_Y5l7qU.js";import"./tick-hX-gVzsC.js";import"./DropdownField-DM80qxvU.js";import"./isEqual-DiU5KFAT.js";import"./withOsdkMetrics-CGeg0cBL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
