import{j as i}from"./iframe-C1tZXogj.js";import{O as p}from"./object-table-ChvpnUD9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-j4PdAemp.js";import"./preload-helper-CPtBFz2Y.js";import"./Table-Dso_zjpC.js";import"./index-DxPI7-w_.js";import"./Dialog-AB3LDpOc.js";import"./cross-D5lRpI2u.js";import"./svgIconContainer-CIq0Uduk.js";import"./useBaseUiId-BME5ZjIK.js";import"./InternalBackdrop-DbtxnMvT.js";import"./composite-cuBDJi1p.js";import"./index-BYD_xDue.js";import"./index-iBT1_a_C.js";import"./index-CLOhAn7T.js";import"./useEventCallback-BZxywBdB.js";import"./SkeletonBar-BBB5XDDC.js";import"./LoadingCell-DXc1oTv7.js";import"./ColumnConfigDialog-LtfvneX9.js";import"./DraggableList-Bo7idBvp.js";import"./search-mQyGpkqY.js";import"./Input-BFJGoRS_.js";import"./useControlled-mPEThvmW.js";import"./Button-IJ98NdC3.js";import"./small-cross-cDNVRd_G.js";import"./ActionButton-DCQj1wHm.js";import"./Checkbox-BnGWGkz1.js";import"./useValueChanged-CQrg9p61.js";import"./CollapsiblePanel-CLo4sI8H.js";import"./MultiColumnSortDialog-DKSvF_Or.js";import"./MenuTrigger-ChXdZfYr.js";import"./CompositeItem-BBNw29UQ.js";import"./ToolbarRootContext-DgDYgZp9.js";import"./getDisabledMountTransitionStyles-yGOiSHQ6.js";import"./getPseudoElementBounds-C_0gJLWO.js";import"./chevron-down-CRmIr1SJ.js";import"./index-D4pImD7i.js";import"./error-Ccxy7sxh.js";import"./BaseCbacBanner-6ZjPD1Pi.js";import"./makeExternalStore-y_SH3e4c.js";import"./Tooltip-DHorPnG5.js";import"./PopoverPopup-CSYBmUnF.js";import"./debounce-DQdrsuD1.js";import"./useOsdkClient-CKo6kWe-.js";import"./tick-ptBe7eW4.js";import"./DropdownField-CEVJg6GB.js";import"./isEqual-Dn91gH-p.js";import"./withOsdkMetrics-DODMu06P.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
