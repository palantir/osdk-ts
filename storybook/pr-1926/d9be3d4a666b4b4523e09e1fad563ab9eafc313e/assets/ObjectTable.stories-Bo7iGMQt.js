import{j as i}from"./iframe-CPzX1uSk.js";import{O as p}from"./object-table-BLYmji7X.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C8fg0DSW.js";import"./preload-helper-BV_2dDRe.js";import"./Table-DiecgVVT.js";import"./index-COJJFOT5.js";import"./Dialog-DpOd0WRd.js";import"./cross-CrQPe3Ah.js";import"./svgIconContainer-BUGQNNP_.js";import"./useBaseUiId-Dlz6RJMI.js";import"./InternalBackdrop-ICDvYA-3.js";import"./composite-BpWI7eGy.js";import"./index-bgG3RNaT.js";import"./index-Ce1oZCaV.js";import"./index-BFdAxWey.js";import"./useEventCallback-_Omzy9f1.js";import"./SkeletonBar-DscMDxVg.js";import"./LoadingCell-C_0EDqol.js";import"./ColumnConfigDialog-xTF2dYRe.js";import"./DraggableList-Bg8CiRyW.js";import"./search-DbyDvw8l.js";import"./Input-BcH8rlzt.js";import"./useControlled-C6jvEykx.js";import"./Button-Bp9aDI8N.js";import"./small-cross-7guhEJxW.js";import"./ActionButton-ZZbDa446.js";import"./Checkbox-DMURKGRH.js";import"./useValueChanged-BdmTJ_Td.js";import"./CollapsiblePanel-1OBlzHqi.js";import"./MultiColumnSortDialog-DGwUDAAJ.js";import"./MenuTrigger-BOhlA6os.js";import"./CompositeItem-BddFvRMc.js";import"./ToolbarRootContext-ddrpupWn.js";import"./getDisabledMountTransitionStyles-B_mC_X_B.js";import"./getPseudoElementBounds-Czhjand4.js";import"./chevron-down-C8Owk0H7.js";import"./index-Cz0_03bE.js";import"./error-DwSWgrLn.js";import"./BaseCbacBanner-1Sh0I2-t.js";import"./makeExternalStore-DLgjxXB4.js";import"./Tooltip-DbjgG31A.js";import"./PopoverPopup-DsbqH6LM.js";import"./debounce-DokDeayM.js";import"./useOsdkClient-C9BVIZ8E.js";import"./tick-DiJrDoSw.js";import"./DropdownField-CDKK8b_W.js";import"./isEqual-D0b9prfR.js";import"./withOsdkMetrics-XJdj0BYd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
