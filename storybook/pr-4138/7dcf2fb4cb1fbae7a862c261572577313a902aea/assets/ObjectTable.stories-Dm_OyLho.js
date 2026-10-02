import{j as i}from"./iframe-E4YUsTVF.js";import{O as p}from"./object-table-DWM0-L5g.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--ARrpISY.js";import"./preload-helper-DS93hH50.js";import"./Table-5CsWYwnt.js";import"./index-33WajHAP.js";import"./Dialog-Cl3CkdMS.js";import"./cross-B0teiHtj.js";import"./svgIconContainer-BpDOXtMt.js";import"./useBaseUiId-Cmr5xOLR.js";import"./InternalBackdrop-6uJFTnu9.js";import"./composite-BPb4GIr2.js";import"./index-BD5alyvs.js";import"./index-C6lnPhSr.js";import"./index-BOSZpFJm.js";import"./useEventCallback-s63RPRIc.js";import"./SkeletonBar-COMgymc7.js";import"./LoadingCell-Bn9Rt80S.js";import"./ColumnConfigDialog-C1-Mg0Dr.js";import"./DraggableList-BBZ0k5a3.js";import"./search-C6TyODke.js";import"./Input-DzBskEWR.js";import"./useControlled-DcS_dYjp.js";import"./Button-D8Hq8qlo.js";import"./small-cross-DNql_UiE.js";import"./ActionButton-BNsdbYhX.js";import"./Checkbox-B1QYVWe8.js";import"./useValueChanged-_zlf4vQL.js";import"./CollapsiblePanel-CG_xY-4r.js";import"./MultiColumnSortDialog-DslMmcvG.js";import"./MenuTrigger-Bq0YGNRA.js";import"./CompositeItem-Dy6HQ5ii.js";import"./ToolbarRootContext-Z5Mk8e8P.js";import"./getDisabledMountTransitionStyles-nCIeRxS6.js";import"./getPseudoElementBounds-BB4Ow9wc.js";import"./chevron-down-BXAN807d.js";import"./index-C0oG0k9r.js";import"./error-C7OFda1X.js";import"./BaseCbacBanner-qUBT9zEy.js";import"./makeExternalStore-BPwvobNb.js";import"./Tooltip-FSxkyrOa.js";import"./PopoverPopup-Dp3SH3RM.js";import"./debounce-Dxqh-VtF.js";import"./useOsdkClient-COGErPcP.js";import"./tick-CpUkHDlc.js";import"./DropdownField-F9-Dgqve.js";import"./isEqual-DuvhWdoj.js";import"./withOsdkMetrics-BjBJAZAm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
