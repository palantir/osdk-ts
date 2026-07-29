import{j as i}from"./iframe-EWNiSOlz.js";import{O as p}from"./object-table-Uipb07KI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ch8AC1lz.js";import"./preload-helper-DINoBAyp.js";import"./Table-QoAP4mmD.js";import"./index-J8uMkFcT.js";import"./Dialog-CipO93Rx.js";import"./cross-D8UDZUVl.js";import"./svgIconContainer-i8Q-3NvR.js";import"./useBaseUiId-CbA5EQtD.js";import"./InternalBackdrop-DRn4jQWF.js";import"./composite-PBGFU2UH.js";import"./index-9MkXRS7h.js";import"./index-D-TWmAa9.js";import"./index-CZ5IyMT1.js";import"./useEventCallback-CRVVwfhq.js";import"./SkeletonBar-BCrT0Owt.js";import"./LoadingCell-C0h5XXfB.js";import"./ColumnConfigDialog-C2TZXtEN.js";import"./DraggableList-Dh_a88iA.js";import"./search-Ct4Cy4Cw.js";import"./Input-BLbu68-y.js";import"./useControlled-D0-X3QeL.js";import"./isEqual-B3gSTOQa.js";import"./isObject-DeF9seGk.js";import"./Button-NJGcULYm.js";import"./ActionButton-bhd-S6xZ.js";import"./Checkbox-D33aXMhq.js";import"./useValueChanged-CnR3ZXJ1.js";import"./CollapsiblePanel-DAnd43Yl.js";import"./MultiColumnSortDialog-XUB96F1J.js";import"./MenuTrigger-ita0ycJf.js";import"./CompositeItem-BxLQcrHq.js";import"./ToolbarRootContext-E7FpR2J5.js";import"./getDisabledMountTransitionStyles-qQlhRRpu.js";import"./getPseudoElementBounds-Bzj5pAC2.js";import"./chevron-down-B_x7olCL.js";import"./index-K2vh5oUT.js";import"./error-Bm5OuOKZ.js";import"./BaseCbacBanner-BRxxkIA1.js";import"./makeExternalStore-C-uT0tmI.js";import"./Tooltip-D8N1BZrp.js";import"./PopoverPopup-CUaaYVQa.js";import"./toNumber-CWbAo7JW.js";import"./useOsdkClient-DCWWGmw4.js";import"./tick-C3V4rDEB.js";import"./DropdownField-8TAGjNxo.js";import"./withOsdkMetrics-CgmzOPIb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
