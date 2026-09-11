import{j as i}from"./iframe-DsKrzcRN.js";import{O as p}from"./object-table-DBhAnef8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQf1Ewp5.js";import"./preload-helper-XXW3l9t_.js";import"./Table-BeDuu-gb.js";import"./index-CsPIGNQb.js";import"./Dialog-B0obumfQ.js";import"./cross-BW2NuQAF.js";import"./svgIconContainer-BOG8o0Qp.js";import"./useBaseUiId-BwjaGsvj.js";import"./InternalBackdrop-D3WUVm8B.js";import"./composite-4l0PTrfd.js";import"./index-CbFdJYZA.js";import"./index-v8oVnP18.js";import"./index-hJuN63ng.js";import"./useEventCallback-CLUwi7QW.js";import"./SkeletonBar-D_kDFvpB.js";import"./LoadingCell-BsInURSZ.js";import"./ColumnConfigDialog-Dytg4qH_.js";import"./DraggableList-DuyEaQju.js";import"./search-Dj7j7f4C.js";import"./Input-C_GhTUPn.js";import"./useControlled-Bqn_3IUK.js";import"./Button-BKP0-2mJ.js";import"./small-cross-4vbxp4Sf.js";import"./ActionButton-CvPzCsuM.js";import"./Checkbox-D_hoBzYk.js";import"./useValueChanged-B1kYQJI9.js";import"./CollapsiblePanel-B3VJ_HAc.js";import"./MultiColumnSortDialog-BJeXbJGy.js";import"./MenuTrigger-CJq6smMb.js";import"./CompositeItem-D26JRJU9.js";import"./ToolbarRootContext-DxArarjC.js";import"./getDisabledMountTransitionStyles-BHlXwaEB.js";import"./getPseudoElementBounds-JpoScsw5.js";import"./chevron-down-DEsS9nYL.js";import"./index-BFmUqTIz.js";import"./error-CfVMT4Jh.js";import"./BaseCbacBanner-D-xOAYw6.js";import"./makeExternalStore-lpe8zccP.js";import"./Tooltip-DsFZs_hy.js";import"./PopoverPopup-ZTUVQmKO.js";import"./debounce-BCcTzWEM.js";import"./useOsdkClient-wqu6WPXo.js";import"./tick-BcIHyu16.js";import"./DropdownField-CWYsNCev.js";import"./isEqual-DYTV2HCP.js";import"./withOsdkMetrics-DQcV-4YY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
