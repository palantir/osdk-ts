import{j as i}from"./iframe-mgqf8OZi.js";import{O as p}from"./object-table-SJgzEJz4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cXgSduKI.js";import"./preload-helper-C6SQT8UT.js";import"./Table-g7yaJ1L-.js";import"./index-GTfiZUIM.js";import"./Dialog-Dsam8t3K.js";import"./cross-B_dcVm8T.js";import"./svgIconContainer-BQB9e_Z9.js";import"./useBaseUiId-rjNzDssU.js";import"./InternalBackdrop-DVxp9s1p.js";import"./composite-BsXSlU2S.js";import"./index-CgMXMemF.js";import"./index-DsvT80A6.js";import"./index-DJS_p_MX.js";import"./useEventCallback-xpfDomYZ.js";import"./SkeletonBar-CpPJCyI4.js";import"./LoadingCell-Bxhy2pMB.js";import"./ColumnConfigDialog-cORxpJRm.js";import"./DraggableList-DgeGxPXD.js";import"./search-fgyV2px-.js";import"./Input-Cm9G-_vw.js";import"./useControlled-DnmOZ-e1.js";import"./Button-CvdgIKvp.js";import"./small-cross-BNDbkZTe.js";import"./ActionButton-D1kCGHo0.js";import"./Checkbox-COC_tl74.js";import"./useValueChanged-BEUlp8B0.js";import"./CollapsiblePanel-rkq5PuPE.js";import"./MultiColumnSortDialog-6X1v5wAF.js";import"./MenuTrigger-0TxP9vJm.js";import"./CompositeItem-B5XhVs9k.js";import"./ToolbarRootContext-DXjHGJkz.js";import"./getDisabledMountTransitionStyles-CzJH416S.js";import"./getPseudoElementBounds-B5c6Myvw.js";import"./chevron-down-CvP42XCE.js";import"./index-CWWnTRcQ.js";import"./error-5K0NVF3b.js";import"./BaseCbacBanner-BlF52LTx.js";import"./makeExternalStore-BoIB8VtI.js";import"./Tooltip-CD6Ogyv5.js";import"./PopoverPopup-IFfb3EAK.js";import"./debounce-Cs3_KK6g.js";import"./useOsdkClient-CIHn_x5t.js";import"./tick-12a-8qSb.js";import"./DropdownField-BDV4nY7z.js";import"./isEqual-C3RpNQ5t.js";import"./withOsdkMetrics-CrZy2PZ2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
