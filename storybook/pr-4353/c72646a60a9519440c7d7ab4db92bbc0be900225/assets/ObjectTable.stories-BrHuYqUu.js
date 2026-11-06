import{j as i}from"./iframe-Dg2rP9Po.js";import{O as p}from"./object-table-D0DMCmzF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D_n5pGGO.js";import"./preload-helper-C62MX-HV.js";import"./Table-DOz1Ura5.js";import"./index-Bk_L59vo.js";import"./Dialog-CKxIsWON.js";import"./cross-ByHx960q.js";import"./svgIconContainer-CrwUJVFh.js";import"./useBaseUiId-BrByyFcr.js";import"./InternalBackdrop-BhWyWYDG.js";import"./composite-DwarrJ_d.js";import"./index-D51t4EhI.js";import"./index-BTK-QJaX.js";import"./index-BuWg-_ox.js";import"./useEventCallback-y6eWXZb0.js";import"./SkeletonBar-Dyoh3Oqn.js";import"./LoadingCell-Du-JRye8.js";import"./ColumnConfigDialog-DCoEngsL.js";import"./DraggableList-Dt8o8fPU.js";import"./search-7S2iycUI.js";import"./Input-CLdANV8F.js";import"./useControlled-CPVhNzyr.js";import"./Button-3owJgmEd.js";import"./small-cross-DW-MJuWV.js";import"./ActionButton-vxF6e2oH.js";import"./Checkbox-BB_EHT7U.js";import"./useValueChanged-BFNbOulV.js";import"./CollapsiblePanel-Cdh4aus9.js";import"./MultiColumnSortDialog-BzJiY7K7.js";import"./MenuTrigger-DG7QOV05.js";import"./CompositeItem-Iitq3-0I.js";import"./ToolbarRootContext-DWEMgL85.js";import"./getDisabledMountTransitionStyles-BVaUCF8Y.js";import"./getPseudoElementBounds-B2mLNmmG.js";import"./chevron-down-DghOfrxO.js";import"./index-eL-YB9kv.js";import"./error-CpY5WHNo.js";import"./BaseCbacBanner-BcDeBoVZ.js";import"./makeExternalStore-CyhjwBot.js";import"./Tooltip-BYn5P6nw.js";import"./PopoverPopup-BUDSqNW1.js";import"./debounce-C5ixXv23.js";import"./useOsdkClient-ecHM5SMR.js";import"./tick-D-NdcMXs.js";import"./DropdownField-B07IQ1gj.js";import"./isEqual-BMQjVVox.js";import"./withOsdkMetrics-DWMO9N5k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
