import{j as i}from"./iframe-DrGL59fh.js";import{O as p}from"./object-table-BAMPb11c.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tF4ZyBNa.js";import"./preload-helper-D-pltsU0.js";import"./Table-CrterXlj.js";import"./index-BPJV00wo.js";import"./Dialog-BySReYmf.js";import"./cross-B3fC_apP.js";import"./svgIconContainer-CHeYR8wC.js";import"./useBaseUiId-2W_ytHMV.js";import"./InternalBackdrop-m5QQAybv.js";import"./composite-VGQUbzTm.js";import"./index-CAwEJolB.js";import"./index-cKTu6glV.js";import"./index-BFxVNMj8.js";import"./useEventCallback-Be1n87Un.js";import"./SkeletonBar-BrIvGh1U.js";import"./LoadingCell-CeRyGgiy.js";import"./ColumnConfigDialog-93nvgRut.js";import"./DraggableList-0EZpZvz0.js";import"./search-D_KAjQsE.js";import"./Input-GRmoIvE6.js";import"./useControlled-D76B4nnK.js";import"./Button-Dz98rt32.js";import"./small-cross-CITcdkqm.js";import"./ActionButton-D6TgzS-d.js";import"./Checkbox-DeOFI8HA.js";import"./useValueChanged-Cv10pSZl.js";import"./CollapsiblePanel-C-SqBgY1.js";import"./MultiColumnSortDialog-CegqPi6L.js";import"./MenuTrigger-MBe05SYz.js";import"./CompositeItem-BckOB5Eo.js";import"./ToolbarRootContext-C91J_2EK.js";import"./getDisabledMountTransitionStyles-CLY_oqku.js";import"./getPseudoElementBounds-D97GaXSX.js";import"./chevron-down-DCzbMy7Q.js";import"./index-Bzlu61KO.js";import"./error-B4r2g8yv.js";import"./BaseCbacBanner-Co78UpQW.js";import"./makeExternalStore-Dar-D9jL.js";import"./Tooltip-CqOLiVEe.js";import"./PopoverPopup-DyYNic55.js";import"./debounce-C9pzeh_f.js";import"./useOsdkClient-Bq4QpKzc.js";import"./tick-BYEzfJH7.js";import"./DropdownField-CcRkuqdD.js";import"./isEqual-DYGtsIue.js";import"./withOsdkMetrics-tWMBpvoz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
