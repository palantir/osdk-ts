import{j as i}from"./iframe-B1dY-uMG.js";import{O as p}from"./object-table-CvecTQF5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9Iavmrx.js";import"./preload-helper-CsaNr_BP.js";import"./Table-CIC0jyyL.js";import"./index-J8POe0xc.js";import"./Dialog-C3vgrSIv.js";import"./cross-CGzVaZsI.js";import"./svgIconContainer-Hqh_F8lK.js";import"./useBaseUiId-BEMvDf4X.js";import"./InternalBackdrop-kXRP9i2Q.js";import"./composite-DafZoXqK.js";import"./index-DfE0OqSo.js";import"./index-De6BIYNw.js";import"./index-v0K9-PBP.js";import"./useEventCallback-Bxw2h9-8.js";import"./SkeletonBar-DdytvZtY.js";import"./LoadingCell-ElQ-L1kg.js";import"./ColumnConfigDialog-Dy_a0PBd.js";import"./DraggableList-LvcSAiE7.js";import"./search-NElMm_h6.js";import"./Input-Bow4iCTS.js";import"./useControlled-Q3FRIAaO.js";import"./Button-WD0YpcbL.js";import"./small-cross-DNXIHvDW.js";import"./ActionButton-evAWPmgm.js";import"./Checkbox-BLZb2wdW.js";import"./useValueChanged-OMxVTtNE.js";import"./CollapsiblePanel-Dxik0TAh.js";import"./MultiColumnSortDialog-DIi6uGpb.js";import"./MenuTrigger-D4C0_RsP.js";import"./CompositeItem-DJ7Q7uHL.js";import"./ToolbarRootContext-B2VcC1-l.js";import"./getDisabledMountTransitionStyles-DNBCt1sN.js";import"./getPseudoElementBounds-C1qwlXI7.js";import"./chevron-down-DfdYdGBP.js";import"./index-BxyuVSQw.js";import"./error-BzEZzAbM.js";import"./BaseCbacBanner-C2caImhq.js";import"./makeExternalStore-CS-gtHXP.js";import"./Tooltip-xVmFEZY1.js";import"./PopoverPopup-vg0eWmB0.js";import"./debounce-DLzjPmFs.js";import"./useOsdkClient-wEoel6XM.js";import"./tick-C9npLudO.js";import"./DropdownField-BrITrwHx.js";import"./isEqual-ixVCBZxa.js";import"./withOsdkMetrics-DuwMRDrg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
