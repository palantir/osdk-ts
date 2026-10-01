import{j as i}from"./iframe-t8tzCNQG.js";import{O as p}from"./object-table-F4Md9RQV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DJf3OJXR.js";import"./preload-helper-DgmnFE1F.js";import"./Table-5fTxY2Uw.js";import"./index-B2ZMYIpf.js";import"./Dialog-DwJBNRCE.js";import"./cross-BlbUaBXV.js";import"./svgIconContainer-BMtFokv3.js";import"./useBaseUiId-5tpyF_oD.js";import"./InternalBackdrop-DRHhQcWa.js";import"./composite-CtIsJulR.js";import"./index-D86oorM3.js";import"./index-BUDOFPoc.js";import"./index-CPjyfk9f.js";import"./useEventCallback-Du7sw565.js";import"./SkeletonBar-Ctmv_DKB.js";import"./LoadingCell-CQBVoYwx.js";import"./ColumnConfigDialog-C8NYwuqH.js";import"./DraggableList-BEbzCFki.js";import"./search-CeoT8iOL.js";import"./Input-hnDJE6Oy.js";import"./useControlled-C3Y23C1t.js";import"./Button-DJ3cf7JH.js";import"./small-cross-bmT9fHJd.js";import"./ActionButton-DYfkYb1s.js";import"./Checkbox-DLp5SnEW.js";import"./useValueChanged-iJtQDgJE.js";import"./CollapsiblePanel-CLzEHlgM.js";import"./MultiColumnSortDialog-CHFWNES-.js";import"./MenuTrigger-86GtgIEW.js";import"./CompositeItem-BgkQkbdd.js";import"./ToolbarRootContext-HtRVgU8t.js";import"./getDisabledMountTransitionStyles-d1tAtN98.js";import"./getPseudoElementBounds-D5yioJI0.js";import"./chevron-down-Dw7pUuxv.js";import"./index-BP5-XTdL.js";import"./error-ByvTRN4V.js";import"./BaseCbacBanner-DIfT9Iki.js";import"./makeExternalStore-tE7kFU6z.js";import"./Tooltip-QQ-ZZ6je.js";import"./PopoverPopup-BK-uWVpQ.js";import"./debounce-DlkfzBW4.js";import"./useOsdkClient-DVOxrQDN.js";import"./tick-Bh48FDPD.js";import"./DropdownField-Di9jrMNs.js";import"./isEqual-Dhgy7epr.js";import"./withOsdkMetrics-D05rZYt3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
