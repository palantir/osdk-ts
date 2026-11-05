import{j as i}from"./iframe-B0O6MtlS.js";import{O as p}from"./object-table-DTfiu3fj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BYme9gbm.js";import"./preload-helper-D6pURdot.js";import"./Table-DM7Ks83Y.js";import"./index-CWmTKLGK.js";import"./Dialog-CNHkhkGm.js";import"./cross-CWEImtxT.js";import"./svgIconContainer-DXqgtHND.js";import"./useBaseUiId-BznU3LGS.js";import"./InternalBackdrop-BC098Jsb.js";import"./composite-BMg2yNSq.js";import"./index-iJddnt6C.js";import"./index-D_qtusqG.js";import"./index-DXznXhjK.js";import"./useEventCallback-BYZGQENt.js";import"./SkeletonBar-g2uwrnoF.js";import"./LoadingCell-W1Y0oSVI.js";import"./ColumnConfigDialog-AKtgY3IN.js";import"./DraggableList-CogmIw5o.js";import"./search-Ck63SNgv.js";import"./Input-C5r_FU3t.js";import"./useControlled-Bx-6J2ID.js";import"./Button-BoJolYQb.js";import"./small-cross-CvWDOY6F.js";import"./ActionButton-CX9VY3Vm.js";import"./Checkbox-CqyUc6So.js";import"./useValueChanged-C4aiVzbu.js";import"./CollapsiblePanel-CaYS0I-E.js";import"./MultiColumnSortDialog-DMytbJfG.js";import"./MenuTrigger-DVngFBgA.js";import"./CompositeItem-BbV5-QNT.js";import"./ToolbarRootContext-DCOU3uiJ.js";import"./getDisabledMountTransitionStyles-reeodFI6.js";import"./getPseudoElementBounds-9i5ws3FW.js";import"./chevron-down-7CANPOc8.js";import"./index-CIng004C.js";import"./error-CSV7R-eM.js";import"./BaseCbacBanner-C_-uFgBv.js";import"./makeExternalStore-CyQVHXN1.js";import"./Tooltip-BbpaHu5y.js";import"./isObject-4DXF1F0N.js";import"./debounce-6Otf2ylt.js";import"./useOsdkClient-DiYg4DLq.js";import"./tick-BcfAOxfQ.js";import"./DropdownField-CQin5nsR.js";import"./isEqual-0795DvIL.js";import"./_baseIsEqual-DpqgVj1P.js";import"./withOsdkMetrics-CPnPG3g5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
