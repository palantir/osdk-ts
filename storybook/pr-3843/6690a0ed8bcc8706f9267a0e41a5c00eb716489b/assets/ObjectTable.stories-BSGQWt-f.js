import{j as i}from"./iframe-BrhV0PUK.js";import{O as p}from"./object-table-Z4cmqtj5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZs9BrwV.js";import"./preload-helper-DCSdbV6c.js";import"./Table-Bz5nJ9Ny.js";import"./index-CYSE8e1n.js";import"./Dialog-BZ4hSjWa.js";import"./cross-CsjK0wnB.js";import"./svgIconContainer-BaPcQU1s.js";import"./useBaseUiId-ar5Lsdrx.js";import"./InternalBackdrop-DO2ikwN0.js";import"./composite-Ds9WVBvD.js";import"./index-CF0KaaTI.js";import"./index-C_GiEd2c.js";import"./index-BYkfd9Z2.js";import"./useEventCallback-DS55l13S.js";import"./SkeletonBar-BWicLY9L.js";import"./LoadingCell-C3tlvEjv.js";import"./ColumnConfigDialog-Bg4tV_Z3.js";import"./DraggableList-TdP2A-Xp.js";import"./search-sMra4T2I.js";import"./Input-DMkARyQa.js";import"./useControlled-6A1CqUP6.js";import"./isEqual-BlP1cLoz.js";import"./isObject-CbbeAem9.js";import"./Button-D7_ffq5-.js";import"./ActionButton-U-WlZ3SG.js";import"./Checkbox-CMJOfmnq.js";import"./useValueChanged-Bnxfc6U1.js";import"./CollapsiblePanel-E470J13C.js";import"./MultiColumnSortDialog-DKnzOvLW.js";import"./MenuTrigger-WGUempeG.js";import"./CompositeItem-wFOdGMSc.js";import"./ToolbarRootContext-Db_LnSee.js";import"./getDisabledMountTransitionStyles-BlAu_peX.js";import"./getPseudoElementBounds-BZ7D0NBY.js";import"./chevron-down-Be_vCZl2.js";import"./index-BoJTlJdl.js";import"./error-ZZJFbw6u.js";import"./BaseCbacBanner-Bw9MfsJv.js";import"./makeExternalStore-DaqSmfhW.js";import"./Tooltip-6rvPTKBG.js";import"./PopoverPopup-Bzkl8xuj.js";import"./toNumber-DTQ1Vb4r.js";import"./useOsdkClient-BYy0RPqe.js";import"./tick-D16kJw8f.js";import"./DropdownField-DUfUJeW4.js";import"./withOsdkMetrics-dDB_t-WN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
