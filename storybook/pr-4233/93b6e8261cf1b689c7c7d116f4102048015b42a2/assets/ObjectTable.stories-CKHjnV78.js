import{j as i}from"./iframe-C1SMXjUe.js";import{O as p}from"./object-table-CEXa-Hzx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CVu2aWC6.js";import"./preload-helper-O4cQ6S71.js";import"./Table-Cwzldwoc.js";import"./index-DN_SN9-G.js";import"./Dialog-9T95jsWw.js";import"./cross-D7uSPFjO.js";import"./svgIconContainer-BDoLcvXV.js";import"./useBaseUiId-BuIqgK5v.js";import"./InternalBackdrop-CwUkjFDV.js";import"./composite-sNamXEmM.js";import"./index-08DpGPSx.js";import"./index-19ONWP9f.js";import"./index-Be0DvM55.js";import"./useEventCallback-BG06jL1K.js";import"./SkeletonBar-DxEb7MhI.js";import"./LoadingCell-DG3HryQj.js";import"./ColumnConfigDialog-C7A4Uoas.js";import"./DraggableList-BzjNz4op.js";import"./search-DnJjsxnU.js";import"./Input-57O56G_v.js";import"./useControlled-BZtQiYd3.js";import"./Button-Bfn1HbBL.js";import"./small-cross-dpYlCU3i.js";import"./ActionButton-CmH_f-Jn.js";import"./Checkbox-DjdiHWL7.js";import"./useValueChanged-CTxxu7jt.js";import"./CollapsiblePanel-DItfM1Rh.js";import"./MultiColumnSortDialog-CN_3BKmH.js";import"./MenuTrigger-BKFf40Pj.js";import"./CompositeItem-BJrPEqdr.js";import"./ToolbarRootContext-BEFeXo6R.js";import"./getDisabledMountTransitionStyles-B57QkLv0.js";import"./getPseudoElementBounds-DSbpx7o5.js";import"./chevron-down-BPj-14kw.js";import"./index-HIFRtJiy.js";import"./error-Ck-1b3_a.js";import"./BaseCbacBanner-D8XRx25T.js";import"./makeExternalStore-wdj16MKs.js";import"./Tooltip-CqhWgQKj.js";import"./PopoverPopup-DWuA0PEL.js";import"./debounce-BU3TwIzE.js";import"./useOsdkClient-DQjFnF1a.js";import"./tick-C1BZKfVK.js";import"./DropdownField-DRlqW65z.js";import"./isEqual-BKKmn0ha.js";import"./withOsdkMetrics-CARHbXxz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
