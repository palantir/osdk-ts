import{j as i}from"./iframe-DjJ9fG9k.js";import{O as p}from"./object-table-Cfor9qHW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9XxFGRup.js";import"./preload-helper-CzF3ego9.js";import"./Table-C2Q21WHf.js";import"./index-BUkKlB3h.js";import"./Dialog-BwG9Uxhw.js";import"./cross-BLMtHmrz.js";import"./svgIconContainer-DVza0T8P.js";import"./useBaseUiId-Ci5r9TJ6.js";import"./InternalBackdrop-B6FMbuzr.js";import"./composite-3IcR8GbN.js";import"./index-DP_nFxdX.js";import"./index-Dnw16Cjy.js";import"./index-DH_I6Sh1.js";import"./useEventCallback-DhQ6FHXC.js";import"./SkeletonBar-Dn-neHME.js";import"./LoadingCell-EcwUFimr.js";import"./ColumnConfigDialog-ByUebeXI.js";import"./DraggableList-DRdKmKVv.js";import"./search-DYgrI8Q7.js";import"./Input-DC7dCpbq.js";import"./useControlled-Bn3rrr6o.js";import"./Button-TYrwdaKn.js";import"./small-cross-DmY0DbuA.js";import"./ActionButton-BHRGOFx-.js";import"./Checkbox-B6_BGHzz.js";import"./useValueChanged-DtUwstRA.js";import"./CollapsiblePanel-DhIaKbXK.js";import"./MultiColumnSortDialog-BuIFBbzX.js";import"./MenuTrigger-D5A7Fsrp.js";import"./CompositeItem-D6E8WDBw.js";import"./ToolbarRootContext-ShM1dPIH.js";import"./getDisabledMountTransitionStyles-gtEh6_8E.js";import"./getPseudoElementBounds-DPprMDPL.js";import"./chevron-down-BX7mmNXU.js";import"./index-CKkTwCGI.js";import"./error-CPN3xdYh.js";import"./BaseCbacBanner-C4dugiGj.js";import"./makeExternalStore-2E9_090X.js";import"./Tooltip-DgIUvPfl.js";import"./PopoverPopup-DxS_7QJb.js";import"./debounce-DJBLSrpe.js";import"./useOsdkClient-UDTFk1UZ.js";import"./tick-BmDskloz.js";import"./DropdownField-BaCTFfCL.js";import"./isEqual-AixP6eIf.js";import"./withOsdkMetrics-DtrDT4Gg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
