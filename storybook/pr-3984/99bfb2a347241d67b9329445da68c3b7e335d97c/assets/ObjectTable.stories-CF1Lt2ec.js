import{j as i}from"./iframe-DOTdPJBy.js";import{O as p}from"./object-table-Cvktbl7a.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-COsVaEUr.js";import"./preload-helper-CORjxHe2.js";import"./Table-DRpmr99j.js";import"./index-7LsoLiQC.js";import"./Dialog-CV1LYgzP.js";import"./cross-m4Jtx501.js";import"./svgIconContainer-6XMQleNK.js";import"./useBaseUiId-CSa0UWdd.js";import"./InternalBackdrop-DNHBzMyX.js";import"./composite-DBLj_rqs.js";import"./index-DrAqVeQj.js";import"./index-DoVR9M-q.js";import"./index-DVc1s_km.js";import"./useEventCallback-DMJOBNH7.js";import"./SkeletonBar-C0cOwVEs.js";import"./LoadingCell-BOm33Zz_.js";import"./ColumnConfigDialog-CNXMHO4a.js";import"./DraggableList-GVkWro8x.js";import"./search-CQ447Er6.js";import"./Input-Bzm_LY5N.js";import"./useControlled-CEuBm35N.js";import"./Button-HfXhKbNv.js";import"./small-cross-ByN_OFW-.js";import"./ActionButton-Dl69JNtr.js";import"./Checkbox-CNBACtYZ.js";import"./useValueChanged-FqMJibv1.js";import"./CollapsiblePanel-BYNhB3x2.js";import"./MultiColumnSortDialog-D8qTQ-HE.js";import"./MenuTrigger-DjxBECOg.js";import"./CompositeItem-fENznLjR.js";import"./ToolbarRootContext-BMXrmtsD.js";import"./getDisabledMountTransitionStyles-BG-emIK6.js";import"./getPseudoElementBounds-Dx1WL7QY.js";import"./chevron-down-D9Jqe_yM.js";import"./index-YCEALnwo.js";import"./error-1dsahiX9.js";import"./BaseCbacBanner-C_qv5zih.js";import"./makeExternalStore-DXS9zRtb.js";import"./Tooltip-C72PQQIW.js";import"./PopoverPopup-DH-ybkjn.js";import"./debounce-CioZWleO.js";import"./useOsdkClient-C681iYsL.js";import"./tick-BFLKO0JY.js";import"./DropdownField-CCEf2ECL.js";import"./isEqual-C5BEqgHK.js";import"./withOsdkMetrics-w09EOhg9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
