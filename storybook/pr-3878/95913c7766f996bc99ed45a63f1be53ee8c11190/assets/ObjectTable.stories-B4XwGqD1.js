import{j as i}from"./iframe--ccl4y8N.js";import{O as p}from"./object-table-CR6w98zx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-fwGmM6Vb.js";import"./preload-helper-eDRQxybW.js";import"./Table-CwJnTSLu.js";import"./index-Vig6W4vx.js";import"./Dialog-B__qzqHr.js";import"./cross-DXpDqiaU.js";import"./svgIconContainer-DanQ2deo.js";import"./useBaseUiId-fZY9l5U4.js";import"./InternalBackdrop-CcF1cHM3.js";import"./composite-BIOD5O0o.js";import"./index-DaU8wHoE.js";import"./index-DHS-gUYg.js";import"./index-BGU5pc6Z.js";import"./useEventCallback-aG5NN5nQ.js";import"./SkeletonBar-CjkXHjrG.js";import"./LoadingCell-Dd_uLqZH.js";import"./ColumnConfigDialog-CMQdiYEt.js";import"./DraggableList-B5aeSYJb.js";import"./search-BSNzJLm0.js";import"./Input-CMEDwRP1.js";import"./useControlled-DnjkEDg6.js";import"./Button-WLNHPk3M.js";import"./small-cross-BpjjQ8hl.js";import"./ActionButton-CBwATAf_.js";import"./Checkbox-D4QlXADU.js";import"./useValueChanged-WfWZ-saZ.js";import"./CollapsiblePanel-CpfhC1pL.js";import"./MultiColumnSortDialog-DcUJ7g95.js";import"./MenuTrigger-DHolIQKG.js";import"./CompositeItem-CgDhVlw6.js";import"./ToolbarRootContext-DphUk-b_.js";import"./getDisabledMountTransitionStyles-Fp8bhwNn.js";import"./getPseudoElementBounds-C7suUQde.js";import"./chevron-down-CjjtTKBP.js";import"./index-DlRKciFL.js";import"./error-C1s20D2H.js";import"./BaseCbacBanner-BLo7Llvs.js";import"./makeExternalStore-CgFnBRv9.js";import"./Tooltip-CawT2Rn1.js";import"./PopoverPopup-D3eT8tPI.js";import"./debounce-C5k2VTX2.js";import"./useOsdkClient-VVFwCZnH.js";import"./tick-BSFeBmWe.js";import"./DropdownField-qGy4ydz7.js";import"./isEqual-Bv9sPlAd.js";import"./withOsdkMetrics-CgPXr3ib.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
