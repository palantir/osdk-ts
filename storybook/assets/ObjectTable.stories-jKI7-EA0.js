import{j as i}from"./iframe-vXKa1QMI.js";import{O as p}from"./object-table-CPdlEq2H.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9ydfjAaq.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B2KbARsV.js";import"./index-BZUwKl2C.js";import"./Dialog-B346A6Fx.js";import"./cross-N9iE7mDZ.js";import"./svgIconContainer-BwFoKu1X.js";import"./useBaseUiId-j7NI3ST-.js";import"./InternalBackdrop-D7qAu978.js";import"./composite-B99FTSHr.js";import"./index-vIJqV7GB.js";import"./index-SbXfcVQe.js";import"./index-BQMmSroJ.js";import"./useEventCallback-DyuJszkl.js";import"./SkeletonBar-pTVhnGW8.js";import"./LoadingCell-ByAsGI9P.js";import"./ColumnConfigDialog-CbwxOhPw.js";import"./DraggableList-qioLArWx.js";import"./search-edWvcvDt.js";import"./Input-uXEt6rMo.js";import"./useControlled-3uJBVoyi.js";import"./isEqual-B9cTqH66.js";import"./isObject-BleMCh-D.js";import"./Button-iKziWPYX.js";import"./ActionButton-Qa2tUe2e.js";import"./Checkbox-D_97xdms.js";import"./useValueChanged-qtpGI_mg.js";import"./CollapsiblePanel-DEMcYCAu.js";import"./MultiColumnSortDialog-BDO6z6hV.js";import"./MenuTrigger-D6MKRuV0.js";import"./CompositeItem-RdnTn3rE.js";import"./ToolbarRootContext-cmWIa-Ty.js";import"./getDisabledMountTransitionStyles-DPm-UrpM.js";import"./getPseudoElementBounds-BJVlWcSk.js";import"./chevron-down-TgAoBZZl.js";import"./index-1kAdlIvE.js";import"./error-BEG3c8CZ.js";import"./BaseCbacBanner-BstNjbYN.js";import"./makeExternalStore-zpEcE1We.js";import"./Tooltip-CKG0hfye.js";import"./PopoverPopup-DccWHN4d.js";import"./toNumber-Cjcz-DhM.js";import"./useOsdkClient-UVS_1uod.js";import"./tick-DoVdvvfE.js";import"./DropdownField-BRIwk3d1.js";import"./withOsdkMetrics-BUmKf9Cf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
