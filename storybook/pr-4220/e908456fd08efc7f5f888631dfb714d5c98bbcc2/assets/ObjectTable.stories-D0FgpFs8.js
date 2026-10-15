import{j as i}from"./iframe-MDo3IV8i.js";import{O as p}from"./object-table-BHDCh1lU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9-bAEOM.js";import"./preload-helper-DePZz3Cx.js";import"./Table-CcLxBPN5.js";import"./index-Bd9muxHi.js";import"./Dialog-D091J6Iw.js";import"./cross-DnJsfvPF.js";import"./svgIconContainer-Di1UT1Hh.js";import"./useBaseUiId-DZYLQUMX.js";import"./InternalBackdrop-B_Z49Hjp.js";import"./composite-BLxakyPe.js";import"./index-C0Z9YQ4r.js";import"./index-DtzdNaWl.js";import"./index-DC6-gGNF.js";import"./useEventCallback-BiWUFDKH.js";import"./SkeletonBar-DAJEovb9.js";import"./LoadingCell-Bp3cenes.js";import"./ColumnConfigDialog-BufpKbPA.js";import"./DraggableList-7tcDxeGj.js";import"./search-DZiAT2nK.js";import"./Input-DM_kQkOg.js";import"./useControlled-OtMCa810.js";import"./Button-Bqg_-6Me.js";import"./small-cross-C2UBLUxY.js";import"./ActionButton-BfC02Ahv.js";import"./Checkbox-DSzw2ZOb.js";import"./useValueChanged-C_9hR8MX.js";import"./CollapsiblePanel-DuDuGP7y.js";import"./MultiColumnSortDialog-RUGd38DP.js";import"./MenuTrigger-BF7OivmV.js";import"./CompositeItem-DLH43jaW.js";import"./ToolbarRootContext-gbgv7X5-.js";import"./getDisabledMountTransitionStyles-B5B6Fr9m.js";import"./getPseudoElementBounds-CLPZWJOu.js";import"./chevron-down-WrjnBnPA.js";import"./index-B_iT01JM.js";import"./error-x3VOvdeC.js";import"./BaseCbacBanner-BycYWD4l.js";import"./makeExternalStore-0rzwJ2ZN.js";import"./Tooltip-BL4BcNe2.js";import"./PopoverPopup-vZaQfjxA.js";import"./debounce-C7UDLVsq.js";import"./useOsdkClient-BLznHT_k.js";import"./tick-BIWm1VGl.js";import"./DropdownField-CmBVvZuj.js";import"./isEqual-4V1lhL4v.js";import"./withOsdkMetrics-Bd9ZRtnK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
