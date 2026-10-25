import{j as i}from"./iframe-8ifTlOPI.js";import{O as p}from"./object-table-ndrVNxgt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCiNFdCn.js";import"./preload-helper-qjA7iF_h.js";import"./Table-DYqI_6aW.js";import"./index-zP_CtKeM.js";import"./Dialog-Cf488IT9.js";import"./cross-CL785k1k.js";import"./svgIconContainer-D_TXE4Bb.js";import"./useBaseUiId-Cwh1jhj-.js";import"./InternalBackdrop-DcUvvNEJ.js";import"./composite-B4CIj8hm.js";import"./index-CoyaXW0G.js";import"./index-DwMFEFqg.js";import"./index-pH-MRX5y.js";import"./useEventCallback-DNuPjnYr.js";import"./SkeletonBar-CAFjcspr.js";import"./LoadingCell-BFD54Tcr.js";import"./ColumnConfigDialog-DiJLTN8d.js";import"./DraggableList-B5V2tPlo.js";import"./search-cZtZgUJN.js";import"./Input-CMGBsI9h.js";import"./useControlled-CyFBz6dn.js";import"./Button-CkeTq1uo.js";import"./small-cross-B646WFen.js";import"./ActionButton-CxCutMvr.js";import"./Checkbox-Bgh6nR7u.js";import"./useValueChanged-TYhdJ9yM.js";import"./CollapsiblePanel-Dr80mgLX.js";import"./MultiColumnSortDialog-DTt_dWd5.js";import"./MenuTrigger-P1EkmwDH.js";import"./CompositeItem-DP3maplG.js";import"./ToolbarRootContext-BVL9-YVY.js";import"./getDisabledMountTransitionStyles-CisZNLPx.js";import"./getPseudoElementBounds-BktluGq2.js";import"./chevron-down-BBwBJyH3.js";import"./index-DPyB-hEV.js";import"./error-CEWX4lms.js";import"./BaseCbacBanner-hOsFxdZf.js";import"./makeExternalStore-BjHpzMBx.js";import"./Tooltip-D1NVsbbj.js";import"./PopoverPopup-DyGtJCKe.js";import"./debounce-BDQ7N1x4.js";import"./useOsdkClient-CfP7K8UM.js";import"./tick-FRfoFGPl.js";import"./DropdownField-Bmo9g9ce.js";import"./isEqual-tZEY_fLF.js";import"./withOsdkMetrics-C5cd7yWV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
