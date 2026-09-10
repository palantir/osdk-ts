import{j as i}from"./iframe-ByMeZtzX.js";import{O as p}from"./object-table-BWfDz0us.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B3z12Jii.js";import"./preload-helper-CKCWlQAf.js";import"./Table-CJnRggrL.js";import"./index-MjIH22RC.js";import"./Dialog-ZxxUTcFp.js";import"./cross-BL14zVVR.js";import"./svgIconContainer-BWYJe8Lc.js";import"./useBaseUiId-COE4qdfZ.js";import"./InternalBackdrop-Dunp36dg.js";import"./composite-BJmqHe58.js";import"./index-C5DhJsVj.js";import"./index-CGEFtaju.js";import"./index-BWU4Zziw.js";import"./useEventCallback-CvBku6w-.js";import"./SkeletonBar-DKliZ6jy.js";import"./LoadingCell-By3X5tWM.js";import"./ColumnConfigDialog-BkjViHOX.js";import"./DraggableList-ujhsv7NO.js";import"./search-Cq1vvGyL.js";import"./Input-Cu1JHp0_.js";import"./useControlled-DCuR4lHr.js";import"./Button-CfzUE4zU.js";import"./small-cross-C4a4JTK6.js";import"./ActionButton-DhKaPnov.js";import"./Checkbox-WAVkAh-5.js";import"./useValueChanged-D09un0L_.js";import"./CollapsiblePanel-CD29H3XJ.js";import"./MultiColumnSortDialog-BkGokrZQ.js";import"./MenuTrigger-DDD8T7fc.js";import"./CompositeItem-CEWc-TNz.js";import"./ToolbarRootContext-B0lEY-MF.js";import"./getDisabledMountTransitionStyles-SuR5eTaW.js";import"./getPseudoElementBounds-DVrDM1RK.js";import"./chevron-down-Chsl7nyR.js";import"./index-B41_CCIn.js";import"./error-yKJFbcKE.js";import"./BaseCbacBanner-D7vjhjJY.js";import"./makeExternalStore-DbH4cGZ0.js";import"./Tooltip-CP2jx6MZ.js";import"./PopoverPopup-CpgQFEX8.js";import"./debounce-BUN5jtxl.js";import"./useOsdkClient-ixFLeVu3.js";import"./tick-DcrvbN3Y.js";import"./DropdownField-8MU5Z2g6.js";import"./isEqual-DIZ47AXY.js";import"./withOsdkMetrics-CJVxpJaf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
