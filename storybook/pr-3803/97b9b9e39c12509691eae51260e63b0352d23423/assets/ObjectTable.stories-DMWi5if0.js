import{j as i}from"./iframe-OyuMXdrr.js";import{O as p}from"./object-table-WbmxHzOJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BopBMl2i.js";import"./preload-helper-_x9aAxJx.js";import"./Table-C2HfxcFz.js";import"./index-CME39S5e.js";import"./Dialog-C_4ccFQm.js";import"./cross-CaP_ypC8.js";import"./svgIconContainer-91GtXVWB.js";import"./useBaseUiId-CxWaSe1x.js";import"./InternalBackdrop-C0GxCzv2.js";import"./composite-CkaTKBTw.js";import"./index-PckWXlEL.js";import"./index-CzWqRMoQ.js";import"./index-3rZ9IWOh.js";import"./useEventCallback-CNSBH2bg.js";import"./SkeletonBar-Bpa29lfc.js";import"./LoadingCell-CE0uX5x-.js";import"./ColumnConfigDialog-DhvijquX.js";import"./DraggableList-oY_qzXXn.js";import"./search-D5f-ghxr.js";import"./Input-imDy7DTE.js";import"./useControlled-4AMSQyom.js";import"./isEqual-BdYTuTxb.js";import"./isObject-D6IZDeSm.js";import"./Button-BO7yKCcC.js";import"./ActionButton-D8khtr3e.js";import"./Checkbox-a2OVP_Gh.js";import"./useValueChanged-Cr5aH0fh.js";import"./CollapsiblePanel-DTf0Tm-0.js";import"./MultiColumnSortDialog-Bx7E33Rl.js";import"./MenuTrigger-CppLD_4q.js";import"./CompositeItem-B-4Vgrgy.js";import"./ToolbarRootContext-XKHI_qO5.js";import"./getDisabledMountTransitionStyles--PrC0Gh8.js";import"./getPseudoElementBounds-CMhbjwPm.js";import"./chevron-down-BF1gUlxP.js";import"./index-DQgKy5OY.js";import"./error-D1Yo1J9l.js";import"./BaseCbacBanner-C_Gima15.js";import"./makeExternalStore-DBUQL4bm.js";import"./Tooltip-AfOE4C-S.js";import"./PopoverPopup-DNemk0rN.js";import"./toNumber-DB6O7AtD.js";import"./useOsdkClient-q8bkUL6Q.js";import"./tick-Cr-cM9yt.js";import"./DropdownField-gotRGKM7.js";import"./withOsdkMetrics-DiqAT51F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
