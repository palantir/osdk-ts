import{j as i}from"./iframe-DCDy9VYS.js";import{O as p}from"./object-table-DcIcsg-z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DpVyXhl8.js";import"./preload-helper-DYzeOhdi.js";import"./Table-BcMOzAOA.js";import"./index-As1ywJYE.js";import"./Dialog-C2cLJb9y.js";import"./cross-BJlA6QIm.js";import"./svgIconContainer-D9qShJuw.js";import"./useBaseUiId-BwVm2U7U.js";import"./InternalBackdrop-ijCyx1er.js";import"./composite-c9aHe9jO.js";import"./index-CvF6o7Ro.js";import"./index-Dg2YILHW.js";import"./index-DqVXKAlF.js";import"./useEventCallback-BpL75y-I.js";import"./SkeletonBar-DroWMPlj.js";import"./LoadingCell-Bq-U8EXT.js";import"./ColumnConfigDialog-XyrM1zkL.js";import"./DraggableList-BQ460tmS.js";import"./search-Nu3soqfg.js";import"./Input-1IBLw1l4.js";import"./useControlled-Ck2v8yj-.js";import"./Button-CEFR6_SV.js";import"./small-cross-uadXp9F-.js";import"./ActionButton-DqA_w_SP.js";import"./Checkbox-B8VnA7oI.js";import"./useValueChanged-CPtG6vDl.js";import"./CollapsiblePanel-BzeOsHAl.js";import"./MultiColumnSortDialog-CwTztmsw.js";import"./MenuTrigger-C5KhP-2u.js";import"./CompositeItem-DLLGFuyo.js";import"./ToolbarRootContext-cMntifXn.js";import"./getDisabledMountTransitionStyles-BooTnCUs.js";import"./getPseudoElementBounds-Dbq8OiTZ.js";import"./chevron-down-hGs_IVeQ.js";import"./index-CMTxTXNi.js";import"./error-5cMYD3vI.js";import"./BaseCbacBanner-Bo2AUWFr.js";import"./makeExternalStore-BQWaZP2I.js";import"./Tooltip-C_BJoEQ_.js";import"./PopoverPopup-C3K-ljQu.js";import"./debounce-C0GenXTw.js";import"./useOsdkClient-DE_N4tYE.js";import"./tick-CxNHTulf.js";import"./DropdownField-CGJbjv2M.js";import"./isEqual-DHXL-66W.js";import"./withOsdkMetrics-D5GlFsUX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
