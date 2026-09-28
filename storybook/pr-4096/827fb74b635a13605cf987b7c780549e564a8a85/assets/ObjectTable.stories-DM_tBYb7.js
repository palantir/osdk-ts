import{j as i}from"./iframe-CiSnmsUY.js";import{O as p}from"./object-table-DI2vK7kf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dr0XfLO2.js";import"./preload-helper-DB05R4R8.js";import"./Table-D5XQxyos.js";import"./index-DtqJWAR1.js";import"./Dialog-B1l4PhW9.js";import"./cross-DqJ3usLj.js";import"./svgIconContainer-YAuGbdcX.js";import"./useBaseUiId-BgbryNLv.js";import"./InternalBackdrop-BP7YEs8y.js";import"./composite-C3rcy89N.js";import"./index-C3RlImgP.js";import"./index-MxmlqxL7.js";import"./index-BNNnVfG-.js";import"./useEventCallback-DqunfGDv.js";import"./SkeletonBar-DpUtUaVO.js";import"./LoadingCell-BmGY6OV1.js";import"./ColumnConfigDialog-B1LIhsIP.js";import"./DraggableList-DyQZfIr6.js";import"./search-BuUGV3qm.js";import"./Input-DIUphC8P.js";import"./useControlled-D6zDOA9R.js";import"./Button-zNL5TU8S.js";import"./small-cross-DoXZmpls.js";import"./ActionButton-CQ0ZQbLI.js";import"./Checkbox-DU95N0wx.js";import"./useValueChanged-hsux432g.js";import"./CollapsiblePanel-7EwtkYsj.js";import"./MultiColumnSortDialog-DRC-l6TU.js";import"./MenuTrigger-BqEoGnj9.js";import"./CompositeItem-CZisrTyk.js";import"./ToolbarRootContext-DiETc3Jn.js";import"./getDisabledMountTransitionStyles-KZsVWxev.js";import"./getPseudoElementBounds-CuJTK0LC.js";import"./chevron-down-NvsSukNZ.js";import"./index-Cyar7n9t.js";import"./error-D4igt9j_.js";import"./BaseCbacBanner-Cw3yM5Ky.js";import"./makeExternalStore-QQZ63Ao7.js";import"./Tooltip-Db4p9Oq_.js";import"./PopoverPopup-NTD0YB3Q.js";import"./debounce-BF_mGk1a.js";import"./useOsdkClient-CXCEo80y.js";import"./tick-BKrT4vVQ.js";import"./DropdownField-CjTR3tJv.js";import"./isEqual-Dj8Z5w_m.js";import"./withOsdkMetrics-B44dBrFm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
