import{j as i}from"./iframe-B3wk8kVZ.js";import{O as p}from"./object-table-BTFdMv_R.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C3tQsY8C.js";import"./preload-helper-C31FCm5E.js";import"./Table-DLJidSKw.js";import"./index-3CUWClbk.js";import"./Dialog-DdUlFbiJ.js";import"./cross-BaLLkSHI.js";import"./svgIconContainer-tw0lZiQJ.js";import"./useBaseUiId-CklL5-7z.js";import"./InternalBackdrop-OEAYc3yw.js";import"./composite-Bre4iFt0.js";import"./index-CqtqFd9-.js";import"./index-Bu1K1z8v.js";import"./index-D2HNqsii.js";import"./useEventCallback-DmhqaCs7.js";import"./SkeletonBar-Rs9tS4Ar.js";import"./LoadingCell-CNzF5f40.js";import"./ColumnConfigDialog-47yjjIPq.js";import"./DraggableList-wWiUupuT.js";import"./search-BTUcl0ov.js";import"./Input-D8tm8Vwt.js";import"./useControlled-OgnUzg5x.js";import"./isEqual-CV5bLzkB.js";import"./isObject-CZWpd-KU.js";import"./Button-DQgybiWB.js";import"./ActionButton-BSysTeFD.js";import"./Checkbox-Bsx1i8dD.js";import"./useValueChanged-BZHwRoTK.js";import"./CollapsiblePanel-C92ugajo.js";import"./MultiColumnSortDialog-NOzVqTFF.js";import"./MenuTrigger-DlGLch93.js";import"./CompositeItem-C_xzt7Yx.js";import"./ToolbarRootContext-ffWwb0UY.js";import"./getDisabledMountTransitionStyles-Ds6p21tr.js";import"./getPseudoElementBounds-DvUH2RC4.js";import"./chevron-down-CF60htEO.js";import"./index-Bh7yWO4s.js";import"./error-Ceiy10ri.js";import"./BaseCbacBanner-DjbpPRcX.js";import"./makeExternalStore-CEwzLxnH.js";import"./Tooltip-7ZGtEAnk.js";import"./PopoverPopup-C6pUvjpc.js";import"./toNumber-BOpB8xxZ.js";import"./useOsdkClient-Chdum4-f.js";import"./tick-CeKhhfgZ.js";import"./DropdownField-CWgzGjz8.js";import"./withOsdkMetrics-DQFY8goa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
