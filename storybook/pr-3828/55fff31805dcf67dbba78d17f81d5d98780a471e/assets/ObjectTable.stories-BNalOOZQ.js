import{j as i}from"./iframe-DSmQkahV.js";import{O as p}from"./object-table-CkzZi9kY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CUq_jQzR.js";import"./preload-helper-Dze2_dsn.js";import"./Table-CllN2RPz.js";import"./index-BnRpZ-OB.js";import"./Dialog-LzIkvIDp.js";import"./cross-DONTzq6t.js";import"./svgIconContainer-C1VMrcU6.js";import"./useBaseUiId-DZaeVOmY.js";import"./InternalBackdrop-7blCXPeG.js";import"./composite-C0wZ3IJL.js";import"./index-DWtoRZwW.js";import"./index-CVy6K8lz.js";import"./index-CdpWi9dP.js";import"./useEventCallback-DhwsT0sf.js";import"./SkeletonBar-CiX-SKu5.js";import"./LoadingCell-C7TzhMU-.js";import"./ColumnConfigDialog-CkVnTZ7y.js";import"./DraggableList-DQD27J_u.js";import"./search-Dk49NEuy.js";import"./Input-HL00VtIO.js";import"./useControlled-Bc_9AmK8.js";import"./isEqual-CbqZ3cK7.js";import"./isObject-DAQa4V8v.js";import"./Button-Hhcevu4O.js";import"./ActionButton-BAa10iJB.js";import"./Checkbox-CU6hs7sG.js";import"./useValueChanged-BqVC1nP1.js";import"./CollapsiblePanel-BCdIFmjR.js";import"./MultiColumnSortDialog-DcQpZbn7.js";import"./MenuTrigger-B63seZ9q.js";import"./CompositeItem-L3IbO9d7.js";import"./ToolbarRootContext-CEbwg7y3.js";import"./getDisabledMountTransitionStyles-b9fKYi-W.js";import"./getPseudoElementBounds-BxgBGFYQ.js";import"./chevron-down-CfDyW5wu.js";import"./index-DO2tVBOL.js";import"./error-gQAP2laG.js";import"./BaseCbacBanner-BlXdT2_3.js";import"./makeExternalStore-C1pJ6Rb4.js";import"./Tooltip-BPdgoRaU.js";import"./PopoverPopup-CMKW7n-B.js";import"./toNumber-Inwhvwzt.js";import"./useOsdkClient-0hTdvzJX.js";import"./tick-Bbuj3ECR.js";import"./DropdownField-Bw9pwEcz.js";import"./withOsdkMetrics-ChMVQwAE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
