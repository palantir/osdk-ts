import{j as i}from"./iframe-Cm8T158U.js";import{O as p}from"./object-table-Cb3Keis5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dt8OYrSP.js";import"./preload-helper-Dg6khx2b.js";import"./Table-DuOLMAs1.js";import"./index-CgyhAk5D.js";import"./Dialog-xyprgOLS.js";import"./cross-DRMZ0Z7-.js";import"./svgIconContainer-CwvpItZa.js";import"./useBaseUiId-DOlC9YEi.js";import"./InternalBackdrop-BGasJMVv.js";import"./composite-BF9l_TFl.js";import"./index-B-f--Lzy.js";import"./index-DBvuzU0Y.js";import"./index-B9yl0hZC.js";import"./useEventCallback-Dlv37ysr.js";import"./SkeletonBar-BQgWCrnN.js";import"./LoadingCell-Ch4zihh6.js";import"./ColumnConfigDialog-DMzj1S3_.js";import"./DraggableList-BxTxZMPB.js";import"./search-C5kq4KUb.js";import"./Input-CwlN5ff_.js";import"./useControlled-2KbdkYL7.js";import"./Button-CDJirsdr.js";import"./small-cross-CuC0UbdT.js";import"./ActionButton-CRZRMee5.js";import"./Checkbox-CKEyXbhH.js";import"./useValueChanged-DPtvyx-N.js";import"./CollapsiblePanel-CQcWGRlg.js";import"./MultiColumnSortDialog-_qM0Xd-W.js";import"./MenuTrigger-DMBZfMn5.js";import"./CompositeItem-DdfovVZg.js";import"./ToolbarRootContext-81tt_rrb.js";import"./getDisabledMountTransitionStyles-FM8gFJSe.js";import"./getPseudoElementBounds-Dy-hiku1.js";import"./chevron-down-CcWrtqn6.js";import"./index-D9OySAXe.js";import"./error-W0yg1EoP.js";import"./BaseCbacBanner-tcWoxYJS.js";import"./makeExternalStore-Bwp5qgF6.js";import"./Tooltip-f6_C30K5.js";import"./PopoverPopup-CIDF2QJi.js";import"./debounce-DlkYXKLI.js";import"./useOsdkClient-D7ijOYA2.js";import"./tick-qL-0oQVk.js";import"./DropdownField-Dl8m0YJt.js";import"./isEqual-D4LaE-Zu.js";import"./withOsdkMetrics-By5xofqX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
