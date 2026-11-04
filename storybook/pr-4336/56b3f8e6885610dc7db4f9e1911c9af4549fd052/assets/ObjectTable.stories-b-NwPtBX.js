import{j as i}from"./iframe-D0kdPAo3.js";import{O as p}from"./object-table-CneNSn49.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BixW1abF.js";import"./preload-helper-X5HFotRj.js";import"./Table-B0KQvr-x.js";import"./index-C2K0wsys.js";import"./Dialog-C_HKvFmk.js";import"./cross-Dp20Xkzu.js";import"./svgIconContainer-BmwAZIQM.js";import"./useBaseUiId-C6KTtyrN.js";import"./InternalBackdrop-DsRGKbT5.js";import"./composite-DFD2cJI4.js";import"./index-BeFxKd2J.js";import"./index-BZY0MS25.js";import"./index-BEujjIB4.js";import"./useEventCallback-wCYEJdyR.js";import"./SkeletonBar-Bny8Ap5P.js";import"./LoadingCell-ZQCHsDc5.js";import"./ColumnConfigDialog-Bmp89gH6.js";import"./DraggableList-BEr5f3hJ.js";import"./search-C3AmiWbF.js";import"./Input-CZD7bnty.js";import"./useControlled-DZabxLnK.js";import"./Button-DI6m0SX0.js";import"./small-cross-CZlKCJ9V.js";import"./ActionButton-B_wjtQIY.js";import"./Checkbox-SA0w8yHs.js";import"./useValueChanged-BSU3S3ph.js";import"./CollapsiblePanel-DLdNf4gN.js";import"./MultiColumnSortDialog-C_ETUXes.js";import"./MenuTrigger-CpfJKCPH.js";import"./CompositeItem-Sp5SCghr.js";import"./ToolbarRootContext-CsF2L-Zy.js";import"./getDisabledMountTransitionStyles-Bk9Rznwb.js";import"./getPseudoElementBounds-RJQJ-VSv.js";import"./chevron-down-PTlaQvf9.js";import"./index-4VxIXF47.js";import"./error-LXdit3w4.js";import"./BaseCbacBanner-v0K37KRd.js";import"./makeExternalStore-BHFwut4R.js";import"./Tooltip-udyINwMi.js";import"./PopoverPopup-g8Zg0gS_.js";import"./debounce-CAomu0Oz.js";import"./useOsdkClient-dHn_9ypV.js";import"./tick-RNPG6mE0.js";import"./DropdownField-BeyRtiaN.js";import"./isEqual-DCCU8xUM.js";import"./withOsdkMetrics-C30AWaoV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
