import{j as i}from"./iframe-DlM6B-FB.js";import{O as p}from"./object-table-CWtObA7w.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CsZSDsh4.js";import"./preload-helper-u2RLrIGI.js";import"./Table-Ct3IwB6a.js";import"./index-CYQRwdVV.js";import"./Dialog-BJ_2_ABV.js";import"./cross-BZZx8k18.js";import"./svgIconContainer-noCDTri9.js";import"./useBaseUiId-DRE93LYc.js";import"./InternalBackdrop-dxLX1x9n.js";import"./composite-CrTNbjQa.js";import"./index-B0PJMKha.js";import"./index-57kYohf7.js";import"./index-ci9DTaVf.js";import"./useEventCallback-DyRutwG_.js";import"./SkeletonBar-CAOnuNcl.js";import"./LoadingCell-DjcUh_dy.js";import"./ColumnConfigDialog-uNmeZN2x.js";import"./DraggableList-Dbc9mMK6.js";import"./search-BYOBZNp-.js";import"./Input-D_WeNPfg.js";import"./useControlled-CsLIsW3G.js";import"./isEqual-B4P0XCLO.js";import"./isObject-CEMnqBAF.js";import"./Button-A7YjjwPO.js";import"./ActionButton-DM2YiDdT.js";import"./Checkbox-yMFEsdFS.js";import"./useValueChanged-DoAX728p.js";import"./CollapsiblePanel-B4oiENW1.js";import"./MultiColumnSortDialog-DutiDnG3.js";import"./MenuTrigger-CqVn8n34.js";import"./CompositeItem-Btf0WYJg.js";import"./ToolbarRootContext-BiI_JxAm.js";import"./getDisabledMountTransitionStyles-DUy6Xf2g.js";import"./getPseudoElementBounds-CD3YwOAf.js";import"./chevron-down-CsEGKzIn.js";import"./index-BDbD87hK.js";import"./error-DqZBJOa8.js";import"./BaseCbacBanner-DGBNYoyp.js";import"./makeExternalStore-0nWRtaCT.js";import"./Tooltip-DHTNTZjs.js";import"./PopoverPopup-CoUIDpDw.js";import"./toNumber-CVKNIu72.js";import"./useOsdkClient-CiFACcQR.js";import"./tick-_fMD3p21.js";import"./DropdownField-CtlbtoUq.js";import"./withOsdkMetrics-CvYqftk7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
