import{j as i}from"./iframe-CoDqFtQr.js";import{O as p}from"./object-table-BmBGZThO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CGqe-qja.js";import"./preload-helper-BmQtlo2-.js";import"./Table-DWcHzG-V.js";import"./index-DEf63PKQ.js";import"./Dialog-Cs_17NaL.js";import"./cross-CnhoIzD9.js";import"./svgIconContainer-KqUQbUEW.js";import"./useBaseUiId-l4Ce-Oes.js";import"./InternalBackdrop-DZoeQnIs.js";import"./composite-CyFYModE.js";import"./index-ZhLzpxX-.js";import"./index-BYn91zFu.js";import"./index-eELGNG8N.js";import"./useEventCallback-B3OhgyVJ.js";import"./SkeletonBar-L8l21dAL.js";import"./LoadingCell-B8dq9CYH.js";import"./ColumnConfigDialog-Db0f33eN.js";import"./DraggableList-C3U59dkH.js";import"./search-Ds5uDEZ1.js";import"./Input-BZ6jwM42.js";import"./useControlled-DH19P8RP.js";import"./Button-CdKky6kN.js";import"./small-cross-DKu8qp5W.js";import"./ActionButton-CWGovcK-.js";import"./Checkbox-C-XCEvn7.js";import"./useValueChanged-PW6Wu233.js";import"./CollapsiblePanel-DWKoNggU.js";import"./MultiColumnSortDialog-l_NYF0ae.js";import"./MenuTrigger-1ra3ZOCO.js";import"./CompositeItem-yz-_V8KW.js";import"./ToolbarRootContext-DUeXrFD2.js";import"./getDisabledMountTransitionStyles-DDMf5lOQ.js";import"./getPseudoElementBounds-Bem6NL1M.js";import"./chevron-down-BoowdlwO.js";import"./index-BQtDLv6q.js";import"./error-pPyGOl1i.js";import"./BaseCbacBanner-DdkNBOcB.js";import"./makeExternalStore-CJioVlys.js";import"./Tooltip-Ck5G824C.js";import"./PopoverPopup-CwQX9C7x.js";import"./debounce-CxxL-CaD.js";import"./useOsdkClient-DPsK-Rb2.js";import"./tick-CexL6eUj.js";import"./DropdownField-CZjYNLnh.js";import"./isEqual-Ca1ADH9J.js";import"./withOsdkMetrics-DlX8mWus.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
