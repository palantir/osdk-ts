import{j as i}from"./iframe-DFjxEBRl.js";import{O as p}from"./object-table-BoxAW6h4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-zXVqMa.js";import"./preload-helper-YLQ76DnX.js";import"./Table-BwRlL3aP.js";import"./index-RHDnv4KE.js";import"./Dialog-UrBzw_yg.js";import"./cross-CCUsZu-F.js";import"./svgIconContainer-BJy48zyG.js";import"./useBaseUiId-DHc-L81w.js";import"./InternalBackdrop-C6P7pfbM.js";import"./composite-CbdzgRs5.js";import"./index-Ct3A8526.js";import"./index-C1k9WrZP.js";import"./index-DpB4gLVj.js";import"./useEventCallback-Dsnixxz2.js";import"./SkeletonBar-CnK8k0Bo.js";import"./LoadingCell-aZlJy0Kx.js";import"./ColumnConfigDialog-DK3pRiTd.js";import"./DraggableList-ChJmTziU.js";import"./search-BBZ2n1GL.js";import"./Input-BTdzd0gA.js";import"./useControlled-CQ5aYrLf.js";import"./Button-Del4UdCp.js";import"./small-cross-DqyJwNHG.js";import"./ActionButton-DNxDDubl.js";import"./Checkbox-DyMDK_CU.js";import"./useValueChanged-gLgp5WvO.js";import"./CollapsiblePanel-ByT148KK.js";import"./MultiColumnSortDialog-B4STlqGL.js";import"./MenuTrigger-IEuFxfFB.js";import"./CompositeItem-CAkiPkQz.js";import"./ToolbarRootContext-B6U_uFKg.js";import"./getDisabledMountTransitionStyles-sjb--ufQ.js";import"./getPseudoElementBounds-MBQcfjsr.js";import"./chevron-down-Bha1TG_6.js";import"./index-B9cxXn2y.js";import"./error-WmDbCKs9.js";import"./BaseCbacBanner-wAyBlN0z.js";import"./makeExternalStore-DFJcPXqp.js";import"./Tooltip-DOMen-IA.js";import"./PopoverPopup-BZUXpB4m.js";import"./debounce-vz83BYcu.js";import"./useOsdkClient-DtVD0JhY.js";import"./tick-DJLdpaHq.js";import"./DropdownField-CStCtQro.js";import"./isEqual-C6OL2hQ9.js";import"./withOsdkMetrics-DIfFeIX-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
