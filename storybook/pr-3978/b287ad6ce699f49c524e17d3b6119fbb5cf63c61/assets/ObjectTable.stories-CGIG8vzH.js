import{j as i}from"./iframe-Ce1nas-A.js";import{O as p}from"./object-table-CH1gYmyr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DEo7DRqH.js";import"./preload-helper-DcZRzKsw.js";import"./Table-grwzvFI5.js";import"./index-DxkusUp0.js";import"./Dialog-2I39uksF.js";import"./cross-BfauTbl-.js";import"./svgIconContainer-C2K9KBka.js";import"./useBaseUiId-DjCVaNnh.js";import"./InternalBackdrop-B-W0bTB1.js";import"./composite-DmeYZGjI.js";import"./index-CuuyYF8k.js";import"./index-C9gjttHq.js";import"./index-DVNB7RLR.js";import"./useEventCallback-Cbw47kNr.js";import"./SkeletonBar-CGzZv0LQ.js";import"./LoadingCell-BIgUV0cO.js";import"./ColumnConfigDialog-Bv9qArUC.js";import"./DraggableList-C0E4dnDv.js";import"./search-CeMBlWp8.js";import"./Input-BkD6sM5Z.js";import"./useControlled-HDcnxMGz.js";import"./Button-Dug6UdNF.js";import"./small-cross-CUbbmEa4.js";import"./ActionButton-CJN2LFZu.js";import"./Checkbox-Dmh7aamG.js";import"./useValueChanged-CNmQlOiE.js";import"./CollapsiblePanel-BCEUBNV9.js";import"./MultiColumnSortDialog-9d5vdjh6.js";import"./MenuTrigger-Dtpo5bPS.js";import"./CompositeItem-Ci-C3Qdf.js";import"./ToolbarRootContext-DETOyxOk.js";import"./getDisabledMountTransitionStyles-DliKnPBx.js";import"./getPseudoElementBounds-cUIgxq13.js";import"./chevron-down-BWpGIUiv.js";import"./index-Cz6vrhk3.js";import"./error-C2DVXeGz.js";import"./BaseCbacBanner-CSYqnlL4.js";import"./makeExternalStore-pm8795BR.js";import"./Tooltip-D2u6OBrC.js";import"./PopoverPopup-D21lDN1V.js";import"./debounce-BJwq-W7n.js";import"./useOsdkClient-YT7s1JaQ.js";import"./tick-Bc-8vFey.js";import"./DropdownField-CNUDLDKP.js";import"./isEqual-CjXb8CsY.js";import"./withOsdkMetrics-Oy1nTjGv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
