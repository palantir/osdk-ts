import{j as i}from"./iframe-B6oWV_cO.js";import{O as p}from"./object-table-CtI5yV6e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-0Hu5HlZs.js";import"./preload-helper-CvT5iRxj.js";import"./Table-H8JAnekO.js";import"./index-jWi9en1s.js";import"./Dialog-IjdgcDCq.js";import"./cross-CMQlEfgT.js";import"./svgIconContainer-CyQYn__Q.js";import"./useBaseUiId-Lqu0Q_Vu.js";import"./InternalBackdrop-aNkEhke3.js";import"./composite-Dp6W2S9Q.js";import"./index-CuLm7S4g.js";import"./index-BRc86hmI.js";import"./index-Cmd-ZYJY.js";import"./useEventCallback-68igZ2om.js";import"./SkeletonBar-C3bqiAvB.js";import"./LoadingCell-VRUwWdFr.js";import"./ColumnConfigDialog-C1nqKPCR.js";import"./DraggableList-kEK9wOKw.js";import"./search-elVCr7Zu.js";import"./Input-Czst-Pu5.js";import"./useControlled-BYVF8v0w.js";import"./Button-COxF9se3.js";import"./small-cross-BKVLOId_.js";import"./ActionButton-CQNeinOl.js";import"./Checkbox-CBoPesiE.js";import"./useValueChanged-Bs_2NC3q.js";import"./CollapsiblePanel-DURqSvpg.js";import"./MultiColumnSortDialog-wTn3d_9K.js";import"./MenuTrigger-D7Vb2yT_.js";import"./CompositeItem-Bt81vcwk.js";import"./ToolbarRootContext-BPjzZzdt.js";import"./getDisabledMountTransitionStyles-FhoKevdq.js";import"./getPseudoElementBounds-pDes9EyY.js";import"./chevron-down-DRI3eY5G.js";import"./index-DgJyY4kw.js";import"./error-BpLqO6z6.js";import"./BaseCbacBanner-4hzGHeqg.js";import"./makeExternalStore-DOLupiTS.js";import"./Tooltip-BJYJHQiG.js";import"./PopoverPopup-BPYLCmXN.js";import"./debounce-C2vXJMuX.js";import"./useOsdkClient-aPMJxZ2d.js";import"./tick-zJx6D1Yi.js";import"./DropdownField-SuxaAE8e.js";import"./isEqual-D36OJjKK.js";import"./withOsdkMetrics-U9jYKXmV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
