import{j as i}from"./iframe-CzOy-JTY.js";import{O as p}from"./object-table-C0b1ubO2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CfRBwVyn.js";import"./preload-helper-CIQ1DaMN.js";import"./Table-C8bB-X5_.js";import"./index-Dumhhqmc.js";import"./Dialog-BMqGARaE.js";import"./cross-CWygvYLq.js";import"./svgIconContainer-DpIclYOT.js";import"./useBaseUiId-DnUPrOGO.js";import"./InternalBackdrop-gMia_oWL.js";import"./composite-BVn9jKX7.js";import"./index-CyYfj6ys.js";import"./index-C62E3V-C.js";import"./index-_QH05vrF.js";import"./useEventCallback-C_FMXfn2.js";import"./SkeletonBar-D4NOqT2L.js";import"./LoadingCell-BQfn9-eD.js";import"./ColumnConfigDialog-BcGxv01R.js";import"./DraggableList-DvpxxXIl.js";import"./search-BJ6lcKDX.js";import"./Input-MeFMWRbL.js";import"./useControlled-B2qS0FH4.js";import"./Button-emQM4kcG.js";import"./small-cross-BveryxDD.js";import"./ActionButton-Cda1a-qR.js";import"./Checkbox-B6T5uoCq.js";import"./useValueChanged-BXU_izG3.js";import"./CollapsiblePanel-BO5DGu80.js";import"./MultiColumnSortDialog-Bk31HQNT.js";import"./MenuTrigger-CzBE759j.js";import"./CompositeItem-BAmKL-U0.js";import"./ToolbarRootContext-BCdc83Ck.js";import"./getDisabledMountTransitionStyles-AvhfLujU.js";import"./getPseudoElementBounds-D6X318e6.js";import"./chevron-down-USLYqae_.js";import"./index-BLqBty1z.js";import"./error-Dy_Lr_qP.js";import"./BaseCbacBanner-epv2hjqx.js";import"./makeExternalStore-BilT8BO2.js";import"./Tooltip-BdClGodm.js";import"./PopoverPopup-qNr6ABeL.js";import"./debounce-B12Ng-j0.js";import"./useOsdkClient-D1vV9ihk.js";import"./tick-6hUQYeO9.js";import"./DropdownField-B6ALO_qp.js";import"./isEqual-ChbPr4N3.js";import"./withOsdkMetrics-0tSP_r9F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
