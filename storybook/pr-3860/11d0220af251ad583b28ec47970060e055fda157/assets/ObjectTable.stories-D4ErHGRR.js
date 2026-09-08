import{j as i}from"./iframe-iH6aGZ-L.js";import{O as p}from"./object-table-a7ZsLNno.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CHB2Ikm9.js";import"./preload-helper-CJtpjaOC.js";import"./Table-OPJM8E9j.js";import"./index-B4R4MaYX.js";import"./Dialog-DKmYBsKh.js";import"./cross-CkFkh41g.js";import"./svgIconContainer-BL1fQZ1j.js";import"./useBaseUiId-BSDhHAYa.js";import"./InternalBackdrop-CtbdD6NE.js";import"./composite-DeLDawp0.js";import"./index-DyyqAmyq.js";import"./index-2xFQTGFl.js";import"./index-CLkrj7OE.js";import"./useEventCallback-BK2MNF3p.js";import"./SkeletonBar-DBSXSsw6.js";import"./LoadingCell-DWNG52ui.js";import"./ColumnConfigDialog-DVcO7s43.js";import"./DraggableList-qKzNY3pF.js";import"./search-2at2vqv1.js";import"./Input-D14Qdbql.js";import"./useControlled-Ciw2H6Dm.js";import"./Button-7Khz_S_G.js";import"./small-cross-BwgZyYIG.js";import"./ActionButton-CFvcoen5.js";import"./Checkbox-DPj4VBsw.js";import"./useValueChanged-CAss3vNn.js";import"./CollapsiblePanel-DU6yeCre.js";import"./MultiColumnSortDialog-DisDwWOC.js";import"./MenuTrigger-CZGwNbbc.js";import"./CompositeItem-DWpKdWiQ.js";import"./ToolbarRootContext-BUYtkzjr.js";import"./getDisabledMountTransitionStyles-BgzHU7dJ.js";import"./getPseudoElementBounds-CoVHCcVm.js";import"./chevron-down-Uo9hPIsv.js";import"./index-CoSy4Fag.js";import"./error-UygG0IL8.js";import"./BaseCbacBanner-y2xs3-H5.js";import"./makeExternalStore-DoAAt5DI.js";import"./Tooltip-y6ddxL_Q.js";import"./PopoverPopup-BjYwELlB.js";import"./debounce-DZlmqeaB.js";import"./useOsdkClient-B8seCst5.js";import"./tick-B6XK7voc.js";import"./DropdownField-Dx9t1Lmw.js";import"./isEqual-Q3Pmqr9o.js";import"./withOsdkMetrics-B5j3Cgvy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
