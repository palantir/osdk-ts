import{j as i}from"./iframe-DhXfIq6R.js";import{O as p}from"./object-table-DBIkARTT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9aREsd9.js";import"./preload-helper-DatgPFZX.js";import"./Table-NsZNr82v.js";import"./index-CQ4eecZm.js";import"./Dialog-CzsUSlqO.js";import"./cross-CjebjloY.js";import"./svgIconContainer-4NKQuWor.js";import"./useBaseUiId-B3PC069q.js";import"./InternalBackdrop-J9PQGeSn.js";import"./composite-CCswUWBV.js";import"./index-Hw9O_E6A.js";import"./index-BFbo8Hvm.js";import"./index-vY9vJBl3.js";import"./useEventCallback-CW5iGxQC.js";import"./SkeletonBar-CInnzOG7.js";import"./LoadingCell-DHehGixe.js";import"./ColumnConfigDialog-BOBDHjYf.js";import"./DraggableList-DwZszNC8.js";import"./search-Dx_Pysa4.js";import"./Input-BBnEWswJ.js";import"./useControlled-3_t6o5ui.js";import"./Button-Cy8uxh9T.js";import"./small-cross-C4GUnBXR.js";import"./ActionButton-BkYoJ84i.js";import"./Checkbox-BVm5ACkl.js";import"./useValueChanged-CxpIXHpQ.js";import"./CollapsiblePanel-BVGCo3Z2.js";import"./MultiColumnSortDialog-CLLrLW1L.js";import"./MenuTrigger-BRpNTEcF.js";import"./CompositeItem-DvhhImuQ.js";import"./ToolbarRootContext-B9c-sG_O.js";import"./getDisabledMountTransitionStyles-DzdB_-qH.js";import"./getPseudoElementBounds-CsuJ4a0u.js";import"./chevron-down-CjJDYGij.js";import"./index-C3bckibU.js";import"./error-UalGv9XX.js";import"./BaseCbacBanner-DVggLEji.js";import"./makeExternalStore-BPGOv1IN.js";import"./Tooltip-Dt9x_i73.js";import"./PopoverPopup-Q9Yq24sl.js";import"./debounce-gdpJ20Mf.js";import"./useOsdkClient-DcI1QqiT.js";import"./tick-CvbiSVsc.js";import"./DropdownField-s38Gfc6y.js";import"./isEqual-CCqm4KEh.js";import"./withOsdkMetrics-DbQJKwoW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
