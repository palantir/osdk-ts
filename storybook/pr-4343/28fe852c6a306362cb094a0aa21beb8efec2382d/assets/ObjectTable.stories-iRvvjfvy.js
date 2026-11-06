import{j as i}from"./iframe-C_zjGY3J.js";import{O as p}from"./object-table-D_a_bNrF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8GNibIS.js";import"./preload-helper-CxQirRCn.js";import"./Table-BmZ3cbF4.js";import"./index-DKxF60He.js";import"./Dialog-BlUCTEGI.js";import"./cross-CQU2s8jh.js";import"./svgIconContainer-D5MQxCYm.js";import"./useBaseUiId-B_8kV6Oo.js";import"./InternalBackdrop-uWsHH71n.js";import"./composite-Cr4kgIEQ.js";import"./index-9SuB44sP.js";import"./index-DHjZHyf_.js";import"./index-DI66YYCT.js";import"./useEventCallback-BQXY3ym0.js";import"./SkeletonBar-Cy9nbF32.js";import"./LoadingCell-ClHyyMra.js";import"./ColumnConfigDialog-CphJnc9v.js";import"./DraggableList-C-oqobil.js";import"./search-BzCll0d5.js";import"./Input-DcJi9KF0.js";import"./useControlled-Cax61rbp.js";import"./Button-CKW0-13G.js";import"./small-cross-CGjWQ0oG.js";import"./ActionButton-C5vJNt5z.js";import"./Checkbox-DfWzx-fE.js";import"./useValueChanged-BYMJHvk0.js";import"./CollapsiblePanel-BDYGizlk.js";import"./MultiColumnSortDialog-B9lziHSh.js";import"./MenuTrigger-CqjyYUeG.js";import"./CompositeItem-LZfgl15E.js";import"./ToolbarRootContext-CDpaEjw6.js";import"./getDisabledMountTransitionStyles-XdJXtecO.js";import"./getPseudoElementBounds-BkxLwt0A.js";import"./chevron-down-DXGDx1Zu.js";import"./index-B0AlpjVO.js";import"./error-D5GOl81y.js";import"./BaseCbacBanner-D9ha1EV-.js";import"./makeExternalStore-UmBMWTEb.js";import"./Tooltip-DApHIikG.js";import"./PopoverPopup-BzhSaZz_.js";import"./debounce-h7EBhWzB.js";import"./useOsdkClient-Y2kyMsP0.js";import"./tick-CL77rkJb.js";import"./DropdownField-CyGzvNY6.js";import"./isEqual-iv7yWJ2R.js";import"./withOsdkMetrics-BNDJqEzp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
