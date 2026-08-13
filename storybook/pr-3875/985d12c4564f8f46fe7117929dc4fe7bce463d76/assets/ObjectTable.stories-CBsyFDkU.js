import{j as i}from"./iframe-B8OEhgWY.js";import{O as p}from"./object-table-DQNXwE_L.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zYHfrg80.js";import"./preload-helper-ByWlNfie.js";import"./Table-BpSB7MVn.js";import"./index-DFDa3HCE.js";import"./Dialog-DtOGQTLE.js";import"./cross-B7JEOmUk.js";import"./svgIconContainer-RSMqo_RJ.js";import"./useBaseUiId--A2TBCqG.js";import"./InternalBackdrop-Bf8xAy0N.js";import"./composite-CW87OmHg.js";import"./index-IXwruU6G.js";import"./index-CjJR_vEs.js";import"./index-Cd5CYSKi.js";import"./useEventCallback-G4jkJ5fn.js";import"./SkeletonBar-DhZkXaM9.js";import"./LoadingCell-C2jj6t5V.js";import"./ColumnConfigDialog-BPBGuPXG.js";import"./DraggableList-CyLbuf3Q.js";import"./search-Bm_NlUyw.js";import"./Input-DDY-S42g.js";import"./useControlled-EzFF0Sep.js";import"./Button-D8jsB0ym.js";import"./small-cross-CbvoJ13v.js";import"./ActionButton-B-hjiAnp.js";import"./Checkbox-jR4ezztm.js";import"./useValueChanged-B1riSZpf.js";import"./CollapsiblePanel-D0eBNgMU.js";import"./MultiColumnSortDialog-DwaOpnUr.js";import"./MenuTrigger-DMH56Nqe.js";import"./CompositeItem-CpHqNhbJ.js";import"./ToolbarRootContext-BwylGkXM.js";import"./getDisabledMountTransitionStyles-xVNp9XId.js";import"./getPseudoElementBounds-Do3QOUWH.js";import"./chevron-down-CTrU3kVW.js";import"./index-BWmpo11p.js";import"./error-dwUY3hfK.js";import"./BaseCbacBanner-Ap0KLQwZ.js";import"./makeExternalStore-Ce0vXOLT.js";import"./Tooltip-b5P3MGoa.js";import"./PopoverPopup-Lf0f4QYv.js";import"./debounce-CuGp1sPk.js";import"./useOsdkClient-Dq6Ca_96.js";import"./tick-B-jte_gc.js";import"./DropdownField-DlUxmIdO.js";import"./isEqual-DfUQGoTX.js";import"./withOsdkMetrics-CWt0J4jT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
