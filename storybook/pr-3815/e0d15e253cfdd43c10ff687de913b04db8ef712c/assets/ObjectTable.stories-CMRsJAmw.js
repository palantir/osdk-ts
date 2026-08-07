import{j as i}from"./iframe-DUMMG66q.js";import{O as p}from"./object-table-y-ty5vb6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CWbN8OyP.js";import"./preload-helper-BFk0oZbE.js";import"./Table-DuC5XDhz.js";import"./index-Cs1y_uJV.js";import"./Dialog-BXqIRIEd.js";import"./cross-elCH4-ly.js";import"./svgIconContainer-4zJcw9JU.js";import"./useBaseUiId-5XWzXM4h.js";import"./InternalBackdrop-Cv0tbTTj.js";import"./composite-DIXGEIwe.js";import"./index-CWiUghgz.js";import"./index-P2xopAr5.js";import"./index-ClgWwO2h.js";import"./useEventCallback-DA-m43ZO.js";import"./SkeletonBar-C_PQdqyM.js";import"./LoadingCell-Ca4K5CJF.js";import"./ColumnConfigDialog-DC4TYUk-.js";import"./DraggableList-D7Zzslrv.js";import"./search-DFdLmLH_.js";import"./Input-BfayLVf4.js";import"./useControlled-Dai2soRW.js";import"./small-cross-D_FPHoDU.js";import"./Button--52y3PBE.js";import"./ActionButton-C0v0p_2K.js";import"./Checkbox-eTZtLuFA.js";import"./useValueChanged-DnY0PIHv.js";import"./CollapsiblePanel-BNzZ-MW5.js";import"./MultiColumnSortDialog-DZm-4-ET.js";import"./MenuTrigger-BrrECu0v.js";import"./CompositeItem-B_iG35wZ.js";import"./ToolbarRootContext-Ct53oQXX.js";import"./getDisabledMountTransitionStyles-SVn-J0rv.js";import"./getPseudoElementBounds-CJ0xpki3.js";import"./chevron-down-B8MX778T.js";import"./index-DwYNByYI.js";import"./error-FWwnFt00.js";import"./BaseCbacBanner-OMOUzt76.js";import"./makeExternalStore-BhIGJmu2.js";import"./Tooltip-CYOxlVMl.js";import"./PopoverPopup-D3jRIBKO.js";import"./Combobox-Bh_PWN3v.js";import"./useOsdkClient-Jw6g4ObF.js";import"./tick-CWsnKL-h.js";import"./DropdownField-sxfK_NXI.js";import"./withOsdkMetrics-CoOA1jkj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
