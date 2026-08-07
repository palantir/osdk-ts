import{j as i}from"./iframe-CsnoPo4e.js";import{O as p}from"./object-table-Dldqrjjm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D04sTmpy.js";import"./preload-helper-UQcfqh8j.js";import"./Table-BTxYy1_w.js";import"./index-DZ3qlG1l.js";import"./Dialog-5YgEm-s6.js";import"./cross-BPR_-69Q.js";import"./svgIconContainer-CFRCp5eS.js";import"./useBaseUiId-Dk3ss80W.js";import"./InternalBackdrop-BY7A23Y2.js";import"./composite-BdrpEZOa.js";import"./index-BFy79Amf.js";import"./index-Bq5UoBBM.js";import"./index-BYQYU-5a.js";import"./useEventCallback-Cx9_0ZLB.js";import"./SkeletonBar-Dzn2oFUr.js";import"./LoadingCell-D7DEjcGg.js";import"./ColumnConfigDialog-BoXAbGCb.js";import"./DraggableList-eg49cQQG.js";import"./search-CZllTW2C.js";import"./Input-CSBvwDxa.js";import"./useControlled-CZuH-mvg.js";import"./isEqual-C_gmFGsA.js";import"./isObject-BWSgJwU1.js";import"./Button-DLN9VIMw.js";import"./ActionButton-BA8Yg624.js";import"./Checkbox-WULFa6we.js";import"./useValueChanged-DyrHwSjM.js";import"./CollapsiblePanel-h2tgmdHK.js";import"./MultiColumnSortDialog-CemaFyHy.js";import"./MenuTrigger-CvpENYNt.js";import"./CompositeItem-Bd6jvFk6.js";import"./ToolbarRootContext-DniWRCBD.js";import"./getDisabledMountTransitionStyles-DOU6cUq0.js";import"./getPseudoElementBounds-mePDcOZc.js";import"./chevron-down-2qd0pr4B.js";import"./index-JQtzoL2b.js";import"./error-GZDgkGyI.js";import"./BaseCbacBanner-CzbfLvv9.js";import"./makeExternalStore-3T-oM2Ef.js";import"./Tooltip-CN-YZsrK.js";import"./PopoverPopup-D2DNd5Pp.js";import"./toNumber-f0pSYljt.js";import"./useOsdkClient-u5ArgWr9.js";import"./tick-CXkXamOG.js";import"./DropdownField-DDmAlRJk.js";import"./withOsdkMetrics-D6nE0GJ0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
